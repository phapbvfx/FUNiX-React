import React, { useContext } from "react";
import CartContext from "../../store/cart-context.js";

import classes from "./Cart.module.css";
import CartItem from "./CartItem.jsx";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const handleClick = (e) => {
    console.log(e.target);
    cartContext.handlerShowModal();
  };
  return (
    <div className={classes["cart-items"]}>
      <div className="item-list">
        {items.map((item) => (
          <CartItem
            key={item.id}
            itemData={item}
          />
        ))}
      </div>
      <div className={classes.total}>
        <div className="label">Total Amount</div>
        <div className="value">${cartContext.totalAmount.toFixed(2)}</div>
      </div>
      <div className={classes["actions"]}>
        <button
          className={classes["button-alt"]}
          onClick={handleClick}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;

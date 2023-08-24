import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context.js";

import classes from "./Cart.module.css";
import CartItem from "./CartItem.jsx";
import Checkout from "./Checkout.jsx";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const handleClick = (e) => {
    cartContext.handlerShowModal();
  };

  const submitOrderHandler = async (userData) => {
    await fetch("https://react-http-6b4a6.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items,
      }),
    });
    cartContext.clearCart();
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  return (
    <div className={classes["cart-items"]}>
      {items.length > 0 ? (
        <>
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

          {isCheckout ? (
            <Checkout
              onConfirm={submitOrderHandler}
              onCancel={handleClick}
            />
          ) : (
            <div className={classes["actions"]}>
              <button
                className={classes["button--alt"]}
                onClick={handleClick}
              >
                Close
              </button>
              <button
                className={classes.button}
                onClick={orderHandler}
              >
                Order
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <h1>There are no items in your cart.</h1>
          <p>Back to shop? </p>
          <button
            className={classes["button--alt"]}
            onClick={handleClick}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

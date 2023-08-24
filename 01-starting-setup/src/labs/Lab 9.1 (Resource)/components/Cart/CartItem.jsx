import React, { useContext } from "react";
import CartContext from "../../store/cart-context.js";

import classes from "./CartItem.module.css";

const CartItem = ({ itemData }) => {
  const cartContext = useContext(CartContext);

  const handlerIncrementAmount = () => {
    const newItem = { ...itemData, amount: 1 };

    cartContext.addItem(newItem);
  };

  const handlerDecrementAmount = () => {
    cartContext.removeItem(itemData.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["item-info"]}>
        <h2>{itemData.name}</h2>
        <div className={classes["summary"]}>
          <span className={classes["price"]}>${itemData.price}</span>
          <span className={classes["amount"]}>x{itemData.amount}</span>
        </div>
      </div>
      <div className={classes["actions"]}>
        <button onClick={handlerDecrementAmount}>-</button>
        <button onClick={handlerIncrementAmount}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm.jsx";
import CartContext from "../../../store/cart-context.js";

const MealItem = ({ MealData }) => {
  const cartContext = useContext(CartContext);

  const submitForm = (amount) => {
    const newItem = { ...MealData, amount };
    cartContext.addItem(newItem);
  };

  return (
    <div className={classes.meal}>
      <div className={classes["info"]}>
        <h3>{MealData.name}</h3>
        <p className={classes["description"]}>{MealData.description}</p>
        <span className={classes["price"]}>$ {MealData.price}</span>
      </div>
      <div className="add-to-cart">
        <MealItemForm onSubmit={submitForm} />
      </div>
    </div>
  );
};

export default MealItem;

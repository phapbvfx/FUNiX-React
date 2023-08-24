import React, { useState } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = ({ onSubmit }) => {
  const [itemAmount, setItemAmount] = useState(1);

  const handlerChangeItemAmount = (e) => {
    if (!(+e.target.value > 0)) {
      alert("you must enter greater than or equal 1");
      return;
    }
    setItemAmount(+e.target.value);
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemAmount);
    setItemAmount(1);
  };

  return (
    <form className={classes.form}>
      <label htmlFor="amount">
        Amount
        <input
          type="number"
          id="amount"
          value={itemAmount}
          onChange={handlerChangeItemAmount}
        />
      </label>
      <button onClick={handlerFormSubmit}>+ Add</button>
    </form>
  );
};

export default MealItemForm;

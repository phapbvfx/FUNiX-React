import React, { useState } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = ({ onSubmit }) => {
  const [itemAmount, setItemAmount] = useState(0);

  const handlerChangeItemAmount = (e) => {
    setItemAmount(+e.target.value);
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemAmount);
    setItemAmount(0);
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

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ handlerAddExpense, handleShowForm }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, title: e.target.value }));
  };

  const amountChangeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, amount: e.target.value }));
  };
  const dateChangeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, date: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    userInput.id = Math.random();
    userInput.date = new Date(userInput.date);

    handlerAddExpense(userInput);
    handleShowForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2023-12-31"
            value={userInput.date.toLocaleString("en-US")}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={() => handleShowForm(false)}>Cancle</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

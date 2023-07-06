import ExpenseForm from "./ExpenseForm.js";

import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList.js";
import "./NewExpense.css";
import "./style.css";
const fakeExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Expenses = function () {
  const [expenses, setExpenses] = useState(fakeExpenses);
  const [isShowForm, setIsShowForm] = useState(false);

  const handleAddExpenses = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const handleFilter = (year) => {
    setExpenses(() =>
      fakeExpenses.filter((exp) => exp.date.getFullYear() === +year)
    );
  };

  const handleShowForm = (bool) => {
    setIsShowForm(bool);
  };

  return (
    <>
      <div className="new-expense">
        {isShowForm ? (
          <ExpenseForm
            handlerAddExpense={handleAddExpenses}
            handleShowForm={handleShowForm}
          />
        ) : (
          <button onClick={() => handleShowForm(true)}>Add New Expense</button>
        )}
      </div>

      <div className="expenses">
        <ExpensesFilter handleFilter={handleFilter} />
        <ExpensesList items={expenses} />
      </div>
    </>
  );
};

export default Expenses;

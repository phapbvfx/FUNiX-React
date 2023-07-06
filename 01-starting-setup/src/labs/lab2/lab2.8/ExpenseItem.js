import ExpenseDate from "./ExpoenseDate.js";

const ExpenseItem = function ({ data }) {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2>{data.title}</h2>
        </div>
        <div className="expense-item__price">
          <h2>{data.amount}</h2>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;

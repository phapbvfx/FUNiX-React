import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          data={item}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

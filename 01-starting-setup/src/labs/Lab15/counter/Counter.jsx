import { useDispatch, useSelector } from "react-redux";

import { decAmount, incAmount } from "../../../store/store.js";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handlerIncrement = () => {
    dispatch(incAmount());
  };
  const handlerDecrement = () => {
    dispatch(decAmount());
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handlerIncrement}>Increment</button>
        <button onClick={handlerDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

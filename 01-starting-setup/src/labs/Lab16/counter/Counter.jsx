import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../../../store/counterSlice.js";
import UserProfile from "./UserProfile.jsx";

const Counter = () => {
  const amount = useSelector((state) => state.counter.amount);
  const isShowCounter = useSelector((state) => state.counter.isShow);

  const dispatch = useDispatch();

  const handlerIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handlerDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlerIncreaseAmount = (amount) => {
    dispatch(counterActions.increaseAmount(amount));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <>
      <UserProfile />
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {isShowCounter && <div className={classes.value}>{amount}</div>}
        <div>
          <button onClick={handlerIncrement}>Increment</button>
          <button onClick={() => handlerIncreaseAmount(10)}>
            Increase by 10
          </button>
          <button onClick={handlerDecrement}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    </>
  );
};

export default Counter;

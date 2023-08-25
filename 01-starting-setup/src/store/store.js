import { createStore } from "redux";

const INCREMENT = "increment";
const DECREMENT = "DECREMENT";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export const incAmount = () => {
  return { type: INCREMENT };
};

export const decAmount = () => {
  return { type: DECREMENT };
};

export default store;

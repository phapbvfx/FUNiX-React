import { createStore } from "redux";

const INCREMENT = "INCREMENT"; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  let newState = state;
  switch (action.type) {
    case INCREMENT:
      return ++newState;
    case DECREMENT:
      return --newState;
    default:
      return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

// Define an action creator for incrementing
const incAction = (value) => {
  return { type: INCREMENT };
};

// Define an action creator for decrementing
const decAction = () => {
  return { type: DECREMENT };
};

// Define the Redux store here, passing in your reducers
const store = createStore(counterReducer);

store.dispatch(incAction());
store.dispatch(decAction());

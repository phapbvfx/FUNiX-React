import { createStore } from "redux";
// 15.1
const reducer = (state = 5, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("ower");
      break;

    default:
      break;
  }
  return state;
};
const store = createStore(reducer);

//15.2
const currentState = store.getState();
console.log(currentState);

//15.3
const action = {
  type: "LOGIN",
};
//15.4
const actionCreator = () => {
  return action.type;
};
const store1 = createStore((state = { login: false }) => state);
//15.5
store1.dispatch(actionCreator());

//freeCodeCamp
/**
 * const store = Redux.createStore(reducer)
 *
 */

export default store;

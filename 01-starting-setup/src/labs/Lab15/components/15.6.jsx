import { createStore } from "redux";

const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case "LOGIN":
      const newState = { ...state };
      newState.login = true;
      return newState;

    default:
      return state;
  }

  // Change code above this line
};

const store = createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};
store.dispatch(loginAction());

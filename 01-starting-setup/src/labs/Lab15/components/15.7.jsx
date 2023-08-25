import { createStore } from "redux";

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      let newState = { ...state };
      newState.authenticated = true;
      return newState;
    case "LOGOUT":
      newState = { ...state };
      newState.authenticated = false;
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

const store = createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

store.dispatch(logoutUser());
store.dispatch(loginUser());

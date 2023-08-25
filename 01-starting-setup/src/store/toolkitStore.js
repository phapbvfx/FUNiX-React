import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import counterReducer from "./counterSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});

export default store;

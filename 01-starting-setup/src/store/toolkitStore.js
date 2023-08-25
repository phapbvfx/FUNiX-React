import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import counterReducer from "./counterSlice.js";
import quoteReducer from "./quoteSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    quote: quoteReducer,
  },
});

export default store;

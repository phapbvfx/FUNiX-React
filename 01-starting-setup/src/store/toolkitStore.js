import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import counterReducer from "./counterSlice.js";
import quoteReducer from "./quoteSlice.js";
import lab20Reducer from "./lab20Slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    quote: quoteReducer,
    lab20: lab20Reducer,
  },
});

export default store;

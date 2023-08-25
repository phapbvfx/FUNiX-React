import { createSlice } from "@reduxjs/toolkit";

const initCounter = {
  amount: 0,
  isShow: true,
};

const counterSlice = createSlice({
  initialState: initCounter,
  name: "counter",
  reducers: {
    increment(state) {
      state.amount++;
    },
    decrement(state) {
      state.amount--;
    },
    increaseAmount(state, action) {
      state.amount = state.amount + action.payload;
    },
    toggleCounter(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const counterActions = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;

import { createSlice } from "@reduxjs/toolkit";

const initAuth = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuth,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;

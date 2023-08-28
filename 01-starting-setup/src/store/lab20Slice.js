import { createSlice } from "@reduxjs/toolkit";

const initAuth = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "authlab20",
  initialState: initAuth,
  reducers: {
    login(state, action) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const lab20Actions = authSlice.actions;

const lab20Reducer = authSlice.reducer;

export default lab20Reducer;

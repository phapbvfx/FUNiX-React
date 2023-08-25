import React from "react";
import DisplayMessages from "./components/lab16.2.jsx";

import "./Lab16.css";
import { Provider } from "react-redux";
import store from "../../store/toolkitStore.js";
import Header from "./counter/Header.jsx";
import { Outlet } from "react-router-dom";

const Lab16 = () => {
  return (
    <Provider store={store}>
      <DisplayMessages />
      <Header />
      <Outlet />
    </Provider>
  );
};

export default Lab16;

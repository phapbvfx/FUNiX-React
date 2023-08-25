import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation.jsx";

import classes from "./lab17.module.css";
import { Provider } from "react-redux";
import store from "../../store/toolkitStore.js";

const Lab17 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/lab17/quotes");
  }, [navigate]);
  return (
    <Provider store={store}>
      <div className={classes.lab17}>
        <MainNavigation />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Lab17;

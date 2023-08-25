import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { authActions } from "../../../store/authSlice.js";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.auth.isLogin);

  const onLogout = () => {
    dispatch(authActions.logout());
    navigate("login");
  };

  return (
    <header className={classes.header}>
      <div>
        <Link to="/lab16">Redux Auth</Link>
      </div>
      <ul>
        <li>
          <NavLink>My Products</NavLink>
        </li>
        <li>
          <NavLink>My Sales</NavLink>
        </li>
        <li>
          {isLogin ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;

import React from "react";
import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes["logo"]}>
        <Link to="/lab17">Create Quotes</Link>
      </div>
      <nav className={classes["nav"]}>
        <ul>
          <li>
            <NavLink
              to="quotes"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              All Quotes
            </NavLink>
            <NavLink
              to="new-quote"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

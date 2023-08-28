import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { lab20Actions } from "../../../../store/lab20Slice.js";
import { removeItem } from "../../utils/localStorage.js";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.lab20.isLogin);

  const handlerLogout = (e) => {
    e.preventDefault();
    removeItem("token");
    dispatch(lab20Actions.logout());
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/lab20/auth">Login</Link>
            </li>
          )}
          <li>
            <Link to="/lab20/profile">Profile</Link>
          </li>
          {isLoggedIn && (
            <li>
              <button onClick={handlerLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

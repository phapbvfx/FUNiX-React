import { useEffect, useRef, useState } from "react";

import classes from "./AuthForm.module.css";
import useHttp from "../../../../hooks/useHttp.js";
import { apiKey, url } from "../../constant/index.js";
import { getFromStorage, saveToStorage } from "../../utils/localStorage.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lab20Actions } from "../../../../store/lab20Slice.js";

const AuthForm = () => {
  const [isLogging, setIsLogging] = useState(true);
  const [userData, setUserData] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.lab20.isLogin);
  const token = getFromStorage("token", "");

  const switchAuthModeHandler = () => {
    setIsLogging((prevState) => !prevState);
  };

  const { sendRequest, loading } = useHttp();

  const handlerRespone = (data) => {
    setUserData(data);
  };

  //valid form input
  const isValidForm = () => {
    let isValid = true;

    if (emailRef.current.value === "") {
      alert("please enter your email");
      return false;
    }
    if (!emailRef.current.value.includes("@")) {
      alert("you must enter an email(include @)");
      return false;
    }

    if (passwordRef.current.value.trim() === "") {
      alert("please enter your password");
      return false;
    }
    if (passwordRef.current.value.trim().length < 8) {
      alert("Your password must greater than 8");
      return false;
    }

    return isValid;
  };

  //create new account
  const handlerCreateAccount = (e) => {
    e.preventDefault();

    const isFormValid = isValidForm();

    if (!isFormValid) return;

    sendRequest(
      {
        url: url + ":signUp?key=" + apiKey,
        method: "POST",
        body: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      handlerRespone
    );
    if (!userData.email) {
      alert("Your email address had already been used.");
    }
  };

  //login
  const handlerLogin = (e) => {
    e.preventDefault();

    const isFormValid = isValidForm();

    const saveTokenToLocalState = (userData) => {
      saveToStorage("token", userData.idToken || "");
    };

    //check form valid before send request
    if (!isFormValid) return;
    sendRequest(
      {
        url: url + ":signInWithPassword?key=" + apiKey,
        method: "POST",
        body: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      saveTokenToLocalState
    );
    dispatch(lab20Actions.login());
    navigate("/lab20");
  };

  //check login ->redirect
  useEffect(() => {
    if (isLogin) {
      navigate("/lab20");
    }
  }, [isLogin, navigate]);

  // dispatch if have a token in localstorage
  useEffect(() => {
    if (token) {
      dispatch(lab20Actions.login());
    }
  }, [dispatch, token]);

  return (
    <section className={classes.auth}>
      <h1>{isLogging ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            ref={emailRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordRef}
          />
        </div>
        <div className={classes.actions}>
          {isLogging ? (
            <button onClick={handlerLogin}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          ) : (
            <button onClick={handlerCreateAccount}>
              {loading ? "Creating Account" : "Create Account"}
            </button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogging ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

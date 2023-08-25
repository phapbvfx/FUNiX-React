import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authActions } from "../../../store/authSlice.js";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
    message: "Please enter your email",
  });
  const [password, setPassword] = useState({
    value: "",
    isValid: false,
    message: "Please enter your password",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerEmailInput = (e) => {
    const email = e.target.value.trim();

    const isValid = !!((email.length > 0) & email.includes("@"));
    setEmail((prev) => ({
      ...prev,
      value: email,
      isValid: isValid,
      message: !isValid ? "Please enter your email" : "",
    }));
  };

  const handlerPasswordInput = (e) => {
    const name = e.target.value.trim();

    setPassword((prev) => ({
      ...prev,
      value: name,
      isValid: name.length > 0,
      message: name.length > 0 ? "" : "Please enter your password",
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const emailValid = email.isValid;
    const passwordValid = password.isValid;

    if (!emailValid) {
      alert(email.message);
      return;
    }
    if (!passwordValid) {
      alert(password.message);
      return;
    }

    dispatch(authActions.login());
    navigate("/lab16");
  };
  return (
    <div className={classes.auth}>
      <form
        action=""
        onSubmit={onFormSubmit}
        className={classes.control}
      >
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="please enter your email"
            autoComplete="current-password"
            value={email.value}
            onChange={handlerEmailInput}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="please enter your email"
            autoComplete="current-password"
            value={password.value}
            onChange={handlerPasswordInput}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;

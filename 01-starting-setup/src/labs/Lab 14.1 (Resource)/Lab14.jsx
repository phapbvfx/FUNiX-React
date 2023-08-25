import React, { useRef, useState } from "react";

import classes from "./Lab14.module.css";

const Lab14 = () => {
  const [name, setName] = useState({ value: "", isValid: true, message: "" });
  const [email, setEmail] = useState({
    value: "",
    isValid: true,
    message: "",
  });

  const inputNameRef = useRef();

  const handlerNameInput = (e) => {
    const name = e.target.value.trim();

    setName((prev) => ({
      ...prev,
      value: name,
      isValid: name.length > 0,
      message: name.length > 0 ? "" : "Your name must not be empty",
    }));
  };
  const handlerEmailInput = (e) => {
    const email = e.target.value.trim();
    const isValid = (email.length > 0) & email.includes("@");
    setEmail((prev) => ({
      ...prev,
      value: email,
      isValid: isValid,
      message: !isValid ? "Please enter your email" : "",
    }));
  };
  const handlerFormSubmit = (e) => {
    e.preventDefault();
    if (!name.isValid & !email.isValid) {
      alert("Please complete form!");
      return;
    }
    setName((prev) => ({ value: "", isValid: true, message: "" }));
    setEmail((prev) => ({ value: "", isValid: true, message: "" }));
    inputNameRef.current.focus();
  };
  return (
    <div className={classes.app}>
      <form
        action=""
        className={classes["form-control"]}
        onSubmit={handlerFormSubmit}
      >
        <label htmlFor="name">
          Your Name{" "}
          <input
            className={!name.isValid ? classes["invalid"] : ""}
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name.value}
            onChange={handlerNameInput}
            ref={inputNameRef}
          />
        </label>

        {!name.isValid && name.message && (
          <p className={classes["error-text"]}>{name.message}</p>
        )}

        <label htmlFor="email">
          <input
            className={!email.isValid ? classes["invalid"] : ""}
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email.value}
            onChange={handlerEmailInput}
            // onBlur={validationEmailInput}
          />
        </label>
        {!email.isValid && email.message && (
          <p className={classes["error-text"]}>{email.message}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Lab14;

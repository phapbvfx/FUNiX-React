import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button.js";
import ErrorModal from "./ErrorModal.js";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0) {
      setError({
        message: "Please enter a valid name  (non-empty values)",
        title: "Invalid input(name)",
      });
      return;
    }
    if (userAge && userAge.trim().length === 0) {
      setError({
        message: "Please enter a valid age (non-empty values)",
        title: "Invalid input(age)",
      });
      return;
    }
    if (userAge < 1) {
      setError({
        message: "Please enter a valid age (>0)",
        title: "Invalid input(age)",
      });
      return;
    }

    const newUser = { name: userName, age: userAge };
    props.onAddUser(newUser);

    setUserAge(0);
    setUserName("");
  };

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label
            htmlFor="username"
            className="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label
            htmlFor="age"
            className="age"
          >
            Age (Years)
          </label>
          <input
            value={userAge}
            onChange={userAgeChangeHandler}
            type="number"
            id="age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

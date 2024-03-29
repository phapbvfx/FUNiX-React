import React from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";

import classes from "./ErrorModal.module.css";

const ErrorModal = function (props) {
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={props.onConfirm}
      ></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Oke</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;

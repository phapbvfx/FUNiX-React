import { useRef } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = ({ isLoading, onAddQuote }) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    if (!enteredAuthor.trim().length > 0) {
      alert("Please enter your namr or author's name!");
      return;
    }
    if (!enteredText.trim().length > 0) {
      alert("Please enter your content!");
      return;
    }
    onAddQuote({ author: enteredAuthor, text: enteredText });
    authorInputRef.current.value = "";
    textInputRef.current.value = "";
    authorInputRef.current.focus();
  }

  return (
    <Card>
      <h1>New Quote Page</h1>

      <form
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            ref={authorInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows="5"
            ref={textInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">{isLoading ? "Sending" : "Add Quote"}</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;

import React from "react";
import QuoteForm from "../components/quotes/QuoteForm.js";
import classes from "./NewQuote.module.css";
import useHttp from "../../../hooks/useHttp.js";

const NewQuote = () => {
  const { loading, sendRequest } = useHttp();

  const handlerPostNewQuote = (body) => {
    sendRequest({
      url: "https://assignment03-61e91-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
      method: "POST",
      body: body,
    });
  };

  return (
    <div className={classes.newquote}>
      <QuoteForm
        onAddQuote={handlerPostNewQuote}
        isLoading={loading}
      />
    </div>
  );
};

export default NewQuote;

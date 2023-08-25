import classes from "./HighlightedQuote.module.css";
import NoQuotesFound from "./NoQuotesFound.js";

const HighlightedQuote = ({ quote }) => {
  return (
    <>
      {quote ? (
        <figure className={classes.quote}>
          <p>{quote.text}</p>
          <figcaption>{quote.author}</figcaption>
        </figure>
      ) : (
        <NoQuotesFound />
      )}
    </>
  );
};

export default HighlightedQuote;

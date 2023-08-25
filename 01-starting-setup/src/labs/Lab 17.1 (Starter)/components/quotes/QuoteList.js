import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { Link } from "react-router-dom";

const QuoteList = ({ quotes }) => {
  return (
    <Fragment>
      {quotes ? (
        <ul className={classes.list}>
          {quotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      ) : (
        <h3>
          All Quotes Page
          <Link to="asde">detail page</Link>
        </h3>
      )}
    </Fragment>
  );
};

export default QuoteList;

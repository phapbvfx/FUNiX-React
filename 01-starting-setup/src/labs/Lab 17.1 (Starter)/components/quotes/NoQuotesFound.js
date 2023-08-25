import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link
        className={classes.btn}
        to="/lab17/new-quote"
      >
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;

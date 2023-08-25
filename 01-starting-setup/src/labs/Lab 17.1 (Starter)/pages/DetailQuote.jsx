import React, { useEffect } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../../../store/quoteSlice.js";

const DetailQuote = () => {
  const { quoteId } = useParams();

  const quote = useSelector((state) => state.quote.quote);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(quoteActions.getQuoteById(quoteId));
  }, [quoteId, dispatch]);

  return (
    <div>
      <HighlightedQuote quote={quote} />
    </div>
  );
};

export default DetailQuote;

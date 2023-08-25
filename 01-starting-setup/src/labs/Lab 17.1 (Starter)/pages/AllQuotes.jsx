import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../../hooks/useHttp.js";
import { quoteActions } from "../../../store/quoteSlice.js";
import QuoteList from "../components/quotes/QuoteList.js";

const AllQuotes = () => {
  const { loading, sendRequest } = useHttp();

  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.quote.quotesList);

  useEffect(() => {
    const fetchAllQuotes = (quotesObj) => {
      const quoteList = [];

      for (const quoteKey in quotesObj) {
        quoteList.push({
          id: quoteKey,
          text: quotesObj[quoteKey].text,
          author: quotesObj[quoteKey].author,
        });
      }

      dispatch(quoteActions.fetchAllQuotes({ quotes: quoteList }));
    };

    sendRequest(
      {
        url: "https://assignment03-61e91-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
      },
      fetchAllQuotes
    );
  }, [sendRequest, dispatch]);
  return (
    <div>
      <QuoteList
        quotes={quotes}
        loading={loading}
      />
    </div>
  );
};

export default AllQuotes;

import { createSlice } from "@reduxjs/toolkit";

const initQuote = {
  quotesList: [],
  isLoading: false,
  quote: {},
};

const quoteSlice = createSlice({
  initialState: initQuote,
  name: "quote",
  reducers: {
    fetchAllQuotes(state, action) {
      state.quotesList = action.payload.quotes;
      state.isLoading = action.payload.loading;
    },
    getQuoteById(state, action) {
      const quote = state.quotesList.filter(
        (quote) => quote.id === action.payload
      );
      state.quote = quote[0];
    },
  },
});

export const quoteActions = quoteSlice.actions;

const quoteReducer = quoteSlice.reducer;

export default quoteReducer;

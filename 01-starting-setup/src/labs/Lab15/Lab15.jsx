import React from "react";
import Counter from "./counter/Counter";
import { Provider } from "react-redux";
import store from "../../store/store.js";

import "./Lab15.css";

const Lab15 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Lab15;

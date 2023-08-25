import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import CartProvider from "./labs/Lab 9.1 (Resource)/store/CartProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

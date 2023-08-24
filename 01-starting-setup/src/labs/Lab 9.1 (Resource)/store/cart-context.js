import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  handlerShowModal: () => {},
  isShowModal: false,
});

export default CartContext;

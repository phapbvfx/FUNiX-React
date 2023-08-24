import React, { useContext } from "react";
import CartContext from "../../store/cart-context.js";

const Overlay = ({ children }) => {
  const cartContext = useContext(CartContext);
  const handlerOnClick = (e) => {
    console.log(e.target);
    cartContext.handlerShowModal();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.7)",
      }}
      onClick={handlerOnClick}
    ></div>
  );
};

export default Overlay;

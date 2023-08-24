import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { images } from "../../assets/index.js";

import CartContext from "../../store/cart-context.js";
import classes from "./Header.module.css";

import Cart from "../Cart/Cart.jsx";
import RootModal from "../UI/RootModal.jsx";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const handleClick = () => {
    cartContext.handlerShowModal();
  };
  console.log(cartContext);
  useEffect(() => {
    if (items.length > 0) {
      const totalQuantity = items.reduce(
        (currentQuantity, item) => currentQuantity + item.amount,
        0
      );
      setTotalQuantity(totalQuantity);
    } else {
      setTotalQuantity(0);
    }
  }, [items]);
  return (
    <>
      <header className={classes.header}>
        <div className={classes["logo"]}>ReactMeals</div>
        <div className={classes["cart__slot"]}>
          <button
            className={classes.carticon}
            onClick={handleClick}
          >
            <AiOutlineShoppingCart /> Your Cart
            <span>{totalQuantity}</span>
          </button>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={images.mainHeader}
          alt="header"
        />
      </div>
      {cartContext.isShowModal && RootModal(Cart, handleClick)}
    </>
  );
};

export default Header;

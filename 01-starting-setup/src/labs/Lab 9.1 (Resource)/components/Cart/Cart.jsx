import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context.js";

import classes from "./Cart.module.css";
import CartItem from "./CartItem.jsx";
import Checkout from "./Checkout.jsx";
import useHttp from "../../../../hooks/useHttp.js";
import Card from "../UI/Card.js";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const handleClick = (e) => {
    cartContext.handlerShowModal();
  };

  const { error, loading, sendRequest: sendCartRequest } = useHttp();

  const submitOrderHandler = async (userData) => {
    await sendCartRequest(
      {
        url: "https://assignment03-61e91-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        method: "POST",
        body: {
          user: userData,
          orderedItems: cartContext.items,
        },
      },
      () => {}
    );
    setDidSubmit(true);
    cartContext.clearCart();
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  return (
    <>
      {didSubmit ? (
        <Card>Order successfully! Thanks so much!</Card>
      ) : (
        <div className={classes["cart-items"]}>
          {items.length > 0 ? (
            <>
              <div className="item-list">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    itemData={item}
                  />
                ))}
              </div>
              <div className={classes.total}>
                <div className="label">Total Amount</div>
                <div className="value">
                  ${cartContext.totalAmount.toFixed(2)}
                </div>
              </div>
              {error && <p style={{ color: "red" }}>{error.message}</p>}

              {isCheckout ? (
                <Checkout
                  onConfirm={submitOrderHandler}
                  onCancel={handleClick}
                  loading={loading}
                />
              ) : (
                <div className={classes["actions"]}>
                  <button
                    className={classes["button--alt"]}
                    onClick={handleClick}
                  >
                    Close
                  </button>
                  <button
                    className={classes.button}
                    onClick={orderHandler}
                  >
                    Order
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <h1>There are no items in your cart.</h1>
              <p>Back to shop? </p>
              <button
                className={classes["button--alt"]}
                onClick={handleClick}
              >
                Close
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;

import React from "react";
import { createPortal } from "react-dom";
import Overlay from "./Overlay.jsx";

const RootModal = (Modal) => {
  return createPortal(
    <>
      <Overlay />
      <div
        className="modal-wrapper"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 1000,
        }}
      >
        <Modal />
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default RootModal;

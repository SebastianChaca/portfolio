import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const SpanBtn = ({ open, openBar, rotate }) => {
  return (
    <button
      className={!open ? "header-btn" : ""}
      onClick={() => {
        openBar();
      }}
    >
      <div className={rotate ? "header-btn-rotateY " : ""}>
        <span />
        <span />
        <span />
      </div>
    </button>
  );
};

export const CloseBtn = ({ open, openBar, handleRotate }) => {
  return (
    <button
      className={open ? ` sidebar-btn-close header-btn-rotate` : ""}
      onClick={() => {
        handleRotate();
        openBar();
      }}
    >
      <AiFillCloseCircle className="btn-icon " />
    </button>
  );
};

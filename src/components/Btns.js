import React from "react";

export const SpanBtn = ({ open, openBar }) => {
  return (
    <button
      className={` ${open ? `sidebar-btn-close ` : `header-btn`}`}
      onClick={() => {
        openBar();
      }}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export const CloseBtn = ({ open, openBar }) => {
  return (
    <button
      className={` ${open ? `header-btn-rotate sidebar-btn-close ` : ``}`}
      onClick={() => {
        openBar();
      }}
    >
      <h1>X</h1>
    </button>
  );
};


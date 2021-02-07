import React from "react";
import Spain from "../img/Spain3.png";

export default function SpainIcon({ handleLanguage }) {
  return (
    <div className="flags-container">
      <button
        className="lang-btn spain-btn"
        onClick={() => {
          handleLanguage("Español");
        }}
      >
        <img className="spain" src={Spain} alt="spain" />
      </button>
    </div>
  );
}

import React from "react";
import uk from "../img/uk.png";

export default function UkIcon({ handleLanguage }) {
  return (
    <div className="flags-container">
      <button
        className="lang-btn uk-btn"
        onClick={() => handleLanguage("English")}
      >
        <img className="uk" src={uk} alt="" />
      </button>
    </div>
  );
}

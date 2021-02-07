import React from "react";
import UkIcon from "./UkIcon";
import SpainIcon from "./SpainIcon";
import { navLinks } from "../content/data";
import { Link } from "react-router-dom";

export default function Sidebar({ open, openBar, handleLanguage, language }) {
  let content = language === "English" ? navLinks.english : navLinks.spanish;

  return (
    <aside className={`sidebar ${open ? `show-sidebar` : ""}`}>
      <ul>
        {content.map((cont, index) => {
          return (
            <Link to={cont.link} onClick={() => openBar()} key={index}>
              <li>{cont.nombre}</li>
              <hr />
            </Link>
          );
        })}
        <li>
          <UkIcon handleLanguage={handleLanguage} />
          <hr />
        </li>
        <li>
          <SpainIcon handleLanguage={handleLanguage} />
        </li>
      </ul>
    </aside>
  );
}

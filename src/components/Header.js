import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { navLinks } from "../content/data";
import UkIcon from "./UkIcon";
import SpainIcon from "./SpainIcon";
import { SpanBtn, CloseBtn } from "./Btns";
import { Link, useLocation } from "react-router-dom";

export default function Header({ language, handleLanguage }) {
  let content = language === "English" ? navLinks.english : navLinks.spanish;
  const location = useLocation();
  const [current, setCurrent] = useState("");
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(true);
    setTimeout(function () {
      setRotate(false);
    }, 1000);
  };
  const openBar = () => {
    setOpen(!open);
  };
  const handleCurrentPage = (curr) => {
    setCurrent(curr);
  };
  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);
  return (
    <>
      <Sidebar
        open={open}
        openBar={openBar}
        handleLanguage={handleLanguage}
        language={language}
        handleRotate={handleRotate}
      />
      <header className="header">
        <nav className={open ? `nav-color` : ""}>
          <ul>
            <div className="rigth-links">
              <div className={`nombre ${open ? `nombre-color` : ""}`}>
                <h1>Sebastian Chaca</h1>
              </div>
              {open ? (
                <CloseBtn
                  open={open}
                  openBar={openBar}
                  handleRotate={handleRotate}
                />
              ) : (
                <SpanBtn open={open} openBar={openBar} rotate={rotate} />
              )}
              {content.map((cont, index) => {
                return (
                  <li key={index}>
                    <Link
                      key={index}
                      className={`${
                        current === cont.link ? `currentPage` : ``
                      }`}
                      to={cont.link}
                      onClick={() => {
                        handleCurrentPage(cont.link);
                      }}
                    >
                      {cont.nombre}
                    </Link>
                  </li>
                );
              })}
              <li>
                <UkIcon handleLanguage={handleLanguage} />
              </li>
              <li>
                <SpainIcon handleLanguage={handleLanguage} />
              </li>
            </div>
          </ul>
        </nav>
        <hr />
      </header>
    </>
  );
}

import React, { useState } from "react";
import { contactContent } from "../content/data";
export default function Contact() {
  const [email, setEmail] = useState("Gmail");
  const [showEmail, setShowEmail] = useState(false);
  const [fade, setFade] = useState(false);

  const handleFade = () => {
    setFade(true);
    setTimeout(function () {
      setFade(false);
    }, 500);
  };
  const handleEmail = () => {
    setShowEmail(!showEmail);
    if (!showEmail) {
      setEmail("sebastian.dalinger@gmail.com");
    } else {
      setEmail("Gmail");
    }
  };
  return (
    <div className="main-container">
      {contactContent.map((icon, index) => {
        if (icon.email) {
          return (
            <div
              className={`contact-container ${fade ? "notShow" : ""}`}
              key={index}
              onClick={() => {
                handleEmail();
                handleFade();
              }}
            >
              <div className="container-icon">
                {!showEmail && <p> {icon.icon} </p>}
              </div>
              <div
                className={`container-text ${showEmail ? " show-email" : ""}`}
              >
                <p>{email}</p>
              </div>
            </div>
          );
        }
        return (
          <div className="contact-container" key={index}>
            <div className="container-icon">
              <a href={icon.link}>{icon.icon}</a>
            </div>
            <div className="container-text">
              <a href={icon.link}>{icon.text}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import { projectsContent } from "../content/data";

export default function Projects({ language }) {
  return (
    <div className="projects-container">
      {projectsContent.map((proj, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={proj.img} alt="" />
            </div>
            <div className="project-text">
              <p>
                {language === "Español" ? proj.text.spanish : proj.text.english}
              </p>
            </div>
            <div className="project-btns">
              <button>
                <a href={proj.github}>Source Code</a>
              </button>
              <button>
                <a href={proj.live}>Live Project</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

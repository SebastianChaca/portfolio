import React, { useState, useEffect } from "react";

const ProjectList = ({ projects, language }) => {
  const [fade, setFade] = useState(false);
  const handleFade = () => {
    setFade(true);
    setTimeout(function () {
      setFade(false);
    }, 500);
  };
  useEffect(() => {
    handleFade();
  }, [projects]);
  return (
    <div
      className={`${
        projects.length === 1
          ? "projects-container-block "
          : "projects-container-grid "
      }${fade ? "transition" : ""}
      `}
    >
      {projects.map((proj, index) => {
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
};

export default ProjectList;

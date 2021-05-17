import React, { useState, useEffect } from 'react';

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
          ? 'projects-container-block '
          : 'projects-container-grid '
      }${fade ? 'transition' : ''}
      `}
    >
      {projects.map((proj, index) => {
        const content =
          language === 'English' ? proj.text.english : proj.text.spanish;
        return (
          <div className='project-card' key={index}>
            <div className='project-img'>
              <img src={proj.img} alt='' />
            </div>
            <div className='project-text'>
              <h2>{proj.title}</h2>
              <h3>Front-end tecnologies:</h3>
              <p>{content[0].frontTec}</p>
              <h3>Back-end tecnologies:</h3>
              <p>{content[1].backTec}</p>
              <h3>Features:</h3>
              <p>{content[2].features}</p>
            </div>
            <div className='project-btns'>
              <button>
                <a href={proj.github} rel='noreferrer' target='_blank'>Source Code</a>
              </button>
              <button>
                <a href={proj.live} rel='noreferrer' target='_blank'>Live Project</a>
              </button>
              {
                proj.dashboard && 

                <button>
                <a href={proj.dashLink} rel='noreferrer' target='_blank'>Dashboard</a>
                </button>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;

import React, { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";
import { paginatedProjects } from "../content/paginate";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
export default function Projects({ language }) {
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(false);
  const handleFade = () => {
    setFade(true);
    setTimeout(function () {
      setFade(false);
    }, 500);
  };
  useEffect(() => {
    handleFade();
  }, []);
  return (
    <div
      className={` ${paginatedProjects.length > 1 ? "pagination-on" : ""} ${
        paginatedProjects[page].length === 1
          ? "projects-container-one"
          : "projects-container"
      } ${fade ? "transition-init" : ""} `}
    >
      <ProjectList projects={paginatedProjects[page]} language={language} />
      {paginatedProjects.length > 1 && (
        <article className="pagination-buttons">
          {page > 0 && (
            <button className="prev-page-btn" onClick={() => setPage(page - 1)}>
              <FaAngleDoubleLeft />
            </button>
          )}
          {paginatedProjects.map((item, index) => {
            return (
              <button
                onClick={() => setPage(index)}
                key={index}
                className={`page-btn ${page === index && `page-btn-current`}`}
              >
                {index + 1}
              </button>
            );
          })}
          {page < paginatedProjects.length - 1 && (
            <button className="next-page-btn" onClick={() => setPage(page + 1)}>
              <FaAngleDoubleRight />
            </button>
          )}
        </article>
      )}
    </div>
  );
}

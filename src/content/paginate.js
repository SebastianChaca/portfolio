import { projectsContent } from "./data";

function paginate(projects) {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(projects.length / itemsPerPage);
  const newProducts = Array.from({ length: numberOfPages }, () => {
    return projects.splice(0, itemsPerPage);
  });

  return newProducts;
}
export const paginatedProjects = paginate(projectsContent);

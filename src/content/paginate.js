import { newProjectContent } from './data';

function paginate(projects) {
  const itemsPerPage = 1;
  const numberOfPages = Math.ceil(projects.length / itemsPerPage);
  const newProducts = Array.from({ length: numberOfPages }, () => {
    return projects.splice(0, itemsPerPage);
  });

  return newProducts;
}
export const paginatedProjects = paginate(newProjectContent);

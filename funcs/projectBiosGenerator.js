import projectData from "./projectData.js";

const { projectFields, projects } = projectData;

const $ = document;
// Elements

  const projectList = $.getElementsByClassName('project-list')[0];
  const showcase = $.getElementsByClassName('project-showcase')[0];
  const flagSelectors = $.getElementsByClassName('flag-selector');

// Data

const projectCard = 'project-selector';
const projectName = 'project-name';
const selected = 'project-selector-selected';

const showContainer = 'project-show-container';
const gifShow = 'gif-showcase';
const params = 'params';
const showBios = 'showcase-bios';
const showTitle = 'title';
const showText = 'showcase-paragraph';


let selectedProject = undefined;

// Funcs

function creator(type, text, Addclass, parent) {
  const element = $.createElement(type);
  element.classList.add(Addclass);
  element.innerText = text;
  parent.appendChild(element);
  return element;
}

const generateParams = () => {
  const params = creator('div', '', showContainer, showcase);
};

const generateBios = () => {
  
};

const projectGenerator = () => {
  projects.forEach((project) => {
    const card = creator('button', project.name[0], projectCard, projectList);
    card.addEventListener('click', (e) => {
      if (selectedProject) {
        selectedProject.classList.remove(selected);
      }
      selectedProject = e.target;
      selectedProject.classList.add(selected);
      generateBios(project);
    });
  });
};

// Code

Array.from(flagSelectors).forEach((selector, i) => {
  selector.addEventListener('click', () => {

  });
})

projectGenerator();
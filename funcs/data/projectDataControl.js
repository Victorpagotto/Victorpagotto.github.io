import projectData from "./projectData.js";

const { projectFields, projects } = projectData;

const $ = document;
// Elements

  const projectList = $.getElementsByClassName('project-list')[0];
  const showcase = $.getElementsByClassName('project-showcase')[0];
  const flagSelectors = $.getElementsByClassName('flag-selector');

// Data

const projectCard = 'project-selector';
const _projectName = 'project-name';
const selected = 'project-selector-selected';

const showContainer = 'project-show-container';
const gifShow = 'gif-showcase';
const params = 'params';
const showBios = 'showcase-bios';
const descript = 'bios-description';
const showText = 'showcase-paragraph';
const paramLink = 'param-link';


let selectedProject = undefined;

// Funcs

function creator(type, text, addClasses, parent) {
  const element = $.createElement(type);
  addClasses.forEach((addClass) => {
    element.classList.add(addClass);
  });
  element.innerText = text;
  parent.appendChild(element);
  return element;
}

const generateGIFField = (gifSources) => {
  if (gifSources.length > 0) {
    const gifContainer = creator('div', '', [showContainer], showcase);
    gifSources.forEach((gif) => {
      const gifImg = creator('img', '', [gifShow], gifContainer);
      gifImg.src = gif;
      gifImg.alt = 'Project demonstration gif.';
    });
    return gifContainer;
  }
  return null;
};

const generateLink = (field, data, text, language) => {
  if (field && data) {
    const paramsContainer = creator('div', '', [showContainer], showcase);
    creator('p', field[language], [params], paramsContainer);
    const createdLink = creator('a', text[language], [params, paramLink], paramsContainer);
    createdLink.href = data[language];
    createdLink.target='_blank';
    return paramsContainer;
  }
  return null;
}

const generateParams = (field, data, language) => {
  if(field && data) {
    const paramsContainer = creator('div', '', [showContainer], showcase);
    creator('p', field[language], [params], paramsContainer);
    creator('p', data[language], [params], paramsContainer);
    return paramsContainer;
  }
  return null;
};


const generateDetails = (project, language) => {
  const biosContainer = creator('div', '', [showBios, showContainer], showcase);
  creator('p', projectFields.descript[language], [descript], biosContainer);
  project.text[language].forEach((paragraph) => {
    creator('p', paragraph, [showText], biosContainer);
  });
  return biosContainer;
};

const generateBios = (project, language) => {
  showcase.innerHTML = '';
  generateGIFField(project.gifs);
  Object.keys(project.params).forEach((param) => {
    if (param === 'github') {
      return generateLink(projectFields.params[param], project.params[param], project.params[param], language);
    }
    generateParams(projectFields.params[param], project.params[param], language);
  });
  generateDetails(project, language);
};

const projectGenerator = (projectLs) => {
  const language  = JSON
    .parse(localStorage.getItem('language') || JSON.stringify(0));
  projectList.innerHTML = '';
  projectLs.forEach((project) => {
    const card = creator('button', project.params.name[language], [projectCard], projectList);
    if (localStorage.projectSelected === project.params.name[1]) {
      selectedProject = card;
      card.classList.add(selected);
      generateBios(project, language);
    }
    card.addEventListener('click', (e) => {
      if (selectedProject) {
        selectedProject.classList.remove(selected);
      }
      selectedProject = e.target;
      selectedProject.classList.add(selected);
      generateBios(project, language);
      localStorage.setItem('projectSelected', `${project.params.name[1]}`);
    });
  });
};

// Code

Array.from(flagSelectors).forEach((selector, i) => {
  selector.addEventListener('click', () => {
    localStorage.setItem('language', JSON.stringify(i));
    const language  = JSON
    .parse(localStorage.getItem('language') || JSON.stringify(0));
    projectGenerator(projects, language)
  });
})

projectGenerator(projects);
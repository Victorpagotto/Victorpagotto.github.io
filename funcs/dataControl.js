import data from "./data.js";

const $ = document;

// Elements

const navBarLinks = $.getElementsByClassName('nav-bar-link');
const aboutMeTextBoxes = $.getElementsByClassName('about-me-box');
const pointers = {
  aboutMeLink: navBarLinks[0],
  knowledgeLink: navBarLinks[1],
  projectsLink: navBarLinks[2],
  contactsLink: navBarLinks[3],
  nutshelDetailslTItle: $.getElementsByClassName('about-me-title')[0],
  aboutMeTitle: $.getElementsByClassName('nutshell-title')[0],
  aboutMeText: $.getElementsByClassName('nutshell-text')[0],
  aboutMeTitleBoxOne: aboutMeTextBoxes[0].children[0],
  aboutMeTextBoxOne: aboutMeTextBoxes[0].children[1],
  aboutMeTitleBoxTwo: aboutMeTextBoxes[1].children[0],
  aboutMeTextBoxTwo: aboutMeTextBoxes[1].children[1],
  aboutMeTitleBoxThree: aboutMeTextBoxes[2].children[0],
  aboutMeTextBoxThree: aboutMeTextBoxes[2].children[1],
}

const flagSelectors = $.getElementsByClassName('flag-selector');

// Data

let flagMax = null;

// Funcs

function setTexts(mode) {
  Object.keys(pointers).forEach((pointer) => {
    pointers[pointer].innerHTML = data[pointer][mode];
  });
}

// Code

setTexts(0);

Array.from(flagSelectors).forEach((selector, i) => {
  selector.addEventListener('click', () => {
    setTexts(i);
  });
})

import data from "./data.js";

const $ = document;

// Elements

const navBarLinks = $.getElementsByClassName('nav-bar-link');
const aboutMeTextBoxesTitles = $.getElementsByClassName('about-me-box-title');
const aboutMeTextBoxesTexts = $.getElementsByClassName('about-me-box-content');
const pointers = {
  aboutMeLink: navBarLinks[0],
  knowledgeLink: navBarLinks[1],
  projectsLink: navBarLinks[2],
  contactsLink: navBarLinks[3],
  nutshelDetailslTItle: $.getElementsByClassName('about-me-title')[0],
  aboutMeTitle: $.getElementsByClassName('nutshell-title')[0],
  aboutMeText: $.getElementsByClassName('nutshell-text')[0],
  aboutMeTitleBoxOne: aboutMeTextBoxesTitles[0],
  aboutMeTextBoxOne: aboutMeTextBoxesTexts[0],
  aboutMeTitleBoxTwo: aboutMeTextBoxesTitles[1],
  aboutMeTextBoxTwo: aboutMeTextBoxesTexts[1],
  aboutMeTitleBoxThree: aboutMeTextBoxesTitles[2],
  aboutMeTextBoxThree: aboutMeTextBoxesTexts[2],
  contactTitle:$.getElementsByClassName('contact-title')[0],
  displayCopyMessage: $.getElementsByClassName('display-copy-message')[0],
  displayClickMessage: $.getElementsByClassName('click-display')[0],
  skillsTitle: $.getElementsByClassName('skills-title')[0],
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

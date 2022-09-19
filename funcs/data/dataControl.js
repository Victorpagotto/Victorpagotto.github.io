import data from "./data.js";

const $ = document;

// Elements

const aboutMeTextBoxesTitles = $.getElementsByClassName('about-me-box-title');
const aboutMeTextBoxesTexts = $.getElementsByClassName('about-me-box-content');

const flagSelectors = $.getElementsByClassName('flag-selector');

// Data

const pointers = {
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

// Funcs

function setTexts(mode) {
  Object.keys(pointers).forEach((pointer) => {
    if (pointers[pointer]) {
      pointers[pointer].innerHTML = data[pointer][mode];
    }
  });
}

// Code

setTexts(JSON.parse(localStorage.getItem('language') || 0));

Array.from(flagSelectors).forEach((selector, i) => {
  selector.addEventListener('click', () => {
    localStorage.setItem('language', JSON.stringify(i));
    setTexts(i);
  });
})

const $ = document;

import navLink from "./navBarData.js";
// Elements

const navBarLinks = $.getElementsByClassName('nav-bar-link');
const flagSelectors = $.getElementsByClassName('flag-selector');

// Data

const pointers = {
  aboutMeLink: navBarLinks[0],
  knowledgeLink: navBarLinks[1],
  projectsLink: navBarLinks[2],
  contactsLink: navBarLinks[3],
}

// Funcs

function setTexts(mode) {
  Object.keys(pointers).forEach((pointer) => {
    if (pointers[pointer]) {
      pointers[pointer].innerHTML = navLink[pointer][mode];
    }
  });
}

// Code

setTexts(JSON.parse(localStorage.getItem('language') || 0));

Array.from(flagSelectors).forEach((selector, i) => {
  selector.addEventListener('click', () => {
    setTexts(i);
  });
})
import data from "./data.js";

const $ = document;

// Elements

const pointers = {
  aboutMeTitle: $.getElementsByClassName('nutshell-title')[0],
  aboutMeText: $.getElementsByClassName('nutshell-text')[0],
}

const flagSelectors = $.getElementsByClassName('flag-selector');

// Data

let flagInterval = null;
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

  selector.addEventListener('mouseenter', ({ target }) => {
    flagMax = target.height;
    target.style.height = `${target.height + (target.height * 0.2)}px`;
  });

  selector.addEventListener('mouseleave', ({ target }) => {
    target.style.height = `${flagMax}px`;
    flagMax = null;
  });
})

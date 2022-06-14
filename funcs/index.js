const $ = document;

// Data

let navBarPosition = 80;
let navBarInterval = null;

// Elements
const navBar = $.getElementsByClassName('nav-bar')[0];

// Functions

function animationFunction (move, target, max) {
  navBarPosition += move;
  target.style.top = `-${navBarPosition}px`;
  if (navBarPosition === max) {
    clearInterval(navBarInterval);
  }
  if (navBarPosition > 80 || navBarPosition < 0) {
    clearInterval(navBarInterval);
    navBarPosition = 80;
    target.style.top = '-80px';
  }
}

function movesNavBar (target, move) {
  clearInterval(navBarInterval);
  let max = 0;
  if (move > 0) {
    max = 80;
  }
  navBarInterval = setInterval(() => animationFunction(move, target, max), 1);
}

// Code
navBar.addEventListener('mouseenter', () => {
  movesNavBar(navBar, -1);
});

navBar.addEventListener('mouseleave', () => {
  movesNavBar(navBar, 1);
});

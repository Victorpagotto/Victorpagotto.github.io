// Elements

const navBar = document.getElementsByClassName('nav-bar')[0];
const menuSymbol = document.getElementsByClassName('menu-symbol')[0];
const menuSymbolContainer = menuSymbol.parentElement;

// Data

const NAV_MOUSE_SIZE = menuSymbolContainer.clientHeight;
const MIN_POSITION = 0;
const originalPosition = navBar.clientHeight - NAV_MOUSE_SIZE;
let navBarPosition = navBar.clientHeight - NAV_MOUSE_SIZE;
let navBarInterval = null;
const observer = new ResizeObserver((_elements) => {
  navBarPosition = navBar.clientHeight - NAV_MOUSE_SIZE;
  navBar.style.top = `-${navBar.clientHeight - NAV_MOUSE_SIZE}px`;
});
let navBarStatus = false;

// Functions

function animationFunction (move, target, max) {
  navBarPosition += Math.ceil(navBar.clientHeight / 100) * move;
  console.log(max)
  if (navBarPosition < 0 || navBarPosition > originalPosition) {
    clearInterval(navBarInterval);
    navBarPosition = max;
  }
  target.style.top = `${-navBarPosition}px`;
  if (navBarPosition === max) {
    clearInterval(navBarInterval);
  }
}

function movesNavBar (target, move) {
  clearInterval(navBarInterval);
  let max = MIN_POSITION;
  if (move > 0) {
    max = originalPosition;
  }
  navBarInterval = setInterval(() => animationFunction(move, target, max), 2);
}

// Code


console.log(navBarPosition);
navBar.addEventListener('mouseenter', () => {
  navBarStatus = true;
  menuSymbolContainer.style.color = 'orange';
  movesNavBar(navBar, -1);
});

navBar.addEventListener('mouseleave', () => {
  navBarStatus = false;
  menuSymbolContainer.style.color = 'white';
  movesNavBar(navBar, 1);
});

navBar.addEventListener('click', () => {
  if (navBarStatus === true) {
    menuSymbolContainer.style.color = 'orange';
    movesNavBar(navBar, -1);
  } else {
    menuSymbolContainer.style.color = 'white';
    movesNavBar(navBar, 1);
  }
  navBarStatus = !navBarStatus;
});

observer.observe(navBar);

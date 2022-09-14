// Elements

const navBar = document.getElementsByClassName('nav-bar')[0];
const menuSymbol = document.getElementsByClassName('menu-symbol')[0];
const menuSymbolContainer = menuSymbol.parentElement;

// Data

const NAV_MOUSE_SIZE = menuSymbolContainer.clientHeight;
const MIN_POSITION = 0;
let originalPosition = navBar.clientHeight - NAV_MOUSE_SIZE;
let navBarPosition = originalPosition;
let navBarInterval = null;
const observer = new ResizeObserver((_elements) => {
  navBarPosition = navBar.clientHeight - NAV_MOUSE_SIZE;
  originalPosition = navBar.clientHeight - NAV_MOUSE_SIZE;
  navBar.style.top = `-${navBar.clientHeight - NAV_MOUSE_SIZE}px`;
});
let navBarStatus = false;

// Functions

function animationFunction (move, target, max) {
  navBarPosition += Math.ceil(navBar.clientHeight / 100) * move;
  if (navBarPosition < 0 || navBarPosition > originalPosition) {
    clearInterval(navBarInterval);
    navBarPosition = max;
  }
  target.style.top = `${-navBarPosition}px`;
}

function movesNavBar (target, move) {
  clearInterval(navBarInterval);
  menuSymbol.innerHTML = navBarStatus ? '︽' : '︾';
  const max = move > 0 ? originalPosition : MIN_POSITION;
  navBarInterval = setInterval(() => animationFunction(move, target, max), 2);
}

// Code

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
  if (navBarStatus) {
    menuSymbolContainer.style.color = 'orange';
    movesNavBar(navBar, -1);
  } else {
    menuSymbolContainer.style.color = 'white';
    movesNavBar(navBar, 1);
  }
  navBarStatus = !navBarStatus;
});

observer.observe(navBar);

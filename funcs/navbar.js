const $ = document;

// Elements

const [navBar] = $.getElementsByClassName('nav-bar');
const [menuSymbol] = $.getElementsByClassName('menu-symbol');
const menuSymbolContainer = menuSymbol.parentElement;
const flagSelectors = $.getElementsByClassName('flag-selector');

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
  menuSymbol.innerHTML = navBarStatus ? '︽ MENU ︽' : '︾ MENU ︾';
  const max = move > 0 ? originalPosition : MIN_POSITION;
  navBarInterval = setInterval(() => animationFunction(move, target, max), 2);
}

// Code

menuSymbolContainer.style.color = 'orange';

navBar.addEventListener('mouseenter', () => {
  navBarStatus = true;
  menuSymbolContainer.style.color = 'yellow';
  movesNavBar(navBar, -1);
});

navBar.addEventListener('mouseleave', () => {
  navBarStatus = false;
  menuSymbolContainer.style.color = 'orange';
  movesNavBar(navBar, 1);
});

navBar.addEventListener('click', () => {
  if (navBarStatus) {
    menuSymbolContainer.style.color = 'yellow';
    movesNavBar(navBar, -1);
  } else {
    menuSymbolContainer.style.color = 'orange';
    movesNavBar(navBar, 1);
  }
  navBarStatus = !navBarStatus;
});

Array.from(flagSelectors).forEach((flagSelector, i) => {
  flagSelector.addEventListener('click', () => {
    localStorage.setItem('language', JSON.stringify(i));
  })
});

observer.observe(navBar);

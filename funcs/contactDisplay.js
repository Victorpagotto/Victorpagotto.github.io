const $ = document;

// Elements
const icons = $.getElementsByClassName('contact-icon');
const [display, copiedMessage, clickMessage] = $.getElementsByClassName('contact-display');
// Data
const info = [
  'Pagotto#6403',
  'victor.pagotto12@gmail.com',
  'github.com/Victorpagotto',
  'linkedin.com/in/victor-pagotto',
]
let displayTimer = null;
let initDisplayTimer = null;
// Funcs

// Code

Array.from(icons).forEach((icon, i) => {
  icon.addEventListener('click', (e) => {
    copiedMessage.style.display = 'inline-block';
    display.style.display = 'none';
    clickMessage.style.display = 'none';
    clearTimeout(displayTimer);
    clearTimeout(initDisplayTimer);
    navigator.clipboard.writeText(info[i]);
    displayTimer = setTimeout(() => {
      copiedMessage.style.display = 'none';
      display.style.display = 'inline-block';
      display.innerHTML = info[i];
      initDisplayTimer = setTimeout(() => {
        display.style.display = 'none';
        clickMessage.style.display = 'inline-block';
      }, 3000);
    }, 750);
  });
});
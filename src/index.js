import printMe from './print.js';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.textContent = 'WEBPACK CONFIG SETUP'

  return element;
}

printMe()

document.body.appendChild(component());


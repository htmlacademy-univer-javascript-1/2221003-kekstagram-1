import { ALERT_SHOW_TIME } from './constants.js';

const getRandomPositiveInteger = (min, max) => {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const checkStringLength = (string, length) => string.length <= length;

const showAlert = (message) => {
  const alertPopup = document.querySelector(`#${message}`).content.querySelector('section').cloneNode(true);
  const alertTitle = alertPopup.querySelector('h2');
  const alertButton = alertPopup.querySelector('button');
  alertPopup.style.zIndex = '100';
  alertTitle.style.left = '0';
  alertTitle.style.top = '0';
  alertTitle.style.right = '0';
  alertTitle.style.padding = '10px 3px';
  alertTitle.style.fontSize = '30px';
  alertTitle.style.textAlign = 'center';
  alertTitle.style.color = 'yellow';
  alertButton.style.color = 'red';
  document.body.append(alertPopup);
  const button = alertPopup.querySelector('button');
  button.addEventListener('click', () => {
    alertPopup.remove();
  });
  setTimeout(() => {
    alertPopup.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomPositiveInteger, getRandomArrayElement, checkStringLength, showAlert };

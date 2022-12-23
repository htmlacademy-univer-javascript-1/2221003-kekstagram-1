import { ALERT_SHOW_TIME } from './constants.js';

const onWindowEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    document.removeEventListener('keydown', onWindowEscKeydown);
  }
};

const showMessage = (message) => {
  const alertPopup = document.querySelector(`#${message}`).content.querySelector('section');
  alertPopup.classList.add('js-message');
  const popup = alertPopup.cloneNode(true);
  const alertTitle = popup.querySelector('h2');
  const alertButton = popup.querySelector('button');
  popup.style.zIndex = '100';
  alertTitle.style.left = '0';
  alertTitle.style.top = '0';
  alertTitle.style.right = '0';
  alertTitle.style.padding = '10px 3px';
  alertTitle.style.fontSize = '30px';
  alertTitle.style.textAlign = 'center';
  alertTitle.style.color = 'yellow';
  alertButton.style.color = 'red';
  document.body.append(popup);
  const button = popup.querySelector('button');
  document.addEventListener('keydown', onWindowEscKeydown);
  button.addEventListener('click', () => {
    popup.remove();
  });
  setTimeout(() => {
    popup.remove();
  }, ALERT_SHOW_TIME);
};

export { showMessage };

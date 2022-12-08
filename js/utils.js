const ALERT_SHOW_TIME = 5000;

const getRandomPositiveInteger = (min, max) => {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const checkStringLength = (string, length) => string.length <= length;

const showAlert = (isError) => {
  const alertName = isError ? 'error' : 'success';
  const alertPopup = document.querySelector(`${alertName}`).content.querySelector('section').cloneNode(true);
  alertPopup.style.zIndex = '100';
  alertPopup.style.backgroundColor = 'red';
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

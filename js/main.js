// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function isRightLength(string, maxLength) {
  if (String(string).length <= maxLength) {
    return true;
  }
  return false;
}

console.log(getRandomNumber(4, 10));
console.log(isRightLength('Привет', 3));

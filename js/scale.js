import { Scale } from './constants.js';

const imageSize = document.querySelector('.scale__control--value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview_img');

const toggleScaleButtons = (difference) => {
  let slideValue = Number(imageSize.value.replace('%', '')) + difference;
  slideValue = Math.min(Math.max(slideValue, Scale.MIN), Scale.MAX);
  imagePreview.style.transform = `scale(${slideValue / 100})`;
  imageSize.value = `${slideValue}%`;
};

const clickScaleButtons = () => {
  scaleBiggerButton.addEventListener('click', () => toggleScaleButtons(Scale.STEP));
  scaleSmallerButton.addEventListener('click', () => toggleScaleButtons(-Scale.STEP));
};

const removeEventScaleButtons = () => {
  scaleBiggerButton.removeEventListener('click', () => toggleScaleButtons(Scale.STEP));
  scaleSmallerButton.removeEventListener('click', () => toggleScaleButtons(-Scale.STEP));
};

export { clickScaleButtons, removeEventScaleButtons };

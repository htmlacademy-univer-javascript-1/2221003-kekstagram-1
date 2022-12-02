import { Effects } from './constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const sliderWrapper = document.querySelector('.img-upload__effect-level');
const imageForChange = document.querySelector('.img-upload__preview_img');
const uploadEffects = document.querySelector('.img-upload__effects');

const createSlider = () => {
  sliderWrapper.classList.add('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 0.1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  });
};

const updateFiltersSlider = (evt) => {
  const effect = evt.target.value;
  if (effect === 'none') {
    sliderWrapper.classList.add('hidden');
    imageForChange.style.filter = 'none';
    return;
  }

  sliderWrapper.classList.remove('hidden');
  imageForChange.removeAttribute('class');
  imageForChange.classList.add(`effects__preview--${effect}`);
  sliderElement.noUiSlider.updateOptions(Effects[effect].options);

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    imageForChange.style.filter = `${Effects[effect].filter}(${valueElement.value}${Effects[effect].unit})`;
  });
};

const changeEffects = () => uploadEffects.addEventListener('change', updateFiltersSlider);

export { createSlider, changeEffects };

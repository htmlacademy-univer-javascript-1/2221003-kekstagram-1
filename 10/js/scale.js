const imageSize = document.querySelector('.scale__control--value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview_img');

const toggleScaleButtons = (difference) => {
  let slideValue = Number(imageSize.value.replace('%', '')) + difference;
  if (slideValue > 100) {
    slideValue = 100;
  }
  else if (slideValue < 25) {
    slideValue = 25;
  }
  imagePreview.style.transform = `scale(${slideValue / 100})`;
  imageSize.value = `${slideValue}%`;
};

const onClickScaleButtons = () => {
  scaleBiggerButton.addEventListener('click', () => toggleScaleButtons(25));
  scaleSmallerButton.addEventListener('click', () => toggleScaleButtons(-25));
};

export { onClickScaleButtons };

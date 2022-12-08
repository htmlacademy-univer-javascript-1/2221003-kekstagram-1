import { commentHandler, hashtagsHandler, pristine, error } from './validate.js';
import { changeEffects } from './effects-filter.js';
import { addEventScaleButtons, removeEventScaleButtons } from './scale.js';
import { createSlider } from './effects-filter.js';
import { sendData } from './api.js';
import { showAlert } from './utils.js';
import { photoValide } from './constants.js';

const file = document.querySelector('#upload-file');
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const comments = form.querySelector('.text__description');
const hashtags = form.querySelector('.text__hashtags');
const imageForChange = document.querySelector('.img-upload__preview_img');
const submitButton = document.querySelector('.img-upload__submit');

const onHashtagsInput = () => {
  submitButton.disabled = !pristine.validate();
};

const onCommentsInput = () => {
  submitButton.disabled = !pristine.validate();
};

const closePopup = () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  form.reset();
  removeEventScaleButtons();
  hashtags.removeEventListener('input', onHashtagsInput);
  comments.removeEventListener('input', onCommentsInput);
};

const onButtonEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
    document.removeEventListener('keydown', onButtonEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closePopup();
  document.removeEventListener('keydown', onButtonEscKeydown);
};

const checkFieldInFocus = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onButtonEscKeydown);
  });

  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onButtonEscKeydown);
  });
};


const onImgUploadFieldChange = () => {
  imageForChange.removeAttribute('class');
  imageForChange.removeAttribute('style');
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onButtonEscKeydown);
  checkFieldInFocus(comments);
  checkFieldInFocus(hashtags);
  changeEffects();
  addEventScaleButtons();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          showAlert(photoValide.SUCCESS);
          unblockSubmitButton();
          closePopup();
        },
        () => {
          showAlert(photoValide.ERROR);
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

const uploadPhoto = () => {
  file.addEventListener('change', onImgUploadFieldChange);
  hashtags.addEventListener('input', onHashtagsInput);
  comments.addEventListener('input', onCommentsInput);
  pristine.addValidator(hashtags, hashtagsHandler, error);
  pristine.addValidator(comments, commentHandler, error);

  setUserFormSubmit();

  createSlider();
};

export { uploadPhoto };

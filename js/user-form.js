import { onInput, commentHandler, hashtagsHandler, pristine, error } from './validate.js';
import { changeEffects } from './effects-filter.js';
import { clickScaleButtons, removeEventScaleButtons } from './scale.js';

const file = document.querySelector('#upload-file');
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const comments = form.querySelector('.text__description');
const hashtags = form.querySelector('.text__hashtags');
const imageForChange = document.querySelector('.img-upload__preview_img');

const closePopup = () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  form.reset();
};

const onButtonEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
    removeEventScaleButtons();
    document.removeEventListener('keydown', onButtonEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closePopup();
  removeEventScaleButtons();
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


const onImgUploadFieldchange = () => {
  imageForChange.removeAttribute('class');
  imageForChange.removeAttribute('style');
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onButtonEscKeydown);
  checkFieldInFocus(comments);
  checkFieldInFocus(hashtags);
  changeEffects();
  clickScaleButtons();
};


const uploadPhoto = () => {
  file.addEventListener('change', onImgUploadFieldchange);
  hashtags.addEventListener('input', onInput);
  comments.addEventListener('input', onInput);
  pristine.addValidator(hashtags, hashtagsHandler, error);
  pristine.addValidator(comments, commentHandler, error);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    pristine.validate();
  });
};

export { uploadPhoto };

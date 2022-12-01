import { onInput, commentHandler, hashtagsHandler, pristine, error } from './validate.js';

const file = document.querySelector('#upload-file');
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const comments = form.querySelector('.text__description');
const hashtags = form.querySelector('.text__hashtags');


const closePopup = () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
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


const onImgUploadFieldchange = () => {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onButtonEscKeydown);
  checkFieldInFocus(comments);
  checkFieldInFocus(hashtags);
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

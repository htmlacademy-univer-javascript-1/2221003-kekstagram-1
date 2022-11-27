import { getRandomPositiveInteger, getRandomArrayElement } from './utils.js';
import { MAX_COUNT_PHOTOS, NAMES, MESSAGES, DESCRIPTIONS } from './constants.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, MAX_COUNT_PHOTOS)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotos = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({ length: getRandomPositiveInteger(1, 6) }).map((value, index) => createComment(index + 1)),
});

const getPhotos = () => Array.from({ length: MAX_COUNT_PHOTOS }).map((value, index) => createPhotos(index + 1));

export { getPhotos };
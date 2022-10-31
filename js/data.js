import { getRandomPositiveInteger, getRandomArrayElement } from './util.js';
import { NAMES, MESSAGES, DESCRIPTIONS, MAX_COUNT_PHOTOS } from './constants.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotos = (id) => ({
  id,
  url: `photos/${id + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: createComment(id)
});

const getPhotos = () => Array.from({ length: MAX_COUNT_PHOTOS }).map((element, index) => { element = createPhotos(index + 1); });

export { getPhotos };


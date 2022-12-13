const DEFAULT_RENDERED_COMMENTS = 5;
const STEP_ADDED_COMMENTS = 5;
const MAX_COMMENT_LENGTH = 140;
const MAX_COUNT_PHOTOS = 25;
const ALERT_SHOW_TIME = 5000;

const NAMES = ['Вадим', 'Марк', 'Мария', 'Ринат', 'Олег', 'Екатерина', 'Наталья', 'Виктор'];
const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = ['Я на пляже', 'Гуляю'];

const CountLike = {
  MIN: 15,
  MAX: 200
};

const AvatarNumber = {
  MIN: 1,
  MAX: 6
};

const CountComment = {
  MIN: 0,
  MAX: 23
};

const MaxHashtag = {
  LENGTH: 20,
  COUNT: 5
};

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
};

const PhotoValide = {
  SUCCESS: 'success',
  ERROR: 'error'
};

const Effects = {
  'original': {
    name: 'original', filter: '', unit: '',
    options: { range: { min: 0, max: 100 }, step: 1, start: 100 },
  },
  'heat': {
    name: 'heat', filter: 'brightness', unit: '',
    options: { range: { min: 1, max: 3 }, step: 0.1, start: 3 },
  },
  'chrome': {
    name: 'chrome', filter: 'grayscale', unit: '',
    options: { range: { min: 0, max: 1 }, step: 0.1, start: 1 },
  },
  'sepia': {
    name: 'sepia', filter: 'sepia', unit: '',
    options: { range: { min: 0, max: 1 }, step: 0.1, start: 1 },
  },
  'marvin': {
    name: 'marvin', filter: 'invert', unit: '%',
    options: { range: { min: 0, max: 100 }, step: 1, start: 100 },
  },
  'phobos': {
    name: 'phobos', filter: 'blur', unit: 'px',
    options: { range: { min: 0, max: 3 }, step: 0.1, start: 3 },
  }
};

const ErrorMessage = {
  HASH_SPACE: 'Хэш-теги разделяются пробелами',
  STARTS_WITH_HASH: 'Хэш-тег начинается с символа #',
  REPEAT_ERROR: 'Хэш-теги не должны повторяться',
  HASHTAG_MAX_LENTH: `Максимальная длина одного хэш-тега ${MaxHashtag.LENGTH} символов, включая #`,
  HASHTAG_MAX_COUNT: `Нельзя указать больше ${MaxHashtag.COUNT} хэш-тегов`,
  UBNORMAL_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  MAX_COMM_LENGTH: `Максимальная длина комментария - ${MAX_COMMENT_LENGTH} символов.`,
  EMPTY_HASHTAG: 'Хэш-тег не может быть пустым',
};

export {
  MAX_COUNT_PHOTOS, NAMES, MESSAGES, DESCRIPTIONS, ALERT_SHOW_TIME, PhotoValide, CountLike, AvatarNumber, CountComment,
  DEFAULT_RENDERED_COMMENTS, STEP_ADDED_COMMENTS, MAX_COMMENT_LENGTH, MaxHashtag, ErrorMessage,
  Effects, Scale
};

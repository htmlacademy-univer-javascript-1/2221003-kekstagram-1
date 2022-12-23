export const DEFAULT_RENDERED_COMMENTS = 5;
export const STEP_ADDED_COMMENTS = 5;
export const MAX_COMMENT_LENGTH = 140;
export const ALERT_SHOW_TIME = 3000;
export const MAX_COUNT_RANDOM_PHOTO = 10;

const getEffectOptions = (min, max, step, start) => ({
  range: { min, max },
  step,
  start,
  connect: 'lower'
});

const EffectOptions = {
  'original': getEffectOptions(0, 100, 1, 100),
  'heat': getEffectOptions(1, 3, 0.1, 3),
  'chrome': getEffectOptions(0, 1, 0.1, 1),
  'sepia': getEffectOptions(0, 1, 0.1, 1),
  'marvin': getEffectOptions(0, 100, 1, 100),
  'phobos': getEffectOptions(0, 3, 0.1, 3)
};


export const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

export const MaxHashtag = {
  LENGTH: 20,
  COUNT: 5
};

export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
};

export const PhotoValide = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const Effect = {
  'original': {
    name: 'original', filter: '', unit: '',
    options: EffectOptions.original
  },
  'heat': {
    name: 'heat', filter: 'brightness', unit: '',
    options: EffectOptions.heat,
  },
  'chrome': {
    name: 'chrome', filter: 'grayscale', unit: '',
    options: EffectOptions.chrome,
  },
  'sepia': {
    name: 'sepia', filter: 'sepia', unit: '',
    options: EffectOptions.sepia,
  },
  'marvin': {
    name: 'marvin', filter: 'invert', unit: '%',
    options: EffectOptions.marvin,
  },
  'phobos': {
    name: 'phobos', filter: 'blur', unit: 'px',
    options: EffectOptions.phobos,
  }
};

export const ErrorMessage = {
  HASH_SPACE: 'Хэш-теги разделяются пробелами',
  STARTS_WITH_HASH: 'Хэш-тег начинается с символа #',
  REPEAT_ERROR: 'Хэш-теги не должны повторяться',
  HASHTAG_MAX_LENGTH: `Максимальная длина одного хэш-тега ${MaxHashtag.LENGTH} символов, включая #`,
  HASHTAG_MAX_COUNT: `Нельзя указать больше ${MaxHashtag.COUNT} хэш-тегов`,
  UBNORMAL_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  MAX_COMM_LENGTH: `Максимальная длина комментария - ${MAX_COMMENT_LENGTH} символов.`,
  EMPTY_HASHTAG: 'Хэш-тег не может быть пустым',
};

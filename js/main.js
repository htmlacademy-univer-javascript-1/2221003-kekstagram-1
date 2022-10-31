const getRandomPositiveInteger = (min, max) => {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const NAMES = ['Вадим', 'Марк', 'Мария', 'Ринат', 'Олег', 'Екатерина', 'Наталья', 'Виктор'
];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = ['Пляж', 'Кот Гоша'
];

const MAX_COUNT_PHOTOS = 25;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: createComment(id)
});

const photoDescription = Array.from({ length: MAX_COUNT_PHOTOS }).map((element, index) => { element = createPhotoDescription(index + 1); });
// eslint-disable-next-line no-console
console.log(photoDescription);

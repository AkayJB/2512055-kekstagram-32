import {getRandomInteger, getRandomArrayElement,createIdGenerator} from './util.js';


const MAX_PHOTO_ID = 25;


const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Ваня',
  'Полина',
  'Егор',
  'Арина',
  'Аня',
];

const DESCRIPTIONS = [
  'Уютное кафе на углу старинной улицы, утопающее в зелени и цветах. #Уют #Кафе',
  'Закат на пляже с розовым небом и мерцающим морем. #Закат #Море',
  'Котенок уютно спит на пледе возле камина. #Котенок #Уют',
  'Горное озеро с прозрачной водой и отражением снежных вершин. #Природа #Горы',
  'Уличный музыкант играет на гитаре в центре города. #Музыка #Город',
  'Ароматный латте с красивым рисунком на пенке. #Кофе #Латте',
  'Живописный осенний парк с аллеей из золотых деревьев. #Осень #Парк',
  'Сочные ягоды на рынке в солнечный день. #Ягоды #Лето',
  'Ночной город с яркими огнями и отражениями в реке. #ГородНочью #Огни',
  'Счастливая пара на фоне цветущего луга. #Любовь #Природа',
];


const generateRandomId = createIdGenerator();

function createMessage() {
  const numberOfMessages = getRandomInteger(1, 2);
  const messages = [];
  for (let i = 0; i < numberOfMessages; i++) {
    messages.push(getRandomArrayElement(MESSAGES));
  }
  return messages.join(' ');
}

function createComment() {
  return {
    id: generateRandomId(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES)
  };
}

function createPicture(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComment)
  };
}

function getPictures() {
  return Array.from({ length: MAX_PHOTO_ID },
    (_, index) => createPicture(index + 1));
}


export {getPictures};


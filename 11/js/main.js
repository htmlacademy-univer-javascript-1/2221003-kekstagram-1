import { addPictures } from './thumbnails.js';
import { uploadPhoto } from './user-form.js';
//import { getPhotos } from './data.js';
import { getData } from './api.js';

//const photos = getPhotos();

getData(addPictures);
uploadPhoto();

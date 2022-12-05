import { addPictures } from './thumbnails.js';
import { uploadPhoto } from './user-form.js';
import { getPhotos } from './data.js';

const photos = getPhotos();

addPictures(photos);
uploadPhoto();

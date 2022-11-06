const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const getCommentsList = (comments) => {
  const socialComments = document.querySelector('.social__comments');
  const commentsPart = document.createDocumentFragment();

  comments.forEach((comment) => {
    const socialComment = document.querySelector('.social__comment').cloneNode(true);
    const avatar = socialComment.querySelector('.social__picture');
    const pictureText = socialComment.querySelector('.social__text');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    pictureText.textContent = comment.message;
    commentsPart.appendChild(socialComment);
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(commentsPart);
};

const closePictureByEscape = (evt) => {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
};

const closePicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
};

const openBigPicture = (picture) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  getCommentsList(picture.comments);
  closeButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', closePictureByEscape);
};

export { openBigPicture };

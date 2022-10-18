import { getPhotoDescriptions } from './data.js';


const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const photoDescriptions = getPhotoDescriptions();

photoDescriptions.forEach((photoDesc) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImg = pictureElement.querySelector('.picture__img');
  pictureImg.src = photoDesc.url;
  pictureElement.querySelector('.picture__comments').textContent = photoDesc.comments.toString();
  pictureElement.querySelector('.picture__likes').textContent = photoDesc.likes.toString();
  pictureFragment.appendChild(pictureElement);
});

document.querySelector('.pictures').appendChild(pictureFragment);

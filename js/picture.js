const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

const drawPictures = (photoDescriptions) => {
  photoDescriptions.forEach((photoDesc) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = photoDesc.url;
    pictureElement.querySelector('.picture__comments').textContent = photoDesc.comments.toString();
    pictureElement.querySelector('.picture__likes').textContent = photoDesc.likes.toString();
    pictureFragment.appendChild(pictureElement);
  });
  pictures.appendChild(pictureFragment);
};

export { drawPictures };

import { isEscapeKey} from './util.js';
import { resetScale} from './scale.js';


const body = document.querySelector('body ');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('#upload-select-image');
const inputFile = form.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onImageChange = () => {
  openModal();
};

const onCancelClick = () => {
  closeModal();
};

function openModal() {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  resetForm();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

function resetForm() {
  form.reset();
  resetScale();
}

const initUpload = () => {
  inputFile.addEventListener('change', onImageChange);
  uploadCancel.addEventListener('click', onCancelClick);
};

export { initUpload };

import { isEscapeKey, MessageType, showMessage } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';


const bodyElement = document.body;
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('#upload-select-image');
const inputFile = uploadForm.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadSubmit = uploadForm.querySelector('.img-upload__submit');

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
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal() {
  imgUploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetForm();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

function resetForm() {
  uploadForm.reset();
  resetScale();
  resetEffects();
}

const initUpload = () => {
  inputFile.addEventListener('change', onImageChange);
  uploadCancel.addEventListener('click', onCancelClick);
};

const blockSubmitButton = () => {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = 'Отправка...';
};

const unblockSubmitButton = () => {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = 'Отправить';
};

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    blockSubmitButton();
    sendData(
      () => {
        onSuccess();
        showMessage(MessageType.SUCCESS);
        unblockSubmitButton();
      },
      () => {
        showMessage(MessageType.ERROR);
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  });
};

export { initUpload, closeModal, setUserFormSubmit };

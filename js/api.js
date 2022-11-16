import { closeModal, setUserFormSubmit } from './upload.js';
import { showAlert } from './util.js';

const GET_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';

const uploadFormElement = document.querySelector('.img-upload__form');

const getData = (onSuccess) => {
  fetch(
    GET_DATA,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера');
    });
};

const sendData = (onSuccess, onFail) => {
  const formData = new FormData(uploadFormElement);

  fetch(
    SEND_DATA,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

setUserFormSubmit(closeModal);

export { getData, sendData };

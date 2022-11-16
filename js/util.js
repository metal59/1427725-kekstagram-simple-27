const ALERT_SHOW_TIME = 5000;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementFromArray = (items) => items[Math.floor(Math.random() * items.length)];

const checkStringLength = (string, length) => string.length <= length;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorMessageInner = errorMessageTemplate.querySelector('.error__inner');
const errorMessageButton = errorMessageTemplate.querySelector('.error__button');

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const successMessageInner = successMessageTemplate.querySelector('.success__inner');
const successMessageButton = successMessageTemplate.querySelector('.success__button');

const showError = () => {
  document.body.append(errorMessageTemplate);
  closeErrorMessage();
};

const showSuccess = () => {
  document.body.append(successMessageTemplate);
  closeSuccessMessage();
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.removeChild(errorMessageTemplate);
  }
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.removeChild(successMessageTemplate);
  }
};

const onErrorMessageClickClose = (evt) => {
  const onOutSideClick = evt.composedPath().includes(errorMessageInner);
  if (!onOutSideClick) {
    document.body.removeChild(errorMessageTemplate);
  }
};

const onSuccessMessageClickClose = (evt) => {
  const onOutSideClick = evt.composedPath().includes(successMessageInner);
  if (!onOutSideClick) {
    document.body.removeChild(successMessageTemplate);
  }
};

function closeErrorMessage () {
  errorMessageButton.addEventListener('click', () => {
    document.body.removeChild(errorMessageTemplate);
  });
  document.addEventListener('keydown', onErrorMessageEscKeydown, { once: true });
  document.addEventListener('click', onErrorMessageClickClose);
}

function closeSuccessMessage () {
  successMessageButton.addEventListener('click', () => {
    document.body.removeChild(successMessageTemplate);
  });
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  document.addEventListener('click', onSuccessMessageClickClose);
}

export { getRandomPositiveInteger, getRandomElementFromArray, checkStringLength, isEscapeKey, showAlert, showError, showSuccess };

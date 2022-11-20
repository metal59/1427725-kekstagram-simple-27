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
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

const MessageType = {
  ERROR: errorMessageTemplate,
  SUCCESS: successMessageTemplate,
};

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const onOverlayClick = () => {
  hideMessage();
};

const showMessage = (messageType) => {
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  document.body.append(messageType);
  document.body.style.overflow = 'hidden';
};

function hideMessage() {
  const messageElement = document.body.querySelector('.error') || document.body.querySelector('.success');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  document.body.style.overflow = 'auto';
}

export { getRandomPositiveInteger, getRandomElementFromArray, checkStringLength, isEscapeKey, showAlert, MessageType, showMessage };

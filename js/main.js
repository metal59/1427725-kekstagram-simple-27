const getRandomInt = (min, max) => {
  if (typeof (min) !== 'number' ||
    typeof (max) !== 'number' ||
    min < 0 ||
    max < 0) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const checkStringLength = (str, maxLength) => {
  if (typeof (str) !== 'string' ||
    typeof (maxLength) !== 'number') {
    return false;
  }
  return str.length <= maxLength;
};

getRandomInt(0, 0);
checkStringLength('Hello', 10);

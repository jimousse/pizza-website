/**
 *
 * @param {String} text - string to measure
 * @param {String} fontFamily
 * @param {Number} fontSize - in pixel
 */
function measureText(text, fontFamily, fontSize) {
  const canvas = document.getElementById('text-measuring-canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px ${fontFamily}`;
  return ctx.measureText(text);
};

function converRemIntoPx(remSize) {
  const defaultFontSize = 16; // px
  let _size;
  if (typeof remSize === 'string') {
    if (remSize.includes('rem')) {
      _size = remSize.replace('rem', '');
    }
    _size = Number(_size);
  }
  return _size*defaultFontSize;
};

/**
 *
 * @param {String} str
 * @param {Number} width
 * @param {Object} canvas
 */
function truncateStringToWidth(str, targetWidth, fontFamily, fontSize, wordByWord = true) {
  let count = 0;
  let displayString = str;
  let truncatedStrWidth = measureText(displayString, fontFamily, fontSize).width;
  while(truncatedStrWidth > targetWidth && count < str.length) {
    if (wordByWord) {
      displayString = `${displayString.substring(0, displayString.lastIndexOf(' '))}...`;
    } else {
      displayString = truncateString(displayString, str.length-count);
    }
    truncatedStrWidth = measureText(displayString, fontFamily, fontSize).width;
    count++;
  }
  return count < str.length ? displayString : '';
}

function truncateString(str, len) {
  if (str.length <= len || len < 1) return str;
  return `${str.substring(0,len)}...`;
}

export {
  measureText,
  converRemIntoPx,
  truncateStringToWidth
};
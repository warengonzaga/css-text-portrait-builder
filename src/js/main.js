/**
 * main.js
 */

/**
 * Uses `canvas.measureText` to compute and return the width of
 * the given `text` of given font in pixels.
 *
 * @param {String} text
 * The text to be rendered.
 *
 * @param {String} font
 * The CSS font descriptor that `text` is to be rendered
 * with (e.g. `bold 14px verdana`).
 *
 * @return {number} Text width
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
export const getTextWidth = (text, font) => {
  // Re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));

  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);

  return metrics.width;
};

/**
 * Calculates the average character width of a particular font style.
 *
 * @param {String} font
 * The CSS font descriptor that a character is to be rendered
 * with (e.g. `bold 14px verdana`).
 *
 * @return {number} Average font style character width
 */
const getFontTextWidthAverage = (font) => {
  // Test characters
  const chars =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,\'()?!"';

  let totalWidth = 0;
  let count = 0;
  for (const char of chars) {
    totalWidth += getTextWidth(char, font);
    count++;
  }

  return Math.floor(totalWidth / count);
};

const getStyle = (element, prop) =>
  window.getComputedStyle(element, null).getPropertyValue(prop);

const getFontDescriptors = (element = document.body) => {
  const fontWeight = getStyle(element, 'font-weight') || 'normal';
  const fontSize = getStyle(element, 'font-size') || '16px';
  const fontFamily = getStyle(element, 'font-family') || 'Times New Roman';

  return `${fontWeight} ${fontSize} ${fontFamily}`;
};

/**
 * Determines the maximum number of characters that can be used to
 * effectively cover the entire device width and height.
 *
 * @param {number} percent
 * An integer `1-100` representing the percentage of the screen
 * it should cover. Defaults to `100`.
 *
 * @return {number} Max characters allowed per device dimensions
 */
export const computeMaxChar = (percent = 100) => {
  if (percent < 1 || percent > 100) throw new Error('Invalid fill percentage!');

  const textPortrait = document.getElementById('text');
  const fontSize = parseInt(
    getStyle(textPortrait, 'font-size').match(/\d+/)[0]
  );

  const maxLineY = Math.floor(
    (window.innerHeight / fontSize) * (percent / 100)
  );

  const maxCharX = Math.floor(
    window.innerWidth /
      (getFontTextWidthAverage(getFontDescriptors(textPortrait)) - 1)
  );

  return Math.ceil(maxCharX * maxLineY);
};

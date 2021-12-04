/**
 * index.js
 */

import * as data from './config.json';
import { computeMaxChar } from './js/main';

const textCount = data.text.length;
const textPortrait = document.getElementById('text');

const title = document.createElement('title');
title.innerHTML = `${data.name} | CSS Text Portrait`;

document.head.appendChild(title);

const setText = () => {
  const maxChar = computeMaxChar();

  // apply correct repeat count to text
  textPortrait.innerHTML = `${data.text} `
    .repeat(Math.ceil(maxChar / textCount))
    .substring(0, maxChar + 1);
};

window.addEventListener('load', setText);

// Dynamically set text on resize/zoom to ensure
// the entire viewport is covered with text
window.addEventListener('resize', setText);

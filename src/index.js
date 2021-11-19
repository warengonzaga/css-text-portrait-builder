/**
 * index.js
 */

import * as data from './config.json';
import { repeatText } from './js/main';
import 'normalize.css';
import './scss/main.scss';

const maxChar = 13500; // max chars to cover screen
const textCount = data.text.length;
const textPortrait = document.getElementById('text');

var title = document.createElement("title");
    title.innerHTML = `${data.name} | CSS Text Portrait`;

document.head.appendChild(title);

// apply correct repeat count to text
for (let i = 0; i * textCount <= maxChar + textCount; i++) {
    textPortrait.innerHTML = repeatText(data.text+' ', i);
    console.log(data.text.length * i);
}

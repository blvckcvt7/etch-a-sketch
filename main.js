'use strict';

const container = document.querySelector('.container');

function createDiv() {
  for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement('div');

    newDiv.className = 'square';
    container.appendChild(newDiv);
  }
}
createDiv();

'use strict';

const container = document.querySelector('.container');
const contTwo = document.createElement('div');
const contThree = document.createElement('div');

contTwo.className = 'cont-two';
contThree.className = 'cont-three';

container.appendChild(contTwo);
container.append(contThree);

function createDiv() {
  for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');

    newDiv.className = 'square';
    newDiv.textContent = i;
    contTwo.appendChild(newDiv);
  }
}
createDiv();

function createDiv2() {
  for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');

    newDiv.className = 'square';
    newDiv.textContent = i;
    contThree.appendChild(newDiv);
  }
}
createDiv2();

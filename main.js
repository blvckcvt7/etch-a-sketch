'use strict';

const container = document.querySelector('.container');
// const secondaryCont = document.createElement('div');
// const terciaryCont = document.createElement('div');

// secondaryCont.className = 'cont-two';
// terciaryCont.className = 'cont-three';

// container.appendChild(secondaryCont);
// container.append(terciaryCont);

for (let i = 1; i <= 16; i++) {
  let secondaryCont = document.createElement('div');

  secondaryCont.className = 'secondary-container';
  container.appendChild(secondaryCont);

  for (let j = 1; j <= 16; j++) {
    let newDiv = document.createElement('div');

    newDiv.className = 'square';
    newDiv.textContent = j;
    secondaryCont.appendChild(newDiv);
  }
}

const squares = document.querySelectorAll('.square'); //it creates a nodelist
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('hovered');
  });
});

// function createDiv() {
//   for (let i = 1; i <= 16; i++) {
//     let newDiv = document.createElement('div');

//     newDiv.className = 'square';
//     newDiv.textContent = i;
//     contTwo.appendChild(newDiv);
//   }
// }
// createDiv();

// function createDiv2() {
//   for (let i = 1; i <= 16; i++) {
//     let newDiv = document.createElement('div');

//     newDiv.className = 'square';
//     newDiv.textContent = i;
//     contThree.appendChild(newDiv);
//   }
// }
// createDiv2();

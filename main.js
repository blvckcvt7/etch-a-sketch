'use strict';

const container = document.querySelector('.container');

const button = document.querySelector('.btn');
button.textContent = 'CLICK ME!';

let colors = [
  'rgb(255, 153, 153)',
  'rgb(255, 102, 102)',
  'rgb(255, 51, 51)',
  'rgb(255, 0, 0)',
  'rgb(204, 0, 0)',
];

// Get a random number between 0 and colors.length to randomize colors on hover
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Create grid
function createGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    let secondaryCont = document.createElement('div');

    secondaryCont.className = 'secondary-container';
    container.appendChild(secondaryCont);

    for (let j = 1; j <= gridSize; j++) {
      let newDiv = document.createElement('div');

      newDiv.className = 'square';
      // newDiv.textContent = j;
      secondaryCont.appendChild(newDiv);
    }
  }
  // Add hover effect to .square
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.add('hovered');
      if (square.classList.contains('hovered')) {
        square.style.backgroundColor = colors[getRandomInt(colors.length)];
      }
    });
  });

  let secondaryContainerSelect = document.querySelectorAll(
    '.secondary-container'
  );

  button.addEventListener('click', () => {
    secondaryContainerSelect.forEach((secondaryContainer) => {
      secondaryContainer.remove();
    });
  });
}

// Creates initial grid of 16x16
createGrid(16);

// checks if the number is > 100
function checkLimit(size) {
  if (size > 100) {
    return true;
  }
  return false;
}

button.addEventListener('click', () => {
  let newSize = prompt('Enter a new size');

  if (!checkLimit(newSize)) {
    createGrid(newSize);
  } else {
    alert('Invalid input. Try again.');
    createGrid(16);
  }
});

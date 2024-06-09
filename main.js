'use strict';

const container = document.querySelector('.container');

const button = document.querySelector('.btn');
button.textContent = 'CLICK ME!';

let colors = ['green', 'blue', 'gray', 'red', 'yellow'];

//Get a random number between 0 and colors.length to randomize colors on hover
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Create grid
function createGrid(containerNumber, squareNumber) {
  for (let i = 1; i <= containerNumber; i++) {
    let secondaryCont = document.createElement('div');

    secondaryCont.className = 'secondary-container';
    container.appendChild(secondaryCont);

    for (let j = 1; j <= squareNumber; j++) {
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
createGrid(16, 16);

// checks if the number is > 100
function checkLimit(widthValue, heightValue) {
  if (widthValue > 100 || heightValue > 100) {
    return true;
  }
  return false;
}

button.addEventListener('click', () => {
  let widthSquares = prompt('Enter a number of squares for the width.');
  let heightSquares = prompt('Enter a number of squares for the height.');

  if (!checkLimit(widthSquares, heightSquares)) {
    createGrid(widthSquares, heightSquares);
  } else {
    alert('Invalid input. Try again.');
  }
});

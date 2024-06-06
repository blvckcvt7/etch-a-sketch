'use strict';

const container = document.querySelector('.container');

const button = document.querySelector('.btn');
button.textContent = 'CLICK ME!';

//create 16 divs each with 16 divs inside

function createGrid(containerNumber, squareNumber) {
  for (let i = 1; i <= containerNumber; i++) {
    let secondaryCont = document.createElement('div');

    secondaryCont.className = 'secondary-container';
    container.appendChild(secondaryCont);

    for (let j = 1; j <= squareNumber; j++) {
      let newDiv = document.createElement('div');

      newDiv.className = 'square';
      newDiv.textContent = j;
      secondaryCont.appendChild(newDiv);
    }
  }

  //Select all the elements with a class 'square' and add a class 'hovered'
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.add('hovered');
    });
  });
}

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

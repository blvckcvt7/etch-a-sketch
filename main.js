'use strict';

const container = document.querySelector('.container');

const button = document.querySelector('.btn');
button.textContent = 'CLICK ME!';

//create 16 divs each with 16 divs inside
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

//Select all the elements with a class 'square' and add a class 'hovered'
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('hovered');
  });
});

function buttonClick() {
  // Prompts the user for a number of height and width squares
  let widthSquares = prompt('Enter a number of squares for the width.');
  console.log(widthSquares);

  let heightSquares = prompt('Enter a number of squares for the height.');
  console.log(heightSquares);
}

// Calls the function on btn click
button.addEventListener('click', () => {
  buttonClick();
});

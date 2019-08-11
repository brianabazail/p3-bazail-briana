// Global Variables
const myBoxes = document.getElementsByClassName('block');
const myBoxesOne = document.getElementsByClassName('block-one');
const myBoxesTwo = document.getElementsByClassName('block-two');
const fortuneOne = document.getElementById('first-fortune');
const fortuneTwo = document.getElementById('second-fortune');
const fortuneThree = document.getElementById('third-fortune');

// Functionality
function loopThrough() {

  const changeColor = () => this.classList.toggle('new-color');

  for(let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  };
};

// Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};

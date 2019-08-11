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
  myBoxes[i].addEventListener('click', newLayer);
};

//Begin First Fortune
function newLayer() {

	const firstFortune = document.getElementById('first-fortune');
	const secondFortune = document.getElementById('second-fortune');
	let count;

	const swap = () => {
    firstFortune.classList.add('hide');
    fortuneTwo.style.display = 'block';
	}

 if (firstFortune === fortuneOne) {
   count = this.textContent.length;
 } else {
   count = Number(this.textContent);
 }

 setTimeout(swap, count * 2 * 1000);
}

// Begin Second Fortune
function loop2() {

  const changeColor2 = () => this.classList.toggle('new-color');

  for(let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColor2, i * 1000);
  };
};

// Event listener
for (let i = 0; i < myBoxesOne.length; i++) {
  myBoxesOne[i].addEventListener('click', loop2);
  myBoxesOne[i].addEventListener('click', newLayerTwo);
};

//Begin Third Fortune
function newLayerTwo() {

	const secondFortune = document.getElementById('second-fortune');
	const thirdFortune = document.getElementById('third-fortune');
	let count;

	const swap = () => {
    fortuneTwo.style.display = 'none';
    thirdFortune.classList.remove('hide');
	}

  if (secondFortune === fortuneTwo) {
    count = Number(this.textContent);
  } else {
    count = Number(this.textContent);
  }

	setTimeout(swap, count * 2 * 1000);
}

//Fortunes
let fortuneTeller = document.createElement('p');
let fortuneGrab = document.getElementById('messages');
fortuneGrab.appendChild(fortuneTeller);

let newText = document.createTextNode('');
fortuneTeller.appendChild(newText);

let messages = [
  'If you continually give, you will continually have.',
  'Your wisdom makes you superior to others',
  'Enjoy yourslef while you can',
  'You will soon be receiving an important letter',
  'It is time to write a letter or email to one who is distant',
  'You will be rewarded for being a good listener',
  'Distance yourself from the vain',
  'Courtesy is contagious',
  'Determination is what you need now',
  'Fear and desire – two sides of the same coin',
  'Happy life is just in front of you',
  'Failure is the chance to do better next time'
];

let fortuneReveal = function() {
  messages.sort(function(a, b){return 0.5 - Math.random()});
  let randomFortune = document.createTextNode(messages[0]);
  fortuneTeller.appendChild(randomFortune);
};

for (let i = 0; i < Boxes.length; i++) {
  Boxes[i].addEventListener("click", fortuneReveal);
}

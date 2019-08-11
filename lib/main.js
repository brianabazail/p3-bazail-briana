'use strict';

// Global Variables
var myBoxes = document.getElementsByClassName('block');
var myBoxesOne = document.getElementsByClassName('block-one');
var myBoxesTwo = document.getElementsByClassName('block-two');
var fortuneOne = document.getElementById('first-fortune');
var fortuneTwo = document.getElementById('second-fortune');
var fortuneThree = document.getElementById('third-fortune');

// Functionality
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    return _this.classList.toggle('new-color');
  };

  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  };
};

// Event Listener
for (var i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', newLayer);
};

//Begin First Fortune
function newLayer() {

  var firstFortune = document.getElementById('first-fortune');
  var secondFortune = document.getElementById('second-fortune');
  var count = void 0;

  var swap = function swap() {
    firstFortune.classList.add('hide');
    fortuneTwo.style.display = 'block';
  };

  if (firstFortune === fortuneOne) {
    count = this.textContent.length;
  } else {
    count = Number(this.textContent);
  }

  setTimeout(swap, count * 2 * 1000);
}

// Begin Second Fortune
function loop2() {
  var _this2 = this;

  var changeColor2 = function changeColor2() {
    return _this2.classList.toggle('new-color');
  };

  for (var _i = 0; _i < Number(this.textContent) * 2; _i++) {
    setTimeout(changeColor2, _i * 1000);
  };
};

// Event listener
for (var _i2 = 0; _i2 < myBoxesOne.length; _i2++) {
  myBoxesOne[_i2].addEventListener('click', loop2);
  myBoxesOne[_i2].addEventListener('click', newLayerTwo);
};

//Begin Third Fortune
function newLayerTwo() {

  var secondFortune = document.getElementById('second-fortune');
  var thirdFortune = document.getElementById('third-fortune');
  var count = void 0;

  var swap = function swap() {
    fortuneTwo.style.display = 'none';
    thirdFortune.classList.remove('hide');
  };

  if (secondFortune === fortuneTwo) {
    count = Number(this.textContent);
  } else {
    count = Number(this.textContent);
  }

  setTimeout(swap, count * 2 * 1000);
}

//Fortunes
var fortuneTeller = document.createElement('p');
var fortuneGrab = document.getElementById('messages');
fortuneGrab.appendChild(fortuneTeller);

var newText = document.createTextNode('');
fortuneTeller.appendChild(newText);

var messages = ['If you continually give, you will continually have.', 'Your wisdom makes you superior to others', 'Enjoy yourslef while you can', 'You will soon be receiving an important letter', 'It is time to write a letter or email to one who is distant', 'You will be rewarded for being a good listener', 'Distance yourself from the vain', 'Courtesy is contagious', 'Determination is what you need now', 'Fear and desire – two sides of the same coin'];

var fortuneReveal = function fortuneReveal() {
  messages.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  var randomFortune = document.createTextNode(messages[0]);
  fortuneTeller.appendChild(randomFortune);
};

for (var _i3 = 0; _i3 < Boxes.length; _i3++) {
  Boxes[_i3].addEventListener("click", fortuneReveal);
}
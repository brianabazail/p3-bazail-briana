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

//Begin Second Fortune
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
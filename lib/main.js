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
};
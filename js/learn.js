document.addEventListener('DOMContentLoaded', function () {

  var names = ['LETTERS!', 'NUMBERS!', 'COLORS!'];

  setInterval(function () {
    var rand = Math.floor(Math.random() * 3);
    document.getElementById("name").innerHTML = names[rand];
  }, 1000);

  var buttonA = document.querySelector('#button1');
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

  buttonA.addEventListener('click', function () {
    var randLetter = Math.floor(Math.random() * 25);
    document.getElementById("letter").innerHTML = letters[randLetter];
  });

  var buttonB = document.querySelector('#button2');
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  buttonB.addEventListener('click', function () {
    var randNumber = Math.floor(Math.random() * 10);
    document.getElementById("number").innerHTML = numbers[randNumber];
  });

  var buttonC = document.querySelector('#button3');
  var colors = ['white', 'blue', 'pink', 'red', 'green', 'maroon', 'yellow', 'black', 'purple', 'grey', 'violet', 'cyan', 'lime', 'magenta', 'orange'];

  buttonC.addEventListener('click', function () {
    var randColor = Math.floor(Math.random() * 12);
    document.getElementById("button3").style.backgroundColor = colors[randColor];
  });

}); 
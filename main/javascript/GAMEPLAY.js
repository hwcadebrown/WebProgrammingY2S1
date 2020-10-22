function myFunction(){
  document.getElementById("demo").innerHTML = "Paragraph changed";
}

var gameboard = document.getElementById("canvas")
var context = gameboard.getContext("2d");

const canvasBackgroundColour="#e6f0ff";

context.fillStyle=canvasBackgroundColour;

context.fillRect(0, 0, gameboard.width, gameboard.height);

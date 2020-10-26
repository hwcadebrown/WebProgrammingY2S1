//Nicole Stewart

//create the canvas
var gameboard = document.getElementById("canvas");
var context = gameboard.getContext("2d");
//set the canvas background colour
const canvasBackgroundColour="#e6f0ff";
context.fillStyle=canvasBackgroundColour;
context.fillRect(0, 0, gameboard.width, gameboard.height);

//set the image size of the train
const image = new Image(60, 50);
//draw the image onto tge screen
image.onload = drawImage;
//link to the image of the train
image.src = "../graphics/trains/BLUECARRIAGEFRONT.png";

//function to draw the image onto the screen
function drawImage() {
  context.drawImage(this, 0, 0, this.width, this.height);
}

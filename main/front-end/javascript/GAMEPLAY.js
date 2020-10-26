var gameboard = document.getElementById("canvas");
var context = gameboard.getContext("2d");

const canvasBackgroundColour="#e6f0ff";

context.fillStyle=canvasBackgroundColour;

context.fillRect(0, 0, gameboard.width, gameboard.height);

const image = new Image(60, 50);
image.onload = drawImage;

image.src = "../graphics/trains/BLUECARRIAGEFRONT.png";

function drawImage() {
  context.drawImage(this, 0, 0, this.width, this.height);
}

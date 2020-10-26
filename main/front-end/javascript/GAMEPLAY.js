function start() {
  train = new trains("main\graphics\trains\BLUECARRIAGEFRONT.png", 10, 120, "image");
  gameBoard.start();
}

  var gameboard = document.getElementById("canvas");
  var context = gameboard.getContext("2d");

  const canvasBackgroundColour="#e6f0ff";

  context.fillStyle=canvasBackgroundColour;

  context.fillRect(0, 0, gameboard.width, gameboard.height);


function trains(img, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = img;
  }
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  context = gameBoard.context;
  if (type == "image") {
    context.drawImage(this.image,
      this.x,
      this.y);
  } else {
    context.fillStyle = img;
    context.fillRect(this.x, this.y);
  }
}

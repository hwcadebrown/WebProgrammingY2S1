function changedirection(event) {
    const direction = event.keyCode;

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const W = 87;
    const A = 65;
    const S = 83;
    const D = 68;

    const moveUp = directiony  === -50;
    const moveDown = directiony  ===  50;
    const moveRight = directionx  ===  50;
    const moveLeft = directionx  === -50;

      if (direction === LEFT_KEY && !moveRight || direction === A && !moveRight) {
        directionx = -50;
        directiony =  0;
      } else if (direction === UP_KEY && !moveDown || direction === W && !moveDown) {
        directionx =  0;
        directiony = -50;
      } else if (direction === RIGHT_KEY && !moveLeft || direction === D && !moveLeft) {
        directionx = 50;
        directiony = 0;
      } else if (direction === DOWN_KEY && !moveUp || direction === S && !moveUp) {
        directionx = 0;
        directiony = 50;
      }
}

function playerHitSelf() {
  for (let cart = 3; cart < train.length; cart++) {
    if (train[cart].x === train[0].x && train[cart].y === train[0].y) return true;
  }
}

function playerHitWall() {

    const hitLeftWall = train[0].x < 0;
    const hitRightWall = train[0].x > parseFloat($(arena).css('width')) - 50;
    const hitTopWall = train[0].y < 0;
    const hitBottomWall = train[0].y > parseFloat($(arena).css('height')) - 50;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

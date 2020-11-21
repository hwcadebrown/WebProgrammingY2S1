// Cade Brown
// Client interaction handling for game

/* this randompos function is used to place the players spawn point
and also the location that the people will be placed at */
function randompos(min, max) {
  /* creates a number which determines position, will be anywhere in
  the arena and is completely random */
  return Math.round((Math.random() * (max - min) + min) / 50) * 50;
}

/* function which will handle changes in the trains direction which
corresponds to what key has been pressed, this also prevents the train
from going from left to right as they would then be crashing into themselves */
function changedirection(event) {
  // variable direction will equal to the keyCode of the key the user pressed
  const direction = event.keyCode;

  // keyCode variables which correspond to what the user has pressed
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
  const W = 87;
  const A = 65;
  const S = 83;
  const D = 68;

  // created variables which tell us what direction the trains moving in
  const moveUp = directiony === -50;
  const moveDown = directiony === 50;
  const moveRight = directionx === 50;
  const moveLeft = directionx === -50;

  /* if the left arrow key or A is pressed the train will change direction
  to move left IF the train is NOT already moving right */
  if (direction === LEFT_KEY && !moveRight || direction === A && !moveRight) {
    directionx = -50;
    directiony = 0;

    /* if the up arrow key or W is pressed the train will change direction
    to move upwards IF the train is NOT already moving down */
  } else if (direction === UP_KEY && !moveDown || direction === W && !moveDown) {
    directionx = 0;
    directiony = -50;

    /* if the right arrow key or D is pressed the train will change direction
    to move right IF the train is NOT already moving left */
  } else if (direction === RIGHT_KEY && !moveLeft || direction === D && !moveLeft) {
    directionx = 50;
    directiony = 0;

    /* if the down arrow key or S is pressed the train will change direction
    to move down IF the train is NOT already moving up */
  } else if (direction === DOWN_KEY && !moveUp || direction === S && !moveUp) {
    directionx = 0;
    directiony = 50;
  }
}

/* if the number of carts (carriages) is more than 3 then there's a chance
the player could crash into themselves, so once they reach that threshold
if the head (front) of the train crashes into any of the carriages attatched
the game will end */
function playerHitSelf() {
  // once carts are over 3 the player may be able to crash into themselves
  for (var cart = 3; cart < train.length; cart++) {
    /* if the head of the train meets a cart at any position of the train then
    true is returned, this function is used in PLAY.js to determine if the
    game ends */
    if (train[cart].x === train[0].x && train[cart].y === train[0].y) return true;
  }
}

// this function checks to see if the trains head has hit any of the arenas walls
function playerHitWall() {

  /* train has hitLeftWall if the head of the train is at a position on the
  horizontal axis lower than 50 in the arena */
  const hitLeftWall = train[0].x < 50;
  /* train has hitRightWall if the head of the train is at a position on the
  horizontal axis more than the width of the arena (minus sprite size) * 2
  as the train would go one step out of bounds if it was just -50, this is
  because the train is advanced before being rendered on the screen so the
  train hit the wall just before being rendered and would render outside arena */
  const hitRightWall = train[0].x > parseFloat($(arena).css('width')) - 100;
  /* train has hitTopWall if the head of the train is at a position on the
  vertical axis less than the height of the arena */
  const hitTopWall = train[0].y < 50;
  /* train has hitBottomWall if the head of the train is at a position on the
  vertical axis more than the height of the arena (minus sprite size) [explained
  in hitRightWall commentary in further detail] */
  const hitBottomWall = train[0].y > parseFloat($(arena).css('height')) - 100;

  // returns one of these values depending on which wall the train has hit
  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

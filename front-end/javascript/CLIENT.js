// Cade Brown
// Client interaction handling for game

/* function which will handle changes in the trains direction which
corresponds to what key has been pressed, this also prevents the train
from going from left to right as they would then be crashing into themselves */
changedirection(event) {
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
  const moveUp = directiony === -1;
  const moveDown = directiony === 1;
  const moveRight = directionx === 1;
  const moveLeft = directionx === -1;

  /* if the left arrow key or A is pressed the train will change direction
  to move left IF the train is NOT already moving right */
  if (direction === LEFT_KEY && !moveRight || direction === A && !moveRight) {
    directionx = -1;
    directiony = 0;

    /* if the up arrow key or W is pressed the train will change direction
    to move upwards IF the train is NOT already moving down */
  } else if (direction === UP_KEY && !moveDown || direction === W && !moveDown) {
    directionx = 0;
    directiony = -1;

    /* if the right arrow key or D is pressed the train will change direction
    to move right IF the train is NOT already moving left */
  } else if (direction === RIGHT_KEY && !moveLeft || direction === D && !moveLeft) {
    directionx = 1;
    directiony = 0;

    /* if the down arrow key or S is pressed the train will change direction
    to move down IF the train is NOT already moving up */
  } else if (direction === DOWN_KEY && !moveUp || direction === S && !moveUp) {
    directionx = 0;
    directiony = 1;
  }
}

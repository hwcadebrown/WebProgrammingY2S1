class Functions {
  
  constructor(event){
    this.event = event;
  }

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
  playerHitSelf() {
    // once carts are over 3 the player may be able to crash into themselves
    for (var cart = 3; cart < train.length; cart++) {
      /* if the head of the train meets a cart at any position of the train then
      true is returned, this function is used in PLAY.js to determine if the
      game ends */
      if (train[cart].x === train[0].x && train[cart].y === train[0].y) return true;
    }
  }


  // function for picking the color of each carriage added to the train
  colorPicker() {
    // color variable which generates a random number from 1 to 10
    var color = Math.floor((Math.random() * 10) + 1);
    // switch case which chooses the color depending on what number generated
    switch (color) {
      // if 1 is generated then the pink carriage is added
      case 1:
        return 'pink';

        // if 2 is generated then the blue carriage is added
      case 2:
        return 'blue';

        // if 3 is generated then the green carriage is added
      case 3:
        return 'green';

        // if 4 is generated then the red carriage is added
      case 4:
        return 'red';

        // if 5 is generated then the orange carriage is added
      case 5:
        return 'orange';

        // if 6 is generated then the sky blue carriage is added
      case 6:
        return 'skyblue';

        // if 7 is generated then the dark green carriage is added
      case 7:
        return 'darkgreen';

        // if 8 is generated then the purple carriage is added
      case 8:
        return 'purple';

        // if 9 is generated then the peach carriage is added
      case 9:
        return 'peach';

        // if 10 is generated then the gray carriage is added
      case 10:
        return 'gray';
    }
  }
}

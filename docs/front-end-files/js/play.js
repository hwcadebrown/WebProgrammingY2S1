// Cade Brown & Glenn Wright
// Base of game, mostly where functions are called and game is started etc.

// determines the speed of the game, lower = faster & higher = slower
const GAME_SPEED = 50;

// the arena on which the game is played on
// assigns arena to the area element from PLAY.html
const arena = document.getElementById('area');

// styles the arena's width and height
$(arena).css('width', 4750);
$(arena).css('height', 2400);

/* directionx and directiony intitialised to placeholder values,
the directionx of 50 and directiony of 0 will start the player
moving right, these determine the direction the player is moving
in at a specific instance */
let directionx = 50;
let directiony = 0;

// calls the start function, which intitialises the elements needed
start();

// start function which will create what we want/need for gameplay
function start() {

  // the score counter, starts at 0 and uses the element from PLAY.html
  $('#score').html(score = 0);

  /* creates the first carriage on our train, starting at the length
  of 1, the spawn point of the train is randomly assigned to a place
  in the arena */
  train = [{
    x: randompos(0, parseFloat($(arena).css('width')) - 50),
    y: randompos(0, parseFloat($(arena).css('height')) - 50)
  }];

  /* the arena is cleared of any sprites that were visible on previous
  playthrough */
  $('#area').empty();

  // calls the status function which is used to advance the gameplay
  status();

  /* creates the elements we need for gameplay, this includes the people
  and adding them to the arena and the carriage for the players train */
  createperson();
  createperson2();
  createperson3();
  addperson();
  attatchcarriage();

  // calls the changedirection function whenever the player pressed a key
  $(document).on("keydown", changedirection);
}

var gameOverBox;
var gameState;

gameOverBox = document.getElementById("gameOver");

// status function which advances the gameplay with repeated calls
function status() {

  /* if the player hits themselves or one of the arenas walls then
  the game ends */
  if (playerHitWall() || playerHitSelf()) {

    // window.location.href='MAINMENU.html' (leave for now)
    // alert('You Derailed! Score: ' + score);

    // sets the state of the setState function to gameOver
    setState("gameOver");

    // restarts the game from the beginning by calling start function
    start();
    return;
  }

  // if the gameState is not set to gameOver the game will advance
  if (gameState != "gameOver") {

    // game advances after each tick of the game
    setTimeout(function onTick() {
      // calls the status function again
      status();
      // playerHits();
      // renders the people gifs and places them at a random position
      renderperson();
      // renders the train in the arena
      rendertrain();
      // advances the train according the the direction is heading in
      advancetrain();
    }, GAME_SPEED) // sets the GAME_SPEED to 50, if not set again would go supersonic speeds

  }
}

// setts the state of the game
function setState(state) {

  // sets the gameState to the value of the parameter state
  gameState = state;
  // calls the showMneu function with the current state
  showMenu(gameState);
}

// makes the gameOver menu visible to the player
function displayMenu(menu) {
  menu.style.visibility = "visible";
}

// shows the gameOver menu to the player
function showMenu(state) {
  if (state == "gameOver") {
    displayMenu(gameOverBox);
  }
}

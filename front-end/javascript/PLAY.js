// Cade Brown & Glenn Wright
// Base of game, mostly where functions are called and game is started etc.

// determines the speed of the game, lower = faster & higher = slower
const GAME_SPEED = 50;

// the arena on which the game is played on
// assigns arena to the area element from PLAY.html
const arena = document.getElementById('area');

// styles the arena's width and height
$(arena).css('width', 4900);
$(arena).css('height', 2400);

/* randomly chooses 50 or -50 which dictates which direction the player
heads in when spawning, can either be right or left */
function randomdirection() {
  // generates the number 1 or 2
  var direction = Math.floor((Math.random() * 2) + 1);
  // switch case, if 1 then train heads left, if 2 then train head right
  switch(direction) {
    case 1:
      return 50;
    case 2:
      return -50;
  }
}

/* directionx and directiony intitialised to the values of
directionx being the number -50 or 50 chosen at random and
directiony is 0, this will start the player moving either
right or left and determine the direction the player is moving
in at a specific instance */
var directionx = randomdirection();
var directiony = 0;

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
  createperson(1);
  createperson(1);
  createperson(2);
  createperson(3);
  addperson();
  attatchcarriage();

  // calls the changedirection function whenever the player pressed a key
  $(document).on("keydown", changedirection);
}

// status function which advances the gameplay with repeated calls
function status() {

  /* if the player hits themselves or one of the arenas walls then
  the game ends */
  if (playerHitWall() || playerHitSelf()) {
    // shows the game over popup to the player, allowing them to retry or go to menu
    showMenu();

    // the train has derailed and will no longer move or function, it is dead...
    train = [];
  }

  // if the gameState is not set to gameOver the game will advance
  else {

    // game advances after each tick of the game
    setTimeout(function onTick() {
      // playerHits();
      // advances the train according the the direction is heading in
      advancetrain();
      // renders the train in the arena
      rendertrain();
      // renders the people gifs and places them at a random position
      renderperson();
      // calls the status function again
      status();
    }, GAME_SPEED) // sets the GAME_SPEED to 50, if not set again would go supersonic speeds
  }
}

// shows the gameOver popup to the player
function showMenu() {
  gameOverBox = document.getElementById("gameOver");
  gameOverBox.style.visibility = "visible";
}

// Cade Brown & Glenn Wright
// Base of game, mostly where functions are called and game is started etc.

// the arena on which the game is played on
// assigns arena to the area element from PLAY.html
const arena = document.getElementById('area');

// styles the arena's width and height
$(arena).css('width', 4900);
$(arena).css('height', 2400);

/* directionx and directiony intitialised to the values of
directionx being the number -50 or 50 chosen at random and
directiony is 0, this will start the player moving either
right or left and determine the direction the player is moving
in at a specific instance */
var directionx = 50;
var directiony = 0;

// calls the start function, which intitialises the elements needed
start();

// start function which will create what we want/need for gameplay
function start() {

  // the score counter, starts at 0 and uses the element from PLAY.html
  $('#score').html(score = 0);

  /* the arena is cleared of any sprites that were visible on previous
  playthrough */
  $('#area').empty();

  // calls the status function which is used to advance the gameplay
  status();

}

// status function which advances the gameplay with repeated calls
function status() {

    // game advances after each tick of the game
    setTimeout(function onTick() {
      // renders the train in the arena
      rendertrain();
      // renders the people gifs and places them at a random position
      renderperson();
      // calls the status function again
      status();
    } // sets the GAME_SPEED to 50, if not set again would go supersonic speeds
  )}

// shows the gameOver popup to the player
function showMenu() {
  gameOverBox = document.getElementById("gameOver");
  gameOverBox.style.visibility = "visible";
}

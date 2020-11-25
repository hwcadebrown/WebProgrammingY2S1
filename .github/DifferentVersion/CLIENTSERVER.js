//Alexander Wickham & Cade Brown
var webConnection = io();
var allTrains;
var passengers;
var area;
var user;
//This will call the server and user the Play class to create the setting nessarcy, and if any other commands are called, they they will activate through
//This will call the server and user the Play class to create the setting nessarcy, and if any other commands are called, they they will activate through
webConnection.on('game situation', function(play){
  passengers = play.passengers;
  allTrains = play.trains;
  area = play.area;
  player = allTrains.find(function(player){
    return player.id == webConnection.id;
  }) || player;

  if (!player.isActive){
    webConnection.on('disconnect')
    return;
  }

  const rerender = (millisec) => {
    if (millis - checkPoint> 30){
      for (int count = 0; count = allTrains.length; count++){
        displayTrain(allTrains[count]);
        displayPassengers();
      }
      checkPoint += 30;
    }
  };
//This is the constant rendering that will take place.
  rerender();
})

// function which adds the people to the game arena
displayPeople() {
  // first person variable initialised with identifier 'person'
  var person = document.createElement('person');
  // width of the person gif set to 50px
  $(person).css('width', 50);
  // height of the person gif set to 50px
  $(person).css('height', 50);
  // the position of the person will be absolute, placed with randompos
  $(person).css('position', 'absolute');
  // sets the background of the person to the specified person gif
  $(person).css('background-image', 'url(' + '../graphics/gifs/PERSON1.gif' + ')');
  // adds the person to the games arena
  $(person).appendTo(arena);

  // spower person variable initialised with identifier 'powerperson'
  var powerperson = document.createElement('powerperson');
  // width of the powerperson gif set to 50px
  $(powerperson).css('width', 50);
  // height of the powerperson gif set to 50px
  $(powerperson).css('height', 50);
  // the position of the powerperson will be absolute, placed with randompos
  $(powerperson).css('position', 'absolute');
  // sets the background of the powerperson to the specified person gif
  $(powerperson).css('background-image', 'url(' + '../graphics/gifs/POWERPERSON.gif' + ')');
  // adds the powerperson to the games arena
  $(powerperson).appendTo(arena);

  // bad person variable initialised with identifier 'badperson'
  var badperson = document.createElement('badperson');
  // width of the badperson gif set to 50px
  $(badperson).css('width', 50);
  // height of the badperson gif set to 50px
  $(badperson).css('height', 50);
  // the position of the badperson will be absolute, placed with randompos
  $(badperson).css('position', 'absolute');
  // sets the background of the badperson to the specified person gif
  $(badperson).css('background-image', 'url(' + '../graphics/gifs/BADPERSON.gif' + ')');
  // adds the badperson to the games arena
  $(badperson).appendTo(arena);
}

displayTrain(train) {
  if (!this.isActive;) // train has crashed so do not display
  {return;}

  // iterates through each point on the train
  for (var t = 0; t < train.length; t++){
    // get current point
    var x = train.carriages[t].leftOrright;
    var y = train.carriages[t].upOrdown;
    // calculate grid position for plotting current point
    x = getFrontAreaPoint(x);
    y = getFrontAreaPoint(y);

   var carriage = document.createElement('carriage');

   $(carriage.x).css(x, 50);
   // height of the carriage set to 50px
   $(carriage.y).css(y, 50);
   // the position of the carriage will be absolute, placed with randompos
   $(carriage).css('position', 'absolute');
   // sets the color of the carriage, this uses the colorPicker function
   $(carriage).css('background-image', 'url(' + colorPicker() + ')');
   // adds the carriage to the games arena
  }
}
getFrontAreaPoint(gridSpot){
  return (gridSpot*50);
}

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
    directionx = 1;
    directiony = 0;

    /* if the up arrow key or W is pressed the train will change direction
    to move upwards IF the train is NOT already moving down */
  } else if (direction === UP_KEY && !moveDown || direction === W && !moveDown) {
    directionx = 0;
    directiony = 1;


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
  socket.emit("changedirection", directionx, directiony);
}

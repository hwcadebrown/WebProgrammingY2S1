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
  player = trains.find(function(train){
    return allTrains.id == webConnection.id;
  })

  if (player.isActive == False){
    webConnection.on('')
    return;
  }
})

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
   $(carriage).appendTo(arena);

  }
}

getFrontAreaPoint(gridSpot){
  return (gridSpot*50);
}

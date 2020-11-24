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
  if (this.isActive == False;) // train has crashed so do not display
  {return;}

  // draw train carriages

  // iterates through each point on the train excluding the ends
  for (var t = 0; t < train.length; t++) {
    let cartPos = this.train[t]; // get current point
    let cartPrevPos = this.train[t - 1]; // get point before (closer to head)
    let cartNextPos = this.train[t + 1]; // get point after (closer to tail)

    // calculate grid position for plotting current point
    let X = getPlotX(point[0]) + currentOffset.x;
    let Y = getPlotY(point[1]) + currentOffset.y;

    // get the image of the shape
    let cartColor = colorPicker();

    // draw the image at the appropriate angle

  // draw train head
  this.rendertrain();
}

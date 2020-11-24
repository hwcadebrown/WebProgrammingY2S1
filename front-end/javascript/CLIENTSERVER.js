//Alexander Wickham
var webConnection = io();
var allTrains;
var passengers;
var area;
var user;
//This will call the server and user the Play class to create the setting nessarcy, and if any other commands are called, they they will activate through
webConnection.on('game situation', function(play){
  passengers = play.passengers;
  allTrains = play.trains;
  area = play.area;
  player = trains.find(function(train){
    return allTrains.id == webConnection.id;
  })

  if (player.isActive == False){

    return;
  }
})

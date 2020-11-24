const Passenger = require("./Properties/PEOPLE");
const Area = require("./Properties/AREA");
const Train = require("./Properties/TRAIN");
class Play {
  constructor() {
    this.gameStage = new Area.Area(20, 20);
    this.trains = [];
    this.passengers = [];
    this.directions = [];
  }

  trainUpdates() {
    for (let count = 0; count < this.train.length; count++) {

    }
  }

  addNewPlayer(clientConnection){
    const id = clientConnection.id;

    var startPostion = generateTrainLocation();

    var newTrain = new Train.Train(startPostion[0],startPostion[1],id);

    this.trains.push(newTrain);

    this.directions.push();
  }

  removePlayer(clientConnection){
    const id = clientConnection.id;
    let trainRemove = gettingTrainFromID(id);
    if (trainRemove != -1){
      let index = this.trains.findIndex(trainRemove);
      let escapedPassengers = this.area.removePlayer(trainRemove);
      this.passengers = this.passengers.concat(escapedPassengers);
        this.trains.splice(index,1);
        this.directions.splice(index,1);
    }
  }

  gettingTrainFromID(id){
    this.trains.forEach((possibleTrain){
      if (possibleTrain.id == id){
        return possibleTrain;
      }
      return -1;

    });


  }

  changeDirection(clientConnection, newDirection){

    const id = clientConnection.id;

    let trainChangingDirection = gettingTrainFromID(id);
    let index = this.trains.findIndex(trainChangingDirection);
    if (trainChangingDirection != -1){
      this.directions[index] = newDirection;
    }



  }

  generateTrainLocation(){
    let x;
    let y;
    x = randomise();
    y = randomse();
    if (this.area.infoAtTile(x,y) != -1) {
      return generateTrainLocation();
    }
    return [x,y];
  }

}

modules.exports = {
  Play
};

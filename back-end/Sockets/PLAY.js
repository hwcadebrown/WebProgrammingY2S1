const Passenger = require("./Properties/PEOPLE");
const Area = require("./Properties/AREA");
const Train = require("./Properties/TRAIN");
class Play {
  constructor() {
    this.gameStage = new Area.Area(98,48);
    this.trains = [];
    this.passengers = [];
    this.directions = [];
  }

  trainUpdates() {
    for (let count = 0; count < this.trains.length; count++) {
      let direction = directions[count];
      let train = this.trains[count];
      if (train.isActive){
        let newPassengers = this.area.trainDespawn(train)
        train.
      }

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

  changeDirection(clientConnection, newDirectionx, newDirectiony){

    const id = clientConnection.id;

    let trainChangingDire ction = gettingTrainFromID(id);
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

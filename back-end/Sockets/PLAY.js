const Passenger = require("./Properties/Passenger");
const Area = require("./Properties/AREA");
const Train = require("./Properties/Train");
class Play {
  constructor() {
    this.gameStage = new Area.Area(98,48);
    this.trains = [];
    this.passengers = [];
    this.directions = [];
  }

  trainUpdates() {
    for (let count = 0; count < this.trains.length; count++) {
      if (this.trains[count].isActive){
        train.changeDirection(this.directions[count]);
        this.gameStage = this.trains[count].updateTrain(this.gameStage);
      }
      if (!this.trains[count].isActive){
        let newPassengers = this.area.trainDespawn(this.trains[count]);
        let id = this.trains[count].id;
        this.removePlayerViaID(id);
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
    removePlayerViaID(id)
  }

  removePlayerViaID(id){
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
    this.trains.forEach(loopingThroughItems());
  }
  loopingThroughItems(possibleTrain){
    if (possibleTrain.id == id){
      return possibleTrain
    }
    return -1;
  }

  changeDirection(clientConnection, newDirectionx, newDirectiony){

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

module.exports = {
  Play
};

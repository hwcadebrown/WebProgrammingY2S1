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

  addNewPlayer() {}
  removePlayer() {}
  changeDirection() {}
}

modules.exports = {
  Play
};

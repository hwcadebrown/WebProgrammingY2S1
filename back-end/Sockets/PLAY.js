const Passenger = require("./Properties/PEOPLE");
const Area = require("./Properties/AREA");
const Train = require("./Properties/TRAIN");
class Play {
  constructor(){
    this.gameStage = new Area.Area(20,20);

  }
  trainUpdates(){
    for(let count; count<this.snake.length; count++){
      
    }
  }
  addNewPlayer(){}
  removePlayer(){}
  changeDirection(){}
}
modules.exports = {
  Play
};

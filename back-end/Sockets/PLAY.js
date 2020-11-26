//Alexander Wickham
//Requires all of following classes as they are used to play the game. That doesn't run
const Function = require("./Properties/Function");
const Passenger = require("./Properties/Passenger");
const Area = require("./Properties/Area");
const Train = require("./Properties/Train");
class Play {
  //Creates an array of trains, passengers directions and creates a game stage
  constructor() {
    this.gameStage = new Area.Area(97,47);
    this.trains = [];
    this.passengers = [];
    this.directions = [{leftOrright:0, upOrdown:1}];
  }
//A train update that regularly updates and moves everything around
  trainUpdates() {
    //A for loop that goes through the trains array and checks if each train was still active
    for (let count = 0; count < this.trains.length; count++) {
      if (this.trains[count].isActive){
        //changes the direction of the current of the train in loop
        this.trains[count].changeDirection(this.directions[count]);
        //Updates the postion of the current train
        this.gameStage = this.trains[count].updateTrain(this.gameStage);
      }
      //Checks if the current train is inactive. If it is then it despawns and remooves the train via the id and using splicing to take it out of the
      if (!this.trains[count].isActive){
        let newPassengers = this.area.trainDespawn(this.trains[count]);
        let id = this.trains[count].id;
        this.removePlayerViaID(id);
      }
    }
  }

  //Adds another player using the connection with socket.io
  addNewPlayer(clientConnection){
    //Generates the id from the connection
    const id = clientConnection.id;
    //Generates a start position for said train
    var startPostion = generateTrainLocation();
    //Creates a train object based the information collected prior and then pushes that into the array
    var newTrain = new Train.Train(startPostion[0],startPostion[1],id);

    this.trains.push(newTrain);
    //Pushes the starting direction into the direction array
    this.directions.push({leftOrright:0, upOrdown:1});
  }
  //Removes player based on the client connection, which it then generates the id and then removes it via the ID
  removePlayer(clientConnection){
    const id = clientConnection.id;
    //Removes based on the ID
    removePlayerViaID(id)
  }
//Removes the player based on what their ID is. Used if they quit or die
  removePlayerViaID(id){
    //Gets the train based on the id
    let trainRemove = gettingTrainFromID(id);
    //If there is defiently a train and not none exist.
    if (trainRemove != -1){
      //Gets the index of the train that is about to be removed
      let index = this.trains.findIndex(trainRemove);
      //Sets area that the train to a bunch of passengers. This is the needs to work on it.
      let escapedPassengers = this.area.removePlayer(trainRemove);
      //Removes trains from the array and the directions that is linked to it. It then addeds the new passengers to the passnegers array
      this.passengers = this.passengers.concat(escapedPassengers);
      this.trains.splice(index,1);
      this.directions.splice(index,1);
      }
  }
  //Loops through the list until it finds the right train
  gettingTrainFromID(id){
    this.trains.forEach(loopingThroughItems());
  }

//The possible train that loops through the array and checks if the id is the same one as the one that is being searched for
  loopingThroughItems(possibleTrain){
    if (possibleTrain.id == id){
      return possibleTrain
    }
    return -1;
  }
//Function that was called when the user presses a button
  changeDirection(clientConnection, newDirectionx, newDirectiony){
    //Gets the id from the user and then then gets the train linked to the user
    const id = clientConnection.id;

    let trainChangingDirection = gettingTrainFromID(id);
    //Gets the index using the train id
    //Checks that the train defiently exists and then assigns the new directions baised on what the user had
    let index = this.trains.findIndex(trainChangingDirection);
    if (trainChangingDirection != -1){
      this.directions[index].leftOrright = newDirectionx;
      this.directions[index].upOrdown = newDirectiony;
    }
  }

  //Generates a location for the train to spawn
  generateTrainLocation(){
    let x = 0;
    let y = 0;
    //Starts off with setting y and x to 0 and loops over and makes sure that it is not a wall
    while .this.area.infoAtTile(this.x, this.y) != -1) {
      x = randomise(0,47);
      y = randomise(0,97);
    }
    //returns the values of x and y
    return [x,y];
  }
  //Randomise function that
  randomise(min, max) {
    return Math.round(Math.random() * max) + min;
  }
}

//Enables the export of the class
module.exports = {
  Play
};

//Alexander Wickham
//Due to recent difficulties we have realised that we are going to have to create a grid systum.
//This is done in the back end as every user will use the same area
const People = require("./Passenger");

class Area {
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.gameGrid = this.createMainStage(this.width,this.height);
  }
  //This is where the main grid layout is created
  createMainStage(width,height){
    let tiles = [];
    let placeholder = [];

    for (let count = 0; count < height; count++ ){
      placeholder.push(0);
    }
    for (let count2 = 0; count2< width; count2++){
      tiles.push(placeholder);
    }
    //Creates the walls for area that train will have to abide or die on the sides
    for (let count = 0; count<width; count++){
      tiles[count][0] = -1;
      tiles[count][height-1] = -1;
    }
    //Creates the walls for the top and bottom of the area that the train has to follow.
    for (let count = 0; count<height; count++){
      tiles[0][count] = -1;
      tiles[width-1][count] = -1;
    }
    return tiles;
  }
  //Creates a find and change tile system that will be used when trying to change and test the data as you go on.
  setTile(x,y, data){
    if (0<x && x<this.width && 0<y  && y<height){
      this.tiles[x][y] = data;
    }
  }
//Collect the info at the tile using the grid system
  infoAtTile(x,y){
    if (0<x && x<this.width && 0<y  && y<height){
      return this.tiles[x][y];
    }
    else {
      return -1;
    }
  }
//Adds a train in put setting the value of a tile to an id where the train carraige is
  trainSpawn(train){
    let id = train.id;
    let carriages = train.noCarriages;
    let length = train.length;
    for (let count = 0; count<length; count++){
      this.setTile(carriages[count].x, carriages[count].y,id);
    }
  }
//removes the train by looping through all of its carriages assigning that to a passenger and then pushes it to the rest of the passenger
  trainDespawn(train){
    let carriages = train.noCarriages;
    let id = train.id;
    let length = train.length;
    let runningPass = [];
    for (let count = 0; count<length; count++){
        let person = new People.Passenger(carraige[count].x,carriages[count].y);
        runningPass.push(person);
        this.setTile(carriages[count],carriages[count+1],person);
        //sets the value to 2 meaning that the train will all be passengers
        this.setTile(train.x,train.y, 2);
      }

      //returns the passengers that have been spawned in
      return runningPass;
    }

}
//Exports the area class
module.exports = {
  Area
}

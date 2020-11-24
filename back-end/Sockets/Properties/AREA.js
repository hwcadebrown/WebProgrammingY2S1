//Alexander Wickham
//Due to recent difficulties we have realised that we are going to have to create a grid systum.
//This is done in the back end as every user will use the same area
const People = require("./PEOPLE");

class Area {
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.gameGrid = this.createMainStage(this.width,this.height);
  }
  //This is where the main grid layout is created
  createMainStage(width,height){
    let tiles = [];
    for (let count = 0; count < width; count++ ){
      let placeholder = [];
      for (let count2 = 0; count2< height; count++){
        placeholder.push(0);
      }
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

  infoAtTile(x,y){
    if (0<x && x<this.width && 0<y  && y<height){
      return this.tiles[x][y];
    }
    else {
      return -1;
    }
  }

  trainSpawn(train){
    let id = train.id;
    let carriages = train.noCarriages;
    let length = train.length;
    for (let count = 0,count<length, count+=2){
      this.setTile(carriages[count], carriages[count+1],id);
    }
  }

  trainDespawn(train){
    let carriages =  train.noCarriages;
    let id = train.id;
    let length = train.length;
    let runningPass = [];
    for (let count = 0,count<length, count+=2){
        let person = new People.Passenger(this,carriages[count],carriages[count+1]);
        runningPass.push(person);
        this.setTile(carriages[count],carriages[count+1],person);
      }
      this.setTile(train.x,train.y, 1);
      train.noCarriages;
      return runningPass;
    }
}
module.exports = {
  Area
}

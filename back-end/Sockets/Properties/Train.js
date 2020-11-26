//Alexander Wickham
const Area = require("./Area");

class Train {
  //Generates a train with a location and a unique id which is what is produced when a user logs in
  constructor(x, y, uniqueID) {
    this.id = uniqueID;
    this.x = x;
    this.y = y;
    //The direction that the train will head in that direction with the number collerating to the later direction in the command secsion
    this.direction = {
      leftOrright: 0,
      upOrdown: 1};
      //Starting length is always 1 and the score starts at 0
    this.length = 1;
    this.score = 0;
    //The loction of the carriage are in
    this.noCarriages = [{x:this.x, y:this.y}];
    //Unfinished train colour that doesn't do anything yet
    this.trainColour = "";
    //Means that user is alive currently and is active in the game
    this.isActive = true;
    //This is remaining carriages that are left in the game
    this.newCarriage = 0;
  }
//This updates the information in the train by updating the direction
  updateTrain(area) {
    this.x += this.direction.leftOrright;
    this.y += this.direction.upOrdown;

    //Sets the the carraiges to the next tile.
    let carriages = area.infoAtTile(this.x, this.y);
// Sets up the collision Decection making sure it decets walls, passengers and other players
    this.collisionDetect(area, carriages);
    //Checks is the train is still active and moves the train and registers it with area
    if (this.isActive) {
      area = this.moveTrain(area);
    }

//returns the area as it changes
    return area;
  }
//It gets the information nessarcy from infoAtTile and checks which what the next tile value equals
//if it one of the types of collisions
  collisionDetect(area, carriages) {
      switch (area.infoAtTile(carriages[0],[1])) {
        //this is a wall
        case -1:
          this.isActive = false;
          break
          //This is an empty space
        case 0:
        break
        //Red person
        case 1:
          newCarriage += -1;
          break
          //Black Person
        case 2:
          newCarriage += 1;
          break
          //Gold Person
        case 3:
          newCarriage += 2;
        break
        //Another train or itself
        default:
          this.isActive = false;
        break
      }
  }
  //Goes through the different condations depending the colision
  moveTrain(area) {
    //If it is an empty space thenthen it removes the last part of the noCarriages as it moves forward the last item leave the last spot
    if (this.newCarriage == 0) {
      let newSpace = this.noCarriages.pop();
      area.setTile(newSpace[0], newSpace[1], 0);
    }
// Does the same as the empty space but reduces the size unless it is already at one
    else if (this.newCarriage == -1) {
      this.newCarriage++;
      let newSpace = this.noCarriages.pop();
      area.setTile(newSpace[0], newSpace[1], 0);
      if (this.length != 1) {
        this.length--;
        this.score = this.length;
        newSpace = this.noCarriage.pop();
        area.setTile(newSpace[0], newSpace[1], 0);
      }
    }
    //Increase the the length and and reduces the newCarriage as there is it added onto the list
    else {
      this.newCarriage--;
      this.length++;
      this.score = this.length;
    }
    //Sets the next head carriage as it the the tile it changes to the next one ahead
    let tempData = {leftOrright: this.x, upOrdown:this.y}
    this.newCarriage.unshift([tempData]);
    area.setTile(this.x, this.y, this.id);
    return area;
  }
//Changes the direction and just sets the directions to the new direction if it changess
  changeDirection(direction) {
    this.direction.leftOrright = direction.leftOrright;
    this.direction.upOrdown = direction.upOrdown;
  }
}
//Modules exports the class
module.exports = {
  Train
}

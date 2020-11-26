//Alexander Wickham
const Area = require("./Area");
//Creates a passenger class
class Passenger {

// Constructor takes the area and the type as there area class is need for the assignment and the type is what type of passenger it is
  constructor(area, type) {
    this.type = type;
    //generate a class
    this.area = area;
    //Creates a location point for the passenger to spawn
    this.x = 0;
    this.y = 0;
    this.respawn(area, this.x, this.y);
  }

//A respawn function that spawns the passenger in given and returns the area after adding the passengers to it
  respawn(area, x, y, type) {
    while (area.infoAtTile(this.x, this.y) != -1) {
      this.x = randomise(0,47);
      this.y = randomise(0,97);
    }
    area.setTile(x, y, type);
    return area;
  }
//Gets the string data type based on the type given
  getType(type) {
    switch (type) {

      case (1):
        return "Red";
        break;

      case (2):
        return "Black";
        break;

      case (3):
        return "Gold";
        break;
    }
  }
//Another Randomise function
  randomise(min, max) {
    return Math.round((Math.random() * (max) + min));
  }
}
//Exports the passenger class
module.exports = {
  Passenger
}

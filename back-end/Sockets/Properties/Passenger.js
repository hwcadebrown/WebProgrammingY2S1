//Alexander Wickham
const Area = require("./Area");

class Passenger {

  constructor(area, type) {
    this.type = type;
    this.passengerPoints = checkingType(type);
    this.area = area;
    this.x = 0;
    this.y = 0;
    this.respawn(area, this.x, this.y);
  }


  respawn(area, x, y, type) {
    while (area.infoAtTile(this.x, this.y) != -1) {
      this.x = randomise(0,47);
      this.y = randomise(0,97);
    }
    area.setTile(x, y, type))
    return area;
  }

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

  randomise(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 1) * 1;
  }
}
module.exports = {
  Passenger
}

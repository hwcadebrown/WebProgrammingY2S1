//Alexander Wickham
const Area = require("./Area");

class Passenger {

  constructor(area, x, y, type, min, max) {
    this.type = type;
    this.passengerPoints = checkingType(type);
    this.respawn = (area, x, y);
    this.max = max;
    this.min = min;
  }

  respawn(area, x, y) {
    if (x == null || y == null) {
      this.x = randomise();
      this.y = randomise();
      while (area.infoAtTile(this.x, this.y) != -1) {
        this.x = randomise();
        this.y = randomise();
      }
    } else {
      this.x = x;
      this.y = y;
    }

    area.setTile(this.x, this.y)
    return area;
  }

  checkingType(type) {
    switch (type) {

      case ("Red"):
        return -1;
        break;

      case ("Yellow"):
        return 2;
        break;

      case ("Black"):
        return 1;
        break;
    }
  }

  randomise(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 1) * 1;
  }

  getType() {
    return type;
  }
}

module.exports = {
  Passenger
}

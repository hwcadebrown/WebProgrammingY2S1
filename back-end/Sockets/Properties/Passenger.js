//Alexander Wickham
const Area = require("./Area");

class Passenger {

  constructor(area, type) {
    this.type = type;
    this.passengerPoints = checkingType(type);
    this.area = area;
    this.x = -1;
    this.y = -1;
    this.respawn(area, this.x, this.y);

    }
  }

  respawn(area, x, y, type) {
    while (area.infoAtTile(this.x, this.y) != -1) {
      this.x = randomise(0,47);
      this.y = randomise(0,97);
    }
    area.setTile(x, y, this.type)
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

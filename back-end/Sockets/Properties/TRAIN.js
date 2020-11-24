//Alexander Wickham
const Area = require("./AREA");

class Train {
  constructor(x, y, uniqueID, direction, length, score, trainColour, noCarriages, isActive, newCarriage) {
    this.id = uniqueID;
    this.x = x;
    this.y = y;
    this.direction = {
      leftOrright: 0,
      upOrdown: 1};

    this.length = 1;
    this.score = 1;
    this.trainColour = "";
    this.noCarriages = [];
    this.isActive = true;
    this.newCarriage = 0;
  }

  updateTrain(area) {
    this.x += this.direction.leftOrright
    this.y += this.direction.upOrdown

    let carriages = area.infoAtTile(this.x, this.y);

    this.collisionDetect(area, carriages);

    if (this.isActive) {
      area = this.moveTrain;
    }

    return area;
  }

  collisionDetect(area, carriages) {
    if (carriages === 1) {
      switch (area.getType) {
        case -1:
          newCarriage = -1;
          break

        case 1:
          newCarriage = 1;
          break

        case 2:
          newCarriage = 2;
          break
      }
    } else if (carriages === 0) {} else {
      this.isActive = false;
    }
  }

  moveTrain(area) {
    if (this.newCarriage == 0) {
      let newSpace = this.noCarriages.pop();
      area.setTile(newSpace[0], newSpace[1], 0);
    } else if (this.newCarriage == -1) {
      let newSpace = this.noCarriages.pop();
      area.setTile(newSpace[0], newSpace[1], 0);
      if (this.length != 1) {
        this.length--;
        this.score = this.length;
        newSpace = this.noCarriage.pop();
        area.setTile(newSpace[0], newSpace[1], 0);
      }
    } else {
      this.newCarriage--;
      this.length++;
      this.score = this.length;
    }
    this.newCarriage.unshift([this.x, this.y]);
    area.setTile(this.x, this.y, this.id);
    return area;
  }

  changeDirection(newX, newY) {
    this.direction.leftOrright = newX;
    this.direction.upOrdown = newY;
  }
}

module.exports = {
  Train
}

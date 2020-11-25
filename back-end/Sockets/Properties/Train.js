//Alexander Wickham
const Area = require("./Area");

class Train {
  constructor(x, y, uniqueID) {
    this.id = uniqueID;
    this.x = x;
    this.y = y;
    this.direction = {
      leftOrright: 0,
      upOrdown: 1};
    this.length = 1;
    this.score = 0;
    this.noCarriages = [{x:this.x, y:this.y}];
    this.trainColour = "";
    this.isActive = true;
    this.newCarriage = 0;
  }

  updateTrain(area) {
    this.x += this.direction.leftOrright;
    this.y += this.direction.upOrdown;

    let carriages = area.infoAtTile(this.x, this.y);

    this.collisionDetect(area, carriages);

    if (this.isActive) {
      area = this.moveTrain(area);
    }

    return area;
  }

  collisionDetect(area, carriages) {
      switch (area.infoAtTile(carriages[0],[1])) {
        case -1:
          this.isActive = false;
          break
        case 0:
        break
        case 1:
          newCarriage += -1;
          break
        case 2:
          newCarriage += 1;
          break
        case 3:
          newCarriage += 2;
        break

        default:
          this.isActive = false;
        break
      }
  }

  moveTrain(area) {
    if (this.newCarriage == 0) {
      let newSpace = this.noCarriages.pop();
      area.setTile(newSpace[0], newSpace[1], 0);
    }
    else if (this.newCarriage == -1) {
      let newSpace = this.noCarriages.pop();
      area.setTile(newSpace[0], newSpace[1], 0);
      if (this.length != 1) {
        this.length--;
        this.score = this.length;
        newSpace = this.noCarriage.pop();
        area.setTile(newSpace[0], newSpace[1], 0);
      }
    }
    else {
      this.newCarriage--;
      this.length++;
      this.score = this.length;
    }
    let tempData = {leftOrright: this.x, upOrdown:this.y}
    this.newCarriage.unshift([]);
    area.setTile(this.x, this.y, this.id);
    return area;
  }

  changeDirection(direction) {
    this.direction.leftOrright = direction.leftOrright;
    this.direction.upOrdown = direction.upOrdown;
  }
}

module.exports = {
  Train
}

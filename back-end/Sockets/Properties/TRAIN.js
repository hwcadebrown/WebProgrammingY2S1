const Area = require("./AREA");

class Train{
  constructor(x,y, uniqueID){
    this.id = uniqueID;
    this.x = x;
    this.y = y;
    this.direction = {leftOrright:0, upOrdown:1};
    this.length = 1;
    this.trainColour = 0;
    this.noCarriages = [x,y];
    this.isActive = true;
  }

  updateTrain(area){
    this.x += this.direction.leftOrright
    this.y += this.direction.upOrdown

    let carriages = area.infoAtTile(this.x,this.y);

    this.collisionDetect(area, carriages)

    if (this.isActive){
      area = this.moveTrain;
    }

    return area;
  }

  collisionDetect(area, carriages){}
    switch (expression) {
      case expression:
        
        break;
      default:

    }
  moveTrain(area){}

  changeDirection(){}



}
module.exports = {
  Train
}

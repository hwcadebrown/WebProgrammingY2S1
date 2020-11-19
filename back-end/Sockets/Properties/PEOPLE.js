const AREAfile =require("./AREA");

class Passenger{
  constructor(area, x, y, type){
    this.type = type;
    this.passengerPoints = checkingType(type);
    this.respawn = (area, x, y);
  }
  respawn(area,x,y){
    if (x == null || y == null){
      this.x = randomise();
      this.y = radomise();
      while(area.infoAtTile(this.x,this.y) != -1){
        this.x = randomise();
        this.y = radomise();
      }
    }
    else{
      this.x = x;
      this.y = y;
    }

    area.setTile(this.x,this.y)
    return area;
  }

  checkingType(type){
    switch(type){

      case("Red"):
      return -1;
      break;

      case("Yellow"):
      return 2;
      break;

      case("Black"):
      return 1;
      break;
    }
  }
  getType(){
    return type;
  }
}
module.exports = {
  Passenger
}

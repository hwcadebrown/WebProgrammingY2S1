//Alexander Wickham
//This is setting up the main basis for the stage as has't been properly established
class MainArea {
  //Has a constactor that will take in values to define the size of the game
  constructor(x,y){
    this.x = x;
    this.y =y;
    this.main = this.createStage(this.x,this.y) //Will call this method within the class in order to populatio
    createStage(x,y){ //Creates the grid
      let main = [];
      for (let count = 0, count<x, count++) {
        let noColumn = [];
        for (let count2 = 0; count2<y; count2++) {
          noColumn.push(1);
        }
        main.push(noColumn);
      }

    };
  };
};

//Alexander Wickham
function Person(x, y, personType) {
  this.y = y;
  this.x = x;
  this.personType = personType;
  this.setPointType = function(personType){
    switch (personType) {
      case 0
        img.src = "PERSON1.gif";
        break;
      case 1;
        img.src = "PERSON2.gif";
        break;
      case 2;
        img.src = "PERSON3.gif";
        break;
      case 3;
        img.src = "PERSON4.gif";
        break;
      case 4;
        img.src = "PERSONPOWER.gif";
        break;
    }
  };
};
var aPerson = new Person(0,0,0);

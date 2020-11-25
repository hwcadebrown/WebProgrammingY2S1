class Functions {

  // function for picking the color of each carriage added to the train
  colorPicker() {
    // color variable which generates a random number from 1 to 10
    var colornum = Math.floor((Math.random() * 10) + 1);
    // switch case which chooses the color depending on what number generated
    switch (color) {
      // if 1 is generated then the pink carriage is added
      case 1:
        return 'pink';

        // if 2 is generated then the blue carriage is added
      case 2:
        return 'blue';

        // if 3 is generated then the green carriage is added
      case 3:
        return 'green';

        // if 4 is generated then the red carriage is added
      case 4:
        return 'red';

        // if 5 is generated then the orange carriage is added
      case 5:
        return 'orange';

        // if 6 is generated then the sky blue carriage is added
      case 6:
        return 'skyblue';

        // if 7 is generated then the dark green carriage is added
      case 7:
        return 'darkgreen';

        // if 8 is generated then the purple carriage is added
      case 8:
        return 'purple';

        // if 9 is generated then the peach carriage is added
      case 9:
        return 'peach';

        // if 10 is generated then the gray carriage is added
      case 10:
        return 'gray';
    }
  }

  randomise(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 1) * 1;
  }


}

// Cade Brown
// Chooses the color of each carriage that gets added to the train

// function for picking the color of each carriage added to the train
function colorPicker() {
  // color variable which generates a random number from 1 to 10
  let color = Math.floor((Math.random() * 10) + 1);
  // switch case which chooses the color depending on what number generated
  switch (color) {
    // if 1 is generated then the pink carriage is added
    case 1:
      return '../../graphics/trains/PINKTRAIN.png';

    // if 2 is generated then the blue carriage is added
    case 2:
      return '../../graphics/trains/BLUETRAIN.png';

    // if 3 is generated then the green carriage is added
    case 3:
      return '../../graphics/trains/GREENTRAIN.png';

    // if 4 is generated then the red carriage is added
    case 4:
      return '../../graphics/trains/REDTRAIN.png';

    // if 5 is generated then the orange carriage is added
    case 5:
      return '../../graphics/trains/ORANGETRAIN.png';

    // if 6 is generated then the sky blue carriage is added
    case 6:
      return '../../graphics/trains/SKYBLUETRAIN.png';

    // if 7 is generated then the dark green carriage is added
    case 7:
      return '../../graphics/trains/DARKGREENTRAIN.png';

    // if 8 is generated then the purple carriage is added
    case 8:
      return '../../graphics/trains/PURPLETRAIN.png';

    // if 9 is generated then the peach carriage is added
    case 9:
      return '../../graphics/trains/PEACHTRAIN.png';

    // if 10 is generated then the gray carriage is added
    case 10:
      return '../../graphics/trains/GRAYTRAIN.png';
  }
}

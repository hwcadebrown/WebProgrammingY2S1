function colorPicker() {
  var color = Math.floor((Math.random() * 10) + 1);
  switch (color) {
    case 1:
      return '../graphics/trains/PINKTRAIN.png';
    case 2:
      return '../graphics/trains/BLUETRAIN.png';
    case 3:
      return '../graphics/trains/GREENTRAIN.png';
    case 4:
      return '../graphics/trains/REDTRAIN.png';
    case 5:
      return '../graphics/trains/ORANGETRAIN.png';
    case 6:
      return '../graphics/trains/SKYBLUETRAIN.png';
    case 7:
      return '../graphics/trains/DARKGREENTRAIN.png';
    case 8:
      return '../graphics/trains/PURPLETRAIN.png';
    case 9:
      return '../graphics/trains/PEACHTRAIN.png';
    case 10:
      return '../graphics/trains/GRAYTRAIN.png';
  }
}

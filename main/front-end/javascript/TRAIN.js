function addcarriage(id) {
  let carriage = document.createElement('carriage');
  carriage.id = "carriage" + id;
  $(carriage).css('width', 50);
  $(carriage).css('height', 50);
  $(carriage).css('position', 'absolute');
  $(carriage).css('background-image', 'url(' + '../graphics/trains/PINKTRAIN.png' + ')');
  $(carriage).appendTo(arena);
}

function attatchcarriage() {
  for (let i = 0; i < train.length; i++) {
    addcarriage(i);
  }
}

function advancetrain() {
  const head = {
    x: train[0].x + directionx,
    y: train[0].y + directiony
  };
  train.unshift(head);

  const didPickUpPerson = train[0].x === personX && train[0].y === personY;
  const didPickUpPerson2 = train[0].x === personX2 && train[0].y === personY2;
  if (didPickUpPerson) {
    $('#score').html(score++);

    addcarriage(train.length - 1);
    createperson();
  } else if (didPickUpPerson2) {
    $('#score').html(score += 2);

    addcarriage(train.length - 1);
    createperson2();
  } else {
    train.pop();
  }
}

function rendertrain() {
  for (let t = 0; t < train.length; t++) {
    rendertrainPart(t, train[t])
  }
}

function rendertrainPart(t, trainPart) {
  let part = "carriage" + t;
  let carriage = document.getElementById(part);
  $(carriage).css('left', trainPart.x);
  $(carriage).css('top', trainPart.y);
}

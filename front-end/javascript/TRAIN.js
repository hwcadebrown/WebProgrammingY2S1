// Cade Brown
// Trains functions for the gameplay

// function which adds a carriage to the game
function addcarriage(id) {
  // carriage variable initialised with identifier 'carriage'
  let carriage = document.createElement('carriage');
  carriage.id = "carriage" + id;
  // width of the carriage set to 50px
  $(carriage).css('width', 50);
  // height of the carriage set to 50px
  $(carriage).css('height', 50);
  // the position of the carriage will be absolute, placed with randompos
  $(carriage).css('position', 'absolute');
  // sets the color of the carriage, this uses the colorPicker function
  $(carriage).css('background-image', 'url(' + colorPicker() + ')');
  // adds the carriage to the games arena
  $(carriage).appendTo(arena);
}

// attacthes the carriage to the train
function attatchcarriage() {
  // amount of carriages added won't go larger than the whole length of train
  for (let i = 0; i < train.length; i++) {
    // calls the addcarriage function to add to the train
    addcarriage(i);
  }
}

// this function will advance the train and check collisions with people
function advancetrain() {
  /* creates the head of the train, this changes depending on what direction
  the player is moving in */
  const head = {
    x: train[0].x + directionx,
    y: train[0].y + directiony
  };

  /* this will add the head of the train to the beginning of the trains body,
  and also allows the train to move from it's spawn position */
  train.unshift(head);

  // variables which check if the trains head is at the position of the person
  const didPickUpPerson = train[0].x === personX && train[0].y === personY;
  const didPickUpPerson2 = train[0].x === personX2 && train[0].y === personY2;
  const didPickUpPerson3 = train[0].x === personX3 && train[0].y === personY3;

  // if PERSON1 is picked up then this set of operations will be executed
  if (didPickUpPerson) {
    // increments the score variable and adds one point
    $('#score').html(score += 1);
    // adds a carriage at the ends of the trains body (last carriage added)
    addcarriage(train.length - 1);
    // creates a new PERSON1 in the arena to be collected again
    createperson();

    // if PERSON2 is picked up then this set of operations will be executed
  } else if (didPickUpPerson2) {
    // adds 2 points to the score variable
    $('#score').html(score += 2);
    // adds a carriage at the ends of the trains body (last carriage added)
    addcarriage(train.length - 1);
    addcarriage(train.length - 1);
    // creates a new PERSON2 in the arena to be collected again
    createperson2();

    // if PERSON3 is picked up then this set of operations will be executed
  } else if (didPickUpPerson3) {
    // takes 1 point off the score variable
    $('#score').html(score -= 1);
    // creates a new PERSON3 in the arena to be collected again
    createperson3();
    /* removes the last carriage of the train, if this isn't put in then an
    invisble carriage will be attatched so this will prevent it */
    train.pop();
  } else {
    /* else case removes the last carriage of the train, if this isn't done
    then a ghost train of the player will spawn re-enacting all the movements
    the player makes and if the player hits any previously visited position
    the player dies, truly scary stuff */
    train.pop();
  }
}

// renders the train on the arena to be visible to the player
function rendertrain() {
  /* loops through each carriage attatched to the train and will render
  each carriage that the player currently has on their train */
  for (let t = 0; t < train.length; t++) {
    // calls the rendertrainPart function to render each part
    rendertrainPart(t, train[t])
  }
}

// renders individual parts to be seen on the arena (also creates train hitbox)
function rendertrainPart(t, trainPart) {
  // renders the carriage at the position t of the train
  let part = "carriage" + t;
  // assigns the carriage variable to equal the part variable we just created
  let carriage = document.getElementById(part);
  // assigns the left property to the x-coord of the train
  $(carriage).css('left', trainPart.x);
  // assigns the top property to the y-coord of the train
  $(carriage).css('top', trainPart.y);
}

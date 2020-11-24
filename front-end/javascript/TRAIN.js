// renders the train on the arena to be visible to the player
function rendertrain() {
  /* loops through each carriage attatched to the train and will render
  each carriage that the player currently has on their train */
  for (var t = 0; t < train.length; t++) {
    // calls the rendertrainPart function to render each part
    rendertrainPart(t, train[t])
  }
}

// renders individual parts to be seen on the arena (also creates train hitbox)
function rendertrainPart(t, trainPart) {
  // renders the carriage at the position t of the train
  var part = "carriage" + t;
  // assigns the carriage variable to equal the part variable we just created
  var carriage = document.getElementById(part);
  // assigns the left property to the x-coord of the train
  $(carriage).css('left', trainPart.x);
  // assigns the top property to the y-coord of the train
  $(carriage).css('top', trainPart.y);
}

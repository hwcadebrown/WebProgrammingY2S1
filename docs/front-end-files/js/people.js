// Cade Brown
// Adding people to the game for players to pick up

// function which adds the people to the game arena
function addperson() {
  // first person variable initialised with identifier 'person'
  let person = document.createElement('person');
  person.id = "person";
  // width of the person gif set to 50px
  $(person).css('width', 50);
  // height of the person gif set to 50px
  $(person).css('height', 50);
  // the position of the person will be absolute, placed with randompos
  $(person).css('position', 'absolute');
  // sets the background of the person to the specified person gif
  $(person).css('background-image', 'url(' + '../../graphics/gifs/PERSON1.gif' + ')');
  // adds the person to the games arena
  $(person).appendTo(arena);

  // second person variable initialised with identifier 'person2'
  let person2 = document.createElement('person2');
  person2.id = "person2";
  // width of the person2 gif set to 50px
  $(person2).css('width', 50);
  // height of the person2 gif set to 50px
  $(person2).css('height', 50);
  // the position of the person2 will be absolute, placed with randompos
  $(person2).css('position', 'absolute');
  // sets the background of the person2 to the specified person gif
  $(person2).css('background-image', 'url(' + '../../graphics/gifs/PERSON2.gif' + ')');
  // adds the person2 to the games arena
  $(person2).appendTo(arena);

  // third person variable initialised with identifier 'badperson'
  let badperson = document.createElement('badperson');
  badperson.id = "badperson";
  // width of the badperson gif set to 50px
  $(badperson).css('width', 50);
  // height of the badperson gif set to 50px
  $(badperson).css('height', 50);
  // the position of the badperson will be absolute, placed with randompos
  $(badperson).css('position', 'absolute');
  // sets the background of the badperson to the specified person gif
  $(badperson).css('background-image', 'url(' + '../../graphics/gifs/PERSON3.gif' + ')');
  // adds the badperson to the games arena
  $(badperson).appendTo(arena);
}

// creates the first person and places them at a random position on the arena
function createperson() {
  /* the x position of the first person is anywhere within the arenas total
  width (minus the sprite size) */
  personX = randompos(0, parseFloat($(arena).css('width')) - 50);
  /* the y position of the first person is anywhere within the arenas total
  height (minus the sprite size) */
  personY = randompos(0, parseFloat($(arena).css('height')) - 50);
}

// creates the second person and places them at a random position on the arena
function createperson2() {
  /* the x position of the second person is anywhere within the arenas total
  width (minus the sprite size) */
  personX2 = randompos(0, parseFloat($(arena).css('width')) - 50);
  /* the y position of the second person is anywhere within the arenas total
  height (minus the sprite size) */
  personY2 = randompos(0, parseFloat($(arena).css('height')) - 50);
}

function createperson3() {
  /* the x position of the third person is anywhere within the arenas total
  width (minus the sprite size) */
  personX3 = randompos(0, parseFloat($(arena).css('width')) - 50);
  /* the y position of the third person is anywhere within the arenas total
  height (minus the sprite size) */
  personY3 = randompos(0, parseFloat($(arena).css('height')) - 50);
}

// renders each person so they can be seen on the arena (also creates hitboxes)
function renderperson() {
  // assigns the left property to the x-coord of the first person
  $(person).css('left', personX);
  // assigns the top property to the y-coord of the first person
  $(person).css('top', personY);
  // assigns the left property to the x-coord of the second person
  $(person2).css('left', personX2);
  // assigns the top property to the y-coord of the second person
  $(person2).css('top', personY2);
  // assigns the left property to the x-coord of the third person
  $(badperson).css('left', personX3);
  // assigns the top property to the y-coord of the third person
  $(badperson).css('top', personY3);
}

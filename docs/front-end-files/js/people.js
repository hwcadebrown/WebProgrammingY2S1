// Cade Brown
// Adding people to the game for players to pick up

// function which adds the people to the game arena
function addperson() {
  // first person variable initialised with identifier 'person'
  var person = document.createElement('person');
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

  // spower person variable initialised with identifier 'powerperson'
  var powerperson = document.createElement('powerperson');
  powerperson.id = "powerperson";
  // width of the powerperson gif set to 50px
  $(powerperson).css('width', 50);
  // height of the powerperson gif set to 50px
  $(powerperson).css('height', 50);
  // the position of the powerperson will be absolute, placed with randompos
  $(powerperson).css('position', 'absolute');
  // sets the background of the powerperson to the specified person gif
  $(powerperson).css('background-image', 'url(' + '../../graphics/gifs/POWERPERSON.gif' + ')');
  // adds the powerperson to the games arena
  $(powerperson).appendTo(arena);

  // bad person variable initialised with identifier 'badperson'
  var badperson = document.createElement('badperson');
  badperson.id = "badperson";
  // width of the badperson gif set to 50px
  $(badperson).css('width', 50);
  // height of the badperson gif set to 50px
  $(badperson).css('height', 50);
  // the position of the badperson will be absolute, placed with randompos
  $(badperson).css('position', 'absolute');
  // sets the background of the badperson to the specified person gif
  $(badperson).css('background-image', 'url(' + '../../graphics/gifs/BADPERSON.gif' + ')');
  // adds the badperson to the games arena
  $(badperson).appendTo(arena);
}

// creates the people and places them at a random position on the arena
function createperson(typeperson) {

  // if typeperson equals 1 then person is created
  if(typeperson === 1) {
  /* the x position of the first person is anywhere within the arenas total
  width (minus the sprite size) */
  personX = randompos(0, parseFloat($(arena).css('width')) - 50);
  /* the y position of the first person is anywhere within the arenas total
  height (minus the sprite size) */
  personY = randompos(0, parseFloat($(arena).css('height')) - 50);
  }

  // if typeperson equals 2 then powerperson is created
  else if(typeperson === 2) {
  /* the x position of the power person is anywhere within the arenas total
  width (minus the sprite size) */
  personXpower = randompos(0, parseFloat($(arena).css('width')) - 50);
  /* the y position of the power person is anywhere within the arenas total
  height (minus the sprite size) */
  personYpower = randompos(0, parseFloat($(arena).css('height')) - 50);
  }

  // if typeperson equals 3 then the badperson is created
  else if(typeperson === 3) {
  /* the x position of the bad person is anywhere within the arenas total
  width (minus the sprite size) */
  personXbad = randompos(0, parseFloat($(arena).css('width')) - 50);
  /* the y position of the bad person is anywhere within the arenas total
  height (minus the sprite size) */
  personYbad = randompos(0, parseFloat($(arena).css('height')) - 50);
  }
}

// renders each person so they can be seen on the arena (also creates hitboxes)
function renderperson() {
  // assigns the left property to the x-coord of the first person
  $(person).css('left', personX);
  // assigns the top property to the y-coord of the first person
  $(person).css('top', personY);
  // assigns the left property to the x-coord of the power person
  $(powerperson).css('left', personXpower);
  // assigns the top property to the y-coord of the power person
  $(powerperson).css('top', personYpower);
  // assigns the left property to the x-coord of the bad person
  $(badperson).css('left', personXbad);
  // assigns the top property to the y-coord of the bad person
  $(badperson).css('top', personYbad);
}

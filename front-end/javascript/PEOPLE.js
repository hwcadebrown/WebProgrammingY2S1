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
  $(person).css('position', 'absolute');
  $(person).css('background-image', 'url(' + '../graphics/gifs/PERSON1.gif' + ')');
  $(person).appendTo(arena);

  let person2 = document.createElement('person2');
  person2.id = "person2";
  $(person2).css('width', 50);
  $(person2).css('height', 50);
  $(person2).css('position', 'absolute');
  $(person2).css('background-image', 'url(' + '../graphics/gifs/PERSON2.gif' + ')');
  $(person2).appendTo(arena);

  let badperson = document.createElement('badperson');
  badperson.id = "badperson";
  $(badperson).css('width', 50);
  $(badperson).css('height', 50);
  $(badperson).css('position', 'absolute');
  $(badperson).css('background-image', 'url(' + '../graphics/gifs/PERSON3.gif' + ')');
  $(badperson).appendTo(arena);
}

function createperson() {
  personX = randompos(0, parseFloat($(arena).css('width')) - 50);
  personY = randompos(0, parseFloat($(arena).css('height')) - 50);
}

function createperson2() {
  personX2 = randompos(0, parseFloat($(arena).css('width')) - 50);
  personY2 = randompos(0, parseFloat($(arena).css('height')) - 50);
}

function createperson3() {
  personX3 = randompos(0, parseFloat($(arena).css('width')) - 50);
  personY3 = randompos(0, parseFloat($(arena).css('height')) - 50);
}

function renderperson() {
  $(person).css('left', personX);
  $(person).css('top', personY);
  $(person2).css('left', personX2);
  $(person2).css('top', personY2);
  $(badperson).css('left', personX3);
  $(badperson).css('top', personY3);
}

function addperson() {
  let person = document.createElement('person');
  person.id = "person";
  $(person).css('width', 50);
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
}

function personpos(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 50) * 50;
}

function createperson() {
  personX = personpos(0, parseFloat($(arena).css('width')) - 50);
  personY = personpos(0, parseFloat($(arena).css('height')) - 50);
}

function createperson2() {
  personX2 = personpos(0, parseFloat($(arena).css('width')) - 50);
  personY2 = personpos(0, parseFloat($(arena).css('height')) - 50);
}

function renderperson() {
  $(person).css('left', personX);
  $(person).css('top', personY);
  $(person2).css('left', personX2);
  $(person2).css('top', personY2);
}

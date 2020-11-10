function addperson() {
  let person = document.createElement('person');
  person.id = "person";
  $(person).css('width', 50);
  $(person).css('height', 50);
  $(person).css('position', 'absolute');
  $(person).css('background-image', 'url(' + 'graphics/gifs/PERSON10.gif' + ')');
  $(person).appendTo(arena);

  let person2 = document.createElement('person2');
  person2.id = "person2";
  $(person2).css('width', 50);
  $(person2).css('height', 50);
  $(person2).css('position', 'absolute');
  $(person2).css('background-image', 'url(' + 'graphics/gifs/PERSON20.gif' + ')');
  $(person2).appendTo(arena);
}

function createperson() {
  personX = randompos(0, parseFloat($(arena).css('width')) - 50);
  personY = randompos(0, parseFloat($(arena).css('height')) - 50);
}

function createperson2() {
  personX2 = randompos(0, parseFloat($(arena).css('width')) - 50);
  personY2 = randompos(0, parseFloat($(arena).css('height')) - 50);
}

function renderperson() {
  $(person).css('left', personX);
  $(person).css('top', personY);
  $(person2).css('left', personX2);
  $(person2).css('top', personY2);
}

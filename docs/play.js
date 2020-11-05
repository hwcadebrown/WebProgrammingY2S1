const GAME_SPEED = 90 ;
const arena = document.getElementById('area');
$(arena).css('width', 1400);
$(arena).css('height', 700);

let directionx = 50;
let directiony = 0;

start();

function start() {
    score = 0;
		$('#score').html(0);

		train = [ {x: 750, y: 350}];

		$('#area').empty();

		status();
		createperson();
    createperson2();
    addperson();
    addperson2();

		$(document).on("keydown", changedirection);
}

function status() {
  if(playerHitWall() || playerHitSelf()) {
    alert('You Derailed! Score: ' + score);
    start();
    return;
  }

  setTimeout(function onTick() {
    changingDirection = false;
    status();
    renderperson();
    renderperson2();
    rendertrain();
    advancetrain();
  }, GAME_SPEED)
}

function addperson() {
	  let person = document.createElement('person');
		person.id = "person";
		$(person).css('width', 50);
    $(person).css('height', 50);
	  $(person).css('position', 'absolute');
		$(person).css('background-image', 'url(' + '../graphics/gifs/PERSON10.gif' + ')');
    $(person).appendTo(arena);

    for (let i = 0; i < train.length; i++)
		{ addcarriage(i); }w
}

function addperson2() {
	  let person2 = document.createElement('person2');
		person2.id = "person2";
		$(person2).css('width', 50);
    $(person2).css('height', 50);
	  $(person2).css('position', 'absolute');
		$(person2).css('background-image', 'url(' + '../graphics/gifs/PERSON20.gif' + ')');
    $(person2).appendTo(arena);
}

function addcarriage(id) {
		let carriage = document.createElement('carriage');
		carriage.id = "carriage" + id;
		$(carriage).css('width', 50);
    $(carriage).css('height', 50);
    $(carriage).css('position', 'absolute');
    $(carriage).css('background-image', 'url(' + '../graphics/trains/PINKTRAIN.png' + ')');
    $(carriage).appendTo(arena);
}

function personpos(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 50) * 50;
}

function createperson() {
    personX = personpos(0, parseFloat($(arena).css('width')) - 50);
    personY = personpos(0, parseFloat($(arena).css('height')) - 50);

    train.forEach(function ispersonOntrain(part) {
      const personIsoNtrain = part.x.personX && part.y.personY;
      if (personIsoNtrain) createperson();
    });
}

function createperson2() {
    personX2 = personpos(0, parseFloat($(arena).css('width')) - 50);
    personY2 = personpos(0, parseFloat($(arena).css('height')) - 50);

    train.forEach(function ispersonOntrain2(part) {
      const personIsoNtrain2 = part.x.personX2 && part.y.personY2;
      if (personIsoNtrain2) createperson2();
    });
}


function renderperson() {
	  $(person).css('left', personX);
	  $(person).css('top', personY);
}

function renderperson2() {
	  $(person2).css('left', personX2);
	  $(person2).css('top', personY2);
}

function advancetrain() {
    const head = {x: train[0].x + directionx, y: train[0].y + directiony};
    train.unshift(head);

    const didPickUpPerson = train[0].x === personX && train[0].y === personY;
    const didPickUpPerson2 = train[0].x === personX2 && train[0].y === personY2;
    if (didPickUpPerson) {
      score++;
      $('#score').html(score);

		addcarriage(train.length - 1);
      createperson();
    }
    else if (didPickUpPerson2) {
      score += 2;
      $('#score').html(score);

		addcarriage(train.length - 1);
      createperson2();
    }
    else {
      train.pop();
    }
}

function rendertrain() {
	  for (let t=0; t < train.length; t++)
	  { rendertrainPart(t, train[t]) }
}

function rendertrainPart(t, trainPart) {
	  let part = "carriage" + t;
		let carriage = document.getElementById(part);
		$(carriage).css('left', trainPart.x);
		$(carriage).css('top', trainPart.y);
}

function changedirection(event) {
    const direction = event.keyCode;

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const W = 87;
    const A = 65;
    const S = 83;
    const D = 68;

    const moveUp = directiony  === -50;
    const moveDown = directiony  ===  50;
    const moveRight = directionx  ===  50;
    const moveLeft = directionx  === -50;

      if (direction === LEFT_KEY && !moveRight || direction === A && !moveRight) {
        directionx = -50;
        directiony =  0;
      } else if (direction === UP_KEY && !moveDown || direction === W && !moveDown) {
        directionx =  0;
        directiony = -50;
      } else if (direction === RIGHT_KEY && !moveLeft || direction === D && !moveLeft) {
        directionx = 50;
        directiony = 0;
      } else if (direction === DOWN_KEY && !moveUp || direction === S && !moveUp) {
        directionx = 0;
        directiony = 50;
      }
}

function playerHitSelf() {
  for (let cart = 3; cart < train.length; cart++) {
    if (train[cart].x === train[0].x && train[cart].y === train[0].y) return true;
  }
}

function playerHitWall() {

    const hitLeftWall = train[0].x < 0;
    const hitRightWall = train[0].x > parseFloat($(arena).css('width')) - 50;
    const hitTopWall = train[0].y < 0;
    const hitBottomWall = train[0].y > parseFloat($(arena).css('height')) - 50;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

const GAME_SPEED = 25;
const arena = document.getElementById('area');
$(arena).css('width', 1400);
$(arena).css('height', 700);

let dx = 10;
let dy = 0;

start();

function start() {
    score = 0;
		$('#score').html(0);

		train = [ {x: 750, y: 350}, {x: 740, y: 350}, {x: 730, y: 350} ];

		$('#area').empty();

		status();
		createperson();
    addperson();

		$(document).on("keydown", changedirection);
}

function status() {
  if(playerHitWall()) {
    alert('You Derailed! Score: ' + score);
    start();
    return;
  }

  setTimeout(function onTick() {
    changingDirection = false;
    status();
    renderperson();
    rendertrain();
    advancetrain();
  }, GAME_SPEED)
}

function addperson() {
	  let person = document.createElement('person');
		person.id = "person";
		$(person).css('width', 10);
    $(person).css('height', 10);
	  $(person).css('position', 'absolute');
		$(person).css('backgroundColor', 'gray');
    $(person).appendTo(arena);

		for (let n=0; n<train.length; n++)
		{ addcarriage(n); }
}

function addcarriage(id) {
		let carriage = document.createElement('carriage');
		carriage.id = "carriage" + id;
		$(carriage).css('width', 10);
    $(carriage).css('height', 10);
    $(carriage).css('position', 'absolute');
		$(carriage).css('backgroundColor', '#0086aa');
		$(carriage).appendTo(arena);
}

function personpos(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createperson() {
    personX = personpos(0, parseFloat($(arena).css('width')) - 10);
    personY = personpos(0, parseFloat($(arena).css('height')) - 10);

    train.forEach(function ispersonOntrain(part) {
      const personIsoNtrain = part.x.personX && part.y.personY;
      if (personIsoNtrain) createperson();
    });
}

function renderperson() {
	  $(person).css('left', personX);
	  $(person).css('top', personY);
}

function advancetrain() {
    const head = {x: train[0].x + dx, y: train[0].y + dy};
    train.unshift(head);

    const didPickUpPerson = train[0].x === personX && train[0].y === personY;
    if (didPickUpPerson) {
      score++;
      $('#score').html(score);

		addcarriage(train.length - 1);
      createperson();
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

    const moveUp = dy  === -10;
    const moveDown = dy  ===  10;
    const moveRight = dx  ===  10;
    const moveLeft = dx  === -10;

      if (direction === LEFT_KEY && !moveRight || direction === A && !moveRight) {
        dx = -10;
        dy =  0;
      } else if (direction === UP_KEY && !moveDown || direction === W && !moveDown) {
        dx =  0;
        dy = -10;
      } else if (direction === RIGHT_KEY && !moveLeft || direction === D && !moveLeft) {
        dx = 10;
        dy = 0;
      } else if (direction === DOWN_KEY && !moveUp || direction === S && !moveUp) {
        dx = 0;
        dy = 10;
      }
}

function playerHitWall() {
    const hitLeftWall = train[0].x < 0;
    const hitRightWall = train[0].x > parseFloat($(arena).css('width')) - 10;
    const hitTopWall = train[0].y < 0;
    const hitBottomWall = train[0].y > parseFloat($(arena).css('height')) - 10;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

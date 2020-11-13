const GAME_SPEED = 50;
const arena = document.getElementById('area');
$(arena).css('width', 4750);
$(arena).css('height', 2400);

let directionx = 50;
let directiony = 0;
start();

function start() {
  $('#score').html(score = 0);

  train = [{
    x: randompos(0, parseFloat($(arena).css('width')) - 50),
    y: randompos(0, parseFloat($(arena).css('height')) - 50)
  }];

	$('#area').empty();

  status();
  createperson();
  createperson2();
  addperson();
  attatchcarriage();

  $(document).on("keydown", changedirection);
  $(document).on("swipeleft", function() {
    directionx = -50;
    directiony = 0;
  });
  $(document).on("swiperight", function() {
    directionx = 50;
    directiony = 0;
  });
  $(document).on("swipeup", function() {
    directionx = 0;
    directiony = -50;
  });
  $(document).on("swipedown", function() {
    directionx = 0;
    directiony = 50;
  });
}

function status() {
  if (playerHitWall() || playerHitSelf()) {
    // window.location.href='MAINMENU.html' (leave for now)
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

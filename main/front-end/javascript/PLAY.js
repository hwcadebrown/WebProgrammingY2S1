const GAME_SPEED = 90;
const arena = document.getElementById('area');
$(arena).css('width', 1400);
$(arena).css('height', 700);

let directionx = 50;
let directiony = 0;

start();

function start() {
  $('#score').html(score = 0);

  train = [{
    x: 750,
    y: 350
  }];

  $('#area').empty();

  status();
  createperson();
  createperson2();
  addperson();
  attatchcarriage();

  $(document).on("keydown", changedirection);
}

function status() {
  if (playerHitWall() || playerHitSelf()) {
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

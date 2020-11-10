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

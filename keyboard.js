
function turnOnKeys() {
  document.addEventListener('keydown', function (event) {
    if (event.keyCode == 38) {
      the_key = MOVING_BACKWARDS;
    }
    else if (event.keyCode == 39) {
      the_key = MOVING_RIGHT;
    }
    else if (event.keyCode == 40) {
      the_key = MOVING_FORWARD;
    }
    else if (event.keyCode == 37) {
      the_key = MOVING_LEFT;
    } else {
      the_key = MOVING_NOT;
    }
  });

}

const CHECK_LEFT_KEYS = ['A', 'a', "ArrowLeft", '4'];
const CHECK_STOP_KEYS = ['S', 's', 'Clear', '5'];

function turnOnKeys() {
  console.log("turnOnKeys INTRO FINISHED", INTRO_FINISHED);
  function readKeys(event) {


    const the_key = event.key;
    if (g_move_continue == 0) {
      if (['Q', 'q', "Home", '7'].includes(the_key)) {
        g_move_direction = MOVINGx_NW;
        flashArrowBox('nw');
      } else if (['W', 'w', "ArrowUp", '8'].includes(the_key)) {
        g_move_direction = MOVINGx_N;
        flashArrowBox('n');
      } else if (['E', 'e', "PageUp", '9'].includes(the_key)) {
        g_move_direction = MOVINGx_NE;
        flashArrowBox('ne');
      } else if (['D', 'd', "ArrowRight", '6'].includes(the_key)) {
        g_move_direction = MOVINGx_E;
        flashArrowBox('e');
      } else if (['C', 'c', "PageDown", '3'].includes(the_key)) {
        g_move_direction = MOVINGx_SE;
        flashArrowBox('se');
      } else if (['X', 'x', "ArrowDown", '2'].includes(the_key)) {
        g_move_direction = MOVINGx_S;
        flashArrowBox('s');
      } else if (['Z', 'z', "End", '1'].includes(the_key)) {
        g_move_direction = MOVINGx_SW;
        flashArrowBox('sw');
      } else if (CHECK_LEFT_KEYS.includes(the_key)) {
        g_move_direction = MOVINGx_W;
        flashArrowBox('w');
      } else if (CHECK_STOP_KEYS.includes(the_key)) {
        stopMoving();
        g_move_direction = MOVINGx_NOT;
        direction_name = 'pressed-stop';
      } else if ([' '].includes(the_key)) {
        the_missile_1 = launchMissile(the_missile_1);
        direction_name = 'pressed-fire';
      } else {
        direction_name = 'unknown-key-dir asd';
        console.log("unkown KEY direction 234234 aa", the_key);
      }
      // if (direction_name != 'pressed-stop' && direction_name != 'pressed-fire' && direction_name != 'pressed-fire') {
      //   //   console.log("unkown KEY direction 234234 bb", direction_name);
      //   flashArrowBox(direction_name);
      // }
    }
  }



  document.addEventListener('keydown', readKeys, { passive: false });
}

const GO_LEFT_KEYS = ['A', 'a', "ArrowLeft", '4'];
const GO_STOP_KEYS = ['S', 's', 'Clear', '5'];

function turnOnKeys() {

  function readKeys(event) {
    const the_key = event.key;
    if (g_move_continue == 0) {
      if (['Q', 'q', "Home", '7'].includes(the_key)) {
        g_move_direction = MOVINGx_NW;
        direction_name = 'nw';
      } else if (['W', 'w', "ArrowUp", '8'].includes(the_key)) {
        g_move_direction = MOVINGx_N;
        direction_name = 'n';
      } else if (['E', 'e', "PageUp", '9'].includes(the_key)) {
        g_move_direction = MOVINGx_NE;
        direction_name = 'ne';
      } else if (['D', 'd', "ArrowRight", '6'].includes(the_key)) {
        g_move_direction = MOVINGx_E;
        direction_name = 'e';
      } else if (['C', 'c', "PageDown", '3'].includes(the_key)) {
        g_move_direction = MOVINGx_SE;
        direction_name = 'se';
      } else if (['X', 'x', "ArrowDown", '2'].includes(the_key)) {
        g_move_direction = MOVINGx_S;
        direction_name = 's';
      } else if (['Z', 'z', "End", '1'].includes(the_key)) {
        g_move_direction = MOVINGx_SW;
        direction_name = 'sw';
      } else if (GO_LEFT_KEYS.includes(the_key)) {
        g_move_direction = MOVINGx_W;
        direction_name = 'w';
      } else if (GO_STOP_KEYS.includes(the_key)) {
        g_move_direction = MOVINGx_NOT;
        direction_name = 'pressed-stop';
      } else if ([' '].includes(the_key)) {
        //   g_move_direction = MOVINGx_NOT;
        the_missile_1 = launchMissile(the_missile_1);
        direction_name = 'pressed-fire';
      } else {
        direction_name = 'unknown-key-dir';
        console.log("unkown KEY direction 234234 aa", the_key);
      }
      if (direction_name != 'pressed-stop' && direction_name != 'pressed-fire') {
        //   console.log("unkown KEY direction 234234 bb", direction_name);
        flashArrowBox(direction_name);
      }
    }
  }



  document.addEventListener('keydown', readKeys, { passive: false });
}
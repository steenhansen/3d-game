

/*

KEYS
TOUCHES
CLICKS

*/


const NW_KEYS = ['Q', 'q', "Home", '7'];
const N_KEYS = ['W', 'w', "ArrowUp", '8'];
const NE_KEYS = ['E', 'e', "PageUp", '9'];
const E_KEYS = ['D', 'd', "ArrowRight", '6'];
const SE_KEYS = ['C', 'c', "PageDown", '3'];
const S_KEYS = ['X', 'x', "ArrowDown", '2'];
const SW_KEYS = ['Z', 'z', "End", '1'];
const W_KEYS = ['A', 'a', "ArrowLeft", '4'];

const FLY_KEYS = ['=', '+'];
const SHOOT_KEYS = [' '];
const STOP_KEYS = ['S', 's', 'Clear', '5'];

function readKeys(event) {
  const the_key = event.key;
  if (g_move_continue == 0) {
    g_is_drifting = false;
    if (FLY_KEYS.includes(the_key)) {
      g_taking_off = true;
    } else if (NW_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_NW;
      flashArrow('nw');
    } else if (N_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_N;
      flashArrow('n');
    } else if (NE_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_NE;
      flashArrow('ne');
    } else if (E_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_E;
      flashArrow('e');
    } else if (SE_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_SE;
      flashArrow('se');
    } else if (S_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_S;
      flashArrow('s');
    } else if (SW_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_SW;
      flashArrow('sw');
    } else if (W_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_W;
      flashArrow('w');
    } else if (STOP_KEYS.includes(the_key)) {
      stopMoving();
      direction_name = 'pressed-stop';
    } else if (SHOOT_KEYS.includes(the_key)) {
      the_missile_1 = launchMissile(the_missile_1);
      direction_name = 'pressed-fire';
    } else {
      direction_name = 'unknown-key-dir asd';
      console.log("unkown KEY direction 234234 aa", the_key);
    }
  }
}

function turnOnKeys() {
  document.addEventListener('keydown', readKeys, { passive: false });
}
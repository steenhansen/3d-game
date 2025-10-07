

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

const FLY_KEYS = ['Escape'];
const JUMP_KEYS = [' '];




const SHOOT_KEYS = ['Enter'];
const STOP_KEYS = ['S', 's', 'Clear', '5'];

function readKeys(event) {
  const the_key = event.key;
  //console.log("the_key", the_key);
  if (!g_player.m_recoiling) {
    g_is_drifting = false;
    if (FLY_KEYS.includes(the_key)) {
      g_taking_off = true;                     /// function !!
    } else if (NW_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_NW;          /// function !!
      flashArrow('nw');
    } else if (N_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_N;          /// function !!
      flashArrow('n');
    } else if (NE_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_NE;           /// function !!
      flashArrow('ne');
    } else if (E_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_E;          /// function !!
      flashArrow('e');
    } else if (SE_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_SE;          /// function !!
      flashArrow('se');
    } else if (S_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_S;           /// function !!
      flashArrow('s');
    } else if (SW_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_SW;             /// function !!
      flashArrow('sw');
    } else if (W_KEYS.includes(the_key)) {
      g_move_direction = MOVINGx_W;        /// function !!
      flashArrow('w');
    } else if (STOP_KEYS.includes(the_key)) {
      stopMoving();
      direction_name = 'pressed-stop';
    } else if (JUMP_KEYS.includes(the_key)) {
      g_loop_state = LOOP_7_PLAY_JUMP_UP;        /// function !!
      direction_name = 'pressed-jump';
    } else if (SHOOT_KEYS.includes(the_key)) {
      g_missile = launchMissile(g_missile);           /// function !!
      direction_name = 'pressed-fire';

    } else {
      direction_name = 'unknown-key-dir asd';
      // console.log("unknown KEY direction 234234 aa", the_key);
    }
  }
}

function turnOnKeys() {
  document.addEventListener('keydown', readKeys, { passive: false });
}
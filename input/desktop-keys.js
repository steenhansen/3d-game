

/*

KEYS
TOUCHES
CLICKS

SVG-ESCAPE-BUTTON-RECT

SVG-ESCAPE-BUTTON-TEXT

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

function clickOnDirectionsSvg(event) {
  svg_target = event.target.id;

  const svg_parts = svg_target.split("-");
  button_click = svg_parts[1];
  if (button_click === 'Q') {
    // g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_NW;
    flashArrow('nw');
  } else if (button_click === 'W') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_N;
    flashArrow('n');
  } else if (button_click === 'E') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_NE;
    flashArrow('ne');
  } else if (button_click === 'A') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_W;
    flashArrow('w');
  } else if (button_click === 'S') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    stopMoving();              // should set g_is_drinfting = false;
    direction_name = 'pressed-stop';
  } else if (button_click === 'D') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_E;
    flashArrow('e');
  } else if (button_click === 'Z') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_SW;
    flashArrow('sw');
  } else if (button_click === 'X') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_S;
    flashArrow('s');
  } else if (button_click === 'C') {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_planet.m_move_direction = MOVINGx_SE;
    flashArrow('se');
  }

  else if (button_click === 'ESCAPE') {
    g_taking_off = true;                     /// function !!
  } else if (button_click === 'SPACE') {
    g_planet.m_planet_state = LOOP_7_PLAY_A_JUMP_START;
    direction_name = 'pressed-jump';
  } else if (button_click === 'ENTER') {
    g_missile = launchMissile(g_missile, g_player);           /// function !!
    direction_name = 'pressed-fire';
  }


}


const SHOOT_KEYS = ['Enter'];
const STOP_KEYS = ['S', 's', 'Clear', '5'];

function readKeys(event) {
  const the_key = event.key;
  if (!('t_recoil_count' in g_player)) {
    //g_is_drifting = false;
    delete g_planet.t_drift_direction;
    if (FLY_KEYS.includes(the_key)) {
      g_taking_off = true;                     /// function !!
    } else if (NW_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_NW;
      flashArrow('nw');
    } else if (N_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_N;
      flashArrow('n');
    } else if (NE_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_NE;
      flashArrow('ne');
    } else if (E_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_E;
      flashArrow('e');
    } else if (SE_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_SE;
      flashArrow('se');
    } else if (S_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_S;
      flashArrow('s');
    } else if (SW_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_SW;
      flashArrow('sw');
    } else if (W_KEYS.includes(the_key)) {
      g_planet.m_move_direction = MOVINGx_W;
      flashArrow('w');
    } else if (STOP_KEYS.includes(the_key)) {
      stopMoving();              // should set direction_name = 'pressed-stop';???
      direction_name = 'pressed-stop';
    } else if (JUMP_KEYS.includes(the_key)) {
      g_planet.m_planet_state = LOOP_7_PLAY_A_JUMP_START;
      direction_name = 'pressed-jump';
    } else if (SHOOT_KEYS.includes(the_key)) {
      g_missile = launchMissile(g_missile, g_player);           /// function !!
      direction_name = 'pressed-fire';

    } else {
      direction_name = 'unknown-key-dir asd';
    }
  }
}

function turnOnKeys() {
  document.addEventListener('keydown', readKeys, { passive: false });
}
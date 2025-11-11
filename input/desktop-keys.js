

/*

KEYS
TOUCHES
CLICKS

SVG-ESCAPE-BUTTON-RECT

SVG-ESCAPE-BUTTON-TEXT

*/



function read4Keys(event) {
  const the_key = event.key;
  if (!('t_recoil_count' in g_player)) {
    delete g_planet.t_drift_direction;
    if (E_KEYS.includes(the_key)) {
      //initiateMovement(MOVINGx_E);
      initiateMovement(MOVINGx_NE);
      flashArrow('e');
    } else if (W_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_NW);
      //initiateMovement(MOVINGx_W);
      flashArrow('w');
    } else if (JUMP_KEYS.includes(the_key)) {
      if (g_planet.m_part_state == PART_PLAY_20_NORMAL) {
        g_planet.m_part_state = PART_PLAY_22_JUMP_START;
        direction_name = 'pressed-jump';
      }
    } else if (SHOOT_KEYS.includes(the_key)) {
      g_missile = initMissileData(g_missile, g_player);           /// function !!
      direction_name = 'pressed-fire';

    } else {
      direction_name = 'read4Keys() unknown-key-dir asd';
    }
  }
}
const NW_KEYS = ['Q', 'q', "Home", '7'];
const N_KEYS = ['W', 'w', "ArrowUp", '8'];
const NE_KEYS = ['E', 'e', "PageUp", '9'];
const E_KEYS = ['D', 'd', "ArrowRight", '6'];
const SE_KEYS = ['C', 'c', "PageDown", '3'];
const S_KEYS = ['X', 'x', "ArrowDown", '2'];
const SW_KEYS = ['Z', 'z', "End", '1'];
const W_KEYS = ['A', 'a', "ArrowLeft", '4'];

const JUMP_KEYS = [' '];
const SHOOT_KEYS = ['Enter'];
const STOP_KEYS = ['S', 's', 'Clear', '5'];

function read11Keys(event) {
  const the_key = event.key;
  if (!('t_recoil_count' in g_player)) {
    delete g_planet.t_drift_direction;
    if (NW_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_NW);
      flashArrow('nw');
    } else if (N_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_N);
      flashArrow('n');
    } else if (NE_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_NE);
      flashArrow('ne');
    } else if (E_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_E);
      flashArrow('e');
    } else if (SE_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_SE);
      flashArrow('se');
    } else if (S_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_S);
      flashArrow('s');
    } else if (SW_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_SW);
      flashArrow('sw');
    } else if (W_KEYS.includes(the_key)) {
      initiateMovement(MOVINGx_W);
      flashArrow('w');
    } else if (STOP_KEYS.includes(the_key)) {
      stopMoving();              // should set direction_name = 'pressed-stop';???
      direction_name = 'pressed-stop';
    } else if (JUMP_KEYS.includes(the_key)) {


      if (g_planet.m_part_state == PART_PLAY_20_NORMAL) {
        g_planet.m_part_state = PART_PLAY_22_JUMP_START;
        direction_name = 'pressed-jump';
      }


    } else if (SHOOT_KEYS.includes(the_key)) {
      g_missile = initMissileData(g_missile, g_player);           /// function !!
      direction_name = 'pressed-fire';

    } else {
      direction_name = 'unknown-key-dir asd';
    }
  }
}

function turnOnKeys(readKeyFunc) {
  document.addEventListener('keydown', readKeyFunc, { passive: false });
}



function clickOnDirectionsSvg(event) {
  svg_target = event.target.id;

  const svg_parts = svg_target.split("-");

  svg_id_prefix = svg_parts[0] + '-' + svg_parts[1];
  button_click = svg_parts[1];
  if (svg_id_prefix === 'SVG-Q') {   //  Q=> svg_Q
    initiateMovement(MOVINGx_NW);
    flashArrow('nw');
  } else if (svg_id_prefix === 'SVG-W') {
    initiateMovement(MOVINGx_N);
    flashArrow('n');
  } else if (svg_id_prefix === 'SVG-E') {
    initiateMovement(MOVINGx_NE);
    flashArrow('ne');
  } else if (svg_id_prefix === 'SVG-A') {
    initiateMovement(MOVINGx_W);
    flashArrow('w');
  } else if (svg_id_prefix === 'SVG-S') {
    delete g_planet.t_drift_direction;
    stopMoving();              // should set g_is_drinfting = false;
    direction_name = 'pressed-stop';
  } else if (svg_id_prefix === 'SVG-D') {
    initiateMovement(MOVINGx_E);
    flashArrow('e');
  } else if (svg_id_prefix === 'SVG-Z') {
    initiateMovement(MOVINGx_SW);
    flashArrow('sw');
  } else if (svg_id_prefix === 'SVG-X') {
    initiateMovement(MOVINGx_S);
    flashArrow('s');
  } else if (svg_id_prefix === 'SVG-C') {
    initiateMovement(MOVINGx_SE);
    flashArrow('se');
  }

  else if (svg_id_prefix === 'SVG-ESCAPE') {
    jumpStartFly();

    /*
       if (g_planet.m_part_state == PART_PLAY_20_NORMAL) {
            g_planet.m_part_state = PART_PLAY_22_JUMP_START;
            direction_name = 'pressed-jump';
          }
    
          */

  } else if (svg_id_prefix === 'SVG-SPACE') {
    if (g_planet.m_part_state == PART_PLAY_20_NORMAL) {
      g_planet.m_part_state = PART_PLAY_22_JUMP_START;
      direction_name = 'pressed-jump';
    }
  } else if (svg_id_prefix === 'SVG-ENTER') {
    g_missile = initMissileData(g_missile, g_player);           /// function !!
    direction_name = 'pressed-fire';
  }


}

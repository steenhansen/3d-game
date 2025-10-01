function handleStartMobile(evt) {
  setTimeout(() => {
    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";
    waiting_for_start = false;
    fixMobile2();
  }, "1000");

  the_scene = document.getElementById('the-scene');
  try {
    the_scene.requestFullscreen();
    g_touch_id_start = 'start full screen click 779823432';
  } catch {
    //
  }
}


function match_landing_to_checkerboard() {
  travel_speed = TRAVEL_SPEED;
  for (i = 0; i < 15; i++) {
    //fieldRight(travel_speed);
  }
}

const MOVING_NOT = 0;

const MOVING_BACKWARDS = 1;
const MOVING_RIGHT = 2;
const MOVING_FORWARD = 3;
const MOVING_LEFT = 4;
const MOVING_STOP = 5;


let sprite_half_x = 128;
const area_width_half = 16 * 1048;               //16768

let player_x = area_width_half;

//let player_x = area_width_half - 256;






let player_y = 512; //+ 512;           // 512+512=1048
var the_key = MOVING_NOT;

const numDrawings = 90;


const area_width = 2 * area_width_half;          // 33536
const viewport_middle_x = area_width_half - 512; // 16256

const area_height_half = 512;
const area_height = 1024;
const viewport_middle_y = 512;


// new Float32Array(256);  // slower
let x_shift_list = Array(256).fill(0);


// new Float32Array(256);  // slower
let overUnder_accums = Array(256).fill(0);;


//////////////////////
let number_lines = start_stop_flip.length;


let closest_width_index = number_lines - 1;







// const INIT_Y_FLIP_COUNT = 4;

let keep_running = true;
let num_lines = number_lines;
let y_flip_count = INIT_Y_FLIP_COUNT;
let dist_count = 0;
let spin_count = 0;
let slow_count = 0;

let closest_depth_index = y_invert_lines.length - 1;
let LAST_SPIN_INDEX = 255;





let wait_sprite = 0;
let sprite_offset = 0;
let sprite_width = 256;

let sprite_parallaxed_x;
let viewport_x;






// +510 is on centerline
// +404 is in square DOES NOT WORK

// disappears
// at y=1048, left    
//      -243px       area_width_half - 694
//      +1011px      area_width_half + 692

// at y=512 
//    -144px     area_width_half - 4108
//    +912px     area_width_half + 4090;


disappear_left = area_width_half - 4108;  // so 256px wide leaves visual at -243px


//turnOnKeys();



/*
steps_left = x_dir * -1 * TRAVEL_SPEED * 3;   // matches the player
steps_left = x_dir * -1 * TRAVEL_SPEED * 6;   // twice matches the player


travel_speed = 1;
*/


function sceneRight(travel_speed) {
  if (g_is_drifting) {
    travel_speed = 1;       //one third screws everything up???
  }
  playerRight(travel_speed);
  fieldRight(travel_speed);
  moveSky(travel_speed, 'right');
}

function sceneLeft(travel_speed) {
  if (g_is_drifting) {
    travel_speed = 1;
  }
  playerLeft(travel_speed);
  fieldLeft(travel_speed);
  moveSky(travel_speed, 'left');
}

function sceneForward(travel_speed) {
  if (g_is_drifting) {
    travel_speed = 1;
  }
  playerForward(travel_speed);
  fieldForwards(travel_speed);
  moveSky(travel_speed, 'forward');
}

function sceneBackward(travel_speed) {
  if (g_is_drifting) {
    travel_speed = 1;
  }
  playerBackward(travel_speed);
  fieldBackwards(travel_speed);
  moveSky(travel_speed, 'backward');
}

function sceneStop() {
  moveSky('stop');
}



function randomDirection() {
  let rand_dir = Math.floor(Math.random() * 4);

  if (rand_dir == 0) {
    rand_direction = MOVINGx_NW;
  } else if (rand_dir == 1) {
    rand_direction = MOVINGx_NE;
  } else if (rand_dir == 2) {
    rand_direction = MOVINGx_SE;
  } else {
    rand_direction = MOVINGx_SW;
  }
  return rand_direction;
}


function startDrift() {
  if (isDebugging()) {
    return;
  }
  // if (typeof DBG_DRIFTING == 'string') {
  //   return;
  // }

  if (g_is_drifting) {
    let rand_dir = Math.floor(Math.random() * 1024);
    if (rand_dir == 1) {
      g_drift_direction = randomDirection();
    }
  } else {
    g_drift_countdown--;
    if (g_drift_countdown < 0) {
      g_drift_direction = randomDirection();   // random
      g_is_drifting = true;
      g_drift_countdown = DRIFT_CYCLES;       //177;
    }
  }
}


function sceneMove() {
  if (g_is_drifting) {
    g_move_direction = g_drift_direction;
    startDrift();
  }

  travel_speed = TRAVEL_SPEED;
  if (g_move_direction == MOVINGx_NW) {
    sceneLeft(travel_speed);
    sceneBackward(travel_speed);
  } else if (g_move_direction == MOVINGx_N) {
    sceneBackward(travel_speed);
  } else if (g_move_direction == MOVINGx_NE) {

    sceneRight(travel_speed);
    sceneBackward(travel_speed);
  } else if (g_move_direction == MOVINGx_E) {
    sceneRight(travel_speed);
  } else if (g_move_direction == MOVINGx_SE) {

    sceneRight(travel_speed);
    sceneForward(travel_speed);
  } else if (g_move_direction == MOVINGx_S) {
    sceneForward(travel_speed);
  } else if (g_move_direction == MOVINGx_SW) {
    sceneForward(travel_speed);
    sceneLeft(travel_speed);
  } else if (g_move_direction == MOVINGx_W) {
    sceneLeft(travel_speed);
  } else {
    startDrift();

  }
}
















let waiting_for_start = false;

function rightClick(the_event) {
  the_event.preventDefault();
  console.log('rightClick - shoot');
  return false;
}


function wheelScroll(the_event) {
  the_event.preventDefault();
  g_move_direction = MOVINGx_NOT;
  console.log('wheelScroll - stop');
  return false;
}



function animateScene(enemy_list, pylon_list, hole_list) {
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return LOOP_6_PLAY;
  }
  if (g_player.m_enemy_collision) {
    setCssVar("--cracked-glass-display", "block");
  }
  doBounce(g_player);
  sceneMove();
  plyon_list = drawPylons(pylon_list);
  g_missile = missileAdvance(g_missile, g_player);
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return LOOP_6_PLAY;
  }
  enemy_list = drawEnemies(enemy_list, g_player);

  hole_list = drawHoles(hole_list, g_player);


  if (keep_running) {
    affixLeftRight();
  }

  enemy_list = missileHitEnemies(g_missile, enemy_list);
  [g_player, pylon_list] = playerHitPylons(g_player, pylon_list);
  [g_missile, pylon_list] = missileHitPylons(g_missile, pylon_list);
  [enemy_list, pylon_list] = enemiesHitPylons(enemy_list, pylon_list);


  g_player = playerHitEnemies(g_player, enemy_list);
  g_player = playerHitHoles(g_player, hole_list);


  enemy_list = enemyHitHoles(enemy_list, hole_list);

  return [enemy_list, pylon_list];
}

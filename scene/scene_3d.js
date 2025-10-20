

const frame_filter_strength = 20;
var the_frame_time = 0;
var the_last_loop = new Date;
var the_start_loop;
var the_fps = 0;                          // more better name and location?

function timeFrames() {
  the_start_loop = new Date;
  var this_frame_time = the_start_loop - the_last_loop;
  the_frame_time += (this_frame_time - the_frame_time) / frame_filter_strength;
  the_last_loop = the_start_loop;
  the_fps = (1000 / the_frame_time).toFixed(1);
}



var draw_time = true;
var draw_speed = 'every-frame';    // 'every-second-frame

function animateScene(the_player, enemy_list, pylon_list, hole_list) {
  timeFrames();
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return LOOP_7_PLAY_NORMAL;
  }
  hitCracks(the_player);
  the_player = doRecoil(the_player);
  the_player = sceneMove(the_player);
  plyon_list = drawPylons(the_player, pylon_list);
  g_missile = missileAdvance(g_missile, the_player);
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return LOOP_7_PLAY_NORMAL;
  }
  enemy_list = drawEnemies(enemy_list, the_player);
  hole_list = drawHoles(hole_list, the_player);

  /////
  if (the_fps < 50) {   // want 60
    draw_speed = 'every-second-frame';
  }
  if (the_fps > 59) {   // want 60
    draw_speed = 'every-frame';
  }

  if (draw_speed == 'every-second-frame') {
    if (draw_time) {
      affixLeftRight();
      draw_time = false;
    } else {
      draw_time = true;
    }
  } else {
    affixLeftRight();
  }

  //////


  enemy_list = missileHitEnemies(g_missile, enemy_list);
  [the_player, pylon_list] = playerHitPylons(the_player, pylon_list);
  [g_missile, pylon_list] = missileHitPylons(g_missile, pylon_list);
  [enemy_list, pylon_list] = enemiesHitPylons(enemy_list, pylon_list);
  the_player = playerHitEnemies(the_player, enemy_list);
  [the_player, g_hit_hole_last_move] = playerHitHoles(the_player, hole_list);
  enemy_list = enemyHitHoles(enemy_list, hole_list);

  return [the_player, enemy_list, pylon_list];
}





function handleStartMobile(evt) {
  setTimeout(() => {
    g_planet.m_planet_state = LOOP_1_BEGIN;

    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";
    waiting_for_start = false;
    fixMobile2();
  }, "1000");


  //unHideDiv('the-scene');
  the_scene = document.getElementById('the-scene');
  try {
    //  hideDiv('start-mobile');
    the_scene.requestFullscreen();
    g_touch_id_start = 'start full screen click 779823432';

  } catch {
    //
  }
}



//  MAX_CRACKS
function hitCracks(the_player) {
  number_cracks = the_player.m_num_cracks;
  if (number_cracks == 0 || 't_is_dying' in the_player) {
    setCssVar("--cracked-glass-display", "none");
  } else {
    if (number_cracks > MAX_CRACKS) {
      number_cracks = MAX_CRACKS;
    }
    glass_opacity = number_cracks / 6;
    cracked_image = `url('../images/cracks-${number_cracks}.png`;
    setCssVar("--cracked-glass-display", "block");
    setCssVar("--cracked-glass-opacity", glass_opacity);
    setCssVar("--cracked-glass-image", cracked_image);

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




function sceneLeft(the_player, travel_speed, diagonal_weight) {
  the_player = playerLeft(the_player, travel_speed, diagonal_weight);
  fieldLeft(travel_speed, diagonal_weight);
  moveSky(travel_speed, 'left');
  return the_player;
}

function sceneForward(the_player, travel_speed) {
  the_player = playerForward(the_player, travel_speed);
  fieldForwards(travel_speed);
  moveSky(travel_speed, 'forward');
  return the_player;
}

function sceneBackward(the_player, travel_speed) {
  the_player = playerBackward(the_player, travel_speed);
  fieldBackwards(travel_speed);
  moveSky(travel_speed, 'backward');
  return the_player;
}

function sceneRight(the_player, travel_speed, diagonal_weight) {
  the_player = playerRight(the_player, travel_speed, diagonal_weight);
  fieldRight(travel_speed, diagonal_weight);
  moveSky(travel_speed, 'right');
  return the_player;
}

const DIAGONAL_NOT = 3;     // NB cannot do square root of 2 for diagonal damping movement because all integers
const DIAGONAL_DAMPER = 2;

function sceneMove(the_player) {

  travel_speed = TRAVEL_SPEED;  //4
  if ('t_drift_direction' in g_planet) {
    console.log("in scenemove t_drift_direction", g_planet.t_drift_direction);
    //if (g_is_drifting) {
    //g_planet.m_move_direction = g_drift_direction;
    startDrift();
    travel_speed = 1;
    move_dir = g_planet.t_drift_direction;
  } else {
    // console.log("in scenemove m_move_direction", g_planet.m_move_direction);
    move_dir = g_planet.m_move_direction;
  }
  if (move_dir == MOVINGx_NW) {
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneBackward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_N) {
    the_player = sceneBackward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_NE) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneBackward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_E) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_NOT);
  } else if (move_dir == MOVINGx_SE) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneForward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_S) {
    the_player = sceneForward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_SW) {
    the_player = sceneForward(the_player, travel_speed);
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_DAMPER);
  } else if (move_dir == MOVINGx_W) {
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_NOT);
  } else {
    startDrift();

  }
  return the_player;
}
















let waiting_for_start = false;

function rightClick(the_event) {
  the_event.preventDefault();
  return false;
}


function wheelScroll(the_event) {
  the_event.preventDefault();
  g_planet.m_move_direction = MOVINGx_NOT;
  return false;
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

  // if (g_is_drifting) {
  // console.log("startDrift");
  if ('t_drift_direction' in g_planet) {
    let rand_dir = Math.floor(Math.random() * NEW_DIRECTION_CHANCE_WHEN_DRIFTING);
    if (rand_dir == 1) {
      rand_drift_direction = randomDirection();
      //  console.log("rand_drift_direction", rand_drift_direction);
      g_planet.t_drift_direction = rand_drift_direction;
    }
  } else {
    g_drift_countdown--;
    if (g_drift_countdown < 0) {
      //g_drift_direction = randomDirection();   // random
      // g_is_drifting = true;
      g_planet.t_drift_direction = randomDirection();
      g_drift_countdown = DRIFT_START_CHANCE_WHEN_STOPPED;       //177;
    }
  }
}

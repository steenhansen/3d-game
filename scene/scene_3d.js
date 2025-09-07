
// https://gist.github.com/addyosmani/5434533

var limitLoop = function (fn, fps) {
  var then = Date.now();
  // custom fps, otherwise fallback to 60
  fps = fps || 60;
  var interval = 1000 / fps;

  return (function loop(_time) {
    requestAnimationFrame(loop);
    var now = Date.now();
    var delta = now - then;
    if (delta > interval) {
      then = now - (delta % interval);
      fn();
    }
  }(0));
};


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









let keep_running = true;
let num_lines = number_lines;
let y_flip_count = 4;
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











function sceneRight(travel_speed) {
  if (g_is_drifting) {
    travel_speed = 1;
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
  let rand_dir = Math.floor(Math.random() * 8);
  if (rand_dir == 0) {
    rand_direction = MOVINGx_NW;
  } else if (rand_dir == 1) {
    rand_direction = MOVINGx_N;
  } else if (rand_dir == 2) {
    rand_direction = MOVINGx_NE;
  } else if (rand_dir == 3) {
    rand_direction = MOVINGx_E;
  } else if (rand_dir == 4) {
    rand_direction = MOVINGx_SE;
  } else if (rand_dir == 5) {
    rand_direction = MOVINGx_S;
  } else if (rand_dir == 6) {
    rand_direction = MOVINGx_SW;
  } else if (rand_dir == 7) {
    rand_direction = MOVINGx_W;
  }
  return rand_direction;
}


function startDrift() {
  //console.log("startDrift TOP", g_is_drifting);

  if (g_is_drifting) {
    let rand_dir = Math.floor(Math.random() * 1024);
    //   console.log("ddd", rand_dir);
    if (rand_dir == 1) {
      g_drift_direction = randomDirection();
    }
  } else {
    g_drift_countdown--;
    //console.log("startDrift g_drift_countdown", g_drift_countdown);
    if (g_drift_countdown < 0) {
      g_drift_direction = randomDirection();   // random
      g_is_drifting = true;
      g_drift_countdown = 177;
      //  console.log("startDrift true", g_is_drifting);
    }
  }
}


function sceneMove() {
  if (g_is_drifting) {
    g_move_direction = g_drift_direction;
    startDrift();
  }
  // console.log("the_scene_move");
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
    // console.log("no input is go right");
  }
}

function checkCollisions() {
  collision_2 = hasCollided(column_3a, g_player, COLLISION_SIZES);
  if (collision_2 && g_move_continue == 0) {
    g_move_continue = 24;
    new_direction = objectBounced(g_move_direction);
    g_move_direction = new_direction;
  }
}

function doBounce() {
  if (g_move_continue > 1) {
    g_move_continue--;
  } else if (g_move_continue == 1) {
    g_move_continue--;
    g_move_direction = MOVINGx_NOT;
  } else {
  }
}





function handleStartMobile(evt) {
  console.log("hadleStartMobile");
  setTimeout(() => {
    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";
    waiting_for_start = false;
    fixMobile2();
    console.log("Delayed for 1 second.");
  }, "1000");

  the_scene = document.getElementById('the-scene');
  try {
    the_scene.requestFullscreen();
  } catch {
    console.log("FILA");
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



function animateScene(timestamp) {
  doBounce();
  sceneMove();
  setColumns();
  checkCollisions();
  //if (!the_missile_1.m_expired) {
  missileSet('missile-1', the_missile_1, g_player);
  the_missile_1 = missileAdvance(the_missile_1);
  //}
  enemy_1 = enemySet('enemy-1', enemy_1, g_player);
  enemy_1 = enemyStep(enemy_1);
  enemy_2 = enemySet('enemy-2', enemy_2, g_player);
  enemy_2 = enemyStep(enemy_2);
  //objectMomentum(the_enemy);
  // if (!enemy_1.m_dead) {
  //   enemy_1 = killEnemy(enemy_1);
  // }
  if (keep_running) {
    affixLeftRight();
    //  requestAnimationFrame(animateScene);
  }
  fixDevice();

  // wrong place ? should be in index
  if (g_taking_off) {
    return 'ani-after-play';
  } else {
    return 'ani-play';
  }
}

orientPhone();

limitLoop(animateScene, 60);  // for mobile
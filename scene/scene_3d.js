
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


//let x_shift_list = new Float32Array(256);  // slower
let x_shift_list = Array(256).fill(0);


//let overflow_accums = new Float32Array(256);  // slower
let overflow_accums = [];


//////////////////////
let number_lines = start_stop_flip.length;
let closest_width_index = number_lines - 1;





let right_stop;
let left_stop;



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

turnOnKeys();











function sceneRight(travel_speed) {
  playerRight(travel_speed);
  fieldRight(travel_speed);
  moveSky(travel_speed, 'right');
}

function sceneLeft(travel_speed) {
  playerLeft(travel_speed);
  fieldLeft(travel_speed);
  moveSky(travel_speed, 'left');
}

function sceneForward(travel_speed) {
  playerForward(travel_speed);
  fieldForwards(travel_speed);
  moveSky(travel_speed, 'forward');
}

function sceneBackward(travel_speed) {
  playerBackward(travel_speed);
  fieldBackwards(travel_speed);
  moveSky(travel_speed, 'backward');
}

function sceneStop() {
  moveSky('stop');
}

function sceneMove() {
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
  setTimeout(() => {
    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";


    turnOnHammerGestures('the-scene');

    waiting_for_start = false;
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

  enemySet('enemy-1', the_enemy_1, g_player);
  the_enemy_1 = enemyStep(the_enemy_1);
  enemySet('enemy-2', the_enemy_2, g_player);
  the_enemy_2 = enemyStep(the_enemy_2);





  //objectMomentum(the_enemy);
  if (!the_enemy_1.m_dead) {
    the_enemy_1 = killEnemy(the_enemy_1);
  }
  if (keep_running) {
    affixLeftRight();
    //  requestAnimationFrame(animateScene);
  }
  fixDevice();
}

orientPhone();

limitLoop(animateScene, 60);  // for mobile
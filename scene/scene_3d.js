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

let x_shift_list = Array(256).fill(0);

//////////////////////
let number_lines = start_stop_flip.length;
let closest_width_index = number_lines - 1;





let right_stop;
let left_stop;
let overflow_accums = [];


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


function animateScene(timestamp) {
  enemyMove(the_enemy);
  enemySet(the_enemy, 'enemy-id');

  enemyMove(the_missile);
  missileSet(the_missile, 'missile-id');  // need constant js code to cause blinks

  /*
    if (TEST_SCENE) {
      the_move = getTestMove();
    } else {
      the_move = the_key;
    }

  
  
    travel_speed = TRAVEL_SPEED;
    if (the_move == MOVING_FORWARD) {
      sceneForward(travel_speed);
    } else if (the_move == MOVING_RIGHT) {
      sceneRight(travel_speed);
    } else if (the_move == MOVING_BACKWARDS) {
      sceneBackward(travel_speed);
    } else if (the_move == MOVING_LEFT) {
      sceneLeft(travel_speed);
    } else {
      // console.log("no input is go right");
      //sceneRight(travel_speed);
      //the_move = MOVING_RIGHT;
    }
  
  
  
    if (the_move != MOVING_NOT || DRAW_AT_LEAST_ONCE) {
      columnSet(column_point_0, 'the_columns_0');
      columnSet(column_point_1, 'the_columns_1');
      columnSet(column_point_2, 'the_columns_2');
      columnSet(column_point_3, 'the_columns_3');
  
      columnSet(column_point_4, 'the_columns_4');
      columnSet(column_point_5, 'the_columns_5');
      columnSet(column_point_6, 'the_columns_6');
      columnSet(column_point_7, 'the_columns_7');
  
  
  
  
      DRAW_AT_LEAST_ONCE = false;
    }
  
    // missileSet(the_missile, 'missile-id');  // need constant js code to cause blinks
  
  */
  travel_speed = TRAVEL_SPEED;
  if (g_move_direction == MOVINGx_NW) {
    sceneLeft(travel_speed);
    sceneBackward(travel_speed);
    //  sceneForward(travel_speed);
  } else if (g_move_direction == MOVINGx_N) {
    sceneBackward(travel_speed);
    //  sceneRight(travel_speed);
  } else if (g_move_direction == MOVINGx_NE) { //MOVING_BACKWARDS) {
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
    //sceneRight(travel_speed);
    //the_move = MOVING_RIGHT;
  }
  if (g_move_direction != MOVING_NOT || DRAW_AT_LEAST_ONCE) {
    columnSet(column_point_0, 'the_columns_0');
    columnSet(column_point_1, 'the_columns_1');
    columnSet(column_point_2, 'the_columns_2');
    columnSet(column_point_3, 'the_columns_3');

    columnSet(column_point_4, 'the_columns_4');
    columnSet(column_point_5, 'the_columns_5');
    columnSet(column_point_6, 'the_columns_6');
    columnSet(column_point_7, 'the_columns_7');




    DRAW_AT_LEAST_ONCE = false;
  }

  if (keep_running) {
    affixLeftRight();
    requestAnimationFrame(animateScene);
  } else {
  }
}

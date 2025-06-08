


const MOVING_NOT = 0;

const MOVING_BACKWARDS = 1;
const MOVING_RIGHT = 2;
const MOVING_FORWARD = 3;
const MOVING_LEFT = 4;
const MOVING_STOP = 5;


let sprite_half_x = 128;
const area_width_half = 16 * 1048;               //16768
let player_x = area_width_half;
let player_y = 512 + 512;           // 512+512=1048
var the_key = 0;

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
  checkersRight(travel_speed);
  moveSky(travel_speed, 'right');
}

function sceneLeft(travel_speed) {
  playerLeft(travel_speed);
  checkersLeft(travel_speed);
  moveSky(travel_speed, 'left');
}

function sceneForward(travel_speed) {
  playerForward(travel_speed);
  checkersForwards(travel_speed);
  moveSky(travel_speed, 'forward');
}

function sceneBackward(travel_speed) {
  playerBackward(travel_speed);
  checkersBackwards(travel_speed);
  moveSky(travel_speed, 'backward');
}

function sceneStop() {
  moveSky('stop');
}


function animateScene(timestamp) {
  //console.log("X asd player.x", the_player.x);
  if (TEST_SCENE) {
    the_move = getTestMove();
    //console.log("the_move", the_move);
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
    sceneRight(travel_speed);
    the_move = MOVING_RIGHT;
  }

  if (the_move != MOVING_NOT || DRAW_AT_LEAST_ONCE) {
    setPolygon(column_point_0, 'the_columns_0');
    setPolygon(column_point_1, 'the_columns_1');
    setPolygon(column_point_2, 'the_columns_2');
    setPolygon(column_point_3, 'the_columns_3');

    setPolygon(column_point_4, 'the_columns_4');
    setPolygon(column_point_5, 'the_columns_5');
    setPolygon(column_point_6, 'the_columns_6');
    setPolygon(column_point_7, 'the_columns_7');

    DRAW_AT_LEAST_ONCE = false;
  }



  // setPolygon(column_point_2_5, 'the_columns_2_5');
  //setPolygon(column_point_4, 'the_columns_4');

  //setPolygon(column_point_5, 'the_columns_5');  // overunder check



  // setPolygon(column_point_6, 'the_columns_6');
  // setPolygon(column_point_7, 'the_columns_7');
  // setPolygon(column_point_8, 'the_columns_8');
  // setPolygon(column_point_9, 'the_columns_9');
  // setPolygon(column_point_10, 'the_columns_10');
  // setPolygon(column_point_11, 'the_columns_11');
  // setPolygon(column_point_12, 'the_columns_12');
  // setPolygon(column_point_13, 'the_columns_13');
  // setPolygon(column_point_14, 'the_columns_14');
  // setPolygon(column_point_15, 'the_columns_15');
  // setPolygon(column_point_16, 'the_columns_16');



  // spriteSvg(cube_x, { x: player_x, y: player_y });
  // spriteSvg(the_bullet, { x: player_x, y: player_y });

  if (keep_running) {
    affixLeftRight();
    requestAnimationFrame(animateScene);
  } else {
  }
}

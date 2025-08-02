

let g_move_direction = "west";


let HALF_VIEW_WIDTH = 512;
let BOTTOM_FIELD = 512;


let BACK_VANISH_POINT = [511, 256];


let COLUMN_WIDTH = 256;
let HALF_COLUMN_WIDTH = COLUMN_WIDTH / 2;



TEST_SCENE = false;

TESTING_STOPPED = false;



column_3_b_t = false;


const TRAVEL_SPEED = 4;   //1slow  4normal  16fast  32extreme



let SCENE_MIDDLE_X = 51000 / 2; // 20500    
let SCENE_WIDTH = 51000;




let SCENE_X_MIN = 0;
let SCENE_X_MAX = 51000;

let SCENE_Y_MIN = 0;
let SCENE_Y_MAX = 778;



// zero_quart_start
let ZERO_QUARTER = SCENE_WIDTH / 4 * 0;
let ONE_QUARTER = SCENE_WIDTH / 4 * 1;
let TWO_QUARTER = SCENE_WIDTH / 4 * 2;
let THREE_QUARTER = SCENE_WIDTH / 4 * 3;
// four_quart_start



let LEFT_X_LOW = 'LEFT_X_LOW';
let RIGHT_X_HIGH = 'RIGHT_X_HIGH';

let DRAW_AT_LEAST_ONCE = true;

// function getCssVar(css_id) {
//   console.log("funciton --------- ", document.documentElement);
//   const css_value = getComputedStyle(document.documentElement).getPropertyValue(css_id);
//   return css_value;
// }
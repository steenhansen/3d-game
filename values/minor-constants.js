const ROOM_DEPTH = 16;   // old ==16
let TILE_WIDTH = 256;


const SVG_ARROWS_COLOR = 'grey';


const EXIT_ON_COLOR = 'lime';
const EXIT_OFF_COLOR = 'red';
const EXIT_OFF_TRANSLUCENT = "#ff000088";

const MISSILE_LIFETIME = 96;

const NEW_DIRECTION_CHANCE_WHEN_DRIFTING = 1024;


const DRIFT_START_CHANCE_WHEN_STOPPED = 100000;     //10;


let MISSILE_START_X = 400;
let MISSILE_START_Y = 168;


let pylon_3A_START_X = 1365 - 512;
let s = 449;           //    192 400;
let pylon_3B_START_X = 1365;
let pylon_3B_START_Y = 449;              // 192 400;
let pylon_3C_START_X = 1365 + 512;
let pylon_3C_START_Y = 449;              // 192 400;

let pylon_2A_START_X = 4096 - 256;
let pylon_2A_START_Y = 384;                //400;
let pylon_2B_START_X = 4096 + 256;
let pylon_2B_START_Y = 384;                    //400;


// const PLAYER_TRAVEL_SPEED = 4;   //1sluggish  4slow  8normal 16fast  32extreme



const PYLON_PIXEL_DEPTH = 30;
const ENEMY_PIXEL_DEPTH = 30;
const MISSILE_PIXEL_DEPTH = 30;
const HOLE_PIXEL_DEPTH = 50;
const WIDTH_OF_SPRITE = 256;

const DEPTH_OF_SQUARE = 50;
const WIDTH_OF_SQUARE = 256;


const MOVINGx_NOT = 0;

const MOVINGx_NW = 1;
const MOVINGx_N = 2;
const MOVINGx_NE = 3;
const MOVINGx_E = 4;
const MOVINGx_SE = 5;
const MOVINGx_S = 6;
const MOVINGx_SW = 7;
const MOVINGx_W = 8;
let PLAYER_START_DIR = MOVINGx_NOT;

let SIGN_TEXT_FIGURE = 16;

let PYLON_NUMBER_TWIRLS = 400;
let PYLON_OUTLINE_ADJUST = 3;
let PYLON_HIT_FLASH_COUNT = 17;


const HIT_FLASH_PYLON = 23;


let HALF_VIEW_WIDTH = 512;
let BOTTOM_FIELD = 512;
let BACK_VANISH_POINT = [511, DEPTH_LINES];
let LEFT_RIGHT_BOUNCE_X_INVERSION = -1;




let HEAD_ON_X_DIFF = TILE_WIDTH / 2;
let HALF_TILE_WIDTH = TILE_WIDTH / 2;





const FLY_STEP_SLOW = 0.5;
const FLY_STEP_FAST = 5;


//TESTING_STOPPED = false;





let SCENE_X_MIN = 0;
let SCENE_Y_MIN = 0;








let LEFT_X_LOW = 'LEFT_X_LOW';
let RIGHT_X_HIGH = 'RIGHT_X_HIGH';

let DRAW_AT_LEAST_ONCE = true;



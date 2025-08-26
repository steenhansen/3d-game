let SCENE_Y_MAX = 768;
let SCENE_WIDTH = 8192;


let WHITE_BLACK_GRADIENT = ["white", "black"];  // ffffff, 000000
let LIME_FUCHSIA_GRADIENT = ["Lime", "Fuchsia"];  //  00ff00,   FF00FF



/*
    ----------------6827           
        |-2731-|      |
    ---------4096     |
               |      |
    1/6 X  1/3 X  1/3 X  1/6
        |
      1365
   
*/



let COLUMN_3A_START_X = 1365 - 512;
let COLUMN_3A_START_Y = 400;
let COLUMN_3B_START_X = 1365;
let COLUMN_3B_START_Y = 400;
let COLUMN_3C_START_X = 1365 + 512;
let COLUMN_3C_START_Y = 400;

let COLUMN_2A_START_X = 4096 - 256;
let COLUMN_2A_START_Y = 400;
let COLUMN_2B_START_X = 4096 + 256;
let COLUMN_2B_START_Y = 400;

let COLUMN_1A_START_X = 6827;
let COLUMN_1A_START_Y = 400;



let NUMBER_TWIRLS = 400;


let PLAYER_START_X = 4500;
let PLAYER_START_Y = 700;


let TILE_WIDTH = 256;


let HALF_VIEW_WIDTH = 512;
let BOTTOM_FIELD = 512;


let BACK_VANISH_POINT = [511, 256];






const MOVINGx_NOT = 0;

const MOVINGx_NW = 1;
const MOVINGx_N = 2;
const MOVINGx_NE = 3;
const MOVINGx_E = 4;
const MOVINGx_SE = 5;
const MOVINGx_S = 6;
const MOVINGx_SW = 7;
const MOVINGx_W = 8;


let HEAD_ON_X_DIFF = TILE_WIDTH / 2;
let HALF_TILE_WIDTH = TILE_WIDTH / 2;

const field_width = SCENE_WIDTH;
const room_width = TILE_WIDTH;

const field_depth = SCENE_Y_MAX;
const room_depth = 16;


let COLLISION_SIZES = [field_width, room_width, field_depth, room_depth];

ZERO_10 = [+0, +0, +0, +0, +0, +0, +0, +0, +0, +0];
LEFT_10 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
RGHT_10 = [+1, +1, +1, +1, +1, +1, +1, +1, +1, +1];
AWAY_10 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
NEAR_10 = [+1, +1, +1, +1, +1, +1, +1, +1, +1, +1];

LEFT_100 = [LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10].flat();



RGHT_100 = [RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10].flat();




AWAY_100 = [AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10].flat();


NEAR_100 = [NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10].flat();



ZERO_100 = [ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10].flat();




AWAY_500 = [AWAY_100, AWAY_100, AWAY_100, AWAY_100, AWAY_100].flat();


NEAR_500 = [NEAR_100, NEAR_100, NEAR_100, NEAR_100, NEAR_100].flat();



ZERO_500 = [ZERO_100, ZERO_100, ZERO_100, ZERO_100, ZERO_100].flat();
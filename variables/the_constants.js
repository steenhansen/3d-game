let SCENE_Y_MAX = 768;
let SCENE_WIDTH = 8192;

/*
 0 1
 2 3
*/

let COLUMN_0_START_X = 4000;
let COLUMN_0_START_Y = 400;

let COLUMN_1_START_X = 5000;
let COLUMN_1_START_Y = 400;

let COLUMN_2_START_X = 3900;
let COLUMN_2_START_Y = 600;

let COLUMN_3_START_X = 5100;
let COLUMN_3_START_Y = 600;


/*
   0
  3 1
   2
*/
let PLUS_0_START_X = 1000;
let PLUS_0_START_Y = 200;

let PLUS_1_START_X = 1500;
let PLUS_1_START_Y = 400;

let PLUS_2_START_X = 1000;
let PLUS_2_START_Y = 600;

let PLUS_3_START_X = 500;
let PLUS_3_START_Y = 400;




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
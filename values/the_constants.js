
const TRAVEL_SPEED = 4;   //1sluggish  4slow  8normal 16fast  32extreme


const MISSILE_LIFETIME = 96;


let SCENE_Y_MAX = 768;
let SCENE_WIDTH = 8192;

const MOVINGx_NOT = 0;

const MOVINGx_NW = 1;
const MOVINGx_N = 2;
const MOVINGx_NE = 3;
const MOVINGx_E = 4;
const MOVINGx_SE = 5;
const MOVINGx_S = 6;
const MOVINGx_SW = 7;
const MOVINGx_W = 8;


const SUN_SYSTEM_COLS = [
    //   star         ball         sqaure       triangle
    ['#a0d91f', '#1FD9B5', '#581FD9', '#D91F43'],                 //0
    // too similar ['#b5d226', '#26D299', '#4326D2', '#D2265F'],
    ['#cbca2b', '#2BCB7A', '#2B2CCB', '#CB2B7C'],                 //1
    // too similar ['#daba2f', '#2FDA64', '#2F4FDA', '#DA2FA4'],
    ['#e3a827', '#27E34A', '#2762E3', '#E327C0'],                 //2
    //  too similar['#e8901f', '#1FE82C', '#1F77E8', '#E81FDB'],
    ['#e77629', '#3BE729', '#299AE7', '#D529E7'],                 //3
    // too similar ['#e95b2c', '#5BE92C', '#2CBAE9', '#BA2CE9'],
    ['#ed3f27', '#72ED27', '#27D5ED', '#A227ED'],                 //4
    // too similar ['#f61e18', '#81F618', '#18F0F6', '#8D18F6']
    ['#ffff00', '#000000', '#808080', '#ffffff'],                 //5
    ['#ffff00', '#aa0000', '#00ff00', '#0000ff'],                 //6
    ['#FF6A00', '#808080', '#ffffff', '#000000'],                 //7
    ['#FF6A00', '#00ff00', '#0000aa', '#ff0000'],                 //8
    ['#FF006A', '#ffffff', '#000000', '#808080'],                 //9
    ['#FF006A', '#0000ff', '#ff0000', '#00aa00'],                 //10
];


//255  106  0 '#FF6A00'
// 0 106 255 

let WHITE_BLACK_GRADIENT = ["white", "black"];  // ffffff, 000000
let LIME_FUCHSIA_GRADIENT = ["Lime", "Fuchsia"];  //  00ff00,   FF00FF


// f e d c b a 9
/*
    ----------------6827           
        |-2731-|      |
    ---------4096     |
               |      |
    1/6 X  1/3 X  1/3 X  1/6
        |
      1365
   
*/

let ENEMY_BIRTH_X = 400;
let ENEMY_BIRTH_Y = 100;



let COLUMN_3A_START_X = 1365 - 512;
let COLUMN_3A_START_Y = 192;           //    400;
let COLUMN_3B_START_X = 1365;
let COLUMN_3B_START_Y = 192;              //400;
let COLUMN_3C_START_X = 1365 + 512;
let COLUMN_3C_START_Y = 192;              //400;

let COLUMN_2A_START_X = 4096 - 256;
let COLUMN_2A_START_Y = 384;                //400;
let COLUMN_2B_START_X = 4096 + 256;
let COLUMN_2B_START_Y = 384;                    //400;

let COLUMN_1A_START_X = 6827; // 6827;
let COLUMN_1A_START_Y = 576;           //400;



let NUMBER_TWIRLS = 400;

let PLAYER_START_DIR = MOVINGx_NOT;
let PLAYER_START_X = 400; // 3960 hit on right side

let PLAYER_START_Y = 222;  // NB qubert   goto right for errors


let MISSILE_START_X = 400;
let MISSILE_START_Y = 168;




let TILE_WIDTH = 256;


let HALF_VIEW_WIDTH = 512;
let BOTTOM_FIELD = 512;


let BACK_VANISH_POINT = [511, 256];









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
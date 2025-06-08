
let HALF_VIEW_WIDTH = 512;
let BOTTOM_CHECKERBOARD = 512;

let BACK_VANISH_POINT = [511, 256];


let COLUMN_WIDTH = 256;
let HALF_COLUMN_WIDTH = COLUMN_WIDTH / 2;      // 128

let COLUMN_DEPTH = 96;
let HALF_COLUMN_DEPTH = COLUMN_DEPTH / 2;   //48


TEST_SCENE = false;

TESTING_STOPPED = false;



column_3_b_t = false;


const TRAVEL_SPEED = 4;   //1slow  4normal  16fast  32extreme

//let SCENE_MIDDLE_X = 16384;
//let SCENE_MIDDLE_X = 32768;  /// 65536;  //32768;
//let SCENE_WIDTH = 32768;  //32768;

//let SCENE_MIDDLE_X = 32768;
//let SCENE_WIDTH = 32768;


let SCENE_MIDDLE_X = 51000 / 2; // 20500                          //32768; /// 65536;
let SCENE_WIDTH = 51000;                                //65536; // 131072; /// 65536;


// 51000/4= 12750



let SCENE_X_MIN = 0;  //SCENE_MIDDLE_X - SCENE_WIDTH / 2;
let SCENE_X_MAX = 51000; // 65536;     //SCENE_MIDDLE_X + SCENE_WIDTH / 2;

// zero_quart_start
let ZERO_QUARTER = SCENE_WIDTH / 4 * 0;
let ONE_QUARTER = SCENE_WIDTH / 4 * 1;
let TWO_QUARTER = SCENE_WIDTH / 4 * 2;
let THREE_QUARTER = SCENE_WIDTH / 4 * 3;
// four_quart_start


//console.log("E quarters", ZERO_QUARTER, ONE_QUARTER, TWO_QUARTER, THREE_QUARTER);

let LEFT_X_LOW = 'LEFT_X_LOW';
let RIGHT_X_HIGH = 'RIGHT_X_HIGH';

let DRAW_AT_LEAST_ONCE = true;
//let HALF_SCENE_WIDTH = 32768;
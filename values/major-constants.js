// PLAYER_RECOIL_COUNTDOWN
const RECOIL_COUNTDOWN = 5;   // was 30


// PLAYER_TRAVEL_SPEED
const TRAVEL_SPEED = 8;   //1sluggish  4slow  8normal 16fast  32extreme


const DEBUG_PARAM_ENV = "debug-env";
const DEGRADE_PARAM_SCROLL = "degrade-scroll";



const PART_INIT_00_DESKTOP = 'PART_INIT_00_DESKTOP';
const PART_INIT_01_MOBILE = 'PART_INIT_01_MOBILE';
const PART_INIT_02_AFTER_BEGIN = 'PART_INIT_02_AFTER_BEGIN';

const PART_INTRO_10_LANDING = 'PART_INTRO_10_LANDING';
const PART_INTRO_11_AFTER_LANDING = 'PART_INTRO_11_AFTER_LANDING';
const PART_INTRO_12_ELEVATOR = 'PART_INTRO_12_ELEVATOR';
const PART_INTRO_13_AFTER_ELEVATOR = 'PART_INTRO_13_AFTER_ELEVATOR';

const PART_PLAY_20_NORMAL = 'PART_PLAY_20_NORMAL';
const PART_PLAY_21_HIT_HOLE = 'PART_PLAY_21_HIT_HOLE';
const PART_PLAY_22_JUMP_START = 'PART_PLAY_22_JUMP_START';
const PART_PLAY_23_JUMP_UP = 'PART_PLAY_23_JUMP_UP';
const PART_PLAY_24_JUMP_DOWN = 'PART_PLAY_24_JUMP_DOWN';

const PART_DEATH_30_APPEAR = 'PART_DEATH_30_APPEAR';
const PART_DEATH_31_FIELD = 'PART_DEATH_31_FIELD';
const PART_DEATH_32_SKY = 'PART_DEATH_32_SKY';
const PART_DEATH_33_RESTART = 'PART_DEATH_33_RESTART';

const PART_SPACE_40_LIFTOFF = 'PART_SPACE_40_LIFTOFF';
const PART_SPACE_41_CLIMB = 'PART_SPACE_41_CLIMB';
const PART_SPACE_42_FINISHED = 'PART_SPACE_42_FINISHED';

const GAME_0_INIT = 'GAME_0_INIT';
const GAME_1_INTRO = 'GAME_1_INTRO';
const GAME_2_PLAY = 'GAME_2_PLAY';
const GAME_3_DEATH = 'GAME_3_DEATH';
const GAME_4_SPACE = 'GAME_4_SPACE';
const GAME_5_DONE = 'GAME_5_DONE';


let LEFT_OF_PLAYER = 'LEFT_OF_PLAYER';
let RIGHT_OF_PLAYER = 'RIGHT_OF_PLAYER';
let MIDDLE_OF_PLAYER = 'MIDDLE_OF_PLAYER';


let ENEMY_TO_HORIZON_LIFT = 56;

const ENEMY_HIDDEN = 512;
let PLAYER_START_X = 1400;       //4216; // 3960 hit on right side
let PLAYER_START_Y = 766;  // NB qubert   goto right for errors

let pylon_1A_START_X = 4000;
let pylon_1A_START_Y = 300;

let ENEMY_BIRTH_X = 7000;
let ENEMY_BIRTH_Y = 300;

const ERASE_START_MESSAGE_TIME = 2000;

//var draw_time = true;
var draw_speed = 'every-frame';    // 'every-second-frame


const MOVING_NOT = 0;

const MOVING_BACKWARDS = 1;
const MOVING_RIGHT = 2;
const MOVING_FORWARD = 3;
const MOVING_LEFT = 4;
const MOVING_STOP = 5;


let sprite_half_x = 128;
const area_width_half = 16 * 1048;               //16768

let player_x = area_width_half;

let player_y = 512; //+ 512;           // 512+512=1048
var the_key = MOVING_NOT;

const numDrawings = 90;


const area_width = 2 * area_width_half;          // 33536
const viewport_middle_x = area_width_half - 512; // 16256

const area_height_half = 512;
const area_height = 1024;
const viewport_middle_y = 512;


//////////////////////











// const INIT_Y_FLIP_COUNT = 4;

let keep_running = true;

//let y_flip_count = INIT_Y_FLIP_COUNT;
let dist_count = 0;
let spin_count = 0;
let slow_count = 0;


let LAST_SPIN_INDEX = 255;





let wait_sprite = 0;
let sprite_offset = 0;
let sprite_width = 256;

let sprite_parallaxed_x;
let viewport_x;







// disappears
// at y=1048, left    
//      -243px       area_width_half - 694
//      +1011px      area_width_half + 692

// at y=512 
//    -144px     area_width_half - 4108
//    +912px     area_width_half + 4090;


//disappear_left = area_width_half - 4108;  // so 256px wide leaves visual at -243px


//turnOnKeys();



/*
steps_left = x_dir * -1 * TRAVEL_SPEED * 3;   // matches the player
steps_left = x_dir * -1 * TRAVEL_SPEED * 6;   // twice matches the player


travel_speed = 1;
*/


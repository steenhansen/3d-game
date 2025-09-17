

let g_missile_states;
let g_missile_iteration;

let g_device_type = DEVICE_UNKNOWN;

let g_touch_id_start = "";
let g_touch_x_start = 0;
let g_touch_y_start = 0;


let g_record_line_dbg = 128;



let g_move_direction = PLAYER_START_DIR;  //MOVINGx_NE;
let g_is_drifting = false;
let g_drift_direction = MOVINGx_NE;
let g_drift_countdown = DRIFT_CYCLES; //177;







let g_move_continue = 0;    // if like 10 then cannot change it




TEST_SCENE = false;

TESTING_STOPPED = false;


// this is a constant
let SCENE_MIDDLE_X = SCENE_WIDTH / 2;



let SCENE_X_MIN = 0;
let SCENE_X_MAX = SCENE_WIDTH;

let SCENE_Y_MIN = 0;








let LEFT_X_LOW = 'LEFT_X_LOW';
let RIGHT_X_HIGH = 'RIGHT_X_HIGH';

let DRAW_AT_LEAST_ONCE = true;

let g_number_lands = 0;
let g_number_elevate = 20;



let FAST_LAND = 'fast-land';
let FAST_ELEVATOR = 'fast-elevator';
let FAST_FLY = 'fast-fly';

let NORMAL_LAND = 'normal-land';
let NORMAL_ELEVATOR = 'normal-elevator';
let NORMAL_FLY = 'normal-fly';


let SLOW_LAND = 'slow-land';
let SLOW_ELEVATOR = 'slow-elevator';
let SLOW_FLY = 'slow-fly';

let SPEED_LAND = FAST_LAND;
let SPEED_ELEVATOR = FAST_ELEVATOR;
let SPEED_FLY = NORMAL_FLY;


/*  
the-landing == 1024x512 
      740 auto x512

g_drift_direction =MOVINGx_N;


if (window.AudioContext) {
    audio_context = new window.AudioContext();
  } else {
    audio_context = new window.webkitAudioContext();
  }
  let oscillator = audio_context.createOscillator();
  oscillator.connect(audio_context.destination);
  oscillator.type = 'square';
  oscillator.start();
  oscillator.stop(audio_context.currentTime + 0.05);
  */


// var g_loop_state = LOOP_1_BEGIN;
var g_loop_state = LOOP_0_BEGIN;

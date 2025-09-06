


let g_record_line_dbg = 128;



let g_move_direction = PLAYER_START_DIR;  //MOVINGx_NE;
let g_is_drifting = false;
let g_drift_direction = MOVINGx_NE;
let g_drift_countdown = 177;







let g_move_continue = 0;    // if like 10 then cannot change it


let INTRO_FINISHED = false;

TEST_SCENE = false;

TESTING_STOPPED = false;

// let g_state_taking_off
// let g_taking_off = false;
//let g_lift_amount = 0;

//let g_game_end = false;

// this is a constant
let SCENE_MIDDLE_X = SCENE_WIDTH / 2;



let SCENE_X_MIN = 0;
let SCENE_X_MAX = SCENE_WIDTH;

let SCENE_Y_MIN = 0;








let LEFT_X_LOW = 'LEFT_X_LOW';
let RIGHT_X_HIGH = 'RIGHT_X_HIGH';

let DRAW_AT_LEAST_ONCE = true;



let fast_init_land = 'fast-init-land';
let fast_init_elevator = 'fast-init-elevator';
let fast_init_fly = 'fast-init-flyX';
var ani_sec = 'ani-begin';



/*  if (window.AudioContext) {
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
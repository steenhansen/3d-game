








let g_missile_states;
let g_missile_iteration;

let g_device_type = DEVICE_UNKNOWN;

let g_touch_id_start = "";
let g_touch_x_start = 0;
let g_touch_y_start = 0;

let g_record_line_dbg = 128;

let g_drift_countdown = DRIFT_CYCLES; //177;

let g_number_lands = 0;
let g_number_elevate = 20;




/*
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


var the_fps = 0;                          // more better name and location?


var draw_every_ith_frame = 1;    // 1,2,3,4,5 to try to get 60fps


function browserReFocus() {
  const RESTART_FPS_CALCS = 1007;
  window.addEventListener("focus", function (_event) {
    setTimeout(() => {
      draw_every_ith_frame = 1;
    }, RESTART_FPS_CALCS);
  }, false);
}


const frame_filter_strength = 20;
var the_frame_time = 0;
var the_last_loop = new Date;
var the_start_loop;
var avg_frame_count = 0;
var avg_frame_accum = 0;


function tiltingReset() {
  the_frame_time = 0;
  the_last_loop = new Date;
}

function accumFPS() {
  the_start_loop = new Date;
  var this_frame_time = the_start_loop - the_last_loop;
  the_frame_time += (this_frame_time - the_frame_time) / frame_filter_strength;
  the_last_loop = the_start_loop;
  the_fps = (1000 / the_frame_time).toFixed(1);
  if (the_fps < 50) {                       // want 60fps
    if (draw_every_ith_frame == 1) {        // 60fps
      draw_every_ith_frame = 2;             // 30fps 
    } else if (draw_every_ith_frame == 2) {
      draw_every_ith_frame = 3;             // 20fps
    } else if (draw_every_ith_frame == 3) {
      draw_every_ith_frame = 4;             // 15fps
    } else {
      draw_every_ith_frame = 5;             // 12fps
    }
  }
}

function timeFrames(the_player) {
  if ('t_screen_askew' in the_player) {
    tiltingReset();
  } else {
    accumFPS();
  }
  frameInfoSE();
}

function frameInfoSE() {
  if (isDebugging()) {
    avg_frame_count++;
    avg_frame_accum += the_frame_time;
    avg_fps = avg_frame_accum / avg_frame_count;
    the_avg = (1000 / avg_fps).toFixed(0);
    the_scene = document.getElementById('the-fps');
    the_scene.innerHTML = the_avg + " " + the_fps + " Every " + draw_every_ith_frame + " frames";
  }
}
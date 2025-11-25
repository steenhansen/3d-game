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

function tiltingReset() {
  the_frame_time = 0;
  the_last_loop = new Date;
  draw_every_ith_frame = 1;
}

function accumFPS() {
  the_start_loop = new Date;
  var this_frame_time = the_start_loop - the_last_loop;
  the_frame_time += (this_frame_time - the_frame_time) / frame_filter_strength;
  the_last_loop = the_start_loop;
  the_fps = (1000 / the_frame_time).toFixed(1);
}

function timeFrames(the_planet, the_player) {
  if (the_player.m_screen_askew > 0) {
    tiltingReset();
  } else if (the_planet.m_game_state == GAME_2_PLAY) {
    accumFPS();
  } else {
    tiltingReset();
  }
  frameInfoSE();
}

function frameInfoSE() {
  if (g_p_display_fps == P_SHOW) {
    round_fps = Math.round(the_fps);
    the_scene = document.getElementById('fps-value');
    average_frames = " fps " + round_fps;
    average_frames += " " + g_p_scroll_quality;
    the_scene.innerHTML = average_frames;
  }
}


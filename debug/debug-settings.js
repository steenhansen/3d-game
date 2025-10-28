

function debugPrint(msg_str, x_pos, y_pos) {
  meas_text = dbg_ctx.measureText(msg_str);
  dbg_ctx.clearRect(x_pos, y_pos, meas_text.width + 300, dbg_line_height + 3);
  dbg_ctx.fillStyle = "black";
  dbg_ctx.fillRect(x_pos, y_pos, meas_text.width + 10, dbg_line_height + 3);
  dbg_ctx.fillStyle = "white";
  dbg_ctx.fillText(msg_str, x_pos, y_pos + dbg_line_height);
  dbg_ctx.stroke();
}



function debugFrameTime() {
  if (isDebugging()) {
    dbg_start_loop = new Date;
    var this_frame_time = dbg_start_loop - dbg_last_loop;
    dbg_frame_time += (this_frame_time - dbg_frame_time) / dbg_filter_strength;
    dbg_last_loop = dbg_start_loop;
    game_fps = (1000 / dbg_frame_time).toFixed(1) + " fps";
  }
}



var dbg_ctx, dbg_line_height;

// https://stackoverflow.com/questions/4787431/how-do-i-check-framerate-in-javascript
// 1==only last frame,    20==14 frames
const dbg_filter_strength = 20;
var dbg_frame_time = 0, dbg_last_loop = new Date, dbg_start_loop;
var dbg_animation_time;



var dbg_y_too_large;
var dbg_y_too_small;

function debugClear() {
  //canvas = document.getElementById("the-draw");          // func
  //dbg_ctx.clearRect(0, 0, canvas.width, canvas.height);

  // dbg_ctx.closePath(); 
  if (isDebugging()) {

    dbg_ctx.beginPath();
    dbg_ctx.clearRect(0, 0, dbg_ctx.canvas.width, dbg_ctx.canvas.height);
  }
}



function debugInit() {
  // var location_url = new URL(window.location);
  // var debug_param = location_url.searchParams.get("debug");
  // if (debug_param == 'true') {
  if (isDebugging()) {

    const DBG_MISSILE_ADVANCE = 'stop missile advance';
    const DBG_DRIFTING = 'stop random drifting';
    const DBG_FREEZE_MISSILE = 'stop changing missile';

    dbg_ctx = document.getElementById("the-draw").getContext("2d");  // func

    dbg_ctx.font = "16px serif";
    dbg_line_height = dbg_ctx.measureText('M').width;

    dbg_ctx.lineWidth = 1;
    dbg_ctx.beginPath();
    dbg_ctx.moveTo(512, 0);
    dbg_ctx.lineTo(512, 512);
    dbg_ctx.stroke();
  }
}



function debugAnimation() {
  if (isDebugging()) {
    dbg_end_loop = new Date;
    dbg_animation_time = dbg_end_loop - dbg_start_loop;
  }
}



function debugSwipeUp(start_xy, end_xy) {
  dbg_ctx.beginPath();
  dbg_ctx.fillStyle = "black";
  dbg_ctx.lineWidth = 5;
  //extra = (1024 - 896) / 2;

  if (screen_width > screen_height) {
    extra_w = (1024 - screen_width) / 2;
  } else {
    extra_w = (1024 - screen_width) / 2;
  }



  dbg_ctx.moveTo(start_xy[0] + extra_w, start_xy[1]);
  dbg_ctx.lineTo(end_xy[0] + extra_w, end_xy[1]);

  dbg_ctx.moveTo(end_xy[0] + extra_w, end_xy[1]);
  dbg_ctx.lineTo(end_xy[0] + extra_w - 10, end_xy[1] + 10);

  dbg_ctx.moveTo(end_xy[0] + extra_w, end_xy[1]);
  dbg_ctx.lineTo(end_xy[0] + extra_w + 10, end_xy[1] + 10);


  dbg_ctx.stroke();
}

function debugSwipeDown(start_xy, end_xy) {


  screen_width = window.screen.width;
  screen_height = window.screen.height;

  dbg_ctx.beginPath();
  dbg_ctx.fillStyle = "black";
  dbg_ctx.lineWidth = 5;

  if (screen_width > screen_height) {
    extra_w = (1024 - screen_width) / 2;
  } else {
    extra_w = (1024 - screen_width) / 2;
  }



  dbg_ctx.moveTo(start_xy[0] + extra_w, start_xy[1]);
  dbg_ctx.lineTo(end_xy[0] + extra_w, end_xy[1]);

  dbg_ctx.moveTo(end_xy[0] + extra_w, end_xy[1]);
  dbg_ctx.lineTo(end_xy[0] + extra_w - 10, end_xy[1] - 10);

  dbg_ctx.moveTo(end_xy[0] + extra_w, end_xy[1]);
  dbg_ctx.lineTo(end_xy[0] + extra_w + 10, end_xy[1] - 10);


  dbg_ctx.stroke();
}




function debugReportFrameTime() {
  debugMissileInfo();


  game_fps = (1000 / dbg_frame_time).toFixed(1) + " fps";
  debugPrint(game_fps, 430, 25);

  player_y_too_small = `Y too small${dbg_y_too_small}`;
  debugPrint(player_y_too_small, 330, 433);



  player_y_too_big = `Y too large ${dbg_y_too_large}`;
  debugPrint(player_y_too_big, 530, 433);



  // if (dbg_report) {
  const scene_width = getCssVar("--scene-width");
  const scene_height = getCssVar("--scene-height");
  screen_size = `Screen ${scene_width} x${scene_height}`;
  debugPrint(screen_size, 340, 4);




  const p_x = g_player.m_x;
  const p_y = g_player.m_y;
  player_pos = `Player x${p_x}, y${p_y}`;
  debugPrint(player_pos, 530, 5);



  // const e_x = enemy_1.m_x;
  // const e_y = enemy_1.m_y;
  player_pos = "no easy enemy_1 variable"; /// `Enemy1 x${e_x}, y${e_y}`;
  debugPrint(player_pos, 530, 25);


  // const c_x = pylon_a_1.m_x;
  // const c_y = pylon_a_1.m_y;
  player_pos = "pylon1a";  //`Pylon1a x${c_x}, y${c_y}`;
  debugPrint(player_pos, 530, 45);





  animation_time = dbg_animation_time + " msec";
  debugPrint(animation_time, 340, 25);





  animation_time = dbg_animation_time + " msec";
  debugPrint(animation_time, 340, 25);






  const mobile_screen = getCssVar("--device-screen");
  debugPrint(mobile_screen, 340, 45);

  start_point = [dbg_start_swipe_x, dbg_start_swipe_y];
  end_point = [dbg_end_swipe_x, dbg_end_swipe_y];

  if (dbg_swipe_dir == SWIPE_UP) {
    debugSwipeUp(start_point, end_point);
  } else if (dbg_swipe_dir == SWIPE_DOWN) {
    debugSwipeDown(start_point, end_point);
    //debugSwipe(end_point, start_point);
  }
  //}

}


function debugMissileInfo() {
  const m_x = g_missile.m_x;
  const m_y = g_missile.m_y;
  t_lifetime = g_missile.t_lifetime;
  t_phase = g_missile.t_phase;

  if ('t_lifetime' in g_missile) {
    missile_pos = `Missile x ${m_x} y ${m_y} `;
    missile_life = `t_lifetime:${t_lifetime}`;
    missile_phase = `t_phase ${t_phase}`;
  } else {
    missile_pos = `Missile`;
    missile_life = `t_lifetime:${t_lifetime}`;
    missile_phase = `t_phase ${t_phase}`;
  }

  debugPrint(missile_pos, 50, 450);

  debugPrint(missile_life, 50, 470);

  debugPrint(missile_phase, 50, 490);

}

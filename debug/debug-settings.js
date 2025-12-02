
let dbg_loop_time = 0;




const DEBUG_CONTEXT = document.getElementById("the-draw").getContext("2d");
const DEBUG_LINE_HEIGHT = DEBUG_CONTEXT.measureText('M').width;

const DEBUG_FIRST_COL_X = 370;
const DEBUG_SECOND_COL_X = 530;

const DEBUG_ROW_0_Y = 0;
const DEBUG_ROW_1_Y = 30;
const DEBUG_ROW_2_Y = 60;
const DEBUG_ROW_3_Y = 90;
const DEBUG_ROW_4_Y = 120;
const DEBUG_ROW_5_Y = 150;
const DEBUG_ROW_6_Y = 180;
const DEBUG_ROW_7_Y = 210;

const DEBUG_L_R_BLANKS = 25;
const DEBUG_ABOVE_Y = 10;

function debugPrint(msg_str, x_pos, y_pos) {
  const meas_text = DEBUG_CONTEXT.measureText(msg_str);
  const left_x = x_pos - DEBUG_L_R_BLANKS;
  const top_y = y_pos - DEBUG_ABOVE_Y;
  const width_x = meas_text.width + DEBUG_L_R_BLANKS * 2;
  const bottom_y = DEBUG_LINE_HEIGHT + DEBUG_L_R_BLANKS;
  DEBUG_CONTEXT.clearRect(left_x, top_y, width_x, bottom_y);
  DEBUG_CONTEXT.fillStyle = "black";
  DEBUG_CONTEXT.fillRect(x_pos, y_pos, meas_text.width, DEBUG_LINE_HEIGHT * 2);
  DEBUG_CONTEXT.fillStyle = "white";
  DEBUG_CONTEXT.fillText(msg_str, x_pos, y_pos + DEBUG_LINE_HEIGHT + 6);
  DEBUG_CONTEXT.stroke();
}

function debugScreenSize() {
  const scene_width_px = getCssVar("--scene-width");
  const scene_height_px = getCssVar("--scene-height");
  const scene_width = parseInt(scene_width_px);
  const scene_height = parseInt(scene_height_px);
  const screen_size = 'screen: ' + scene_width + ' ' + scene_height;
  debugPrint(screen_size, DEBUG_FIRST_COL_X, DEBUG_ROW_0_Y);
}

function debugFieldSize() {
  const x_size = FIELD_IN_SQUARES[0];
  const y_size = FIELD_IN_SQUARES[1];
  const player_pos = `field: ${x_size} ${y_size}`;
  debugPrint(player_pos, DEBUG_FIRST_COL_X, DEBUG_ROW_1_Y);
}

function debugPlayerXy() {
  const offset_squares_x = Math.floor(g_player.m_x / WIDTH_OF_SQUARE);
  const offset_squares_y = Math.floor(g_player.m_y / DEPTH_OF_SQUARE);
  const player_pos = `player: ${offset_squares_x} ${offset_squares_y}`;
  debugPrint(player_pos, DEBUG_FIRST_COL_X, DEBUG_ROW_2_Y);
}

function debugPlayerBounds() {
  if (typeof PLAYER_BOUNDS == 'undefined') {
    player_pos = `bounds: none`;
  } else {
    const x0_bounds = PLAYER_BOUNDS[0];
    const y0_bounds = PLAYER_BOUNDS[1];
    const x1_bounds = PLAYER_BOUNDS[2];
    const y1_bounds = PLAYER_BOUNDS[3];
    player_pos = `bounds: ${x0_bounds} ${y0_bounds}   ${x1_bounds} ${y1_bounds}`;
  }
  debugPrint(player_pos, DEBUG_FIRST_COL_X, DEBUG_ROW_3_Y);
}

function debugDevice() {
  const mobile_screen = getCssVar("--device-screen");
  debugPrint(mobile_screen, DEBUG_FIRST_COL_X, DEBUG_ROW_4_Y);
}

function debugTouchTime() {
  const touch_time = `press time: ${g_touch_press_time} `;
  debugPrint(touch_time, DEBUG_FIRST_COL_X, DEBUG_ROW_5_Y);
}




function debugEnemiesLeft() {
  const alive_enemies = enemiesAlive(g_enemies);
  const show_alive = `enemies alive: ${alive_enemies} `;
  debugPrint(show_alive, DEBUG_FIRST_COL_X, DEBUG_ROW_6_Y);
}

function debugLoopTime() {
  const show_loop_time = `animate msec: ${dbg_loop_time} `;
  debugPrint(show_loop_time, DEBUG_FIRST_COL_X, DEBUG_ROW_7_Y);
}

function debugReportFrameTime() {
  if (!g_waiting_for_start) {
    debugMissileInfo();
    debugScreenSize();
    debugFieldSize();
    debugPlayerXy();
    debugPlayerBounds();
    debugDevice();
    debugTouchTime();
    debugEnemiesLeft();
    debugLoopTime();

    start_point = [dbg_start_swipe_x, dbg_start_swipe_y];
    end_point = [dbg_end_swipe_x, dbg_end_swipe_y];

    if (dbg_swipe_dir == SWIPE_UP) {
      debugSwipeUp(start_point, end_point);
    } else if (dbg_swipe_dir == SWIPE_DOWN) {
      debugSwipeDown(start_point, end_point);
    }
  }
}













const ONLY_CLEAR_DEBUG_RECT = "";

function debugSign(an_object, left_mid_right_vlines) {
  if (environmentTypeParam()) {
    x_in_squares = an_object.m_x / WIDTH_OF_SQUARE;
    y_in_squares = an_object.m_y / DEPTH_OF_SQUARE;
    square_x = Math.round(x_in_squares * 10) / 10;
    square_y = Math.round(y_in_squares * 10) / 10;
    init_mess = square_x + ',' + square_y;
    let [right_side, middle_side, left_side] = left_mid_right_vlines;
    let [[x_mid_r, y_top], [_x1, y_bot]] = right_side;
    let [[x_mid_l, _y1], [_x2, _y2]] = middle_side;
    let [[_x3, _y3], [_x4, _y4]] = left_side;
    let xx = (x_mid_r + x_mid_l) / 2;
    let yy = (y_top + y_bot) / 2;
    if (an_object.s_isa == 'is-sign' && an_object.m_sign_text_col == 'none') {
      debugPrint(ONLY_CLEAR_DEBUG_RECT, xx, yy);
    } else {
      debugPrint(init_mess, xx, yy);
    }
  }
}





// https://stackoverflow.com/questions/4787431/how-do-i-check-framerate-in-javascript
// 1==only last frame,    20==14 frames
const dbg_filter_strength = 20;
let dbg_start_loop;




function debugClear() {
  //canvas = document.getElementById("the-draw");          // func
  //DEBUG_CONTEXT.clearRect(0, 0, canvas.width, canvas.height);

  // DEBUG_CONTEXT.closePath(); 
  if (environmentTypeParam()) {

    DEBUG_CONTEXT.beginPath();
    //DEBUG_CONTEXT.clearRect(0, 0, DEBUG_CONTEXT.canvas.width, DEBUG_CONTEXT.canvas.height);
  }
}



function debugInit() {
  if (environmentTypeParam()) {
    //   DEBUG_CONTEXT = document.getElementById("the-draw").getContext("2d");  // func
    DEBUG_CONTEXT.font = "16px serif";
    //  DEBUG_LINE_HEIGHT = DEBUG_CONTEXT.measureText('M').width;

    DEBUG_CONTEXT.fillStyle = "black";
    DEBUG_CONTEXT.lineWidth = 1;
    DEBUG_CONTEXT.beginPath();
    DEBUG_CONTEXT.moveTo(512, 0);
    DEBUG_CONTEXT.lineTo(512, 512);
    DEBUG_CONTEXT.stroke();
  }
}



function debugAnimation(loop_time) {
  dbg_loop_time = Math.round(loop_time);
  if (environmentTypeParam()) {
    dbg_end_loop = new Date;
  }
}



function debugSwipeUp(start_xy, end_xy) {
  DEBUG_CONTEXT.beginPath();
  DEBUG_CONTEXT.fillStyle = "black";
  DEBUG_CONTEXT.lineWidth = 5;
  //extra = (1024 - 896) / 2;

  if (screen_width > screen_height) {
    extra_w = (1024 - screen_width) / 2;
  } else {
    extra_w = (1024 - screen_width) / 2;
  }



  DEBUG_CONTEXT.moveTo(start_xy[0] + extra_w, start_xy[1]);
  DEBUG_CONTEXT.lineTo(end_xy[0] + extra_w, end_xy[1]);

  DEBUG_CONTEXT.moveTo(end_xy[0] + extra_w, end_xy[1]);
  DEBUG_CONTEXT.lineTo(end_xy[0] + extra_w - 10, end_xy[1] + 10);

  DEBUG_CONTEXT.moveTo(end_xy[0] + extra_w, end_xy[1]);
  DEBUG_CONTEXT.lineTo(end_xy[0] + extra_w + 10, end_xy[1] + 10);


  DEBUG_CONTEXT.stroke();
}

function debugSwipeDown(start_xy, end_xy) {


  screen_width = window.screen.width;
  screen_height = window.screen.height;

  DEBUG_CONTEXT.beginPath();
  DEBUG_CONTEXT.fillStyle = "black";
  DEBUG_CONTEXT.lineWidth = 5;

  if (screen_width > screen_height) {
    extra_w = (1024 - screen_width) / 2;
  } else {
    extra_w = (1024 - screen_width) / 2;
  }



  DEBUG_CONTEXT.moveTo(start_xy[0] + extra_w, start_xy[1]);
  DEBUG_CONTEXT.lineTo(end_xy[0] + extra_w, end_xy[1]);

  DEBUG_CONTEXT.moveTo(end_xy[0] + extra_w, end_xy[1]);
  DEBUG_CONTEXT.lineTo(end_xy[0] + extra_w - 10, end_xy[1] - 10);

  DEBUG_CONTEXT.moveTo(end_xy[0] + extra_w, end_xy[1]);
  DEBUG_CONTEXT.lineTo(end_xy[0] + extra_w + 10, end_xy[1] - 10);


  DEBUG_CONTEXT.stroke();
}

let debug_missile_steps = 0;
function debugMissileInfo() {
  if (g_missile.m_lifetime == 0) {
    debug_missile_steps = 0;
  } else {
    if (debug_missile_steps == 0) {
      DEBUG_CONTEXT.clearRect(DEBUG_SECOND_COL_X, DEBUG_ROW_1_Y, 630, 999);
      debugPrint("missile", DEBUG_SECOND_COL_X, DEBUG_ROW_1_Y);
    }
    debug_missile_steps++;

    let a_carom = '';
    if (g_missile.m_phase != MISSILE_1_SHOT_FORWARD) {
      if (g_missile.m_x_dir == 1) {
        a_carom = 'carom right';
      } else if (g_missile.m_x_dir == -1) {
        a_carom = 'carom left';
      }
    }
    const y_pos = (debug_missile_steps + 1) * DEBUG_ROW_1_Y;
    const offset_squares_x = Math.floor(g_missile.m_x / WIDTH_OF_SQUARE);
    const offset_squares_y = Math.floor(g_missile.m_y / DEPTH_OF_SQUARE);
    const player_pos = `${offset_squares_x} ${offset_squares_y} ${a_carom}`;
    debugPrint(player_pos, DEBUG_SECOND_COL_X, y_pos);
  }
}

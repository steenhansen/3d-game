let local_swipe_x_start = 0;
let local_swipe_y_start = 0;
let local_start_touch = "";

function touchBoxes(the_event) {
  const event_id = the_event.target.id;
  const is_a_center_box = event_id.startsWith("center-box");
  if (is_a_center_box) {
    the_event.preventDefault();
    g_planet.m_drift_direction = 0;
    g_missile = initMissileData(g_missile, g_player);
  }
}

function touchStart(evt) {
  local_swipe_x_start = evt.changedTouches[0].clientX;
  local_swipe_y_start = evt.changedTouches[0].clientY;
  local_start_touch = Date.now();
}

const SWIPE_DISTANCE_MIN = 30;

function pressOrTap(evt) {
  g_missile = initMissileData(g_missile, g_player);
  const end_touch = Date.now();
  g_touch_press_time = end_touch - local_start_touch;
  // const IS_PRESS_NOT_TAP = 333;
  // const is_pressed = g_touch_press_time > IS_PRESS_NOT_TAP;
  if (THE_PLANET === 4) {
    touchN(evt); // area-4 never stops going forward
  } else {
    swipeDownStop();
  }
}

function touchEnd(evt) {
  let touch_id_end = evt.target.id;
  const is_a_center_box = touch_id_end.startsWith("center-box");
  if (is_a_center_box) {
    const touch_x_end = evt.changedTouches[0].clientX;
    const touch_y_end = evt.changedTouches[0].clientY;
    const dif_x = Math.abs(local_swipe_x_start - touch_x_end);
    const dif_y = Math.abs(local_swipe_y_start - touch_y_end);
    const was_a_press =
      dif_x < SWIPE_DISTANCE_MIN && dif_y < SWIPE_DISTANCE_MIN;
    if (was_a_press) {
      pressOrTap(evt);
    } else {
      doSwipe(touch_x_end, touch_y_end, dif_x, dif_y);
    }
  }
}

function doSwipe(touch_x_end, touch_y_end, dif_x, dif_y) {
  dbg_start_swipe_x = local_swipe_x_start;
  dbg_start_swipe_y = local_swipe_y_start;
  dbg_end_swipe_x = touch_x_end;
  dbg_end_swipe_y = touch_y_end;
  if (dif_x > dif_y) {
    if (local_swipe_x_start > touch_x_end) {
      swipeLeftRestart();
    } else {
      swipeRightQuit();
    }
  } else {
    if (local_swipe_y_start > touch_y_end) {
      swipeUpJump();
    } else {
      //  swipeDownStop(); stopping is done with a shot, this is too hard
    }
  }
}

function swipeUpJump() {
  if (g_planet.m_game_state === GAME_2_PLAY) {
    g_planet.m_part_state = PART_PLAY_22_JUMP_START;
    dbg_swipe_dir = SWIPE_UP;
  }
}

function swipeRightQuit() {
  dbg_swipe_dir = SWIPE_RIGHT;
  g_planet.m_game_state = GAME_5_DONE;
}

function swipeDownStop() {
  dbg_swipe_dir = SWIPE_DOWN;
  g_planet.m_drift_direction = 0;
  stopMoving();
}

function swipeLeftRestart() {
  reAnimateScreen();
  action_runGame();
}

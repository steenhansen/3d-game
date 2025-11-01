let local_swipe_x_start = 0;
let local_swipe_y_start = 0;



function touchBoxes(the_event) {

  event_id = the_event.target.id;
  const is_a_center_box = event_id.startsWith("center-box");

  if (is_a_center_box) {
    the_event.preventDefault();
    fullMobile();
    delete g_planet.t_drift_direction;
    g_missile = initMissileData(g_missile, g_player);
  }
}


function touchStart(evt) {

  local_swipe_x_start = evt.changedTouches[0].clientX;
  local_swipe_y_start = evt.changedTouches[0].clientY;
}

const SWIPE_DISTANCE_MIN = 30;

function touchEnd(evt) {
  touch_id_end = evt.target.id;
  const is_a_center_box = touch_id_end.startsWith("center-box");
  if (is_a_center_box) {
    touch_x_end = evt.changedTouches[0].clientX;
    touch_y_end = evt.changedTouches[0].clientY;
    dif_x = Math.abs(local_swipe_x_start - touch_x_end);
    dif_y = Math.abs(local_swipe_y_start - touch_y_end);
    was_a_press = (dif_x < SWIPE_DISTANCE_MIN && dif_y < SWIPE_DISTANCE_MIN);
    if (was_a_press) {
      g_missile = initMissileData(g_missile, g_player);
    } else {
      dbg_start_swipe_x = local_swipe_x_start;
      dbg_start_swipe_y = local_swipe_y_start;
      dbg_end_swipe_x = touch_x_end;
      dbg_end_swipe_y = touch_y_end;
      if (dif_x > dif_y) {
        if (local_swipe_x_start > touch_x_end) {
          swipeLeftFly();
        } else {
          swipeRightQuit();
        }
      } else {
        if (local_swipe_y_start > touch_y_end) {
          swipeUpJump();
        } else {
          swipeDownStop();
        }
      }
    }
  }
}


function swipeUpJump() {
  g_planet.m_planet_state = LOOP_7_PLAY_A_JUMP_START;
  dbg_swipe_dir = SWIPE_UP;
}


function swipeLeftFly() {
  dbg_swipe_dir = SWIPE_LEFT;
  g_planet.m_planet_state = LOOP_8_AFTER_PLAY;
}

function swipeRightQuit() {
  dbg_swipe_dir = SWIPE_RIGHT;
  g_planet.m_planet_state = LOOP_13_DONE;
}

function swipeDownStop() {
  dbg_swipe_dir = SWIPE_DOWN;
  delete g_planet.t_drift_direction;
  stopMoving();
}

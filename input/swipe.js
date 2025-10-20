
function touchBoxes(the_event) {

  event_id = the_event.target.id;
  const is_a_center_box = event_id.startsWith("center-box");

  if (is_a_center_box) {
    the_event.preventDefault();
    fullMobile();
    //  g_is_drifting = false;
    delete g_planet.t_drift_direction;
    g_missile = launchMissile(g_missile, g_player);
  }
}


function touchStart(evt) {
  g_touch_id_start = evt.target.id;
  g_touch_x_start = evt.changedTouches[0].clientX;
  g_touch_y_start = evt.changedTouches[0].clientY;
}

const SWIPE_DISTANCE_MIN = 30;

function touchEnd(evt) {
  touch_id_end = evt.target.id;
  const is_a_center_box = touch_id_end.startsWith("center-box");
  if (is_a_center_box) {
    touch_x_end = evt.changedTouches[0].clientX;
    touch_y_end = evt.changedTouches[0].clientY;
    dif_x = Math.abs(g_touch_x_start - touch_x_end);
    dif_y = Math.abs(g_touch_y_start - touch_y_end);
    was_a_press = (dif_x < SWIPE_DISTANCE_MIN && dif_y < SWIPE_DISTANCE_MIN);
    if (was_a_press) {
      g_missile = launchMissile(g_missile, g_player);
    } else {
      dbg_start_swipe_x = g_touch_x_start;
      dbg_start_swipe_y = g_touch_y_start;
      dbg_end_swipe_x = touch_x_end;
      dbg_end_swipe_y = touch_y_end;
      if (dif_x > dif_y) {
        if (g_touch_x_start > touch_x_end) {
          swipeLeftFly();
        } else {
          swipeRightQuit();
        }
      } else {
        if (g_touch_y_start > touch_y_end) {
          swipeUpJump();
        } else {
          swipeDownStop();
        }
      }
    }
  }
}


function swipeUpJump() {
  the_planet.m_planet_state = LOOP_7_PLAY_A_JUMP_START;
  g_swipe_dir = SWIPE_UP;
}


function swipeLeftFly() {
  g_swipe_dir = SWIPE_LEFT;
  the_planet.m_planet_state = LOOP_8_AFTER_PLAY;
}

function swipeRightQuit() {
  g_swipe_dir = SWIPE_RIGHT;
  the_planet.m_planet_state = LOOP_13_DONE;
}

function swipeDownStop() {
  g_swipe_dir = SWIPE_DOWN;
  //g_is_drifting = false;
  delete g_planet.t_drift_direction;
  stopMoving();
}

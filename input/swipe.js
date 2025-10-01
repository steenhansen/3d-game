
function touchBoxes(the_event) {

  event_id = the_event.target.id;
  const is_a_center_box = event_id.startsWith("center-box");

  if (is_a_center_box) {
    the_event.preventDefault();
    fullMobile();
    g_is_drifting = false;
    g_missile = launchMissile(g_missile);
  }
}


function touchStart(evt) {
  g_touch_id_start = evt.target.id;
  g_touch_x_start = evt.changedTouches[0].clientX;
  g_touch_y_start = evt.changedTouches[0].clientY;
}

function touchEnd(evt) {
  touch_id_end = evt.target.id;
  const is_a_center_box = touch_id_end.startsWith("center-box");
  if (is_a_center_box) {
    touch_x_end = evt.changedTouches[0].clientX;
    touch_y_end = evt.changedTouches[0].clientY;
    dif_x = Math.abs(g_touch_x_start - touch_x_end);
    dif_y = Math.abs(g_touch_y_start - touch_y_end);
    if (dif_x < 10 && dif_y < 10) {                           // constants
      g_missile = launchMissile(g_missile);
    } else {
      if (dif_x > dif_y) {

        // if (g_touch_x_start > touch_x_end) {
        //   g_taking_off = true;
        // } else {
        //   g_is_drifting = false;
        //   stopMoving();
        // }
      } else {
        g_start_swipe_x = g_touch_x_start;
        g_start_swipe_y = g_touch_y_start;

        g_end_swipe_x = touch_x_end;
        g_end_swipe_y = touch_y_end;
        if (g_touch_y_start > touch_y_end) {
          g_taking_off = true;
          g_swipe_dir = SWIPE_UP;
        } else {

          g_swipe_dir = SWIPE_DOWN;
          g_is_drifting = false;
          stopMoving();
        }
      }
    }
  } else {
    //
  }
}

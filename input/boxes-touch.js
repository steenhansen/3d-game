


function touchNw(evt) {
  g_move_direction = MOVINGx_NW;
  boxTouch(evt, "nw-1");
}


function touchN(evt) {
  g_move_direction = MOVINGx_N;
  boxTouch(evt, "n-1");
}

function touchNe(evt) {
  g_move_direction = MOVINGx_NE;
  boxTouch(evt, "ne-1");
}

function touchW(evt) {
  g_move_direction = MOVINGx_W;
  boxTouch(evt, "w-1");
}

function touchE(evt) {
  g_move_direction = MOVINGx_E;
  boxTouch(evt, "e-1");
}

function touchSw(evt) {
  g_move_direction = MOVINGx_SW;
  boxTouch(evt, "sw-1");
}

function touchS(evt) {
  g_move_direction = MOVINGx_S;
  boxTouch(evt, "s-1");
}

function touchSe(evt) {
  g_move_direction = MOVINGx_SE;
  boxTouch(evt, "se-1");
}

function boxTouch(the_event, direction_name) {
  console.log("boxTouch", the_event.targetTouches);
  flashArrow(direction_name);
  g_is_drifting = false;
}

function addTouchEvent(direction_name, touchHandler) {
  const div_name = direction_name;
  const the_input = document.getElementById(div_name);
  the_input.addEventListener("touchend", touchHandler, { passive: false });
}

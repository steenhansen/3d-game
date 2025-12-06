
function touchNw(evt) {
  initiateMovement(MOVINGx_NW);
  g_planet.m_last_direction_key = MOVINGx_NW;
  boxTouch(evt, "nw-1");
}

function touchN(evt) {
  initiateMovement(MOVINGx_N);
  g_planet.m_last_direction_key = MOVINGx_N;
  boxTouch(evt, "n-1");
}

function touchNe(evt) {
  initiateMovement(MOVINGx_NE);
  g_planet.m_last_direction_key = MOVINGx_NE;
  boxTouch(evt, "ne-1");
}

function touchW(evt) {
  initiateMovement(MOVINGx_W);
  g_planet.m_last_direction_key = MOVINGx_W;
  boxTouch(evt, "w-1");
}

function touchE(evt) {
  initiateMovement(MOVINGx_E);
  g_planet.m_last_direction_key = MOVINGx_E;
  boxTouch(evt, "e-1");
}

function touchSw(evt) {
  initiateMovement(MOVINGx_SW);
  g_planet.m_last_direction_key = MOVINGx_SW;
  boxTouch(evt, "sw-1");
}

function touchS(evt) {
  initiateMovement(MOVINGx_S);
  g_planet.m_last_direction_key = MOVINGx_S;
  boxTouch(evt, "s-1");
}

function touchSe(evt) {
  initiateMovement(MOVINGx_SE);
  g_planet.m_last_direction_key = MOVINGx_SE;
  boxTouch(evt, "se-1");
}

function boxTouch(the_event, direction_name) {
  flashArrow(direction_name);
  g_planet.m_drift_direction = 0;
}

function addTouchEvent(direction_name, touchHandler) {
  const div_name = direction_name;
  const the_input = document.getElementById(div_name);
  the_input.addEventListener("touchend", touchHandler, { passive: false });
}

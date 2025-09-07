


function flashArrow(direction_name) {
  const directions_4 = direction_name.split("-");
  const pure_direction = directions_4[0];

  const the_arrow = document.getElementById("arrow-" + pure_direction);
  try {
    the_arrow_style = the_arrow.style;
  } catch (e) {
    console.log("flashArrow 23456", direction_name, e);
  }
  const original_opacity = window.getComputedStyle(the_arrow).getPropertyValue("opacity");

  the_arrow_style.opacity = '25%';

  setTimeout(() => {
    the_arrow_style.opacity = original_opacity;
  }, "200");
}


function inputClick(the_event, direction_name) {
  the_event.preventDefault();
  flashArrow(direction_name);
  g_is_drifting = false;
}





function addClickEvent(direction_name, clickHandler) {
  const div_name = direction_name;
  const the_input = document.getElementById(div_name);
  the_input.addEventListener("click", clickHandler, { passive: false });
}

function stopMoving(evt) {
  g_move_direction = MOVINGx_NOT;
  g_drift_countdown = 177;
}

function handleNw(evt) {
  g_move_direction = MOVINGx_NW;
  inputClick(evt, "nw-1");
}


function handleN(evt) {
  g_move_direction = MOVINGx_N;
  inputClick(evt, "n-1");
}

function handleNe(evt) {
  g_move_direction = MOVINGx_NE;
  inputClick(evt, "ne-1");
}

function handleW(evt) {
  g_move_direction = MOVINGx_W;
  inputClick(evt, "w-1");
}

function handleE(evt) {
  g_move_direction = MOVINGx_E;
  inputClick(evt, "e-1");
}

function handleSw(evt) {
  g_move_direction = MOVINGx_SW;
  inputClick(evt, "sw-1");
}

function handleS(evt) {
  g_move_direction = MOVINGx_S;
  inputClick(evt, "s-1");
}

function handleSe(evt) {
  g_move_direction = MOVINGx_SE;
  inputClick(evt, "se-1");
}

function fullMobile() {
  if (isMobile()) {
    if (!document.fullscreenElement) {
      the_scene = document.getElementById('the-scene');
      the_scene.requestFullscreen();
    }
  }
}

/////////////




function touchNw(evt) {
  g_move_direction = MOVINGx_NW;
  inputTouch(evt, "nw-1");
}


function touchN(evt) {
  g_move_direction = MOVINGx_N;
  inputTouch(evt, "n-1");
}

function touchNe(evt) {
  g_move_direction = MOVINGx_NE;
  inputTouch(evt, "ne-1");
}

function touchW(evt) {
  g_move_direction = MOVINGx_W;
  inputTouch(evt, "w-1");
}

function touchE(evt) {
  g_move_direction = MOVINGx_E;
  inputTouch(evt, "e-1");
}

function touchSw(evt) {
  g_move_direction = MOVINGx_SW;
  inputTouch(evt, "sw-1");
}

function touchS(evt) {
  g_move_direction = MOVINGx_S;
  inputTouch(evt, "s-1");
}

function touchSe(evt) {
  g_move_direction = MOVINGx_SE;
  inputTouch(evt, "se-1");
}

function inputTouch(the_event, direction_name) {
  console.log("inputTouch", the_event.targetTouches);
  flashArrow(direction_name);
  g_is_drifting = false;
}

function addTouchEvent(direction_name, touchHandler) {
  const div_name = direction_name;
  const the_input = document.getElementById(div_name);
  the_input.addEventListener("touchend", touchHandler, { passive: false });
}


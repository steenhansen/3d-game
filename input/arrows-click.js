

const ARROW_FLASH_TIME = 200;


function flashArrow(direction_name) {
  const directions_4 = direction_name.split("-");
  const pure_direction = directions_4[0];

  const the_arrow = document.getElementById("arrow-" + pure_direction);
  try {
    the_arrow_style = the_arrow.style;
  } catch (e) {
    console.log("flashArrow 23456", direction_name, e);
  }
  the_arrow_style.opacity = '25%';
  setTimeout(() => {
    the_arrow_style.opacity = '100%';
  }, ARROW_FLASH_TIME);
}






function arrowClick(the_event, direction_name) {
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
  g_drift_countdown = DRIFT_CYCLES;    //177;
}

function handleNw(evt) {
  g_move_direction = MOVINGx_NW;
  arrowClick(evt, "nw-1");
}


function handleN(evt) {
  g_move_direction = MOVINGx_N;
  arrowClick(evt, "n-1");
}

function handleNe(evt) {
  g_move_direction = MOVINGx_NE;
  arrowClick(evt, "ne-1");
}

function handleW(evt) {
  g_move_direction = MOVINGx_W;
  arrowClick(evt, "w-1");
}

function handleE(evt) {
  g_move_direction = MOVINGx_E;
  arrowClick(evt, "e-1");
}

function handleSw(evt) {
  g_move_direction = MOVINGx_SW;
  arrowClick(evt, "sw-1");
}

function handleS(evt) {
  g_move_direction = MOVINGx_S;
  arrowClick(evt, "s-1");
}

function handleSe(evt) {
  g_move_direction = MOVINGx_SE;
  arrowClick(evt, "se-1");
}




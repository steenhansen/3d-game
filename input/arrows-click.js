

const ARROW_FLASH_TIME = 200;


function flashArrow(direction_name) {
  const directions_4 = direction_name.split("-");
  const pure_direction = directions_4[0];

  const the_arrow = document.getElementById("arrow-" + pure_direction);
  try {
    the_arrow_style = the_arrow.style;
  } catch (e) {
    arrow_error = `bad::arrow ${direction_name}`;
    throw new Error(arrow_error);
  }
  the_arrow_style.opacity = '25%';
  setTimeout(() => {
    the_arrow_style.opacity = '100%';
  }, ARROW_FLASH_TIME);
}






function arrowClick(the_event, direction_name) {
  the_event.preventDefault();
  flashArrow(direction_name);
  delete g_planet.t_drift_direction;
}





function addClickEvent(direction_name, clickHandler) {
  const div_name = direction_name;
  const the_input = document.getElementById(div_name);
  the_input.addEventListener("click", clickHandler, { passive: false });
}

function stopMoving(evt) {
  delete g_planet.t_move_direction;
  delete g_planet.t_drift_direction;
  g_planet.t_drift_countdown = DRIFT_START_CHANCE_WHEN_STOPPED;
}

function initiateMovement(the_direction) {
  delete g_planet.t_drift_direction;
  g_planet.t_move_direction = the_direction;
}

function handleNw(evt) {
  initiateMovement(MOVINGx_NW);
  arrowClick(evt, "nw-1");
}




function handleN(evt) {
  initiateMovement(MOVINGx_N);
  arrowClick(evt, "n-1");
}

function handleNe(evt) {
  initiateMovement(MOVINGx_NE);
  arrowClick(evt, "ne-1");
}

function handleW(evt) {
  initiateMovement(MOVINGx_W);
  arrowClick(evt, "w-1");
}

function handleE(evt) {
  initiateMovement(MOVINGx_E);
  arrowClick(evt, "e-1");
}

function handleSw(evt) {
  initiateMovement(MOVINGx_SW);
  arrowClick(evt, "sw-1");
}

function handleS(evt) {
  initiateMovement(MOVINGx_S);
  arrowClick(evt, "s-1");
}

function handleSe(evt) {
  initiateMovement(MOVINGx_SE);
  arrowClick(evt, "se-1");
}




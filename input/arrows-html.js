

function flashBox(direction_name) {
  const the_input = document.getElementById("input-" + direction_name);
  input_style = the_input.style;
  input_style.border = 'thin solid white';
  setTimeout(() => {
    input_style.border = 'none';
  }, "200");
}

function flashArrow(direction_name) {

  const the_arrow = document.getElementById("arrow-" + direction_name);
  try {
    the_arrow_style = the_arrow.style;
  } catch (e) {
    console.log("dddd", direction_name, e);
  }
  const original_opacity = window.getComputedStyle(the_arrow).getPropertyValue("opacity");

  the_arrow_style.opacity = '100%';

  setTimeout(() => {
    the_arrow_style.opacity = original_opacity;
  }, "200");
}

function flashArrowBox(direction_name) {
  flashArrow(direction_name);
  flashBox(direction_name);
}

function inputClick(the_event, direction_name) {
  the_event.preventDefault();
  fullMobile();
  flashArrowBox(direction_name);
}

function addClickEvent(direction_name, clickHandler) {
  const div_name = "input-" + direction_name;
  const the_input = document.getElementById(div_name);
  the_input.addEventListener("click", clickHandler, { passive: false });
}

function stopMoving(evt) {
  g_move_direction = MOVINGx_NOT;
}

function handleNw(evt) {
  console.log(evt);
  g_move_direction = MOVINGx_NW;
  inputClick(evt, "nw");
}

function handleN(evt) {
  g_move_direction = MOVINGx_N;
  inputClick(evt, "n");
}

function handleNe(evt) {
  g_move_direction = MOVINGx_NE;
  inputClick(evt, "ne");
}

function handleW(evt) {
  g_move_direction = MOVINGx_W;
  console.log("in handleW");
  inputClick(evt, "w");
}

function handleE(evt) {
  g_move_direction = MOVINGx_E;
  inputClick(evt, "e");
}

function handleSw(evt) {
  g_move_direction = MOVINGx_SW;
  inputClick(evt, "sw");
}

function handleS(evt) {
  g_move_direction = MOVINGx_S;
  inputClick(evt, "s");
}

function handleSe(evt) {
  g_move_direction = MOVINGx_SE;
  inputClick(evt, "se");
}

function fullMobile() {
  if (isMobile()) {
    if (!document.fullscreenElement) {
      the_scene = document.getElementById('the-scene');
      the_scene.requestFullscreen();
    }
  }
}




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
  the_arrow_style = the_arrow.style;
  const original_opacity = window.getComputedStyle(the_arrow).getPropertyValue("opacity");

  the_arrow_style.opacity = '100%';
  //the_arrow_style.fill = 'white';

  setTimeout(() => {
    the_arrow_style.opacity = original_opacity;
    // the_arrow_style.fill = 'black';
  }, "200");
}


function inputClick(the_event, direction_name) {
  the_event.preventDefault();
  fullMobile();
  flashArrow(direction_name);
  flashBox(direction_name);
  // const the_arrow = document.getElementById("arrow-" + direction_name);
  // the_arrow_style = the_arrow.style;
  // const original_opacity = window.getComputedStyle(the_arrow).getPropertyValue("opacity");

  // the_arrow_style.opacity = '100%';
  // the_arrow_style.fill = 'white';

  // const the_input = document.getElementById("input-" + direction_name);
  // input_style = the_input.style;
  // input_style.border = 'thin solid white';
  // setTimeout(() => {
  //   the_arrow_style.opacity = original_opacity;
  //   the_arrow_style.fill = 'black';
  //   input_style.border = 'none';
  // }, "200");
}

function addInputEvent(direction_name, clickHandler) {
  const div_name = "input-" + direction_name;
  const the_input = document.getElementById(div_name);
  the_input.addEventListener("touchstart", clickHandler, { passive: false });
}



function handleNw(evt) {
  g_move_direction = MOVINGx_NW;
  inputClick(evt, "nw");
}
addInputEvent("nw", handleNw);

function handleN(evt) {
  g_move_direction = MOVINGx_N;
  inputClick(evt, "n");
}
addInputEvent("n", handleN);

function handleNe(evt) {
  g_move_direction = MOVINGx_NE;
  inputClick(evt, "ne");
}
addInputEvent("ne", handleNe);



function handleW(evt) {
  g_move_direction = MOVINGx_W;
  inputClick(evt, "w");
}
addInputEvent("w", handleW);



function handleE(evt) {
  g_move_direction = MOVINGx_E;
  inputClick(evt, "e");
}
addInputEvent("e", handleE);


function handleSw(evt) {
  g_move_direction = MOVINGx_SW;
  inputClick(evt, "sw");
}
addInputEvent("sw", handleSw);

function handleS(evt) {
  g_move_direction = MOVINGx_S;
  inputClick(evt, "s");
}
addInputEvent("s", handleS);

function handleSe(evt) {
  g_move_direction = MOVINGx_SE;
  inputClick(evt, "se");
}
addInputEvent("se", handleSe);





// function handleShoot(evt) {
//   evt.preventDefault();
//   fullMobile();
// }
// addInputEvent("shoot", handleShoot);


function fullMobile() {
  if (!document.fullscreenElement) {
    the_scene = document.getElementById('the-scene');
    the_scene.requestFullscreen();
  }
}
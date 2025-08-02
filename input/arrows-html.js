

document.getElementById('html-arrows').innerHTML = `


<div id="input-shoot" class='an-input'></div>
<div id="input-nw" class='an-input'></div>
<div id="input-n" class='an-input'></div>
<div id="input-ne" class='an-input'></div>
<div id="input-e" class='an-input'></div>
<div id="input-se" class='an-input'></div>
<div id="input-s" class='an-input'></div>
<div id="input-sw" class='an-input'></div>
<div id="input-w" class='an-input'></div>








<svg id="arrow-nw" class="an-arrow" >
  <use href="#the-arrow" />
</svg>

<svg id="arrow-n" class="an-arrow" >
  <use href="#the-arrow" />
</svg>

<svg id="arrow-ne" class="an-arrow" >
  <use href="#the-arrow" />
</svg>

<svg id="arrow-e" class="an-arrow" >
  <use href="#the-arrow" />
</svg>

<svg id="arrow-se" class="an-arrow" >
  <use href="#the-arrow" />
</svg>

<svg id="arrow-s" class="an-arrow" >
  <use href="#the-arrow" />
</svg>

<svg id="arrow-sw" class="an-arrow" >
  <use href="#the-arrow" />
</svg>

<svg id="arrow-w" class="an-arrow" >
  <use href="#the-arrow" />
</svg>


`;

function arrowInputClick(the_event, direction_name) {
  the_event.preventDefault();
  const the_arrow = document.getElementById("arrow-" + direction_name);
  const the_input = document.getElementById("input-" + direction_name);
  the_arrow.style.opacity = '100%';
  the_arrow.style.fill = 'white';
  the_input.style.border = 'thin solid white';
  setTimeout(() => {
    the_arrow.style.opacity = '40%';
    the_arrow.style.fill = 'black';
    the_input.style.border = 'none';
  }, "200");
}

function addInputEvent(direction_name, clickHandler) {
  const the_input = document.getElementById("input-" + direction_name);
  the_input.addEventListener("touchstart", clickHandler);
}



function handleNw(evt) {
  g_move_direction = MOVINGx_NW;
  arrowInputClick(evt, "nw");
}
addInputEvent("nw", handleNw);

function handleN(evt) {
  g_move_direction = MOVINGx_N;
  arrowInputClick(evt, "n");
}
addInputEvent("n", handleN);

function handleNe(evt) {
  g_move_direction = MOVINGx_NE;
  arrowInputClick(evt, "ne");
}
addInputEvent("ne", handleNe);




function handleE(evt) {
  g_move_direction = MOVINGx_E;
  arrowInputClick(evt, "e");
}
addInputEvent("e", handleE);





function handleSe(evt) {
  g_move_direction = MOVINGx_SE;
  arrowInputClick(evt, "se");
}
addInputEvent("se", handleSe);

function handleS(evt) {
  g_move_direction = MOVINGx_S;
  arrowInputClick(evt, "s");
}
addInputEvent("s", handleS);

function handleSw(evt) {
  g_move_direction = MOVINGx_SW;
  arrowInputClick(evt, "sw");
}
addInputEvent("sw", handleSw);

function handleW(evt) {
  g_move_direction = MOVINGx_W;
  arrowInputClick(evt, "w");
}
addInputEvent("w", handleW);


function handleShoot(evt) {
  evt.preventDefault();
  console.log("bang");
}
addInputEvent("shoot", handleShoot);

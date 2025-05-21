

/*
    256 is the width of the square, and pylon

PYLON_WIDTH = 256
HALF_PYLON_WIDTH=PYLON_WIDTH/2

    128 == PX_FROM_CENTER

*/


// let HALF_VIEW_WIDTH = 512;
// let BOTTOM_CHECKERBOARD = 512;

// let BACK_VANISH_POINT = [511, 256];
// let player_point = { x: 512, y: 1024 };

// let PYLON_WIDTH = 256;
// let HALF_PYLON_WIDTH = PYLON_WIDTH / 2;      // 128

// let PYLON_DEPTH = 96;
// let HALF_PYLON_DEPTH = PYLON_DEPTH / 2;   //48


let SQUISH_DEPTH_START = 320;
let SQUISH_FAR = 0.20;

document.getElementById('pylon-html').innerHTML = `
<svg>
  <defs>
    <linearGradient id="red-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,0,0)" />
      <stop offset="1" stop-color="rgb(64,0,0)" stop-opacity="0.993" />
    </linearGradient>

    <linearGradient id="blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,0,255)" />
      <stop offset="1" stop-color="rgb(0,0,64)" stop-opacity="0.9993" />
    </linearGradient>


    <linearGradient id="green-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,255,0)" />
      <stop offset="1" stop-color="rgb(0,64,0)" stop-opacity="0.99993" />
    </linearGradient>



    <linearGradient id="yellow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,195,0)" />
      <stop offset="1" stop-color="rgb(64,0,0)" stop-opacity="0.99993" />
    </linearGradient>

    <linearGradient id="lime-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(195,255,0)" />
      <stop offset="1" stop-color="rgb(0,64,0)" stop-opacity="0.99993" />
    </linearGradient>

    <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,255,195)" />
      <stop offset="1" stop-color="rgb(0,64,0)" stop-opacity="0.99993" />
    </linearGradient>

    <linearGradient id="grey-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(127,127,127)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="0.99993" />
    </linearGradient>

  </defs>
</svg>

<div id="the_pylons_1"></div>
<div id="the_pylons_2"></div>
<div id="the_pylons_3"></div>
<div id="the_pylons_4"></div>
<div id="the_pylons_5"></div>
<div id="the_pylons_6"></div>
<div id="the_pylons_7"></div>
<div id="the_pylons_8"></div>
<div id="the_pylons_9"></div>
<div id="the_pylons_10"></div>
<div id="the_pylons_11"></div>
<div id="the_pylons_12"></div>
<div id="the_pylons_13"></div>
<div id="the_pylons_14"></div>
<div id="the_pylons_15"></div>
<div id="the_pylons_16"></div>
<div id="the_pylons_17"></div>
<div id="the_pylons_18"></div>
<div id="the_pylons_19"></div>
<div id="the_pylons_20"></div>
<div id="the_pylons_21"></div>
<div id="the_pylons_22"></div>
<div id="the_pylons_23"></div>
<div id="the_pylons_24"></div>
<div id="the_pylons_25"></div>






`;



pylon_point_1 = { x: 150, y: 902, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;
pylon_point_2 = { x: 12, y: 976, grad_left: "lime-grad", grad_front: "yellow-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_3 = { x: 512, y: 976, grad_left: "grey-grad", grad_front: "yellow-grad", grad_right: "blue-grad" }; // = aways_left;
pylon_point_4 = { x: 912, y: 976, grad_left: "cyan-grad", grad_front: "red-grad", grad_right: "grey-grad" }; // = aways_left;
pylon_point_5 = { x: 1312, y: 976, grad_left: "blue-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;

pylon_point_6 = { x: -412, y: 776, grad_left: "lime-grad", grad_front: "green-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_7 = { x: 12, y: 776, grad_left: "yellow-grad", grad_front: "red-grad", grad_right: "grey-grad" }; // = aways_left;
pylon_point_8 = { x: 512, y: 776, grad_left: "grey-grad", grad_front: "blue-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_9 = { x: 912, y: 776, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;
pylon_point_10 = { x: 1312, y: 776, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;

pylon_point_11 = { x: -412, y: 576, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;
pylon_point_12 = { x: 12, y: 576, grad_left: "lime-grad", grad_front: "green-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_13 = { x: 512, y: 576, grad_left: "yellow-grad", grad_front: "blue-grad", grad_right: "grey-grad" }; // = aways_left;
pylon_point_14 = { x: 912, y: 576, grad_left: "red-grad", grad_front: "grey-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_15 = { x: 1312, y: 576, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "blue-grad" }; // = aways_left;

pylon_point_16 = { x: -412, y: 376, grad_left: "lime-grad", grad_front: "yellow-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_17 = { x: 12, y: 376, grad_left: "cyan-grad", grad_front: "grey-grad", grad_right: "red-grad" }; // = aways_left;
pylon_point_18 = { x: 512, y: 376, grad_left: "grey-grad", grad_front: "blue-grad", grad_right: "yellow-grad" }; // = aways_left;
pylon_point_19 = { x: 912, y: 376, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;
pylon_point_20 = { x: 1312, y: 376, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;

pylon_point_21 = { x: -412, y: 176, grad_left: "blue-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;
pylon_point_22 = { x: 12, y: 176, grad_left: "lime-grad", grad_front: "yellow-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_23 = { x: 512, y: 176, grad_left: "grey-grad", grad_front: "red-grad", grad_right: "cyan-grad" }; // = aways_left;
pylon_point_24 = { x: 912, y: 176, grad_left: "blue-grad", grad_front: "grey-grad", grad_right: "yellow-grad" }; // = aways_left;
pylon_point_25 = { x: 1312, y: 176, grad_left: "green-grad", grad_front: "blue-grad", grad_right: "red-grad" }; // = aways_left;




function setPolygon(pylon_point, html_id) {
  a_pylon = pylonSvg(pylon_point, player_point);
  targetDiv = document.getElementById(html_id);
  targetDiv.innerHTML = a_pylon;
}


function pylonBottom3Left(x_offset, difference_y) {
  let [left_front_bot, right_front_bot] = frontPylon(x_offset, difference_y);
  front_right_bot_vanish_point_YYYY = [x_offset + HALF_PYLON_WIDTH, BOTTOM_CHECKERBOARD];
  back_y_offset = squishPylon(difference_y);
  back_right_bot = distancedPoint(back_y_offset, front_right_bot_vanish_point_YYYY);
  return [left_front_bot, right_front_bot, back_right_bot];
}

function frontPylon(x_offset, difference_y) {
  front_right_bot_vanish_point_YYYY = [x_offset + HALF_PYLON_WIDTH, BOTTOM_CHECKERBOARD];
  front_y_offset = difference_y - HALF_PYLON_DEPTH;
  right_front_bot = distancedPoint(front_y_offset, front_right_bot_vanish_point_YYYY);
  front_left_bot_vanish_point_XXXX = [x_offset - HALF_PYLON_WIDTH, BOTTOM_CHECKERBOARD];
  left_front_bot = distancedPoint(front_y_offset, front_left_bot_vanish_point_XXXX);
  return [left_front_bot, right_front_bot];
}

function pylonBottom3Right(x_offset, difference_y) {
  let [left_front_bot, right_front_bot] = frontPylon(x_offset, difference_y);
  front_left_bot_vanish_point_XXXX = [x_offset - HALF_PYLON_WIDTH, BOTTOM_CHECKERBOARD];
  back_y_offset = squishPylon(difference_y);
  back_left_bot = distancedPoint(back_y_offset, front_left_bot_vanish_point_XXXX);
  return [left_front_bot, right_front_bot, back_left_bot];
}

function squishPylon(difference_y) {
  if (difference_y < SQUISH_DEPTH_START) {
    back_y_offset = difference_y + HALF_PYLON_DEPTH;
  } else {
    the_diff = difference_y - SQUISH_DEPTH_START;
    back_y_offset = difference_y + HALF_PYLON_DEPTH - Math.floor(the_diff * SQUISH_FAR);
  }
  return back_y_offset;
}


function pylonSvg(pylon_point, player_point) {
  let is_visible = (player_point.y >= pylon_point.y);
  if (is_visible) {
    difference_y = player_point.y - pylon_point.y;
    player_start_left = player_point.x - HALF_PYLON_WIDTH;
    player_start_right = player_point.x + HALF_PYLON_WIDTH;

    // player_start_left = player_point.x - 128;
    // player_start_right = player_point.x + 128;
    if (pylon_point.x < player_start_left) {
      let left_pylon = pylonLeft(pylon_point, player_point, difference_y);
      return left_pylon;
    } else if (pylon_point.x > player_start_right) {
      let right_pylon = pylonRight(pylon_point, player_point, difference_y);
      return right_pylon;
    } else {
      let middle_pylon = pylonMiddle(pylon_point, player_point, difference_y);
      return middle_pylon;
    }
  }
}

function pylonLeft(pylon_point, player_point, difference_y) {
  difference_x = player_point.x - pylon_point.x;
  x_offset = HALF_VIEW_WIDTH - difference_x;
  [left_front_bot, right_front_bot, back_right_bot] = pylonBottom3Left(x_offset, difference_y);
  left_front_top = [left_front_bot[0], HALF_VIEW_WIDTH - left_front_bot[1]];
  right_front_top = [right_front_bot[0], HALF_VIEW_WIDTH - right_front_bot[1]];
  back_right_top = [back_right_bot[0], HALF_VIEW_WIDTH - back_right_bot[1]];
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  let the_pylon = pylonLeftRight(left_vline, middle_vline, right_vline, pylon_point.grad_left, pylon_point.grad_front, difference_x, difference_y);
  return the_pylon;
}

function pylonRight(pylon_point, player_point, difference_y) {
  difference_x = pylon_point.x - player_point.x;
  x_offset = HALF_VIEW_WIDTH + difference_x;
  [left_front_bot, right_front_bot, back_right_bot] = pylonBottom3Right(x_offset, difference_y);
  left_front_top = [left_front_bot[0], HALF_VIEW_WIDTH - left_front_bot[1]];
  right_front_top = [right_front_bot[0], HALF_VIEW_WIDTH - right_front_bot[1]];
  back_right_top = [back_right_bot[0], HALF_VIEW_WIDTH - back_right_bot[1]];
  let middle_vline = [left_front_top, left_front_bot];
  let left_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  let the_pylon = pylonLeftRight(left_vline, middle_vline, right_vline, pylon_point.grad_right, pylon_point.grad_front, difference_x, difference_y);
  return the_pylon;
}

function pylonMiddle(pylon_point, player_point, difference_y) {
  difference_x = player_point.x - pylon_point.x;
  x_offset = HALF_VIEW_WIDTH - difference_x;
  [left_front_bot, right_front_bot, back_right_bot] = pylonBottom3Left(x_offset, difference_y);
  left_front_top = [left_front_bot[0], HALF_VIEW_WIDTH - left_front_bot[1]];
  right_front_top = [right_front_bot[0], HALF_VIEW_WIDTH - right_front_bot[1]];
  back_right_top = [back_right_bot[0], HALF_VIEW_WIDTH - back_right_bot[1]];
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let the_pylon = pylonFrontOnly(left_vline, middle_vline, pylon_point.grad_front, difference_x, difference_y);
  return the_pylon;
}

function distancedPoint(distance_in_256, front_point) {
  shrink_size = sprite_sizes[distance_in_256];
  let [x_1, y_1] = BACK_VANISH_POINT;
  let [x_2, y_2] = front_point;
  x_3 = shrink_size * x_2 + (1 - shrink_size) * x_1;
  y_3 = shrink_size * y_2 + (1 - shrink_size) * y_1;
  return [x_3, y_3];
}

function zIndex(difference_x, difference_y) {
  let y_index = 1000 - difference_y;
  let x_index = 1000 - difference_x;
  let z_index = y_index * 1000 + x_index; // so that stuff same y distance favors middle stuff
  return z_index;
}

function pylonFrontOnly(left_vline, middle_vline, grad_front, difference_x, difference_y) {
  let the_z_index = zIndex(difference_x, difference_y);
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  let front_pylon = svgPolygon([left_front_top, right_front_top, left_front_bot, right_front_bot], grad_front);
  let the_pylon = svgIntoDiv(the_z_index, front_pylon, '');
  return the_pylon;
}

function pylonLeftRight(left_vline, middle_vline, right_vline, grad_side, grad_front, difference_x, difference_y) {
  let the_z_index = zIndex(difference_x, difference_y);
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  let front_pylon = svgPolygon([left_front_top, right_front_top, left_front_bot, right_front_bot], grad_front);
  let side_pylon = svgPolygon([right_front_top, back_right_top, right_front_bot, back_right_bot], grad_side);
  let the_pylon = svgIntoDiv(the_z_index, front_pylon, side_pylon);
  return the_pylon;
}

function svgPolygon(a_polygon, the_gradient) {
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  let svg_polygon = `<polygon fill="url(#${the_gradient})" 
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_polygon;
}

function svgIntoDiv(z_index, front_pylon, side_pylon) {
  the_top = 100;
  the_left = 64;

  the_left = 0;
  the_top = 0;
  let the_pylon = `<div style=" position:absolute; z-index:${z_index}; height:512px; width: 1024px;  left:${the_left}px;  top: ${the_top}px; ">
                     <svg id="svg-right-508" viewBox="0 0 1023 511"  preserveAspectRatio="xMinYMin slice">
                       ${front_pylon}z
                       ${side_pylon}
                     </svg></div>`;
  return the_pylon;
}

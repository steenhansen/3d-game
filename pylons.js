

/*
    256 is the width of the square, and pylon

PYLON_WIDTH = 256
HALF_PYLON_WIDTH=PYLON_WIDTH/2

    128 == PX_FROM_CENTER

*/


let SQUISH_DEPTH_START = 320;
let SQUISH_FAR = 0.20;




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
  let the_pylon = `<div class="show-pylon" 
                        style="z-index:${z_index}; ">
                     <svg id="svg-right-508"
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                       ${front_pylon}
                       ${side_pylon}
                     </svg>
                   </div>`;
  return the_pylon;
}



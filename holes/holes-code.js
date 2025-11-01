

function holeSet(a_hole, the_player) {
  svg_hole = createHoleHtml(a_hole, the_player);
  hole_id = a_hole.s_hole_name;
  targetDiv = document.getElementById(hole_id);
  if (svg_hole == null) {
    hole_error_set = `bad::holeSet ${hole_id}`;
    throw new Error(hole_error_set);
  }
  targetDiv.innerHTML = svg_hole;
}




function holeOnMiddle(x_center_offset, hole_player_ys) {
  [hole_y, player_y] = hole_player_ys;
  if (player_y > hole_y) {
    difference_yy = player_y - hole_y;
  } else {
    checkerboard_depth = g_planet.s_checkerboard_depth;
    dist_hole_to_zero = checkerboard_depth - hole_y;
    difference_yy = player_y + dist_hole_to_zero;
  }
  let [left_front_bot, right_front_bot, _back_right_bot, back_left_bot] = panels3Middle(x_center_offset, difference_yy, HOLE_PIXEL_DEPTH);
  return [left_front_bot, right_front_bot, _back_right_bot, back_left_bot];
}


function createHoleHtml(a_hole, the_player) {
  [the_z_index, difference_y, hole_relative, x_center_offset, head_on_view] = objectPlacement(a_hole, the_player);
  hole_player_ys = [a_hole.m_y, the_player.m_y];
  if (head_on_view) {
    [left_front_bot, right_front_bot, back_RIGHT_bot, back__LEFT__bot] = holeOnMiddle(x_center_offset, hole_player_ys);
  } else if (hole_relative == LEFT_OF_PLAYER) {
    [left_front_bot, right_front_bot, back_RIGHT_bot, back__LEFT__bot] = panels3BackRight(x_center_offset, hole_player_ys, HOLE_PIXEL_DEPTH);
  } else {
    [left_front_bot, right_front_bot, back__LEFT__bot, back_RIGHT_bot] = panels3BackLeft(x_center_offset, hole_player_ys, HOLE_PIXEL_DEPTH);
  }
  hole_id = "front-hole-" + a_hole.s_hole_name;
  [front_left_x, front_left_y] = left_front_bot;
  [front_right_x, front_right_y] = right_front_bot;
  [back_right_x, back_right_y] = back_RIGHT_bot;
  [back_left_x, back_left_y] = back__LEFT__bot;

  err1 = `${front_left_x},${front_left_y}    `;
  err2 = `${front_right_x},${front_right_y}    `;
  err3 = `  ${back_right_x},${back_right_y}   `;
  err4 = ` ${back_left_x},${back_left_y}   `;

  if (isNaN(front_left_x)) {
    hole_error = `bad::hole ${hole_id} ${front_left_x}`;
    throw new Error(hole_error);
  }
  hole_color = a_hole.s_hole_color;
  vertical_color = a_hole.c_vert_color;
  front_hole = `<polygon fill="${hole_color}"  id="a-hole-id"
                      points="${front_left_x},${front_left_y}
                              ${front_right_x},${front_right_y}
                              ${back_right_x},${back_right_y}
                              ${back_left_x},${back_left_y}      " />`;

  if (head_on_view || hole_relative == RIGHT_OF_PLAYER) {
    front_hole += `<line stroke="${vertical_color}"  
                      x1=${back_right_x} y1=${back_right_y}
                      x2=${back_right_x} y2=${front_right_y}      " />`;
  }
  if (head_on_view || hole_relative == LEFT_OF_PLAYER) {
    front_hole += `<line stroke="${vertical_color}"  
                      x1=${back_left_x} y1=${back_right_y}
                      x2=${back_left_x} y2=${front_right_y}      " />`;
  }
  hole_svg = holeToSvg(the_z_index, front_hole);


  return hole_svg;
}








function holeToSvg(z_index, front_hole) {
  let the_hole = `<div class="show-hole" 
                        style="z-index:${z_index}; ">
                     <svg 
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                       ${front_hole}
                  
                     </svg>
                   </div>`;

  return the_hole;
}




/*
                    |   
                    |               back_right_bot  
      back_left_bot \-------------------\   
                     \                   \  |
                      \ |                 \ | 
                       \|                  \| 
         left_front_bot \-------------------right_front_bot
*/
function panels3BackLeftNN(x_center_offset, pylon_player_ys, pixel_depth) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_y = player_y - pylon_y;
  } else {
    checkerboard_depth = g_planet.s_checkerboard_depth;
    dist_pylon_to_zero = checkerboard_depth - pylon_y;
    difference_y = player_y + dist_pylon_to_zero;
  }
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  back_left_bot = distancedPoint(pixel_depth, left_front_bot);
  back_right_bot = distancedPoint22(pixel_depth, back_right_bot);
  right_bottom_4 = [left_front_bot, right_front_bot, back_left_bot, back_right_bot];
  return right_bottom_4;
}




function distancedPoint22(distance_in_256, field_front_point) {
  if (distance_in_256 < 1024) {
    shrink_size = SPRITE_SIZES_1024[distance_in_256];
  } else {
    shrink_size = 0;
  }
  let [x_1, y_1] = BACK_VANISH_POINT;
  let [x_2, y_2] = field_front_point;
  x_3 = shrink_size * x_2 + (1 - shrink_size) * x_1;
  y_3 = shrink_size * y_2 + (1 - shrink_size) * y_1;
  x_4 = Math.floor(x_3);
  y_4 = Math.floor(y_3);
  front_distanced_point = [x_4, y_4];
  if (isNaN(x_2) || isNaN(y_2)) {
  }

  return front_distanced_point;
}
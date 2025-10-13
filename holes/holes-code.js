var hole_draw_count = 0;

function holeSet(a_hole) {
  // if (hole_draw_count == 0) {
  svg_pylon = holeDraw(a_hole, g_player);

  pylon_id = a_hole.s_pylon_name;

  targetDiv = document.getElementById(pylon_id);
  if (svg_pylon == null) {
    console.log("crash", pylon_id);
  }

  //console.log("holeSet, svg_pylon", svg_pylon);

  targetDiv.innerHTML = svg_pylon;
  //}
  hole_draw_count++;
}

/*
                  </div>
 holeSet, svg_pylon <div class="show-hole" 
                        style="z-index:1080842; ">
                     <svg 
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                       <polygon fill="black"  id="a-hole-id"
                      points="NaN,NaN
                              NaN,NaN
                              NaN,NaN
                              NaN,NaN      " /><line stroke="orange"  
                      x1=NaN y1=NaN
                      x2=NaN y2=NaN      " />
                  
                     </svg>
                   </div>
                  */



function holeOnMiddle(x_center_offset, pylon_player_ys) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_yy = player_y - pylon_y;
  } else {
    dist_pylon_to_zero = g_checkerboard_depth - pylon_y;
    difference_yy = player_y + dist_pylon_to_zero;
  }
  let [left_front_bot, right_front_bot, _back_right_bot, back_left_bot] = panels3Middle(x_center_offset, difference_yy, HOLE_PIXEL_DEPTH);
  return [left_front_bot, right_front_bot, _back_right_bot, back_left_bot];
}


function holeDraw(a_hole, g_player) {
  [the_z_index, difference_y, pylon_relative, x_center_offset, head_on_view] = objectPlacement(a_hole, g_player);
  pylon_player_ys = [a_hole.m_y, g_player.m_y];
  if (head_on_view) {
    [left_front_bot, right_front_bot, back_RIGHT_bot, back__LEFT__bot] = holeOnMiddle(x_center_offset, pylon_player_ys);
  } else if (pylon_relative == LEFT_OF_PLAYER) {
    [left_front_bot, right_front_bot, back_RIGHT_bot, back__LEFT__bot] = panels3BackRight(x_center_offset, pylon_player_ys, HOLE_PIXEL_DEPTH);
  } else {
    // NB note back__LEFT__bot, back_RIGHT_bot switch
    [left_front_bot, right_front_bot, back__LEFT__bot, back_RIGHT_bot] = panels3BackLeft(x_center_offset, pylon_player_ys, HOLE_PIXEL_DEPTH);
  }
  pylon_id = "panel-front-pylon-" + a_hole.s_pylon_name;
  [front_left_x, front_left_y] = left_front_bot;
  [front_right_x, front_right_y] = right_front_bot;
  [back_right_x, back_right_y] = back_RIGHT_bot;
  [back_left_x, back_left_y] = back__LEFT__bot;

  err1 = `${front_left_x},${front_left_y}    `;
  err2 = `${front_right_x},${front_right_y}    `;
  err3 = `  ${back_right_x},${back_right_y}   `;
  err4 = ` ${back_left_x},${back_left_y}   `;

  if (isNaN(front_left_x)) {
    console.log("holeDraw", pylon_id, front_left_x);
  }

  // qbert
  hole_color = a_hole.c_hole_color;
  front_pylon = `<polygon fill="${hole_color}"  id="a-hole-id"
                      points="${front_left_x},${front_left_y}
                              ${front_right_x},${front_right_y}
                              ${back_right_x},${back_right_y}
                              ${back_left_x},${back_left_y}      " />`;

  if (head_on_view || pylon_relative == RIGHT_OF_PLAYER) {
    front_pylon += `<line stroke="grey"  
                      x1=${back_right_x} y1=${back_right_y}
                      x2=${back_right_x} y2=${front_right_y}      " />`;
  }
  if (head_on_view || pylon_relative == LEFT_OF_PLAYER) {
    front_pylon += `<line stroke="grey"  
                      x1=${back_left_x} y1=${back_right_y}
                      x2=${back_left_x} y2=${front_right_y}      " />`;
  }
  pylon_svg = holeToSvg(the_z_index, front_pylon);
  return pylon_svg;
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
  //console.log(the_hole);
  return the_hole;
}


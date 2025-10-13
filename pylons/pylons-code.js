



function pylonToSvg(z_index, front_pylon, side_pylon) {
  let the_pylon = `<div class="show-pylon" 
                        style="z-index:${z_index}; ">
                     <svg 
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                       ${front_pylon}
                       ${side_pylon}
                     </svg>
                   </div>`;

  return the_pylon;
}





function pylonOnMiddle(x_center_offset, difference_yy) {
  left_mid_right_vlines = frontPylonRegion(x_center_offset, difference_yy);
  side_pylon = '';
  return [left_mid_right_vlines, side_pylon];
}



function frontPylonRegion(x_center_offset, difference_yy) {
  let [left_front_bot, right_front_bot, _back_right_bot, _back_left_bot] = panels3Middle(x_center_offset, difference_yy, PYLON_PIXEL_DEPTH);
  let [left_front_top, right_front_top, back_right_top] = spriteTops(left_front_bot, right_front_bot, _back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let _right_vline = [back_right_top, _back_right_bot];
  left_mid_right_vlines = [left_vline, middle_vline, _right_vline];
  return left_mid_right_vlines;
}


function twirlSides(a_pylon) {
  if ('m_b_side_twirl' in a_pylon) {
    let { m_b_side_twirl: side_twirl, m_b_front_twirl: front_twirl } = a_pylon;

    side_twirl += 0.25;
    if (side_twirl >= NUMBER_TWIRLS) {
      side_twirl = 0;
    }

    front_twirl += 1;
    if (front_twirl >= NUMBER_TWIRLS) {
      front_twirl = 0;
    }

    a_pylon.m_b_side_twirl = side_twirl;
    a_pylon.m_b_front_twirl = front_twirl;
  }
  return a_pylon;
}



///var pylon_draw_count = 0;
function pylonSet(a_pylon) {
  //if (pylon_draw_count == 0) {
  svg_pylon = pylonDraw(a_pylon, g_player);
  pylon_id = a_pylon.s_pylon_name;

  targetDiv = document.getElementById(pylon_id);
  //console.log("targetDiv", targetDiv, pylon_id);
  if (svg_pylon == null) {
    console.log("crash", pylon_id);
  }
  //console.log("a_pylon", a_pylon, svg_pylon);
  targetDiv.innerHTML = svg_pylon;
  //}
  //pylon_draw_count++;
}

function pylonDraw(a_pylon, g_player) {



  a_pylon = twirlSides(a_pylon);
  [the_z_index, difference_y, pylon_relative, x_center_offset, head_on_view] = objectPlacement(a_pylon, g_player);
  pylon_player_ys = [a_pylon.m_y, g_player.m_y];
  if (pylon_relative == LEFT_OF_PLAYER) {
    // qbert 4
    [left_mid_right_vlines, side_pylon] = pylonOnLeft(a_pylon, x_center_offset, pylon_player_ys, head_on_view);
    left_mid_right_vlines[0][1][0][0] += 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] += 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  } else {
    // qbert 3
    [left_mid_right_vlines, side_pylon] = pylonOnRight(a_pylon, x_center_offset, pylon_player_ys, head_on_view);
    left_mid_right_vlines[0][1][0][0] -= 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] -= 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  }
  pylon_id = "panel-front-pylon-" + a_pylon.s_pylon_name;

  //let do_outlines = a_pylon.o_outline_color;
  // let do_outlines = 'o_outline_color' in a_pylon;


  if ('o_outline_color' in a_pylon) {
    outline_color = a_pylon.o_outline_color;
  } else {
    outline_color = 'none';
  }



  do_flash = 't_pylon_hit_flash' in a_pylon;
  // qbert 2
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_yy = player_y - pylon_y;
  } else {
    dist_pylon_to_zero = g_checkerboard_depth - pylon_y;
    difference_yy = player_y + dist_pylon_to_zero;
  }


  poly_fill = getFrontFill(a_pylon);
  front_pylon = pylonFront(left_mid_right_vlines, pylon_id, outline_color, do_flash, difference_yy, poly_fill);
  pylon_svg = pylonToSvg(the_z_index, front_pylon, side_pylon);
  return pylon_svg;
}



//  file:///c%3A/Users/16043/Documents/GitHub/3ddd/index.html?mobile-downgrade=false
function getFrontFill(a_pylon) {
  if ('m_a_front_color' in a_pylon) {
    front_fill = a_pylon.m_a_front_color;
  } else {
    // console.log("DDDDDDDDDDDDDDDDDDDDDDDD");
    if (isDowngradeGradient()) {
      front_fill = a_pylon.m_b_front_grad_from;
    } else {
      //  console.log("a_pylon", a_pylon);
      twirl_gradient = twirledGradient(a_pylon.m_b_side_twirl, a_pylon.m_b_front_grad_from, a_pylon.m_b_front_grad_to);
      front_fill = `url(#${twirl_gradient}) `;
    }
  }
  return front_fill;
}








// 88-88
function pylonSidePanel(a_pylon, pylon_vlines, difference_yy, poly_fill) {
  let [_left_vline, middle_vline, right_vline] = pylon_vlines;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  right_top_bot = [right_front_top, back_right_top, right_front_bot, back_right_bot];
  let side_s_pylon_name = 'panel-side-pylon-' + a_pylon.s_pylon_name;
  //let do_outlines = a_pylon.o_outline_color;

  if ('o_outline_color' in a_pylon) {
    outline_color = a_pylon.o_outline_color;

  } else {
    outline_color = 'none';
  }

  do_flash = 't_pylon_hit_flash' in a_pylon;


  let side_pylon = pylonPolygon(right_top_bot, side_s_pylon_name, outline_color, do_flash, difference_yy, poly_fill);
  return side_pylon;
}



function pylonOnLeft(a_pylon, x_center_offset, pylon_player_ys, head_on_view) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_yy = player_y - pylon_y;
  } else {
    dist_pylon_to_zero = g_checkerboard_depth - pylon_y;
    difference_yy = player_y + dist_pylon_to_zero;
  }
  if (head_on_view) {
    return pylonOnMiddle(x_center_offset, difference_yy);
  } else {
    left_mid_right_vlines = objectLeftSide(x_center_offset, pylon_player_ys, PYLON_PIXEL_DEPTH);
    left_fill = getLeftFill(a_pylon);
    side_pylon = pylonSidePanel(a_pylon, left_mid_right_vlines, difference_yy, left_fill);
    return [left_mid_right_vlines, side_pylon];
  }
}

function pylonOnRight(a_pylon, x_center_offset, pylon_player_ys, head_on_view) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_yy = player_y - pylon_y;
  } else {
    dist_pylon_to_zero = g_checkerboard_depth - pylon_y;
    difference_yy = player_y + dist_pylon_to_zero;
  }
  if (head_on_view) {
    return pylonOnMiddle(x_center_offset, difference_yy);
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, pylon_player_ys, PYLON_PIXEL_DEPTH);

    // qbert 2
    right_fill = getRightFill(a_pylon);
    side_pylon = pylonSidePanel(a_pylon, left_mid_right_vlines, difference_yy, right_fill);
    return [left_mid_right_vlines, side_pylon];
  }
}

function isDowngradeGradient() {
  if (mobileDowngrade() == false) {
    downgrade_gradient = false;
  } else if (isMobile()) {
    downgrade_gradient = true;
  } else {
    downgrade_gradient = false;
  }
  return downgrade_gradient;
}

//  file:///c%3A/Users/16043/Documents/GitHub/3ddd/index.html?mobile-downgrade=false
function getRightFill(a_pylon) {
  if ('m_a_right_color' in a_pylon) {
    right_fill = a_pylon.m_a_right_color;
  } else {
    if (isDowngradeGradient()) {
      right_fill = a_pylon.m_b_right_grad_from;
    } else {
      twirl_gradient = twirledGradient(a_pylon.m_b_side_twirl, a_pylon.m_b_right_grad_from, a_pylon.m_b_right_grad_to);
      right_fill = `url(#${twirl_gradient}) `;
    }
  }
  return right_fill;
}

function getLeftFill(a_pylon) {
  if ('m_a_left_color' in a_pylon) {
    left_fill = a_pylon.m_a_left_color;
  } else {
    if (isDowngradeGradient()) {
      left_fill = a_pylon.m_b_left_grad_from;
    } else {
      twirl_gradient = twirledGradient(a_pylon.m_b_side_twirl, a_pylon.m_b_left_grad_from, a_pylon.m_b_left_grad_to);
      left_fill = `url(#${twirl_gradient}) `;
    }
  }
  return left_fill;
}
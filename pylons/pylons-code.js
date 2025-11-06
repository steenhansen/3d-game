function createPylonHtml(z_index, front_pylon, side_pylon) {
  let the_pylon = `<div class="show-pylon" style="z-index:${z_index}; ">
                     <svg viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                          ${front_pylon}
                          ${side_pylon}
                     </svg>
                   </div>`;
  return the_pylon;
}




function twirlSides(a_pylon) {
  if ('p_grad_side_twirl' in a_pylon) {
    let { p_grad_side_twirl: side_twirl, p_grad_frnt_twirl: front_twirl } = a_pylon;
    side_twirl += 0.25;
    if (side_twirl >= PYLON_NUMBER_TWIRLS) {
      side_twirl = 0;
    }
    front_twirl += 1;
    if (front_twirl >= PYLON_NUMBER_TWIRLS) {
      front_twirl = 0;
    }
    a_pylon.p_grad_side_twirl = side_twirl;
    a_pylon.p_grad_frnt_twirl = front_twirl;
  }
  return a_pylon;
}

//let count_svg = 1;
function pylonSet(the_player, a_pylon) {
  svg_pylon = pylonDraw(a_pylon, the_player);
  pylon_id = a_pylon.s_pylon_name;
  targetDiv = document.getElementById(pylon_id);

  if (svg_pylon == null) {
    pylon_error = `bad::pylon is null ${pylon_id}`;
    throw new Error(pylon_error);
  }
  targetDiv.innerHTML = svg_pylon;
}

function pylonDraw(a_pylon, the_player) {
  a_pylon = twirlSides(a_pylon);
  [the_z_index, difference_y, pylon_relative, x_center_offset, head_on_view] = objectPlacement(a_pylon, the_player);
  pylon_player_ys = [a_pylon.m_y, the_player.m_y];

  if (pylon_relative == LEFT_OF_PLAYER) {
    [left_mid_right_vlines, side_pylon] = pylonOnLeft(a_pylon, x_center_offset, pylon_player_ys, head_on_view);
    left_mid_right_vlines[0][1][0][0] += 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] += 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  } else {
    [left_mid_right_vlines, side_pylon] = pylonOnRight(a_pylon, x_center_offset, pylon_player_ys, head_on_view);
    left_mid_right_vlines[0][1][0][0] -= 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] -= 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  }
  pylon_id = "panel-front-pylon-" + a_pylon.s_pylon_name;
  if ('o_outline_color' in a_pylon) {
    outline_color = a_pylon.o_outline_color;
  } else {
    outline_color = 'none';
  }
  do_flash = 't_pylon_hit_flash' in a_pylon;
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_yy = player_y - pylon_y;
  } else {
    checkerboard_depth = g_planet.s_checkerboard_depth;
    dist_pylon_to_zero = checkerboard_depth - pylon_y;
    difference_yy = player_y + dist_pylon_to_zero;
  }
  poly_fill = getPylonFill(a_pylon);
  front_pylon = pylonFront(left_mid_right_vlines, pylon_id, outline_color, do_flash, difference_yy, poly_fill, a_pylon.m_alive);
  pylon_svg = createPylonHtml(the_z_index, front_pylon, side_pylon);
  return pylon_svg;
}





function pylonSidePanel(a_pylon, pylon_vlines, difference_yy) {

  let [_left_vline, middle_vline, right_vline] = pylon_vlines;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  right_top_bot = [right_front_top, back_right_top, right_front_bot, back_right_bot];
  let side_s_pylon_name = 'panel-side-pylon-' + a_pylon.s_pylon_name;
  if ('o_outline_color' in a_pylon) {
    outline_color = a_pylon.o_outline_color;
  } else {
    outline_color = 'none';
  }
  do_flash = 't_pylon_hit_flash' in a_pylon;
  poly_fill = getPylonFill(a_pylon);
  let side_pylon_svg = pylonPolygon(right_top_bot, side_s_pylon_name, outline_color, do_flash, difference_yy, poly_fill, a_pylon.m_alive);
  return side_pylon_svg;
}



function pylonOnLeft(a_pylon, x_center_offset, pylon_player_ys, head_on_view) {
  difference_yy = objectDepth(pylon_player_ys);
  if (head_on_view) {
    left_mid_right_vlines = objectFrontRegion(x_center_offset, difference_yy);
    side_pylon = '';
  } else {
    left_mid_right_vlines = objectLeftSide(x_center_offset, pylon_player_ys, PYLON_PIXEL_DEPTH);
    side_pylon = pylonSidePanel(a_pylon, left_mid_right_vlines, difference_yy);
  }
  return [left_mid_right_vlines, side_pylon];
}

function pylonOnRight(a_pylon, x_center_offset, pylon_player_ys, head_on_view) {
  difference_yy = objectDepth(pylon_player_ys);
  if (head_on_view) {
    left_mid_right_vlines = objectFrontRegion(x_center_offset, difference_yy);
    side_pylon = '';
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, pylon_player_ys, PYLON_PIXEL_DEPTH);
    side_pylon = pylonSidePanel(a_pylon, left_mid_right_vlines, difference_yy);
  }
  return [left_mid_right_vlines, side_pylon];
}


function getPylonFill(a_pylon) {
  from_color = a_pylon.s_gradient[0];
  to_color = a_pylon.s_gradient[1];
  twirl_gradient = twirledGradient(a_pylon.p_grad_side_twirl, from_color, to_color);
  pylon_fill = `url(#${twirl_gradient}) `;
  return pylon_fill;
}




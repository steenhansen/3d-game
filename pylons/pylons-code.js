



function twirlSides(a_pylon) {

  // if mobile then just return a_pylon
  //  return a_pylon;

  let { m_side_twirl: side_twirl, m_front_twirl: front_twirl } = a_pylon;

  side_twirl += 0.25;
  if (side_twirl >= NUMBER_TWIRLS) {
    side_twirl = 0;
  }

  front_twirl += 1;
  if (front_twirl >= NUMBER_TWIRLS) {
    front_twirl = 0;
  }

  a_pylon.m_side_twirl = side_twirl;
  a_pylon.m_front_twirl = front_twirl;
  return a_pylon;
}


function pylonSidePanel(a_pylon, pylon_vlines, gradient_side, side_color) {
  let [_left_vline, middle_vline, right_vline] = pylon_vlines;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  right_top_bot = [right_front_top, back_right_top, right_front_bot, back_right_bot];
  let side_pylon_name = 'panel-side-pylon-' + a_pylon.pylon_name;
  let do_outlines = a_pylon.c_outline;
  let side_pylon = pylonPolygon(right_top_bot, gradient_side, side_pylon_name, do_outlines, side_color);
  return side_pylon;
}

function pylonOnLeft(a_pylon, x_center_offset, pylon_player_ys, head_on_view, side_color) {
  if (head_on_view) {
    [pylon_y, player_y] = pylon_player_ys;
    if (player_y > pylon_y) {
      difference_yy = player_y - pylon_y;
    } else {
      dist_pylon_to_zero = SCENE_Y_MAX - pylon_y;
      difference_yy = player_y + dist_pylon_to_zero;
    }

    return pylonOnMiddle(a_pylon, x_center_offset, difference_yy);
  } else {
    left_mid_right_vlines = objectLeftSide(a_pylon, x_center_offset, pylon_player_ys);
    gradient_left = twirledGradient(a_pylon.m_side_twirl, a_pylon.pylon_colors);
    side_pylon = pylonSidePanel(a_pylon, left_mid_right_vlines, gradient_left, side_color);
    return [left_mid_right_vlines, side_pylon];
  }
}

function pylonOnRight(a_pylon, x_center_offset, pylon_player_ys, head_on_view, side_color) {
  if (head_on_view) {

    [pylon_y, player_y] = pylon_player_ys;
    if (player_y > pylon_y) {
      difference_yy = player_y - pylon_y;
    } else {
      dist_pylon_to_zero = SCENE_Y_MAX - pylon_y;
      difference_yy = player_y + dist_pylon_to_zero;
    }


    return pylonOnMiddle(a_pylon, x_center_offset, difference_yy);
  } else {
    left_mid_right_vlines = objectRightSide(a_pylon, x_center_offset, pylon_player_ys);

    gradient_right = twirledGradient(a_pylon.m_side_twirl, a_pylon.pylon_colors);
    side_pylon = pylonSidePanel(a_pylon, left_mid_right_vlines, gradient_right, side_color);
    return [left_mid_right_vlines, side_pylon];
  }
}

function pylonOnMiddle(a_pylon, x_center_offset, difference_yy) {
  left_mid_right_vlines = objectMiddleRegion(a_pylon, x_center_offset, difference_yy);
  side_pylon = '';
  return [left_mid_right_vlines, side_pylon];
}

function pylonSet(a_pylon, html_id) {
  svg_pylon = pylonDraw(a_pylon, g_player);
  targetDiv = document.getElementById(html_id);
  if (svg_pylon == null) {
    console.log("crash", html_id);
  }
  targetDiv.innerHTML = svg_pylon;
}

function pylonDraw(a_pylon, g_player) {
  pylon_colors = a_pylon.pylon_colors;
  front_color = a_pylon.pylon_colors[0];
  side_color = a_pylon.pylon_colors[1];

  a_pylon = twirlSides(a_pylon);
  [the_z_index, difference_y, pylon_relative, x_center_offset, head_on_view] = objectPlacement(a_pylon, g_player);
  pylon_player_ys = [a_pylon.m_y, g_player.m_y];

  if (pylon_relative == LEFT_OF_PLAYER) {
    [left_mid_right_vlines, side_pylon] = pylonOnLeft(a_pylon, x_center_offset, pylon_player_ys, head_on_view, side_color);
    left_mid_right_vlines[0][1][0][0] += 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] += 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  } else {
    [left_mid_right_vlines, side_pylon] = pylonOnRight(a_pylon, x_center_offset, pylon_player_ys, head_on_view, side_color);
    left_mid_right_vlines[0][1][0][0] -= 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] -= 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  }
  pylon_id = "panel-front-pylon-" + a_pylon.pylon_name;
  gradient_front = twirledGradient(a_pylon.m_front_twirl, a_pylon.pylon_colors);


  let do_outlines = a_pylon.c_outline;

  front_pylon = pylonFront(left_mid_right_vlines, gradient_front, pylon_id, do_outlines, front_color);
  pylon_svg = pylonToSvg(the_z_index, front_pylon, side_pylon);
  return pylon_svg;
}

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



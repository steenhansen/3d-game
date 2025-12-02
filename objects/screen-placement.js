

function xyNotInSquares(out_x, out_y, err_mess) {

  x_min = g_planet.s_playground_x_min;
  x_max = g_planet.s_playground_x_max;

  x_original = out_x - x_min;
  max_x_original = x_max - x_min;
  if (out_x < x_min || out_x > x_max) {
    x_err = `${err_mess}, X:${x_original} is not in range of 0 < X < ${max_x_original}`;
    throw new Error(x_err);
  }

  y_min = g_planet.s_playground_y_min;
  y_max = g_planet.s_playground_y_max;

  y_original = out_y - y_min;
  max_y_original = y_max - y_min;
  if (out_y < y_min || out_y > y_max) {
    y_err = `${err_mess}, Y:${y_original} is not in range of 0 < Y < ${max_y_original}`;

    throw new Error(y_err);
  }
}









function objectPlacement(an_object, the_player) {
  dist_abs_y = distanceAbsY([an_object.m_y, the_player.m_y]);
  let [difference_x, relative_to_player, head_on_view] = spritePlace(an_object, the_player);
  x_center_offset = thingRelationToPlayer(difference_x, the_player, relative_to_player);

  let the_z_index = deriveIndexZ(difference_x, dist_abs_y);

  return [the_z_index, relative_to_player, x_center_offset, head_on_view];
}


// pylons3, missiles2, enemies1 NOT holes which uses 4 points
function objectRightSide(x_center_offset, pylon_player_ys, pixel_depth) {
  let [left_front_bot, right_front_bot, back_left_bot, _back_right_bot] = panels3BackLeft(x_center_offset, pylon_player_ys, pixel_depth);
  let [left_front_top, right_front_top, back_right_top] = spriteTops(left_front_bot, right_front_bot, back_left_bot);
  let middle_vline = [left_front_top, left_front_bot];
  let right_vline = [right_front_top, right_front_bot];
  let left_vline = [back_right_top, back_left_bot];
  left_mid_right_vlines = [right_vline, middle_vline, left_vline];
  return left_mid_right_vlines;
}

//   pylons3, missiles2, enemies1 NOT holes which uses 4 points
function objectLeftSide(x_center_offset, pylon_player_ys, pixel_depth) {
  let [left_front_bot, right_front_bot, back_right_bot, _back_left_bot] = panels3BackRight(x_center_offset, pylon_player_ys, pixel_depth);

  let [left_front_top, right_front_top, back_right_top] = spriteTops(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}




function objectFrontRegion(x_center_offset, dist_abs_y) {
  let [left_front_bot, right_front_bot, _back_right_bot, _back_left_bot] = panels3Middle(x_center_offset, dist_abs_y, PYLON_PIXEL_DEPTH);
  let [left_front_top, right_front_top, back_right_top] = spriteTops(left_front_bot, right_front_bot, _back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let _right_vline = [back_right_top, _back_right_bot];
  left_mid_right_vlines = [left_vline, middle_vline, _right_vline];
  return left_mid_right_vlines;
}



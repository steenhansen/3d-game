

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



// this is do hole[10,33] can be checked 
//  origin_x + x 
//        10   1     1>0 and 0<15   
function originOffsetNEW(xy_squares) {
  let [x_sq, y_sq] = xy_squares;  // 6,4

  //   SQS_FIELD_SIZE  64, 55
  let [x_org_sq, y_org_sq] = SQS_FIELD_ORIGIN;    // 31,5 

  x_offset_sq = x_org_sq + x_sq;
  y_offset_sq = y_org_sq + y_sq;

  let [left_bounds_sq, top_bounds_sq, right_bounds_sq, bot_bounds_sq] = SQS_FIELD_BOUNDS; // 31,5,64,55

  if (x_offset_sq < left_bounds_sq || right_bounds_sq < x_offset_sq) {
    x_err = `${err_mess}, X:${x_offset_sq} is not in range of ${left_bounds_sq} < X < ${right_bounds_sq}`;
    throw new Error(x_err);
  }


  if (y_offset_sq < top_bounds_sq || bot_bounds_sq < y_offset_sq) {
    y_err = `${err_mess}, Y:${y_offset_sq} is not in range of ${top_bounds_sq} < Y < ${bot_bounds_sq}`;
    throw new Error(y_err);
  }

  /////////////

  let [org_x, org_y] = PTS_FIELD_ORIGIN;
  offset_x = org_x + x_offset_sq * WIDTH_OF_SPRITE;
  offset_y = org_y + x_offset_sq * HOLE_PIXEL_DEPTH;

  //xyNotInField(offset_x, offset_y, `Offset hole '${hole_name}' coords are out of bounds`);
  xy_points = [offset_x, offset_y];
  return xy_points;
}


function originOffset(xy_units) {
  let [x_coord, y_coord] = xy_units;
  let [org_x, org_y] = PTS_FIELD_ORIGIN;
  offset_x = org_x + x_coord * WIDTH_OF_SPRITE;
  offset_y = org_y + y_coord * HOLE_PIXEL_DEPTH;
  return [offset_x, offset_y];
}









function objectPlacement(an_object, the_player) {

  difference_y = spriteDiffY(an_object, the_player);
  let [difference_x, relative_to_player, head_on_view] = spritePlace(an_object, the_player);
  x_center_offset = thingRelationToPlayer(difference_x, the_player, relative_to_player);

  let the_z_index = deriveIndexZ(difference_x, difference_y);

  return [the_z_index, difference_y, relative_to_player, x_center_offset, head_on_view];
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





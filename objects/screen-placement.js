











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
  //console.log("objectgLeftSide", left_front_bot);  //objectgLeftSide (2) [NaN, NaN]
  let [left_front_top, right_front_top, back_right_top] = spriteTops(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}

















function objectPlacement(an_object, g_player) {

  difference_y = spriteDiffY(an_object, g_player);
  let [difference_x, relative_to_player, head_on_view] = spritePlace(an_object, g_player);
  x_center_offset = thingRelationToPlayer(difference_x, g_player, relative_to_player);

  let the_z_index = deriveIndexZ(difference_x, difference_y);

  return [the_z_index, difference_y, relative_to_player, x_center_offset, head_on_view];
}









function objectRightSide(x_center_offset, pylon_player_ys) {
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackLeft(x_center_offset, pylon_player_ys);
  let [left_front_top, right_front_top, back_right_top] = spriteTops(left_front_bot, right_front_bot, back_right_bot);
  let middle_vline = [left_front_top, left_front_bot];
  let left_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}


function objectLeftSide(x_center_offset, pylon_player_ys) {
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackRight(x_center_offset, pylon_player_ys);
  let [left_front_top, right_front_top, back_right_top] = spriteTops(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}





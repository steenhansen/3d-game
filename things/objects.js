function objectPlacement(an_object, the_player) {
  difference_y = panelDiffY(an_object, the_player);
  let [adjusted_x, object_relative] = panelPlaceX(an_object, the_player);
  x_offsets = thingRelationToPlayer(adjusted_x, the_player, object_relative);
  let [difference_x, _x_center_offset] = x_offsets;
  let the_z_index = zIndex(difference_x, difference_y);
  return [the_z_index, difference_y, object_relative, x_offsets];
}

function objectLeftSide(a_column, x_offsets, difference_y) {
  let [difference_x, x_center_offset] = x_offsets;
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackRight(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  gradient_left = a_column.column_colors.column_left;
  gradient_front = a_column.column_colors.column_front;
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  the_data = [left_mid_right_vlines, gradient_left, gradient_front];
  return the_data;
}



function objectRightSide(a_column, x_offsets, difference_y) {
  let [difference_x, x_center_offset] = x_offsets;
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackLeft(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);
  let middle_vline = [left_front_top, left_front_bot];
  let left_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  gradient_right = a_column.column_colors.column_right;
  gradient_front = a_column.column_colors.column_front;
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  the_data = [left_mid_right_vlines, gradient_right, gradient_front];
  return the_data;
}

function objectMiddleRegion(a_column, x_offsets, difference_y) {
  let [difference_x, x_center_offset] = x_offsets;
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackRight(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);

  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  gradient_right = a_column.column_colors.column_right;
  gradient_front = a_column.column_colors.column_front;
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  the_data = [left_mid_right_vlines, gradient_right, gradient_front];
  return the_data;
}



function spriteStep(the_sprite) {
  //  move_index = the_sprite.move_index;
  if (the_sprite.move_index < the_sprite.x_moves.length) {
    the_sprite.move_index++;
  } else {
    the_sprite.move_index = 0; // reset to start
  }
  //console.log("B the_sprite.move_index", the_sprite.move_index);
  x_move = the_sprite.x_moves[the_sprite.move_index];
  y_move = the_sprite.y_moves[the_sprite.move_index];

  if (x_move < 0) {
    the_sprite.x = leftOnBoard(the_sprite.x, x_move * -1 * 3);
  } else if (x_move > 0) {
    the_sprite.x = rightOnBoard(the_sprite.x, x_move * 1 * 3);
  }

  if (y_move < 0) {
    the_sprite.y = backwardOnBoard(the_sprite.y, y_move * -1);
  } else if (y_move > 0) {
    the_sprite.y = forwardOnBoard(the_sprite.y, y_move * 1);
  }

  // console.log("C x_move", x_move);
  // the_sprite.x += x_move;
  // the_sprite.y += y_move;
  //  console.log("X enemy_1", the_sprite);

  return the_sprite;

}





// spriteDraw()
function enemyMissileDraw(real_id, the_sprite, g_player, the_name, the_id) {
  [the_z_index, difference_y, missile_relative, x_center_offset, difference_x, head_on_view] = objectPlacement(the_sprite, g_player);
  if (missile_relative == LEFT_OF_PLAYER) {
    //the_data = objectLeftSide(the_sprite, x_offsets, difference_y);
    the_data = objectLeftSide(the_sprite, x_center_offset, difference_x, difference_y);
  } else { //if (missile_relative == RIGHT_OF_PLAYER) {
    the_data = objectRightSide(the_sprite, x_center_offset, difference_x, difference_y);
    // } else {
    //   the_data = objectMiddleRegion(the_sprite, x_center_offset, difference_x, difference_yy);
  }
  let [left_mid_right_vlines, _gradient_right, gradient_front] = the_data;
  gradient_front = 'green-grad';
  the_stats = panelFront2(left_mid_right_vlines, gradient_front, the_id);
  enemyMissilePosition(real_id, the_z_index, the_stats);
}














function enemyMissilePosition(real_id, z_index, the_stats) {
  let [center_x, center_y, the_scale] = the_stats;

  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;


  missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x);
  missile_x_y.setAttribute("y", center_y);



  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;


}

function objectPlacement(an_object, g_player) {
  difference_y = panelDiffY(an_object, g_player);
  let [difference_x, relative_to_player, head_on_view] = panelPlaceX(an_object, g_player);
  x_center_offset = thingRelationToPlayer(difference_x, g_player, relative_to_player);

  let the_z_index = zIndex(difference_x, difference_y);
  //console.log("objectPlacement ZXC", relative_to_player, x_offsets);
  return [the_z_index, difference_y, relative_to_player, x_center_offset, difference_x, head_on_view];
}

function objectLeftSide(a_column, x_center_offset, difference_x, difference_y) {

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



function objectRightSide(a_column, x_center_offset, difference_x, difference_y) {
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

function objectMiddleRegion(a_column, x_center_offset, difference_x, difference_y) {
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

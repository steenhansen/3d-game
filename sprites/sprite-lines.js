







function panels3BackRight(x_center_offset, pylon_player_ys) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_y = player_y - pylon_y;
  } else {
    dist_pylon_to_zero = SCENE_Y_MAX - pylon_y;
    difference_y = player_y + dist_pylon_to_zero;
  }
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  back_right_bot = distancedPoint(PYLON_PIXEL_DEPTH, right_front_bot);
  left_bottom_3 = [left_front_bot, right_front_bot, back_right_bot];
  return left_bottom_3;
}





function panels3Middle(x_center_offset, difference_yy) {
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_yy);
  left_bottom_3 = [left_front_bot, right_front_bot, 17];
  return left_bottom_3;
}




// qubert-X
/*
                    |   
                    |   |
      back_left_bot \   |
                     \  |                  |
                      \ |                  | 
                       \|                  | 
         left_front_bot \-------------------right_front_bot
*/
function panels3BackLeft(x_center_offset, pylon_player_ys) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_y = player_y - pylon_y;
  } else {
    dist_pylon_to_zero = SCENE_Y_MAX - pylon_y;
    difference_y = player_y + dist_pylon_to_zero;
  }
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  back_left_bot = distancedPoint(PYLON_PIXEL_DEPTH, left_front_bot);
  right_bottom_3 = [left_front_bot, right_front_bot, back_left_bot];
  return right_bottom_3;
}

function panelBotLeftRight(x_offset, difference_y) {
  right_front_bot_vanish_point = [x_offset + HALF_TILE_WIDTH, BOTTOM_FIELD];
  right_front_bot = distancedPoint(difference_y, right_front_bot_vanish_point);
  left_front_bot_vanish_point = [x_offset - HALF_TILE_WIDTH, BOTTOM_FIELD];
  left_front_bot = distancedPoint(difference_y, left_front_bot_vanish_point);
  return [left_front_bot, right_front_bot];
}

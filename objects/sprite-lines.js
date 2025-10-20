

/*                 back_left_bot            back_right_bot
                              /--------------\
                        |    /                \  
                        |   /                  \
                        |  /                    \  |  
                        | /                      \ |
                        |/                        \| 
         left_front_bot |--------------------------right_front_bot
*/

function panels3Middle(x_center_offset, difference_yy, pixel_depth) {
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_yy);
  back_right_bot = distancedPoint(pixel_depth, right_front_bot);
  back_left_bot = distancedPoint(pixel_depth, left_front_bot);
  left_bottom_4 = [left_front_bot, right_front_bot, back_right_bot, back_left_bot];
  return left_bottom_4;
}




/*                         back_left_bot
                              /-------------------/
                        |    /                   / back_right_bot
                        |   /                   /
                        |  /                |  /
                        | /                 | /
                        |/                  |/ 
         left_front_bot |-------------------right_front_bot
*/
function panels3BackRight(x_center_offset, pylon_player_ys, pixel_depth) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_y = player_y - pylon_y;
  } else {
    checkerboard_depth = g_planet.s_checkerboard_depth;
    dist_pylon_to_zero = checkerboard_depth - pylon_y;
    difference_y = player_y + dist_pylon_to_zero;
  }
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  back_right_bot = distancedPoint(pixel_depth, right_front_bot);
  back_left_bot = distancedPoint(pixel_depth, left_front_bot);
  left_bottom_4 = [left_front_bot, right_front_bot, back_right_bot, back_left_bot];
  return left_bottom_4;
}

/*
                    |   
                    |               back_right_bot  
      back_left_bot \-------------------\   
                     \                   \  |
                      \ |                 \ | 
                       \|                  \| 
         left_front_bot \-------------------right_front_bot
*/
function panels3BackLeft(x_center_offset, pylon_player_ys, pixel_depth) {
  [pylon_y, player_y] = pylon_player_ys;
  if (player_y > pylon_y) {
    difference_y = player_y - pylon_y;
  } else {
    checkerboard_depth = g_planet.s_checkerboard_depth;
    dist_pylon_to_zero = checkerboard_depth - pylon_y;
    difference_y = player_y + dist_pylon_to_zero;
  }
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  back_left_bot = distancedPoint(pixel_depth, left_front_bot);
  back_right_bot = distancedPoint(pixel_depth, right_front_bot);
  right_bottom_4 = [left_front_bot, right_front_bot, back_left_bot, back_right_bot];
  return right_bottom_4;
}

function panelBotLeftRight(x_offset, difference_y) {
  right_front_bot_vanish_point = [x_offset + HALF_TILE_WIDTH, BOTTOM_FIELD];
  right_front_bot = distancedPoint(difference_y, right_front_bot_vanish_point);
  left_front_bot_vanish_point = [x_offset - HALF_TILE_WIDTH, BOTTOM_FIELD];
  left_front_bot = distancedPoint(difference_y, left_front_bot_vanish_point);
  return [left_front_bot, right_front_bot];
}

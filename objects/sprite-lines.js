/*                 back_left_bot            back_right_bot
                              /--------------\
                        |    /                \  
                        |   /                  \
                        |  /                    \  |  
                        | /                      \ |
                        |/                        \| 
         left_front_bot |--------------------------right_front_bot
*/

function panels3Middle(x_center_offset, dist_abs_y, pixel_depth) {
    let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, dist_abs_y);
    const back_right_bot = distancedPoint(pixel_depth, right_front_bot);
    const back_left_bot = distancedPoint(pixel_depth, left_front_bot);
    const left_bottom_4 = [left_front_bot, right_front_bot, back_right_bot, back_left_bot];
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
    const dist_abs_y = distanceAbsY(pylon_player_ys);
    let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, dist_abs_y);
    const back_right_bot = distancedPoint(pixel_depth, right_front_bot);
    const back_left_bot = distancedPoint(pixel_depth, left_front_bot);
    const left_bottom_4 = [left_front_bot, right_front_bot, back_right_bot, back_left_bot];
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
    const dist_abs_y = distanceAbsY(pylon_player_ys);
    let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, dist_abs_y);
    const back_left_bot = distancedPoint(pixel_depth, left_front_bot);
    const back_right_bot = distancedPoint(pixel_depth, right_front_bot);
    const right_bottom_4 = [left_front_bot, right_front_bot, back_left_bot, back_right_bot];
    return right_bottom_4;
}

function panelBotLeftRight(x_offset, dist_abs_y) {
    const right_front_bot_vanish_point = [x_offset + HALF_TILE_WIDTH, BOTTOM_FIELD];
    const right_front_bot = distancedPoint(dist_abs_y, right_front_bot_vanish_point);
    const left_front_bot_vanish_point = [x_offset - HALF_TILE_WIDTH, BOTTOM_FIELD];
    const left_front_bot = distancedPoint(dist_abs_y, left_front_bot_vanish_point);
    return [left_front_bot, right_front_bot];
}

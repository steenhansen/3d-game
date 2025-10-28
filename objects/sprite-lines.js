

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
  //console.log("panels3Middle", difference_y, back_right_bot);
  //console.log("panels3Middle", difference_y, back_left_bot);
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
  //console.log("sprite_lines, panels3BackRight", difference_y);
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  //console.log("panelse3BackRight 88888888", left_front_bot);   ///sprite-lines.js:43 panelse3BackRight 88888888 (2) [NaN, NaN]
  back_right_bot = distancedPoint(pixel_depth, right_front_bot);
  // console.log("panels3BackRight", difference_y, back_right_bot);
  //  console.log("panelse3BackRight 9999999999999", back_right_bot);   ///panelse3BackRight 9999999999999 (2) [NaN, NaN]
  back_left_bot = distancedPoint(pixel_depth, left_front_bot);
  //console.log("panels3BackRight", difference_y, back_left_bot);
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
  // console.log("panels3BackLeft", difference_y, back_left_bot);
  //console.log("panels3BackLeft", difference_y, back_right_bot);
  right_bottom_4 = [left_front_bot, right_front_bot, back_left_bot, back_right_bot];
  return right_bottom_4;
}

function panelBotLeftRight(x_offset, difference_y) {
  //console.log("CCCCCCCCCCCCCCC panelBotLeftRight", difference_y);
  right_front_bot_vanish_point = [x_offset + HALF_TILE_WIDTH, BOTTOM_FIELD];
  //console.log("XXXXXXXXXXXXXXX panelBotLeftRight", right_front_bot_vanish_point);
  //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  right_front_bot = distancedPoint(difference_y, right_front_bot_vanish_point);
  //  console.log("BBBBBBBBBBBBBBBBBBBBB");
  if (isNaN(right_front_bot[0])) {
    //console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", difference_y);

    // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", right_front_bot_vanish_point);
  }
  //console.log("ZZZZZZZZZZZZZZ panelBotLeftRight", difference_y, right_front_bot);   //  panelBotLeftRight 1995(2)[NaN, NaN]

  left_front_bot_vanish_point = [x_offset - HALF_TILE_WIDTH, BOTTOM_FIELD];
  //console.log("panelBotLeftRight", difference_y, left_front_bot_vanish_point);
  left_front_bot = distancedPoint(difference_y, left_front_bot_vanish_point);
  return [left_front_bot, right_front_bot];
}


// function distancedPoint22(distance_in_256, field_front_point) {


//   if (distance_in_256 < 1024) {
//     shrink_size = SPRITE_SIZES_1024[distance_in_256];
//     if (isNaN(shrink_size)) {
//       console.log("+++++++++++++++++distancedPont shrink_size", shrink_size, distance_in_256);
//     }
//     //console.log("cccccccc", distance_in_256);   // 1975
//   } else {
//     shrink_size = 0;
//   }

//   let [x_1, y_1] = BACK_VANISH_POINT;
//   let [x_2, y_2] = field_front_point;
//   x_3 = shrink_size * x_2 + (1 - shrink_size) * x_1;
//   y_3 = shrink_size * y_2 + (1 - shrink_size) * y_1;
//   x_4 = Math.floor(x_3);
//   y_4 = Math.floor(y_3);
//   front_distanced_point = [x_4, y_4];
//   if (isNaN(distance_in_256)) {
//     console.log("--------------------distancedPont distance_in_256", distance_in_256);
//   }
//   if (isNaN(shrink_size)) {
//     console.log("--------------------distancedPont shrink_size", shrink_size);
//   }


//   if (isNaN(x_1)) {
//     console.log("--------------------distancedPont x_1", x_1);
//   }
//   if (isNaN(y_1)) {
//     console.log("--------------------distancedPont y_1", y_1);
//   }

//   if (isNaN(x_2)) {
//     console.log("--------------------distancedPont x_2", x_2);
//   }
//   if (isNaN(y_2)) {
//     console.log("--------------------distancedPont y_2", y_2);
//   }

//   if (isNaN(x_3)) {
//     console.log("--------------------distancedPont x_3", x_3);
//   }
//   if (isNaN(y_3)) {
//     console.log("--------------------distancedPont y_3", y_3);
//   }


//   if (isNaN(x_4)) {
//     console.log("--------------------distancedPont x_4", x_4);
//   }
//   if (isNaN(y_4)) {
//     console.log("--------------------distancedPont y_4", y_4);
//   }

//   return front_distanced_point;
// }
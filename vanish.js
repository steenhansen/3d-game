
function distancedBackColumnPoint(shrink_depth, front_right_bot_column_point) {
  //  shrink_size = sprite_sizes[distance_in_256];
  let [x_1, y_1] = BACK_VANISH_POINT;
  let [x_2, y_2] = front_right_bot_column_point;
  x_3 = shrink_depth * x_2 + (1 - shrink_depth) * x_1;
  y_3 = shrink_depth * y_2 + (1 - shrink_depth) * y_1;

  x_4 = Math.floor(x_3);
  y_4 = Math.floor(y_3);
  front_distanced_point = [x_4, y_4];
  // if (column_3_b_t && !TESTING_STOPPED) {
  //   console.log("-");
  //   console.log("-");
  //   console.log("front_right_bot_column_point =>", front_right_bot_column_point);
  //   console.log("shrink_depth =>", shrink_depth);
  //   console.log("front_distanced_point =>", front_distanced_point);
  // }
  return front_distanced_point;
}


//    distancedPoint(distance_in_256, front_point, adjust_shorten_depth)

//                                       checkerboard_front_point  
function distancedPoint(distance_in_256, checkerboard_front_point) {
  shrink_size = sprite_sizes[distance_in_256];
  let [x_1, y_1] = BACK_VANISH_POINT;
  let [x_2, y_2] = checkerboard_front_point;
  x_3 = shrink_size * x_2 + (1 - shrink_size) * x_1;
  y_3 = shrink_size * y_2 + (1 - shrink_size) * y_1;

  x_4 = Math.floor(x_3);
  y_4 = Math.floor(y_3);
  front_distanced_point = [x_4, y_4];
  // if (column_3_b_t && !TESTING_STOPPED) {
  //   console.log("-");
  //   console.log("-");
  //   console.log("distance_in_256 =>", distance_in_256);
  //   console.log("checkerboard_front_point =>", checkerboard_front_point);
  //   console.log("shrink_size =>", shrink_size);
  //   console.log("front_distanced_point =>", front_distanced_point);
  // }
  return front_distanced_point;
}

function zIndex(difference_x, difference_y) {
  let y_index = 1000 - difference_y;
  let x_index = 1000 - difference_x;
  let z_index = y_index * 1000 + x_index; // so that stuff same y distance favors middle stuff
  return z_index;
}

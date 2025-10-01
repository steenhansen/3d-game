


function distancedPoint(distance_in_256, field_front_point) {

  shrink_size = sprite_sizes[distance_in_256];
  let [x_1, y_1] = BACK_VANISH_POINT;
  let [x_2, y_2] = field_front_point;
  x_3 = shrink_size * x_2 + (1 - shrink_size) * x_1;
  y_3 = shrink_size * y_2 + (1 - shrink_size) * y_1;
  x_4 = Math.floor(x_3);
  y_4 = Math.floor(y_3);
  front_distanced_point = [x_4, y_4];
  return front_distanced_point;
}

function deriveIndexZ(difference_x, difference_y) {
  // console.log("111 asd ", difference_x, difference_y);
  let y_index = 1000 - difference_y;
  let x_index = 1000 - difference_x;
  //console.log("222 asd ", x_index, y_index);
  let z_index = y_index * 1000 + x_index; // so that stuff same y distance favors middle stuff
  //console.log("333 asd ", z_index);
  return z_index;
}

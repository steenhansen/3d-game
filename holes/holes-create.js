



function squareNotInBounds(xy_squares, xy_offset, err_mess) {
  let [x_square, y_square] = xy_squares;
  let [x_offset, y_offset] = xy_offset;
  let [x_min, y_min, x_max, y_max] = BOUNDS_IN_SQUARES;


  xy_squares = `[${x_square}, ${y_square}]relative => [${x_offset}, ${y_offset}]absolute`;

  if (x_offset < x_min || x_max < x_offset) {
    x_err = `${xy_squares} is not  ${x_min} < X < ${x_max} => ${err_mess}`;
    throw new Error(x_err);
  }

  if (y_offset < y_min || y_max < y_offset) {
    y_err = `${xy_squares} is not  ${y_min} < Y < ${y_max} => ${err_mess}`;
    throw new Error(y_err);
  }
}


function originOffset2(xy_squares, err_or_ignore_bounds) {
  let [x_square, y_square] = xy_squares;
  let [x_offset_squares, y_offset_squares] = RELATIVE_ORIGIN;
  x_offset = x_square + x_offset_squares;
  if (x_offset < 0) {

    x_offset += FIELD_IN_SQUARES[0];
  }
  y_offset = y_square + y_offset_squares;
  xy_offset = [x_offset, y_offset];

  if (err_or_ignore_bounds != "ignore_bounds") {
    squareNotInBounds(xy_squares, xy_offset, err_mess);
  }
  xy_pixels = squares2pixels(xy_offset);
  return xy_pixels;
}


function initHoleData22(hole_num, xy_pixels, hole_color) {
  let [x_pixels, y_pixels] = xy_pixels;
  hole_name = `hole-${hole_num}`;
  hole_obj = {
    s_isa: "is-hole",
    s_hole_name: hole_name,
    m_x: x_pixels,
    m_y: y_pixels,
    s_hole_color: hole_color,
    c_vert_color: 'black',
  };
  return hole_obj;
}

function makeHoles(hole_color, holes_list) {
  declared_holes = [];
  num_holes = holes_list.length;
  for (let h_index = 0; h_index < num_holes; h_index++) {
    hole_xy_squares = holes_list[h_index];
    const hole_id = h_index.toString().padStart(2, '0');
    xy_pixels = originOffset2(hole_xy_squares, "ignore_bounds");
    new_hole = initHoleData22(hole_id, xy_pixels, hole_color);
    declared_holes.push(new_hole);
  }
  return declared_holes;
}

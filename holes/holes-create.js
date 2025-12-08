function squareNotInBounds(xy_squares, xy_offset, err_mess) {
  let [x_square, y_square] = xy_squares;
  let [x_offset, y_offset] = xy_offset;
  let [x_min, y_min, x_max, y_max] = g_bounds_in_squares;
  const xy_err_squares = `[${x_square}, ${y_square}]relative => [${x_offset}, ${y_offset}]absolute`;
  if (x_offset < x_min || x_max < x_offset) {
    const x_err = `${xy_err_squares} is not  ${x_min} < X < ${x_max} => ${err_mess}`;
    throw new Error(x_err);
  }

  if (y_offset < y_min || y_max < y_offset) {
    const y_err = `${xy_err_squares} is not  ${y_min} < Y < ${y_max} => ${err_mess}`;
    throw new Error(y_err);
  }
}

function initHoleData(
  hole_num,
  xy_pixels,
  hole_color,
  hole_hidden,
  vert_color,
) {
  let [x_pixels, y_pixels] = xy_pixels;
  const hole_name = `hole-${hole_num}`;
  if (x_pixels < 0 && y_pixels < 0) {
    x_pixels = Math.abs(x_pixels);
    y_pixels = Math.abs(y_pixels);
  }
  const hole_obj = {
    s_isa: "is-hole",
    s_hole_name: hole_name,
    m_x: x_pixels,
    m_y: y_pixels,
    s_hole_color: hole_color,

    c_vert_color: vert_color,
    m_hidden: hole_hidden,
  };
  return hole_obj;
}

function makeHoles(hole_index, hole_color, holes_list, vert_color) {
  if (typeof vert_color == "undefined") {
    vert_color = "black";
  }
  let declared_holes = [];
  const num_holes = holes_list.length;
  for (let h_index = 0; h_index < num_holes; h_index++) {
    let [x_square, y_square] = holes_list[h_index];
    let hole_hidden;
    if (x_square < 0 && y_square < 0) {
      hole_hidden = true;
    } else {
      hole_hidden = false;
    }
    x_square = Math.abs(x_square);
    y_square = Math.abs(y_square);
    if (x_square > FIELD_IN_SQUARES[0]) {
      //
    }
    if (y_square > FIELD_IN_SQUARES[1]) {
      //
    }
    const hole_xy_squares = [x_square, y_square];
    const the_hole_number = hole_index + h_index;
    const hole_id = the_hole_number.toString().padStart(2, "0");
    const xy_pixels = originOffset(hole_xy_squares, IGNORE_BOUNDS);
    const new_hole = initHoleData(
      hole_id,
      xy_pixels,
      hole_color,
      hole_hidden,
      vert_color,
    );
    declared_holes.push(new_hole);
  }
  return declared_holes;
}

function originOffset(xy_squares, err_or_ignore_bounds) {
  let [x_square, y_square] = xy_squares;
  x_square = Math.abs(x_square);
  y_square = Math.abs(y_square);
  if (x_square < 0) {
    x_square += FIELD_IN_SQUARES[0];
  }
  if (y_square < 0) {
    y_square += FIELD_IN_SQUARES[1];
  }
  const xy_offset = [x_square, y_square];
  if (err_or_ignore_bounds != IGNORE_BOUNDS) {
    squareNotInBounds(xy_squares, xy_offset, err_or_ignore_bounds);
  }
  const xy_pixels = squares2pixels(xy_offset);
  return xy_pixels;
}

function checkBounds(field_in_squares, bounds_in_squares) {
  let [x_squares, y_squares] = field_in_squares;

  if (x_squares < 0) {
    b_err = `initBoundedPlanet() x_squares:${x_squares} < 0`;
    throw new Error(b_err);
  }

  if (y_squares < 0) {
    b_err = `initBoundedPlanet() y_squares:${y_squares}  < 0`;
    throw new Error(b_err);
  }

  let [x_left, y_top, x_right, y_bottom] = bounds_in_squares;

  if (x_right < x_left) {
    b_err = `initBoundedPlanet() x_left bound:${x_left} larger than x-right bound:${x_right}`;
    throw new Error(b_err);
  }

  if (y_bottom < y_top) {
    b_err = `initBoundedPlanet() y_top bound:${y_top} larger than y-bottom bound:${y_bottom}`;
    throw new Error(b_err);
  }

  if (x_left < 0 || x_left > x_squares) {
    b_err = `initBoundedPlanet() x_left bound:${x_left} is not in range of 0 <= x <= ${x_squares}`;
    throw new Error(b_err);
  }

  if (y_top < 0 || y_top > y_squares) {
    b_err = `initBoundedPlanet() y_top bound:${y_top} is not in range of 0 <= y <= ${y_squares}`;
    throw new Error(b_err);
  }

  if (x_right < 0 || x_right > x_squares) {
    b_err = `initBoundedPlanet() x_right bound:${x_right} is not in range of 0 <= x <= ${x_squares}`;
    throw new Error(b_err);
  }

  if (y_bottom < 0 || y_bottom > y_squares) {
    b_err = `initBoundedPlanet() y_bottom bound:${y_bottom} is not in range of 0 <= y <= ${y_squares}`;
    throw new Error(b_err);
  }
}

function squares2pixels(width_depth_squares) {
  let [x_squares, y_squares] = width_depth_squares;
  x_pixels = x_squares * WIDTH_OF_SQUARE;
  y_pixels = y_squares * DEPTH_OF_SQUARE;
  xy_size = [x_pixels, y_pixels];
  return xy_size;
}

function initBoundedPlanet(field_in_squares, bounds_in_squares) {
  checkBounds(field_in_squares, bounds_in_squares);
  //let [x_squares, y_squares] = field_in_squares; //[64, 55];
  FIELD_IN_PIXELS = squares2pixels(field_in_squares);  //  [25600, 2000]
  let [x_left, y_top, x_right, y_bottom] = bounds_in_squares;     //[27, 2, 40, 16]

  x_left += RELATIVE_ORIGIN[0];
  y_top += RELATIVE_ORIGIN[1];
  x_right += RELATIVE_ORIGIN[0];
  y_bottom += RELATIVE_ORIGIN[1];

  //a_planet = initInfinitePlanet(field_in_squares);
  BOUNDS_IN_SQUARES = [x_left, y_top, x_right, y_bottom];   //bounds_in_squares;


  top_left = squares2pixels([x_left, y_top]);
  bottom_right = squares2pixels([x_right, y_bottom]);
  BOUNDS_IN_PIXELS = [top_left[0], top_left[1], bottom_right[0], bottom_right[1]];
  bounded_planet = initPlanet(FIELD_IN_PIXELS, BOUNDS_IN_PIXELS);
  return bounded_planet;
}



function initInfinitePlanet(field_in_squares) {
  let [x_squares, y_squares] = field_in_squares; //[64, 55];

  FIELD_IN_PIXELS = squares2pixels(field_in_squares);  //  [25600, 2000]
  BOUNDS_IN_SQUARES = [0, 0, x_squares, y_squares];


  let [x_pixels, y_pixels] = FIELD_IN_PIXELS;
  BOUNDS_IN_PIXELS = [0, 0, x_pixels, y_pixels];
  free_planet = initPlanet(FIELD_IN_PIXELS, BOUNDS_IN_PIXELS);
  return free_planet;
}




function initPlanet(pixel_field_size, pixel_bounds) {
  // [3000, 4000]
  let [field_width, field_depth] = pixel_field_size;
  let [left_x, top_y, right_x, bottom_y] = pixel_bounds;
  //[1000, 1000, 3000, 1500]; 
  //  initCheckerboardField(field_width, field_depth);
  //                              WIDTH_OF_SQUARE=256      ==16???
  COLLISION_SIZES = [field_width, TILE_WIDTH, field_depth, ROOM_DEPTH];


  let the_planet = {
    s_isa: "is-planet",
    s_checkerboard_width: field_width,
    s_checkerboard_depth: field_depth,
    s_playground_x_min: left_x,
    s_playground_x_max: right_x,
    s_playground_y_min: top_y,
    s_playground_y_max: bottom_y,
    m_game_state: PART_INIT_01_MOBILE,           // L_OOP_0_MOBILE_START, //"hi-there",
    m_dying_distance: 0,
    // t_move_direction
    // t_drift_direction
    // t_drift_countdown
  };
  return the_planet;
}

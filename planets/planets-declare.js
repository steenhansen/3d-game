function checkBounds(field_in_squares, bounds_as_squares) {
    let [x_squares, y_squares] = field_in_squares;

    if (x_squares < 0) {
        const b_err = `initBoundedPlanet() x_squares:${x_squares} < 0`;
        throw new Error(b_err);
    }

    if (y_squares < 0) {
        const b_err = `initBoundedPlanet() y_squares:${y_squares}  < 0`;
        throw new Error(b_err);
    }

    let [x_left, y_top, x_right, y_bottom] = bounds_as_squares;

    if (x_right < x_left) {
        const b_err = `initBoundedPlanet() x_left bound:${x_left} larger than x-right bound:${x_right}`;
        throw new Error(b_err);
    }

    if (y_bottom < y_top) {
        const b_err = `initBoundedPlanet() y_top bound:${y_top} larger than y-bottom bound:${y_bottom}`;
        throw new Error(b_err);
    }

    if (x_left < 0 || x_left > x_squares) {
        const b_err = `initBoundedPlanet() x_left bound:${x_left} is not in range of 0 <= x <= ${x_squares}`;
        throw new Error(b_err);
    }

    if (y_top < 0 || y_top > y_squares) {
        const b_err = `initBoundedPlanet() y_top bound:${y_top} is not in range of 0 <= y <= ${y_squares}`;
        throw new Error(b_err);
    }

    if (x_right < 0 || x_right > x_squares) {
        const b_err = `initBoundedPlanet() x_right bound:${x_right} is not in range of 0 <= x <= ${x_squares}`;
        throw new Error(b_err);
    }

    if (y_bottom < 0 || y_bottom > y_squares) {
        const b_err = `initBoundedPlanet() y_bottom bound:${y_bottom} is not in range of 0 <= y <= ${y_squares}`;
        throw new Error(b_err);
    }
}

function squares2pixels(width_depth_squares) {
    let [x_squares, y_squares] = width_depth_squares;
    const x_pixels = x_squares * WIDTH_OF_SQUARE;
    const y_pixels = y_squares * DEPTH_OF_SQUARE;
    const xy_size = [x_pixels, y_pixels];
    return xy_size;
}

function initBoundedPlanet(field_in_squares, bounds_as_squares, start_move_dir, start_drift_dir) {
    checkBounds(field_in_squares, bounds_as_squares);
    g_field_in_pixels = squares2pixels(field_in_squares);
    let [x_left, y_top, x_right, y_bottom] = bounds_as_squares;
    g_bounds_in_squares = [x_left, y_top, x_right, y_bottom];
    const top_left = squares2pixels([x_left, y_top]);
    const bottom_right = squares2pixels([x_right, y_bottom]);
    g_bounds_in_pixels = [top_left[0], top_left[1], bottom_right[0], bottom_right[1]];
    const bounded_planet = initPlanet(g_field_in_pixels, g_bounds_in_pixels, start_move_dir, start_drift_dir);
    return bounded_planet;
}

function initInfinitePlanet(field_in_squares, start_move_dir, start_drift_dir) {
    let [x_squares, y_squares] = field_in_squares;
    g_field_in_pixels = squares2pixels(field_in_squares);
    g_bounds_in_squares = [0, 0, x_squares, y_squares];
    let [x_pixels, y_pixels] = g_field_in_pixels;
    g_bounds_in_pixels = [0, 0, x_pixels, y_pixels];
    const free_planet = initPlanet(g_field_in_pixels, g_bounds_in_pixels, start_move_dir, start_drift_dir);
    return free_planet;
}

function initPlanet(pixel_field_size, pixel_bounds, start_move_dir, start_drift_dir) {
    let [field_width, field_depth] = pixel_field_size;
    let [left_x, top_y, right_x, bottom_y] = pixel_bounds;
    g_collison_sizes = [field_width, TILE_WIDTH, field_depth, ROOM_DEPTH];

    let the_planet = {
        s_isa: "is-planet",
        s_checkerboard_width: field_width,
        s_checkerboard_depth: field_depth,
        s_playground_x_min: left_x,
        s_playground_x_max: right_x,
        s_playground_y_min: top_y,
        s_playground_y_max: bottom_y,
        m_game_state: PART_INIT_01_MOBILE,
        m_dying_distance: 0,
        m_move_direction: start_move_dir,
        m_last_direction_key: MOVINGx_NOT,
        m_drift_direction: start_drift_dir,
        m_drift_countdown: 0
    };
    return the_planet;
}

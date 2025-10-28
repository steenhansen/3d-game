
function incrementLeft() {
  let bottom_line_count = g_field_xs_shift[CLOSEST_WIDTH_INDEX];
  if (bottom_line_count == LEFT_LOOP_OVER || bottom_line_count == IS_RESET_RIGHT) {
    resetLeft();
    // dbg_recordLefts(4096, 4096, 4096, 4096);
  } else {
    for (let cur_line = 0; cur_line <= NUMBER_LINES; cur_line++) {
      let accum_old = g_field_xs_accums[cur_line];
      let accum_new = accum_old - cur_line;
      let accum_underflow = underflowLeft(cur_line, accum_new);
      /* start debug code */
      // dbg_recordLefts(cur_line, accum_old, accum_new, accum_underflow);
      /* end debug code */
    }
  }
}





function resetLeft() {
  for (let cur_line = 0; cur_line < NUMBER_LINES; cur_line++) {
    let [_index, _max_shift, min_shift, _flip] = START_STOP_FLIP[cur_line];
    g_field_xs_shift[cur_line] = min_shift;
    g_field_xs_accums[cur_line] = NUMBER_LINES - 1;
  }
}

function underflowLeft(cur_line, accum_new) {
  if (accum_new < 0) {
    accum_new = accum_new + NUMBER_LINES;
    g_field_xs_shift[cur_line]++;
    let [_index, max_shift, min_shift, _flip] = START_STOP_FLIP[cur_line];
    if (g_field_xs_shift[cur_line] == max_shift) {
      g_field_xs_shift[cur_line] = min_shift;
    }
  }
  g_field_xs_accums[cur_line] = accum_new;
  return accum_new;
}


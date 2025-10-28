
function resetRight() {

  for (let cur_line = 0; cur_line < NUMBER_LINES; cur_line++) {
    let [_index, max_shift, _min_shift, _flip] = START_STOP_FLIP[cur_line];
    g_field_xs_shift[cur_line] = max_shift;
    g_field_xs_accums[cur_line] = 0;
  }
}



function incrementRight() {
  let bottom_line_count = g_field_xs_shift[CLOSEST_WIDTH_INDEX];
  if (bottom_line_count == RIGHT_LOOP_OVER || bottom_line_count == IS_RESET_LEFT) {
    resetRight();
    //dbg_recordLefts(5096, 5096, 5096, 5096);
  } else {
    for (let right_line = 0; right_line <= NUMBER_LINES; right_line++) {
      let old_right = g_field_xs_accums[right_line];
      let right_sum = old_right + right_line;
      let accum_overflow = overflowRight(right_line, right_sum);
      /* start debug code */
      // dbg_recordRights(right_line, old_right, right_sum, accum_overflow);
      /* end debug code */
    }
  }
}

function overflowRight(cur_line, accum_new) {
  if (accum_new > NUMBER_LINES) {
    accum_new = accum_new - NUMBER_LINES;
    g_field_xs_shift[cur_line]--;
    let [_index, max_shift, min_shift, _flip] = START_STOP_FLIP[cur_line];
    if (g_field_xs_shift[cur_line] == min_shift) {
      g_field_xs_shift[cur_line] = max_shift;
    }
  }
  g_field_xs_accums[cur_line] = accum_new;
  return accum_new;
}

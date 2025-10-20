function recordRights_dbg(right_line, old_right, right_sum, adjust_right) {
  if (right_line == g_record_line_dbg) {
    x_shift_amount = x_shift_list[g_record_line_dbg];

    old_right = String(old_right).padEnd(4, ' ');
    right_sum = String(right_sum).padEnd(4, ' ');
    adjust_right = String(adjust_right).padEnd(4, ' ');
    x_shift_amount = String(x_shift_amount).padEnd(4, ' ');
    right_start_stop = start_stop_flip[right_line];
    g_line_history_dbg = `right_line: ${right_line} old_right:${old_right} right_sum:${right_sum} adjust_right:${adjust_right} x_shift_amount:${x_shift_amount}  [${right_start_stop}]`;
  }
}

function resetRight() {
  for (let cur_line = 0; cur_line <= num_lines; cur_line++) {
    let [_index, max_shift, _min_shift, _flip] = start_stop_flip[cur_line];
    x_shift_list[cur_line] = max_shift;
    overUnder_accums[cur_line] = 0;
  }
}



function incrementRight() {
  let bottom_line_count = x_shift_list[closest_width_index];
  if (bottom_line_count == RIGHT_LOOP_OVER || bottom_line_count == IS_RESET_LEFT) {
    resetRight();
    //recordLefts_dbg(5096, 5096, 5096, 5096);
  } else {
    for (let right_line = 0; right_line <= num_lines; right_line++) {
      let old_right = overUnder_accums[right_line];
      let right_sum = old_right + right_line;
      let accum_overflow = overflowRight(right_line, right_sum);
      /* start debug code */
      // recordRights_dbg(right_line, old_right, right_sum, accum_overflow);
      /* end debug code */
    }
  }
}

function overflowRight(cur_line, accum_new) {
  if (accum_new > num_lines) {
    accum_new = accum_new - num_lines;
    x_shift_list[cur_line]--;
    let [_index, max_shift, min_shift, _flip] = start_stop_flip[cur_line];
    if (x_shift_list[cur_line] == min_shift) {
      x_shift_list[cur_line] = max_shift;
    }
  }
  overUnder_accums[cur_line] = accum_new;
  return accum_new;
}

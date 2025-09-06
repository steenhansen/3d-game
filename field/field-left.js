function recordLefts_dbg(cur_line, old_left, left_sum, adjust_left) {
  if (cur_line == g_record_line_dbg) {
    x_shift_amount = x_shift_list[g_record_line_dbg];

    old_left = String(old_left).padEnd(4, ' ');
    left_sum = String(left_sum).padEnd(4, ' ');
    adjust_left = String(adjust_left).padEnd(4, ' ');
    x_shift_amount = String(x_shift_amount).padEnd(4, ' ');

    left_start_stop = start_stop_flip[cur_line];

    g_line_history_dbg = `cur_line: ${cur_line} old_left:${old_left} left_sum:${left_sum} adjust_right:${adjust_left} x_shift_amount:${x_shift_amount}  [${left_start_stop}]`;
  }

}

function resetLeft() {
  for (let cur_line = 0; cur_line <= num_lines; cur_line++) {
    let [_index, _max_shift, min_shift, _flip] = start_stop_flip[cur_line];
    x_shift_list[cur_line] = min_shift;
    overUnder_accums[cur_line] = num_lines - 1;
  }
}

function underflowLeft(cur_line, accum_new) {
  if (accum_new < 0) {
    accum_new = accum_new + num_lines;
    x_shift_list[cur_line]++;
    let [_index, max_shift, min_shift, _flip] = start_stop_flip[cur_line];
    if (x_shift_list[cur_line] == max_shift) {
      x_shift_list[cur_line] = min_shift;
    }
  }
  overUnder_accums[cur_line] = accum_new;
  return accum_new;
}


function incrementLeft() {
  let bottom_line_count = x_shift_list[closest_width_index];
  if (bottom_line_count == LEFT_LOOP_OVER || bottom_line_count == IS_RESET_RIGHT) {
    resetLeft();
    recordLefts_dbg(4096, 4096, 4096, 4096);
  } else {
    for (let cur_line = 0; cur_line <= num_lines; cur_line++) {
      let accum_old = overUnder_accums[cur_line];
      let accum_new = accum_old - cur_line;
      let accum_underflow = underflowLeft(cur_line, accum_new);
      /* start debug code */
      recordLefts_dbg(cur_line, accum_old, accum_new, accum_underflow);
      /* end debug code */
    }
  }
}

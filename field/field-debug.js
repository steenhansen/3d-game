let dbg_print = function () {
  (console).log.apply(console, arguments);
};



/*       255  no move?
   [126, -250,         -504,       128],
   [250, -492,         -994,       252],
  index, start offset, end offset, flip offset
*/
function dbg_printAnyBoundBreaks(index_arr) {
  for (let error_line = 0; error_line <= NUMBER_LINES; error_line++) {
    let [_index, reset_right, reset_left, _flip] = START_STOP_FLIP[error_line];
    cur_shift = g_field_xs_shift[error_line];
    if (cur_shift > reset_right || cur_shift < reset_left) {
      if (dbg_record_line != error_line) {
        dbg_print("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        dbg_print("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        dbg_print("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        dbg_print(`Not recording error causing line in history: `);
        dbg_print(` error_line( ${error_line} ) <> dbg_record_line( ${dbg_record_line} ) `);
        dbg_print(` Change dbg_record_line from  ${dbg_record_line}  to  ${error_line} in the_globals.js`);
        dbg_print("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        dbg_print("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        dbg_print("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
      }
      dbg_print("error line:", error_line, "   has a shift of:", cur_shift, "   reset_right:", reset_right, " reset_left:", reset_left, "   index_arr:", index_arr);


      dbg_print("the x_shift of ", cur_shift, " is not in set of [", reset_right, " ... ", reset_left, "] thus error");

      dbg_print(`g_field_xs_shift[${error_line}]:`, g_field_xs_shift[error_line]);
      dbg_print(`START_STOP_FLIP[${error_line}]:`, START_STOP_FLIP[error_line]);
      return true;
    }
  }
  return false;
}



function dbg_recordLefts(cur_line, old_left, left_sum, adjust_left) {
  if (cur_line == dbg_record_line) {
    x_shift_amount = g_field_xs_shift[dbg_record_line];

    old_left = String(old_left).padEnd(4, ' ');
    left_sum = String(left_sum).padEnd(4, ' ');
    adjust_left = String(adjust_left).padEnd(4, ' ');
    x_shift_amount = String(x_shift_amount).padEnd(4, ' ');

    left_start_stop = START_STOP_FLIP[cur_line];

    g_line_history_dbg = `cur_line: ${cur_line} old_left:${old_left} left_sum:${left_sum} adjust_right:${adjust_left} x_shift_amount:${x_shift_amount}  [${left_start_stop}]`;
  }

}


function dbg_recordRights(right_line, old_right, right_sum, adjust_right) {
  if (right_line == dbg_record_line) {
    x_shift_amount = g_field_xs_shift[dbg_record_line];

    old_right = String(old_right).padEnd(4, ' ');
    right_sum = String(right_sum).padEnd(4, ' ');
    adjust_right = String(adjust_right).padEnd(4, ' ');
    x_shift_amount = String(x_shift_amount).padEnd(4, ' ');
    right_start_stop = START_STOP_FLIP[right_line];
    g_line_history_dbg = `right_line: ${right_line} old_right:${old_right} right_sum:${right_sum} adjust_right:${adjust_right} x_shift_amount:${x_shift_amount}  [${right_start_stop}]`;
  }
}

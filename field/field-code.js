


/*       255  no move?
   [126, -250,         -504,       128],
   [250, -492,         -994,       252],
  index, start offset, end offset, flip offset
*/
function printAnyBoundBreaks_dbg(index_arr) {
  for (let error_line = 0; error_line <= num_lines; error_line++) {
    let [_index, reset_right, reset_left, _flip] = start_stop_flip[error_line];
    cur_shift = x_shift_list[error_line];
    if (cur_shift > reset_right || cur_shift < reset_left) {
      if (g_record_line_dbg != error_line) {
        console.log("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        console.log("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        console.log("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        console.log(`Not recording error causing line in history: `);
        console.log(` error_line( ${error_line} ) <> g_record_line_dbg( ${g_record_line_dbg} ) `);
        console.log(` Change g_record_line_dbg from  ${g_record_line_dbg}  to  ${error_line} in the_globals.js`);
        console.log("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        console.log("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
        console.log("********************* ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ");
      }
      console.log("error line:", error_line, "   has a shift of:", cur_shift, "   reset_right:", reset_right, " reset_left:", reset_left, "   index_arr:", index_arr);


      console.log("the x_shift of ", cur_shift, " is not in set of [", reset_right, " ... ", reset_left, "] thus error");

      console.log(`x_shift_list[${error_line}]:`, x_shift_list[error_line]);
      console.log(`start_stop_flip[${error_line}]:`, start_stop_flip[error_line]);
      return true;
    }
  }
  return false;
}








function fieldRight(travel_speed, diagonal_weight) {
  for (i = 0; i < travel_speed; i++) {
    for (j = 0; j < diagonal_weight; j++) {
      incrementRight();
    }
  }
}

function fieldLeft(travel_speed, diagonal_weight) {
  for (i = 0; i < travel_speed; i++) {
    for (j = 0; j < diagonal_weight; j++) {
      incrementLeft();
    }
  }
}





function initIncrementers() {
  overUnder_accums = Array(256).fill(0);
  x_shift_list = Array(256).fill(0);
  if (INIT_RIGHT) {
    resetRight();
  } else {
    resetLeft();
  }
}


function initLeftRight() {
  initIncrementers();


  incrementForward();  //???
  incrementForward();
  incrementForward();
  incrementForward();
}



function affixLeftRight() {
  const y_counter = Math.floor(y_flip_count);

  const invert_lines = y_invert_lines[y_counter];
  for (let affix_line = 0; affix_line <= num_lines; affix_line++) {
    const inverted_x = invert_lines[affix_line];
    let affix_shift = x_shift_list[affix_line];
    if (inverted_x == 0) {
      let [_index, _start, _stop, invert_flip] = start_stop_flip[affix_line];
      affix_shift -= invert_flip;
    }
    const line_element = document.getElementById(`line${affix_line}`);
    line_element.style = `background-position-x: ${affix_shift}px `;
  }
}






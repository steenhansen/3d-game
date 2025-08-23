
function turnOnKeys() {

  function readKeys(event) {

    const the_key = event.key;
    // console.log("ddd 23432", the_key);
    if (g_move_continue == 0) {
      if (['Q', 'q', "Home", '7'].includes(the_key)) {
        g_move_direction = MOVINGx_NW;
        flashArrow("nw");
      } else if (['W', 'w', "ArrowUp", '8'].includes(the_key)) {
        g_move_direction = MOVINGx_N;
        flashArrow("n");
      } else if (['E', 'e', "PageUp", '9'].includes(the_key)) {
        g_move_direction = MOVINGx_NE;
        flashArrow("ne");
      } else if (['D', 'd', "ArrowRight", '6'].includes(the_key)) {
        g_move_direction = MOVINGx_E;
        flashArrow("e");
      } else if (['C', 'c', "PageDown", '3'].includes(the_key)) {
        g_move_direction = MOVINGx_SE;
        flashArrow("se");
      } else if (['X', 'x', "ArrowDown", '2'].includes(the_key)) {
        g_move_direction = MOVINGx_S;
        flashArrow("s");
      } else if (['Z', 'z', "End", '1'].includes(the_key)) {
        g_move_direction = MOVINGx_SW;
        flashArrow("sw");
      } else if (['A', 'a', "ArrowLeft", '4'].includes(the_key)) {
        g_move_direction = MOVINGx_W;
        flashArrow("w");
      } else if (['S', 's', 'Clear', '5'].includes(the_key)) {
        g_move_direction = MOVINGx_NOT;
      } else if ([' '].includes(the_key)) {
        console.log("SHHHOOOTTT");
      } else {
        //  MOVING_NOT;
      }
    }
  }

  document.addEventListener('keydown', readKeys, { passive: false });
}
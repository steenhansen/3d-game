
function turnOnKeys() {

  function readKeys(event) {

    const the_key = event.key;
    // console.log("ddd 23432", the_key);
    if (g_move_continue == 0) {
      if (['Q', 'q', "Home", '7'].includes(the_key)) {
        g_move_direction = MOVINGx_NW;
      } else if (['W', 'w', "ArrowUp", '8'].includes(the_key)) {
        g_move_direction = MOVINGx_N;
      } else if (['E', 'e', "PageUp", '9'].includes(the_key)) {
        g_move_direction = MOVINGx_NE;
      } else if (['D', 'd', "ArrowRight", '6'].includes(the_key)) {
        g_move_direction = MOVINGx_E;
      } else if (['C', 'c', "PageDown", '3'].includes(the_key)) {
        g_move_direction = MOVINGx_SE;
      } else if (['X', 'x', "ArrowDown", '2'].includes(the_key)) {
        g_move_direction = MOVINGx_S;
      } else if (['Z', 'z', "End", '1'].includes(the_key)) {
        g_move_direction = MOVINGx_SW;
      } else if (['A', 'a', "ArrowLeft", '4'].includes(the_key)) {
        g_move_direction = MOVINGx_W;
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
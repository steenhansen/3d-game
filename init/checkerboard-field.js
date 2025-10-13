
function initCheckerboardField(field_width, field_depth) {

  g_checkerboard_width = field_width;
  g_checkerboard_depth = field_depth;



  field_depth = g_checkerboard_depth;
  // console.log("g_checkerboard_depth  CCC " + g_checkerboard_depth);
  COLLISION_SIZES = [field_width, room_width, field_depth, room_depth];
  //console.log(" CCC ", field_width, room_width, field_depth, room_depth);

}

//function initPlayer(x, y, start_drift_dir) {
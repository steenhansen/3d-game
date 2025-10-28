









function initPlanet(field_size, playground_box, planet_name) {
  //console.log("iniPlaynet", field_size);
  let [field_width, field_depth] = field_size;
  let [left_x, top_y, right_x, bottom_y] = playground_box;

  initCheckerboardField(field_width, field_depth);
  let the_planet = {
    s_isa: "is-planet",
    s_name: planet_name,
    s_checkerboard_width: field_width,
    s_checkerboard_depth: field_depth,


    s_playground_x_min: left_x,


    s_playground_x_max: right_x,


    s_playground_y_min: top_y,



    s_playground_y_max: bottom_y,


    m_planet_state: LOOP_0_MOBILE_START, //"hi-there",
    m_dying_distance: 0,
    // t_move_direction
    // t_drift_direction
    // t_drift_countdown
  };
  return the_planet;
}

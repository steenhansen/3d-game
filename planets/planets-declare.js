
// all from major-global save g_hit_hole_last_move

// let a_planet = {
//   s_isa: "is-planet",
//   // m_planet_state: LOOP_1_BEGIN,
//   m_checkerboard_width: 0,
//   m_checkerboard_depth: 0,


//   // t_move_direction: MOVINGx_NE,
//   // t_drift_direction: MOVINGx_NE,
//   // t_dying_distance: 0,
//   // t_is_drifting: true,
//   // t_taking_off: true,

// };

//g_device_type = DEVICE_MOBILE;

function initPlanet(field_width, field_depth) {

  initCheckerboardField(field_width, field_depth);

  let the_planet = {
    s_isa: "is-planet",
    m_planet_state: "hi-there",

    s_checkerboard_width: field_width,
    s_checkerboard_depth: field_depth,
    m_move_direction: MOVINGx_NE,



    //    if(  't_drift_direction' in g_planet) {


    //   g_is_drifting = false;
    //   delete g_planet.t_drift_direction;
    // g_planet.t_drift_direction=true
    //  g_planet.t_drift_direction=start_drift_dir;
    //t_drift_direction: MOVINGx_NE,

    //m_drift_countdown=15  !!!!!!!

    // let g_drift_direction = 'set-in-initPlayer'; // MOVINGx_NE;

    // let g_is_drifting = false; /// NO POINT USe in





    // t_dying_distance: 0,
    // t_taking_off: true,

  };
  return the_planet;
}
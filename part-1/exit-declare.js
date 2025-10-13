
const EXIT_COLOR = 'Lime';
exit_pylon = {
  //  const IS_EXIT = "is_exit"s
  s_isa: "is-exit",  //  s_isa: "is-pylon"
  s_pylon_name: "pylon-EXIT",

  s_url_hit: 'part-2/part-2.html?g_loop_state=LOOP_0_DESKTOP_START',

  o_outline_color: 'green',

  //  m_x: pylon_1A_START_X, m_y: pylon_1A_START_Y,
  m_x: 1000, m_y: 33,

  m_a_front_color: EXIT_COLOR,     // color of the 'EXIT' text
  m_a_left_color: EXIT_COLOR,      // need three for collison color changes
  m_a_right_color: EXIT_COLOR,


  // m_b_front_grad_from: 'Lime',
  // m_b_front_grad_to: 'Fuchsia',
  // m_b_left_grad_from: 'white',
  // m_b_left_grad_to: 'black',
  // m_b_right_grad_from: 'Red',
  // m_b_right_grad_to: 'Yellow',
  // m_b_side_twirl: 150,
  // m_b_front_twirl: 350,

  m_c_exit_color: 'lime'

};
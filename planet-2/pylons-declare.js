



pylon_a_1 = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-A-1",
  o_outline_color: 'red',

  //  m_x: pylon_1A_START_X, m_y: pylon_1A_START_Y,
  m_x: 500, m_y: 28,
  m_alive: true,
  p_bare_frnt_col: 'green',
  p_bare_left_col: 'yellow',
  p_bare_rght_col: 'purple',

  //t_pylon_hit_flash: 0,

};

pylon_a_2 = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-A-2",
  // o_outline_color: 'red',

  m_x: 1500, m_y: 28,
  m_alive: true,
  p_grad_frnt_from: GRAD_LIME_FUCHSIA[1],
  p_grad_frnt_to: GRAD_LIME_FUCHSIA[0],

  p_grad_left_from: GRAD_WHITE_BLACK[0],
  p_grad_left_to: GRAD_WHITE_BLACK[1],

  p_grad_rght_from: GRAD_RED_YELLOW[0],
  p_grad_rght_to: GRAD_RED_YELLOW[1],
  p_grad_side_twirl: 150,
  p_grad_frnt_twirl: 350,

  // t_pylon_hit_flash: 0,

};




pylon_2a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-B-2",
  m_x: 870, m_y: 124,
  p_grad_side_twirl: 50,
  p_grad_frnt_twirl: 250,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};


let pylon_2b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-A-3",
  m_x: 1386, m_y: 124,
  p_grad_side_twirl: 0,
  p_grad_frnt_twirl: 200,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};



pylon_3a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-B-3",
  m_x: 1386, m_y: 316,
  p_grad_side_twirl: 100,
  p_grad_frnt_twirl: 300,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};



pylon_3b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-C-3",
  m_x: 2700, m_y: 316,
  p_grad_side_twirl: 188,
  p_grad_frnt_twirl: 388,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};













function randomPylon() {

}




/*
  for no twirlling , below looks good
  p_grad_side_twirl: 1,aww
  p_grad_frnt_twirl: 201,
*/

pylon_4_1 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_2 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 200, m_y: 200,
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_3 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 300, m_y: 300,
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_4 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 400, m_y: 400,
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_5 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 500, m_y: 500,
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_6 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 600, m_y: 600,
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_7 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 700, m_y: 700,
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_8 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 800, m_y: 600,
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};



pylon_4_9 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 900, m_y: 600,                          /// must be within 8192 and 768
  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white'
};

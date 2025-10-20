
function rowPylons(y_coord, row_name) {
  pylon_row = [];
  column_count = 0;
  the_separation = 256;
  checkerboard_width = g_planet.s_checkerboard_width;
  last_one = checkerboard_width; // - the_separation;
  for (let x = 0; x < last_one; x += the_separation) {
    if (x == 0) {
      the_colors = ["red", "cyan"];
    } else {
      the_colors = GRAD_WHITE_BLACK;
    }
    let a_pylon = {
      s_isa: "is-pylon",
      s_pylon_name: `pylon-${row_name}-${column_count}`,
      m_x: x, m_y: y_coord,
      p_grad_side_twirl: 0,
      p_grad_frnt_twirl: 200,
      //o_outline_color: false,
      t_pylon_hit_flash: 0,

    };
    column_count++;
    pylon_row.push(a_pylon);
  }

  return pylon_row;
}

function phalanxPylons() {
  row_0 = rowPylons(0, "A");
  row_100 = rowPylons(100, "B");
  row_200 = rowPylons(200, "C");
  row_300 = rowPylons(300, "D");
  row_400 = rowPylons(400, "E");
  row_500 = rowPylons(500, "F");
  //  pylon_phalanx = [row_0, row_100, row_200, row_300, row_400, row_500].flat();
  pylon_phalanx = [row_0].flat();
  //s_moves_x: [ZERO_10].flat(),
  return pylon_phalanx;
}

pylon_phalanx = phalanxPylons();


pylon_1a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-1a",
  //  m_x: pylon_1A_START_X, m_y: pylon_1A_START_Y,
  m_x: 100, m_y: 28,

  p_grad_side_twirl: 1,
  p_grad_frnt_twirl: 201,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};

pylon_1b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-2a",
  m_x: 612, m_y: 28,
  p_grad_side_twirl: 150,
  p_grad_frnt_twirl: 350,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};




pylon_2a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-2b",
  m_x: 870, m_y: 124,
  p_grad_side_twirl: 50,
  p_grad_frnt_twirl: 250,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};


let pylon_2b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-3a",
  m_x: 1386, m_y: 124,
  p_grad_side_twirl: 0,
  p_grad_frnt_twirl: 200,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};



pylon_3a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-3b",
  m_x: 1386, m_y: 316,
  p_grad_side_twirl: 100,
  p_grad_frnt_twirl: 300,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};



pylon_3b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-3c",
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
  m_x: 100, m_y: 100,
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

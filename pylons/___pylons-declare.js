
const HIT_FLASH_PYLON = 23;
// red-grad        Red rgb(255,0,0)           22222222
// green-grad    Green rgb(0,255,0)ddddd
// blue-grad      Blue rgb(0,0,255)
// orange-grad  Orange rgb(255, 95, 31)
// yellow-grad  Yellow rgb(255, 255, 0) 
// purple-grad  Purple rgb(255, 0, 255) dddd
// cyan-grad      Cyan rgb(0, 255, 255)         22222222
// silver-grad  Silver rgb(160,160,160)


function rowPylons(y_coord) {
  pylon_row = [];
  column_count = 0;
  row_name = "A";
  last_one = g_checkerboard_width - 500;
  for (let x = 0; x < last_one; x += 500) {
    let a_pylon = {
      s_isa: "is-pylon",
      s_pylon_name: `pylon-${row_name}-${column_count}`,
      m_x: x, m_y: y_coord,
      m_b_side_twirl: 0,
      m_b_front_twirl: 200,
      //o_outline_color: false,
      t_pylon_hit_flash: 0,

    };
    column_count++;
    pylon_row.push(a_pylon);
  }
  return pylon_row;
}



pylon_a_1 = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-A-1",




  o_outline_color: 'white',


  //  m_x: pylon_1A_START_X, m_y: pylon_1A_START_Y,
  m_x: 500, m_y: 28,

  m_a_front_color: 'red',
  m_a_left_color: 'white',
  m_a_right_color: 'blue',

  //t_pylon_hit_flash: 0,
  //  m_c_exit_color: 'lime'
};

pylon_a_2 = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-A-2",

  m_x: 1500, m_y: 28,

  // m_a_front_color: 'green',
  // m_a_left_color: 'yellow',
  // m_a_right_color: 'purple',

  m_b_front_grad_from: 'Lime',
  m_b_front_grad_to: 'Fuchsia',
  m_b_left_grad_from: 'white',
  m_b_left_grad_to: 'black',
  m_b_right_grad_from: 'Red',
  m_b_right_grad_to: 'Yellow',
  m_b_side_twirl: 150,
  m_b_front_twirl: 350,

  // t_pylon_hit_flash: 0,
  //m_c_exit_color: 'lime'
};




pylon_2a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-B-2",
  m_x: 870, m_y: 124,
  m_b_side_twirl: 50,
  m_b_front_twirl: 250,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};


let pylon_2b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-A-3",
  m_x: 1386, m_y: 124,
  m_b_side_twirl: 0,
  m_b_front_twirl: 200,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};



pylon_3a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-B-3",
  m_x: 1386, m_y: 316,
  m_b_side_twirl: 100,
  m_b_front_twirl: 300,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};



pylon_3b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-C-3",
  m_x: 2700, m_y: 316,
  m_b_side_twirl: 188,
  m_b_front_twirl: 388,
  o_outline_color: 'white',
  t_pylon_hit_flash: 0,

};













function randomPylon() {

}




/*
  for no twirlling , below looks good
  m_b_side_twirl: 1,aww
  m_b_front_twirl: 201,
*/

pylon_4_1 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_2 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 200, m_y: 200,
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_3 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 300, m_y: 300,
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_4 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 400, m_y: 400,
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_5 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 500, m_y: 500,
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_6 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 600, m_y: 600,
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_7 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 700, m_y: 700,
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

pylon_4_8 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 800, m_y: 600,
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};



pylon_4_9 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 900, m_y: 600,                          /// must be within 8192 and 768
  m_b_side_twirl: 1,
  m_b_front_twirl: 201,
  o_outline_color: 'white'
};

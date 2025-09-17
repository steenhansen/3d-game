

// red-grad        Red rgb(255,0,0)           22222222
// green-grad    Green rgb(0,255,0)ddddd
// blue-grad      Blue rgb(0,0,255)
// orange-grad  Orange rgb(255, 95, 31)
// yellow-grad  Yellow rgb(255, 255, 0) 
// purple-grad  Purple rgb(255, 0, 255) dddd
// cyan-grad      Cyan rgb(0, 255, 255)         22222222
// silver-grad  Silver rgb(160,160,160)

//  COLUMN_3A
let column_3a = {
  s_isa: "is-column",
  column_name: "a3-column",
  m_x: COLUMN_3A_START_X, m_y: COLUMN_3A_START_Y,
  column_colors: ["red", "cyan"],
  m_side_twirl: 0,
  m_front_twirl: 200,
  c_outline: false
};

//console.log(" after columns DATA live");

column_3b = {
  s_isa: "is-column",
  column_name: "b3-column",
  m_x: COLUMN_3B_START_X, m_y: COLUMN_3B_START_Y,
  column_colors: BLUE_YELLOW_GRADIENT,      //["blue", "yellow"],
  m_side_twirl: 100,
  m_front_twirl: 300,
  c_outline: false
};



column_3c = {
  s_isa: "is-column",
  column_name: "c3-column",
  m_x: COLUMN_3C_START_X, m_y: COLUMN_3C_START_Y,
  column_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 188,
  m_front_twirl: 388,
  c_outline: false
};




column_2a = {
  s_isa: "is-column",
  column_name: "a2-column",
  m_x: COLUMN_2A_START_X, m_y: COLUMN_2A_START_Y,
  column_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 150,
  m_front_twirl: 350,
  c_outline: true
};

column_2b = {
  s_isa: "is-column",
  column_name: "b2-column",
  m_x: COLUMN_2B_START_X, m_y: COLUMN_2B_START_Y,
  column_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 50,
  m_front_twirl: 250,
  c_outline: true
};







/*
  for no twirlling , below looks good
  m_side_twirl: 1,aww
  m_front_twirl: 201,
*/

column_1a = {
  s_isa: "is-column",
  column_name: "a1-column",
  m_x: COLUMN_1A_START_X, m_y: COLUMN_1A_START_Y,
  column_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  c_outline: true
};




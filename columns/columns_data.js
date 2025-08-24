

// red-grad        Red rgb(255,0,0)
// green-grad    Green rgb(0,255,0)
// blue-grad      Blue rgb(0,0,255)
// orange-grad  Orange rgb(255, 95, 31)
// yellow-grad  Yellow rgb(255, 255, 0) 
// purple-grad  Purple rgb(255, 0, 255) 
// cyan-grad      Cyan rgb(0, 255, 255) 
// silver-grad  Silver rgb(160,160,160)


column_point_0 = {
  s_isa: "is-column",
  column_name: "p0",
  m_x: COLUMN_0_START_X, m_y: COLUMN_0_START_Y,
  column_colors: ["white", "black"],
  m_side_twirl: 0,
  m_front_twirl: 150
};

column_point_1 = {
  s_isa: "is-column",
  column_name: "p1",
  m_x: COLUMN_1_START_X, m_y: COLUMN_1_START_Y,
  column_colors: ["white", "black"],
  m_side_twirl: 0,
  m_front_twirl: 300
};



column_point_2 = {
  s_isa: "is-column",
  column_name: "p2",
  m_x: COLUMN_2_START_X, m_y: COLUMN_2_START_Y,
  column_colors: ["white", "black"],
  m_side_twirl: 0,
  m_front_twirl: 300
};


column_point_3 = {
  s_isa: "is-column",
  column_name: "p3",
  m_x: COLUMN_3_START_X, m_y: COLUMN_3_START_Y,
  column_colors: ["white", "black"],
  m_side_twirl: 0,
  m_front_twirl: 300
};






column_point_4 = {
  s_isa: "is-column",
  column_name: "p4",
  m_x: PLUS_0_START_X, m_y: PLUS_0_START_Y,
  column_colors: ["red", "green"],
  m_side_twirl: 0,
  m_front_twirl: 150
};

column_point_5 = {
  s_isa: "is-column",
  column_name: "p5",
  m_x: PLUS_1_START_X, m_y: PLUS_1_START_Y,
  column_colors: ["red", "green"],
  m_side_twirl: 0,
  m_front_twirl: 300
};



column_point_6 = {
  s_isa: "is-column",
  column_name: "p6",
  m_x: PLUS_2_START_X, m_y: PLUS_2_START_Y,
  column_colors: ["red", "green"],
  m_side_twirl: 0,
  m_front_twirl: 300
};


column_point_7 = {
  s_isa: "is-column",
  column_name: "p7",
  m_x: PLUS_3_START_X, m_y: PLUS_3_START_Y,
  column_colors: ["red", "green"],
  m_side_twirl: 0,
  m_front_twirl: 300
};



group_square = {
  group_position: { m_x: 100, m_y: 100 },
  the_columns: [
    { m_x: 0, m_y: 0, column_colors: COL_SRS },
    // { m_x: 100, m_y: 0, column_colors: COL_SGS },
    // { m_x: 200, m_y: 0, column_colors: COL_SBS },
    // { m_x: 200, m_y: 100, column_colors: COL_SCS },
    // { m_x: 200, m_y: 200, column_colors: COL_SRS },
    // { m_x: 100, m_y: 200, column_colors: COL_SGS },
    // { m_x: 0, m_y: 200, column_colors: COL_SBS },
    // { m_x: 0, m_y: 100, column_colors: COL_SCS },
  ]

};



// red-grad        Red rgb(255,0,0)
// green-grad    Green rgb(0,255,0)
// blue-grad      Blue rgb(0,0,255)
// orange-grad  Orange rgb(255, 95, 31)
// yellow-grad  Yellow rgb(255, 255, 0) 
// purple-grad  Purple rgb(255, 0, 255) 
// cyan-grad      Cyan rgb(0, 255, 255) 
// silver-grad  Silver rgb(160,160,160)



//column_point_0 = { s_isa: "is-column", m_x: 1, m_y: 0, column_colors: COL_SRS, column_name: "p0" };
//console.log(COLUMN_0_START_X, COLUMN_0_START_Y);

column_point_0 = {
  s_isa: "is-column",
  column_name: "p0",
  m_x: COLUMN_0_START_X, m_y: COLUMN_0_START_Y,
  column_colors: COL_SRS,
  m_side_twirl: 0,
  m_front_twirl: 150
};
column_point_1 = {
  s_isa: "is-column",
  column_name: "p1",
  m_x: 500, m_y: 250,
  column_colors: COL_SGS,
  m_side_twirl: 0,
  m_front_twirl: 300
};



column_point_2 = { s_isa: "is-column", m_x: 1000, m_y: 300, column_colors: COL_SBS, column_name: "p2" };
column_point_3 = { s_isa: "is-column", m_x: 1500, m_y: 350, column_colors: COL_SOS, column_name: "p3" };

column_point_4 = { s_isa: "is-column", m_x: 2000, m_y: 400, column_colors: COL_SYS, column_name: "p4" };
column_point_5 = { s_isa: "is-column", m_x: 2500, m_y: 450, column_colors: COL_SPS, column_name: "p5" };
column_point_6 = { s_isa: "is-column", m_x: 3000, m_y: 500, column_colors: COL_SCS, column_name: "p6" };
column_point_7 = { s_isa: "is-column", m_x: 3500, m_y: 550, column_colors: COL_RGB, column_name: "p7" };


// column_point_1 = { m_x: 50, m_y: 104, column_colors: COL_SGS, column_name: "p1" };
// column_point_2 = { m_x: 100, m_y: 208, column_colors: COL_SBS, column_name: "p2" };
// column_point_3 = { m_x: 150, m_y: 312, column_colors: COL_SOS, column_name: "p3" };


// column_point_4 = { m_x: 200, m_y: 416, column_colors: COL_SYS, column_name: "p10" };
// column_point_5 = { m_x: 250, m_y: 520, column_colors: COL_SPS, column_name: "p11" };
// column_point_6 = { m_x: 300, m_y: 624, column_colors: COL_SCS, column_name: "p12" };
// column_point_7 = { m_x: 350, m_y: 730, column_colors: COL_RGB, column_name: "p13" };




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

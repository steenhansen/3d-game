

// red-grad        Red rgb(255,0,0)
// green-grad    Green rgb(0,255,0)
// blue-grad      Blue rgb(0,0,255)
// orange-grad  Orange rgb(255, 95, 31)
// yellow-grad  Yellow rgb(255, 255, 0) 
// purple-grad  Purple rgb(255, 0, 255) 
// cyan-grad      Cyan rgb(0, 255, 255) 
// silver-grad  Silver rgb(160,160,160)



//column_point_0 = { is_a: "is-column", x: 1, y: 0, column_colors: COL_SRS, column_name: "p0" };
console.log(COLUMN_0_START_X, COLUMN_0_START_Y);
column_point_0 = {
  is_a: "is-column",
  //x: COLUMN_0_START_X, y: COLUMN_0_START_Y,
  //  x: 1024, y: 300,
  x: COLUMN_0_START_X, y: COLUMN_0_START_Y,
  column_colors: COL_SRS, column_name: "p0"
};
column_point_1 = { is_a: "is-column", x: 500, y: 250, column_colors: COL_SGS, column_name: "p1" };
column_point_2 = { is_a: "is-column", x: 1000, y: 300, column_colors: COL_SBS, column_name: "p2" };
column_point_3 = { is_a: "is-column", x: 1500, y: 350, column_colors: COL_SOS, column_name: "p3" };

column_point_4 = { is_a: "is-column", x: 2000, y: 400, column_colors: COL_SYS, column_name: "p4" };
column_point_5 = { is_a: "is-column", x: 2500, y: 450, column_colors: COL_SPS, column_name: "p5" };
column_point_6 = { is_a: "is-column", x: 3000, y: 500, column_colors: COL_SCS, column_name: "p6" };
column_point_7 = { is_a: "is-column", x: 3500, y: 550, column_colors: COL_RGB, column_name: "p7" };


// column_point_1 = { x: 50, y: 104, column_colors: COL_SGS, column_name: "p1" };
// column_point_2 = { x: 100, y: 208, column_colors: COL_SBS, column_name: "p2" };
// column_point_3 = { x: 150, y: 312, column_colors: COL_SOS, column_name: "p3" };


// column_point_4 = { x: 200, y: 416, column_colors: COL_SYS, column_name: "p10" };
// column_point_5 = { x: 250, y: 520, column_colors: COL_SPS, column_name: "p11" };
// column_point_6 = { x: 300, y: 624, column_colors: COL_SCS, column_name: "p12" };
// column_point_7 = { x: 350, y: 730, column_colors: COL_RGB, column_name: "p13" };




group_square = {
  group_position: { x: 100, y: 100 },
  the_columns: [
    { x: 0, y: 0, column_colors: COL_SRS },
    // { x: 100, y: 0, column_colors: COL_SGS },
    // { x: 200, y: 0, column_colors: COL_SBS },
    // { x: 200, y: 100, column_colors: COL_SCS },
    // { x: 200, y: 200, column_colors: COL_SRS },
    // { x: 100, y: 200, column_colors: COL_SGS },
    // { x: 0, y: 200, column_colors: COL_SBS },
    // { x: 0, y: 100, column_colors: COL_SCS },
  ]

};

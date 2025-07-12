

// red-grad        Red rgb(255,0,0)
// green-grad    Green rgb(0,255,0)
// blue-grad      Blue rgb(0,0,255)
// orange-grad  Orange rgb(255, 95, 31)
// yellow-grad  Yellow rgb(255, 255, 0) 
// purple-grad  Purple rgb(255, 0, 255) 
// cyan-grad      Cyan rgb(0, 255, 255) 
// silver-grad  Silver rgb(160,160,160)


//  column_left=>col_left: "silver-grad",          column_front=>col_front: "red-grad",          column_right=>col_right
// COL_SRS = { column_left: "silver-grad", column_front: "red-grad", column_right: "silver-grad" };
// COL_SGS = { column_left: "silver-grad", column_front: "green-grad", column_right: "silver-grad" };
// COL_SBS = { column_left: "silver-grad", column_front: "blue-grad", column_right: "silver-grad" };
// COL_SOS = { column_left: "silver-grad", column_front: "orange-grad", column_right: "silver-grad" };
// COL_SYS = { column_left: "silver-grad", column_front: "yellow-grad", column_right: "silver-grad" };
// COL_SPS = { column_left: "silver-grad", column_front: "purple-grad", column_right: "silver-grad" };
// COL_SCS = { column_left: "silver-grad", column_front: "cyan-grad", column_right: "silver-grad" };

// COL_RGB = { column_left: "red-grad", column_front: "green-grad", column_right: "blue-grad" };

// // column_colors=>col_colors     column_name=>col_name
// COL_RSR = { column_left: "red-grad", column_front: "silver-grad", column_right: "red-grad" };
// COL_GSG = { column_left: "green-grad", column_front: "silver-grad", column_right: "green-grad" };
// COL_BSB = { column_left: "blue-grad", column_front: "silver-grad", column_right: "blue-grad" };
// COL_OSO = { column_left: "orange-grad", column_front: "silver-grad", column_right: "orange-grad" };

// 1024 - 264 = 760

//    invert_192

// thus we have 192 lines back to front ???

// column_point_0 = { x: 0, y: 0, column_colors: COL_SRS, column_name: "p0" };
// column_point_1 = { x: 50, y: 100, column_colors: COL_SGS, column_name: "p1" };
// column_point_2 = { x: 100, y: 200, column_colors: COL_SBS, column_name: "p2" };
// column_point_3 = { x: 150, y: 300, column_colors: COL_SOS, column_name: "p3" };


// column_point_4 = { x: 200, y: 400, column_colors: COL_SYS, column_name: "p10" };
// column_point_5 = { x: 250, y: 500, column_colors: COL_SPS, column_name: "p11" };
// column_point_6 = { x: 300, y: 600, column_colors: COL_SCS, column_name: "p12" };
// column_point_7 = { x: 350, y: 730, column_colors: COL_RGB, column_name: "p13" };


column_point_0 = { x: 0, y: 0, column_colors: COL_SRS, column_name: "p0" };
column_point_1 = { x: 50, y: 104, column_colors: COL_SGS, column_name: "p1" };
column_point_2 = { x: 100, y: 208, column_colors: COL_SBS, column_name: "p2" };
column_point_3 = { x: 150, y: 312, column_colors: COL_SOS, column_name: "p3" };


column_point_4 = { x: 200, y: 416, column_colors: COL_SYS, column_name: "p10" };
column_point_5 = { x: 250, y: 520, column_colors: COL_SPS, column_name: "p11" };
column_point_6 = { x: 300, y: 624, column_colors: COL_SCS, column_name: "p12" };
column_point_7 = { x: 350, y: 730, column_colors: COL_RGB, column_name: "p13" };


// column_point_8 = { x: 400, y: 800, column_colors: COL_RSR, column_name: "p10" };
// column_point_9 = { x: 450, y: 900, column_colors: COL_GSG, column_name: "p11" };
// column_point_10 = { x: 500, y: 1000, column_colors: COL_BSB, column_name: "p12" };
// column_point_11 = { x: 5500, y: 1100, column_colors: COL_OSO, column_name: "p13" };




group_square = {
  group_position: { x: 100, y: 100 },
  the_columns: [
    { x: 0, y: 0, column_colors: COL_SRS },
    { x: 100, y: 0, column_colors: COL_SGS },
    { x: 200, y: 0, column_colors: COL_SBS },
    { x: 200, y: 100, column_colors: COL_SCS },
    { x: 200, y: 200, column_colors: COL_SRS },
    { x: 100, y: 200, column_colors: COL_SGS },
    { x: 0, y: 200, column_colors: COL_SBS },
    { x: 0, y: 100, column_colors: COL_SCS },
  ]

};

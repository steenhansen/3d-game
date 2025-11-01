


/*

maze
    xxxxxxx
 XXX       x
X   XXXXX  X
 X X     X x
XX XXX XXX X

*/

function makeHoles(playground_box) {
  //let [left_x, top_y, _right_x, _bottom_y] = playground_box;

  //let [origin_x, origin_y] = xy_origin;
  declared_holes = [];


  //  hole_00 = initHoleData("00", left_x + 580, top_y + 11, "blue");
  hole_00 = initHoleData(playground_box, "00", 580, 11, "blue");




  return [hole_00];
  // hole_01 = initHoleData("01", origin_x + PLOT_01_X, origin_y + 256, "blue");
  // hole_02 = initHoleData("02", origin_x + PLOT_02_X, origin_y + 256, "red");
  // hole_03 = initHoleData("03", origin_x + PLOT_03_X, origin_y + 256, "blue");
  // hole_04 = initHoleData("04", origin_x + PLOT_04_X, origin_y + 256, "blue");
  // hole_05 = initHoleData("05", origin_x + PLOT_05_X, origin_y + 256, "blue");
  // hole_06 = initHoleData("06", origin_x + PLOT_06_X, origin_y + 256, "red");
  // hole_07 = initHoleData("07", origin_x + PLOT_07_X, origin_y + 256, "blue");
  // hole_08 = initHoleData("08", origin_x + PLOT_08_X, origin_y + 256, "blue");
  // hole_09 = initHoleData("09", origin_x + PLOT_09_X, origin_y + 256, "blue");
  // hole_0A = initHoleData("0A", origin_x + PLOT_10_X, origin_y + 256, "red");
  // hole_0B = initHoleData("0B", origin_x + PLOT_11_X, origin_y + 256, "blue");

  // holes_0 = [hole_00, hole_01, hole_02, hole_03, hole_04, hole_05, hole_06, hole_07, hole_08, hole_09, hole_0A, hole_0B];

  // declared_holes = [...holes_0];

  // hole_10 = initHoleData("10", origin_x + PLOT_00_X, origin_y + 200, "red");
  // hole_11 = initHoleData("11", origin_x + PLOT_01_X, origin_y + 200, "blue");
  // hole_12 = initHoleData("12", origin_x + PLOT_02_X, origin_y + 200, "red");
  // hole_13 = initHoleData("13", origin_x + PLOT_03_X, origin_y + 200, "blue");
  // hole_14 = initHoleData("14", origin_x + PLOT_04_X, origin_y + 200, "red");
  // hole_15 = initHoleData("15", origin_x + PLOT_05_X, origin_y + 200, "red");
  // hole_16 = initHoleData("16", origin_x + PLOT_06_X, origin_y + 200, "red");
  // hole_17 = initHoleData("17", origin_x + PLOT_07_X, origin_y + 200, "red");
  // hole_18 = initHoleData("18", origin_x + PLOT_08_X, origin_y + 200, "red");
  // hole_19 = initHoleData("19", origin_x + PLOT_09_X, origin_y + 200, "blue");
  // hole_1A = initHoleData("1A", origin_x + PLOT_10_X, origin_y + 200, "red");
  // hole_1B = initHoleData("1B", origin_x + PLOT_11_X, origin_y + 200, "blue");

  // holes_1 = [hole_10, hole_11, hole_12, hole_13, hole_14, hole_15, hole_16, hole_17, hole_18, hole_19, hole_1A, hole_1B];

  // declared_holes = [...holes_0, ...holes_1];

  // hole_20 = initHoleData("20", origin_x + PLOT_00_X, origin_y + 150, "blue");
  // hole_21 = initHoleData("21", origin_x + PLOT_01_X, origin_y + 150, "red");
  // hole_22 = initHoleData("22", origin_x + PLOT_02_X, origin_y + 150, "red");
  // hole_23 = initHoleData("23", origin_x + PLOT_03_X, origin_y + 150, "red");
  // hole_24 = initHoleData("24", origin_x + PLOT_04_X, origin_y + 150, "blue");
  // hole_25 = initHoleData("25", origin_x + PLOT_05_X, origin_y + 150, "blue");
  // hole_26 = initHoleData("26", origin_x + PLOT_06_X, origin_y + 150, "blue");
  // hole_27 = initHoleData("27", origin_x + PLOT_07_X, origin_y + 150, "blue");
  // hole_28 = initHoleData("28", origin_x + PLOT_08_X, origin_y + 150, "blue");
  // hole_29 = initHoleData("29", origin_x + PLOT_09_X, origin_y + 150, "red");
  // hole_2A = initHoleData("2A", origin_x + PLOT_10_X, origin_y + 150, "red");
  // hole_2B = initHoleData("2B", origin_x + PLOT_11_X, origin_y + 150, "blue");

  // holes_2 = [hole_20, hole_21, hole_22, hole_23, hole_24, hole_25, hole_26, hole_27, hole_28, hole_29, hole_2A, hole_2B];

  // declared_holes = [...holes_0, ...holes_1, ...holes_2];



  // hole_30 = initHoleData("30", origin_x + PLOT_00_X, origin_y + 100, "red");
  // hole_31 = initHoleData("31", origin_x + PLOT_01_X, origin_y + 100, "blue");
  // hole_32 = initHoleData("32", origin_x + PLOT_02_X, origin_y + 100, "blue");
  // hole_33 = initHoleData("33", origin_x + PLOT_03_X, origin_y + 100, "blue");
  // hole_34 = initHoleData("34", origin_x + PLOT_04_X, origin_y + 100, "red");
  // hole_35 = initHoleData("35", origin_x + PLOT_05_X, origin_y + 100, "red");
  // hole_36 = initHoleData("36", origin_x + PLOT_06_X, origin_y + 100, "red");
  // hole_37 = initHoleData("37", origin_x + PLOT_07_X, origin_y + 100, "red");
  // hole_38 = initHoleData("38", origin_x + PLOT_08_X, origin_y + 100, "red");
  // hole_39 = initHoleData("39", origin_x + PLOT_09_X, origin_y + 100, "red");
  // hole_3A = initHoleData("3A", origin_x + PLOT_10_X, origin_y + 100, "blue");
  // hole_3B = initHoleData("3B", origin_x + PLOT_11_X, origin_y + 100, "blue");

  // holes_3 = [hole_30, hole_31, hole_32, hole_33, hole_34, hole_35, hole_36, hole_37, hole_38, hole_39, hole_3A, hole_3B];

  // declared_holes = [...holes_0, ...holes_1, ...holes_2, ...holes_3];



  // hole_40 = initHoleData("40", origin_x + PLOT_00_X, origin_y + 50, "red");
  // hole_41 = initHoleData("41", origin_x + PLOT_01_X, origin_y + 50, "red");
  // hole_42 = initHoleData("42", origin_x + PLOT_02_X, origin_y + 50, "red");
  // hole_43 = initHoleData("43", origin_x + PLOT_03_X, origin_y + 50, "red");
  // hole_44 = initHoleData("44", origin_x + PLOT_04_X, origin_y + 50, "red");
  // hole_45 = initHoleData("45", origin_x + PLOT_05_X, origin_y + 50, "blue");
  // hole_46 = initHoleData("46", origin_x + PLOT_06_X, origin_y + 50, "blue");
  // hole_47 = initHoleData("47", origin_x + PLOT_07_X, origin_y + 50, "blue");
  // hole_48 = initHoleData("48", origin_x + PLOT_08_X, origin_y + 50, "blue");
  // hole_49 = initHoleData("49", origin_x + PLOT_09_X, origin_y + 50, "blue");
  // //hole_4A = initHoleData("4A", origin_x + PLOT_10_X, origin_y + 50, "green");
  // //hole_4B = initHoleData("4B", origin_x + PLOT_11_X, origin_y + 50, "yellow");

  // holes_4 = [hole_40, hole_41, hole_42, hole_43, hole_44, hole_45, hole_46, hole_47, hole_48, hole_49];


  // declared_holes = [...holes_0, ...holes_1, ...holes_2, ...holes_3, ...holes_4];



  // hole_50 = initHoleData("50", origin_x + PLOT_00_X, origin_y + 0, "red");
  // hole_51 = initHoleData("51", origin_x + PLOT_01_X, origin_y + 0, "blue");
  // hole_52 = initHoleData("52", origin_x + PLOT_02_X, origin_y + 0, "blue");
  // hole_53 = initHoleData("53", origin_x + PLOT_03_X, origin_y + 0, "blue");
  // hole_54 = initHoleData("54", origin_x + PLOT_04_X, origin_y + 0, "blue");
  // hole_55 = initHoleData("55", origin_x + PLOT_05_X, origin_y + 0, "blue");
  // hole_56 = initHoleData("56", origin_x + PLOT_06_X, origin_y + 0, "blue");
  // hole_57 = initHoleData("57", origin_x + PLOT_07_X, origin_y + 0, "blue");
  // hole_58 = initHoleData("58", origin_x + PLOT_08_X, origin_y + 0, "blue");
  // hole_59 = initHoleData("59", origin_x + PLOT_09_X, origin_y + 0, "blue");
  // hole_5A = initHoleData("5A", origin_x + PLOT_10_X, origin_y + 0, "blue");
  // hole_5B = initHoleData("5B", origin_x + PLOT_11_X, origin_y + 0, "red");

  // holes_5 = [hole_50, hole_51, hole_52, hole_53, hole_54, hole_55, hole_56, hole_57, hole_58, hole_59, hole_5A, hole_5B];

  // adeclared_holes = [...holes_0, ...holes_1, ...holes_2, ...holes_3, ...holes_4, ...holes_5];

  return declared_holes;
}


/*

maze

 XXXXXXXXXXX f
     xxXxxxx e
 XXX      Xx d
X   XXXXX  X  holesc
 X X     X x   b
XX XXX XXX X   a

*/
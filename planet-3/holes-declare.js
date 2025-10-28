


// function makeHolesx() {
//   hole_1 = makeHole_A(1, 3333, 128);
//   // hole_2 = makeHole_A(2, 128, 128);
//   // hole_3 = makeHole_A(3, 128, 128);
//   // hole_4 = makeHole_A(4, 128, 128);
//   // hole_5 = makeHole_A(5, 128, 128);
//   // hole_6 = makeHole_A(6, 128, 128);
//   // hole_7 = makeHole_A(7, 128, 128);
//   //  declared_holes = [hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7];
//   declared_holes = [hole_1];
//   return declared_holes;
// }


function makeHoles(xy_origin) {
  let [origin_x, origin_y] = xy_origin;

  hole_0 = makeHole_A("00", origin_x + PLOT_00_X, origin_y + 256);
  hole_1 = makeHole_A("01", origin_x + PLOT_01_X, origin_y + 256);
  hole_2 = makeHole_A("02", origin_x + PLOT_02_X, origin_y + 256);
  hole_3 = makeHole_A("03", origin_x + PLOT_03_X, origin_y + 256);
  hole_4 = makeHole_A("04", origin_x + PLOT_04_X, origin_y + 256);
  hole_5 = makeHole_A("05", origin_x + PLOT_05_X, origin_y + 256);
  hole_6 = makeHole_A("06", origin_x + PLOT_06_X, origin_y + 256);
  hole_7 = makeHole_A("07", origin_x + PLOT_07_X, origin_y + 256);
  hole_8 = makeHole_A("08", origin_x + PLOT_08_X, origin_y + 256);




  jump_holes = [hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7, hole_8];


  hole_A = makeHole_A("10", origin_x - PLOT_00_X, origin_y + 266);
  hole_B = makeHole_A("11", origin_x - PLOT_01_X, origin_y + 266);
  hole_C = makeHole_A("12", origin_x - PLOT_02_X, origin_y + 266);
  hole_D = makeHole_A("13", origin_x - PLOT_03_X, origin_y + 266);
  hole_E = makeHole_A("14", origin_x - PLOT_04_X, origin_y + 266);
  hole_F = makeHole_A("15", origin_x - PLOT_05_X, origin_y + 266);
  hole_G = makeHole_A("16", origin_x - PLOT_06_X, origin_y + 266);
  hole_H = makeHole_A("17", origin_x - PLOT_07_X, origin_y + 266);
  hole_I = makeHole_A("18", origin_x - PLOT_08_X, origin_y + 266);
  hole_J = makeHole_A("19", origin_x - PLOT_09_X, origin_y + 266);



  left_holes = [hole_A, hole_B, hole_C, hole_D, hole_E, hole_F, hole_G, hole_H, hole_I, hole_J];




  hole_A = makeHole_A("20", origin_x + PLOT_09_X, origin_y + 266);
  hole_B = makeHole_A("21", origin_x + PLOT_10_X, origin_y + 266);
  hole_C = makeHole_A("22", origin_x + PLOT_11_X, origin_y + 266);
  hole_D = makeHole_A("23", origin_x + PLOT_12_X, origin_y + 266);
  hole_E = makeHole_A("24", origin_x + PLOT_13_X, origin_y + 266);
  hole_F = makeHole_A("25", origin_x + PLOT_14_X, origin_y + 266);
  hole_G = makeHole_A("26", origin_x + PLOT_15_X, origin_y + 266);
  hole_H = makeHole_A("27", origin_x + PLOT_16_X, origin_y + 266);
  hole_I = makeHole_A("28", origin_x + PLOT_17_X, origin_y + 266);
  hole_J = makeHole_A("29", origin_x + PLOT_18_X, origin_y + 266);



  right_holes = [hole_A, hole_B, hole_C, hole_D, hole_E, hole_F, hole_G, hole_H, hole_I, hole_J];




  declared_holes = [...left_holes, ...jump_holes, ...right_holes];

  return declared_holes;
}
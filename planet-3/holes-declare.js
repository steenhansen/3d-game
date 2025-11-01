


// function makeHolesx() {
//   hole_1 = initHoleData(1, 3333, 128);
//   // hole_2 = initHoleData(2, 128, 128);
//   // hole_3 = initHoleData(3, 128, 128);
//   // hole_4 = initHoleData(4, 128, 128);
//   // hole_5 = initHoleData(5, 128, 128);
//   // hole_6 = initHoleData(6, 128, 128);
//   // hole_7 = initHoleData(7, 128, 128);
//   //  declared_holes = [hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7];
//   declared_holes = [hole_1];
//   return declared_holes;
// }


function makeHoles(xy_origin) {
  let [origin_x, origin_y] = xy_origin;

  hole_0 = initHoleData("00", origin_x + PLOT_00_X, origin_y + 256);
  hole_1 = initHoleData("01", origin_x + PLOT_01_X, origin_y + 256);
  hole_2 = initHoleData("02", origin_x + PLOT_02_X, origin_y + 256);
  hole_3 = initHoleData("03", origin_x + PLOT_03_X, origin_y + 256);
  hole_4 = initHoleData("04", origin_x + PLOT_04_X, origin_y + 256);
  hole_5 = initHoleData("05", origin_x + PLOT_05_X, origin_y + 256);
  hole_6 = initHoleData("06", origin_x + PLOT_06_X, origin_y + 256);
  hole_7 = initHoleData("07", origin_x + PLOT_07_X, origin_y + 256);
  hole_8 = initHoleData("08", origin_x + PLOT_08_X, origin_y + 256);




  jump_holes = [hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7, hole_8];


  hole_A = initHoleData("10", origin_x - PLOT_00_X, origin_y + 266);
  hole_B = initHoleData("11", origin_x - PLOT_01_X, origin_y + 266);
  hole_C = initHoleData("12", origin_x - PLOT_02_X, origin_y + 266);
  hole_D = initHoleData("13", origin_x - PLOT_03_X, origin_y + 266);
  hole_E = initHoleData("14", origin_x - PLOT_04_X, origin_y + 266);
  hole_F = initHoleData("15", origin_x - PLOT_05_X, origin_y + 266);
  hole_G = initHoleData("16", origin_x - PLOT_06_X, origin_y + 266);
  hole_H = initHoleData("17", origin_x - PLOT_07_X, origin_y + 266);
  hole_I = initHoleData("18", origin_x - PLOT_08_X, origin_y + 266);
  hole_J = initHoleData("19", origin_x - PLOT_09_X, origin_y + 266);



  left_holes = [hole_A, hole_B, hole_C, hole_D, hole_E, hole_F, hole_G, hole_H, hole_I, hole_J];




  hole_A = initHoleData("20", origin_x + PLOT_09_X, origin_y + 266);
  hole_B = initHoleData("21", origin_x + PLOT_10_X, origin_y + 266);
  hole_C = initHoleData("22", origin_x + PLOT_11_X, origin_y + 266);
  hole_D = initHoleData("23", origin_x + PLOT_12_X, origin_y + 266);
  hole_E = initHoleData("24", origin_x + PLOT_13_X, origin_y + 266);
  hole_F = initHoleData("25", origin_x + PLOT_14_X, origin_y + 266);
  hole_G = initHoleData("26", origin_x + PLOT_15_X, origin_y + 266);
  hole_H = initHoleData("27", origin_x + PLOT_16_X, origin_y + 266);
  hole_I = initHoleData("28", origin_x + PLOT_17_X, origin_y + 266);
  hole_J = initHoleData("29", origin_x + PLOT_18_X, origin_y + 266);



  right_holes = [hole_A, hole_B, hole_C, hole_D, hole_E, hole_F, hole_G, hole_H, hole_I, hole_J];




  declared_holes = [...left_holes, ...jump_holes, ...right_holes];

  return declared_holes;
}
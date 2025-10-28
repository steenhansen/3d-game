/*
    xxxxxxx
 XXX       x
X   XXXXX  X
 X X     X x
XX XXX XXX X


....xxxxxxxX
.XXX.......x
X...XXXXX..X
.X.X.....X.x
XX.XXX.XXX.X

.,.,.,.,.,xYxYxYxYxYxYXY
.,XYXYXY.,.,.,.,.,.,xYxY
XY.,.,.,XYXYXYXYXY.,.,XY
XYXY.,XY.,.,.,.,.,XY.,xY
XYXY.,XYXYXY.,XYXYXY.,XY

.,.,.,.,.,xYxYxYxYxYxYXY 24     G=16 H I J K L M N O=24
.,XYXYXY.,.,.,.,.,.,xYxY
XY.,.,.,XYXYXYXYXY.,.,XY
XYXY.,XY.,.,.,.,.,XY.,xY
XYXY.,XYXYXY.,XYXYXY.,XY

0123456789xxxxxxxxxxxxxx 
01XYXYXY89ABdCDEFGHIJxxxx
xx234567xxxxxxxxxxIJKLxx
xxxx45xx89ABCDEFGHxxKLxx
xxxx45xxxxxxCDxxxxxxKLxx

5 ..23456789A.............
4 ..........ABCDEFGHIJK... 
3 ..234567............KLMN
2 01......89ABCDEFGH....MN
1 ..23..67..........IJ..MNa
0 0123..6789AB..EFGHIJ..MN


a ..23456789A.............  PLOT_0_Y
b ..+3456789A.............  PLOT_1_Y
c ..........ABCDEFGHIJK...  PLOT_2_Y
d ..........+BCDEFGHIJK...  PLOT_3_Y
e ..23456+............KLMN  PLOT_4_Y
f .1S234567............+LMN  PLOT_5_Y
g 01......89ABCDEFG+....MN  PLOT_6_Y
h 01......89ABCDEFGH....MN  PLOT_7_Y
i ..23..67.........HI...MN  PLOT_8_Y
j ..23..67..........IJ..MN  PLOT_9_Y
k 0123..6789AB..EFGHIJ..MN  PLOT_A_Y
l 012....789A....FGHI....N  PLOT_B_Y

*/


function makePylons(playground_box) {
  // let [left_x, top_y, _right_x, _bottom_y] = playground_box;



  //0123456789ABCDEFGHIJKLMN 
  //..23456789A............. 
  // vert = top_y + VER_0;
  // a_00 = makePylon_new("_0", left_x + HOR_0, vert, "red");
  // a_01 = makePylon_new("_1", left_x + HOR_1, vert, "green");
  // a_02 = makePylon_new("02", left_x + HOR_2, vert, "blue");
  // a_03 = makePylon_new("03", left_x + HOR_3, vert, "red");
  // a_04 = makePylon_new("04", left_x + HOR_4, vert, "green");
  // a_05 = makePylon_new("05", left_x + HOR_5, vert, "blue");
  // a_06 = makePylon_new("06", left_x + HOR_6, vert, "red");
  // a_07 = makePylon_new("07", left_x + HOR_7, vert, "green");
  // a_08 = makePylon_new("08", left_x + HOR_8, vert, "blue");
  // a_09 = makePylon_new("09", left_x + HOR_9, vert, "red");
  // a_0A = makePylon_new("0A", left_x + HOR_A, vert, "green");
  // a_0B = makePylon_new("_B", left_x + HOR_B, vert, "blue");
  // a_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  // a_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  // a_0E = makePylon_new("_E", left_x + HOR_E, vert, "blue");
  // a_0F = makePylon_new("_F", left_x + HOR_F, vert, "red");
  // a_0G = makePylon_new("_G", left_x + HOR_G, vert, "green");
  // a_0H = makePylon_new("_H", left_x + HOR_H, vert, "blue");
  // a_0I = makePylon_new("_I", left_x + HOR_I, vert, "red");
  // a_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  // a_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  // a_0L = makePylon_new("_L", left_x + HOR_L, vert, "red");
  // a_0M = makePylon_new("_M", left_x + HOR_M, vert, "green");
  //                         5888             1000
  a_0N = makePylon_new(playground_box, "0N", 1000, 0, "blue");
  a_1N = makePylon_new(playground_box, "1N", 5899, 0, "blue");
  // console.log("pylon", a_0N, 300, 0);

  // pylons_a = [a_00, a_01, a_02, a_03, a_04, a_05, a_06, a_07, a_08, a_09, a_0A, a_0B, a_0C, a_0D, a_0E, a_0F, a_0G, a_0H, a_0I, a_0J, a_0K, a_0L, a_0M, a_0N];

  pylons_a = [a_0N, a_1N];
  return pylons_a;

  //0123456789ABCDEFGHIJKLMN 
  //...3456789A............. 
  vert = top_y + VER_1;
  b_00 = makePylon_new("_0", left_x + HOR_0, vert, "red");
  b_01 = makePylon_new("_1", left_x + HOR_1, vert, "green");
  b_02 = makePylon_new("_2", left_x + HOR_2, vert, "blue");
  b_03 = makePylon_new("13", left_x + HOR_3, vert, "red");
  b_04 = makePylon_new("14", left_x + HOR_4, vert, "green");
  b_05 = makePylon_new("15", left_x + HOR_5, vert, "blue");
  b_06 = makePylon_new("16", left_x + HOR_6, vert, "red");
  b_07 = makePylon_new("17", left_x + HOR_7, vert, "green");
  b_08 = makePylon_new("18", left_x + HOR_8, vert, "blue");
  b_09 = makePylon_new("19", left_x + HOR_9, vert, "red");
  b_0A = makePylon_new("1A", left_x + HOR_A, vert, "green");
  b_0B = makePylon_new("_B", left_x + HOR_B, vert, "blue");
  b_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  b_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  b_0E = makePylon_new("_E", left_x + HOR_E, vert, "blue");
  b_0F = makePylon_new("_F", left_x + HOR_F, vert, "red");
  b_0G = makePylon_new("_G", left_x + HOR_G, vert, "green");
  b_0H = makePylon_new("_H", left_x + HOR_H, vert, "blue");
  b_0I = makePylon_new("_I", left_x + HOR_I, vert, "red");
  b_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  b_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  b_0L = makePylon_new("_L", left_x + HOR_L, vert, "red");
  b_0M = makePylon_new("_M", left_x + HOR_M, vert, "green");
  b_0N = makePylon_new("_N", left_x + HOR_N, vert, "blue");

  pylons_b = [b_00, b_01, b_02, b_03, b_04, b_05, b_06, b_07, b_08, b_09, b_0A, b_0B, b_0C, b_0D, b_0E, b_0F, b_0G, b_0H, b_0I, b_0J, b_0K, b_0L, b_0M, b_0N];


  //0123456789ABCDEFGHIJKLMN
  //..........ABCDEFGHIJK...
  vert = top_y + VER_2;
  c_00 = makePylon_new("_0", left_x + HOR_0, vert, "red");
  c_01 = makePylon_new("_1", left_x + HOR_1, vert, "green");
  c_02 = makePylon_new("_2", left_x + HOR_2, vert, "blue");
  c_03 = makePylon_new("_3", left_x + HOR_3, vert, "red");
  c_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  c_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  c_06 = makePylon_new("_6", left_x + HOR_6, vert, "red");
  c_07 = makePylon_new("_7", left_x + HOR_7, vert, "green");
  c_08 = makePylon_new("_8", left_x + HOR_8, vert, "blue");
  c_09 = makePylon_new("_9", left_x + HOR_9, vert, "red");
  c_0A = makePylon_new("2A", left_x + HOR_A, vert, "green");
  c_0B = makePylon_new("2B", left_x + HOR_B, vert, "blue");
  c_0C = makePylon_new("2C", left_x + HOR_C, vert, "red");
  c_0D = makePylon_new("2D", left_x + HOR_D, vert, "green");
  c_0E = makePylon_new("2E", left_x + HOR_E, vert, "blue");
  c_0F = makePylon_new("2F", left_x + HOR_F, vert, "red");
  c_0G = makePylon_new("2G", left_x + HOR_G, vert, "green");
  c_0H = makePylon_new("2H", left_x + HOR_H, vert, "blue");
  c_0I = makePylon_new("2I", left_x + HOR_I, vert, "red");
  c_0J = makePylon_new("2J", left_x + HOR_J, vert, "green");
  c_0K = makePylon_new("2K", left_x + HOR_K, vert, "blue");
  c_0L = makePylon_new("_L", left_x + HOR_L, vert, "red");
  c_0M = makePylon_new("_M", left_x + HOR_M, vert, "green");
  c_0N = makePylon_new("_N", left_x + HOR_N, vert, "blue");

  pylons_c = [c_00, c_01, c_02, c_03, c_04, c_05, c_06, c_07, c_08, c_09, c_0A, c_0B, c_0C, c_0D, c_0E, c_0F, c_0G, c_0H, c_0I, c_0J, c_0K, c_0L, c_0M, c_0N];

  //0123456789ABCDEFGHIJKLMN
  //...........BCDEFGHIJK...
  vert = top_y + VER_3;
  d_00 = makePylon_new("_0", left_x + HOR_0, vert, "red");
  d_01 = makePylon_new("_1", left_x + HOR_1, vert, "green");
  d_02 = makePylon_new("_2", left_x + HOR_2, vert, "blue");
  d_03 = makePylon_new("_3", left_x + HOR_3, vert, "red");
  d_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  d_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  d_06 = makePylon_new("_6", left_x + HOR_6, vert, "red");
  d_07 = makePylon_new("_7", left_x + HOR_7, vert, "green");
  d_08 = makePylon_new("_8", left_x + HOR_8, vert, "blue");
  d_09 = makePylon_new("_9", left_x + HOR_9, vert, "red");
  d_0A = makePylon_new("_A", left_x + HOR_A, vert, "green");
  d_0B = makePylon_new("3B", left_x + HOR_B, vert, "blue");
  d_0C = makePylon_new("3C", left_x + HOR_C, vert, "red");
  d_0D = makePylon_new("3D", left_x + HOR_D, vert, "green");
  d_0E = makePylon_new("3E", left_x + HOR_E, vert, "blue");
  d_0F = makePylon_new("3F", left_x + HOR_F, vert, "red");
  d_0G = makePylon_new("3G", left_x + HOR_G, vert, "green");
  d_0H = makePylon_new("3H", left_x + HOR_H, vert, "blue");
  d_0I = makePylon_new("3I", left_x + HOR_I, vert, "red");
  d_0J = makePylon_new("3J", left_x + HOR_J, vert, "green");
  d_0K = makePylon_new("3K", left_x + HOR_K, vert, "blue");
  d_0L = makePylon_new("_L", left_x + HOR_L, vert, "red");
  d_0M = makePylon_new("_M", left_x + HOR_M, vert, "green");
  d_0N = makePylon_new("_N", left_x + HOR_N, vert, "blue");

  pylons_d = [d_00, d_01, d_02, d_03, d_04, d_05, d_06, d_07, d_08, d_09, d_0A, d_0B, d_0C, d_0D, d_0E, d_0F, d_0G, d_0H, d_0I, d_0J, d_0K, d_0L, d_0M, d_0N];





  //0123456789ABCDEFGHIJKLMN
  //..23456.............KLMN
  vert = top_y + VER_4;
  e_00 = makePylon_new("_0", left_x + HOR_0, vert, "red");
  e_01 = makePylon_new("_1", left_x + HOR_1, vert, "green");
  e_02 = makePylon_new("42", left_x + HOR_2, vert, "blue");
  e_03 = makePylon_new("43", left_x + HOR_3, vert, "red");
  e_04 = makePylon_new("44", left_x + HOR_4, vert, "green");
  e_05 = makePylon_new("45", left_x + HOR_5, vert, "blue");
  e_06 = makePylon_new("46", left_x + HOR_6, vert, "red");
  e_07 = makePylon_new("_7", left_x + HOR_7, vert, "green");
  e_08 = makePylon_new("_8", left_x + HOR_8, vert, "blue");
  e_09 = makePylon_new("_9", left_x + HOR_9, vert, "red");
  e_0A = makePylon_new("_A", left_x + HOR_A, vert, "green");
  e_0B = makePylon_new("_B", left_x + HOR_B, vert, "blue");
  e_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  e_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  e_0E = makePylon_new("_E", left_x + HOR_E, vert, "blue");
  e_0F = makePylon_new("_F", left_x + HOR_F, vert, "red");
  e_0G = makePylon_new("_G", left_x + HOR_G, vert, "green");
  e_0H = makePylon_new("_H", left_x + HOR_H, vert, "blue");
  e_0I = makePylon_new("_I", left_x + HOR_I, vert, "red");
  e_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  e_0K = makePylon_new("4K", left_x + HOR_K, vert, "blue");
  e_0L = makePylon_new("4L", left_x + HOR_L, vert, "red");
  e_0M = makePylon_new("4M", left_x + HOR_M, vert, "green");
  e_0N = makePylon_new("4N", left_x + HOR_N, vert, "blue");

  pylons_e = [e_00, e_01, e_02, e_03, e_04, e_05, e_06, e_07, e_08, e_09, e_0A, e_0B, e_0C, e_0D, e_0E, e_0F, e_0G, e_0H, e_0I, e_0J, e_0K, e_0L, e_0M, e_0N];


  //0123456789ABCDEFGHIJKLMN
  //.1234567.............LMN
  vert = top_y + VER_5;
  f_00 = makePylon_new("50", left_x + HOR_0, vert, "yellow");
  f_01 = makePylon_new("51", left_x + HOR_1, vert, "pink");
  f_02 = makePylon_new("52", left_x + HOR_2, vert, "blue");
  f_03 = makePylon_new("53", left_x + HOR_3, vert, "red");
  f_04 = makePylon_new("54", left_x + HOR_4, vert, "green");
  f_05 = makePylon_new("55", left_x + HOR_5, vert, "blue");
  f_06 = makePylon_new("56", left_x + HOR_6, vert, "red");
  f_07 = makePylon_new("57", left_x + HOR_7, vert, "green");
  f_08 = makePylon_new("_8", left_x + HOR_8, vert, "blue");
  f_09 = makePylon_new("_9", left_x + HOR_9, vert, "red");
  f_0A = makePylon_new("_A", left_x + HOR_A, vert, "green");
  f_0B = makePylon_new("_B", left_x + HOR_B, vert, "blue");
  f_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  f_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  f_0E = makePylon_new("_E", left_x + HOR_E, vert, "blue");
  f_0F = makePylon_new("_F", left_x + HOR_F, vert, "red");
  f_0G = makePylon_new("_G", left_x + HOR_G, vert, "green");
  f_0H = makePylon_new("_H", left_x + HOR_H, vert, "blue");
  f_0I = makePylon_new("_I", left_x + HOR_I, vert, "red");
  f_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  f_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  f_0L = makePylon_new("5L", left_x + HOR_L, vert, "yellow");
  f_0M = makePylon_new("5M", left_x + HOR_M, vert, "green");
  f_0N = makePylon_new("5N", left_x + HOR_N, vert, "blue");

  pylons_f = [f_00, f_01, f_02, f_03, f_04, f_05, f_06, f_07, f_08, f_09, f_0A, f_0B, f_0C, f_0D, f_0E, f_0F, f_0G, f_0H, f_0I, f_0J, f_0K, f_0L, f_0M, f_0N];





  //0123456789ABCDEFGHIJKLMN
  //01......89ABCDEFG.....MN
  vert = top_y + VER_6;
  g_00 = makePylon_new("60", left_x + HOR_0, vert, "red");
  g_01 = makePylon_new("61", left_x + HOR_1, vert, "green");
  g_02 = makePylon_new("_2", left_x + HOR_2, vert, "blue");
  g_03 = makePylon_new("_3", left_x + HOR_3, vert, "red");
  g_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  g_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  g_06 = makePylon_new("_6", left_x + HOR_6, vert, "red");
  g_07 = makePylon_new("_7", left_x + HOR_7, vert, "green");
  g_08 = makePylon_new("68", left_x + HOR_8, vert, "blue");
  g_09 = makePylon_new("69", left_x + HOR_9, vert, "red");
  g_0A = makePylon_new("6A", left_x + HOR_A, vert, "green");
  g_0B = makePylon_new("6B", left_x + HOR_B, vert, "blue");
  g_0C = makePylon_new("6C", left_x + HOR_C, vert, "red");
  g_0D = makePylon_new("6D", left_x + HOR_D, vert, "green");
  g_0E = makePylon_new("6E", left_x + HOR_E, vert, "blue");
  g_0F = makePylon_new("6F", left_x + HOR_F, vert, "red");
  g_0G = makePylon_new("_G", left_x + HOR_G, vert, "green");
  g_0H = makePylon_new("_H", left_x + HOR_H, vert, "blue");
  g_0I = makePylon_new("_I", left_x + HOR_I, vert, "red");
  g_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  g_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  g_0L = makePylon_new("_L", left_x + HOR_L, vert, "yellow");
  g_0M = makePylon_new("6M", left_x + HOR_M, vert, "yellow");
  g_0N = makePylon_new("6N", left_x + HOR_N, vert, "blue");

  pylons_g = [g_00, g_01, g_02, g_03, g_04, g_05, g_06, g_07, g_08, g_09, g_0A, g_0B, g_0C, g_0D, g_0E, g_0F, g_0G, g_0H, g_0I, g_0J, g_0K, g_0L, g_0M, g_0N];



  //0123456789ABCDEFGHIJKLMN
  //01......89ABCDEFG.....MN
  vert = top_y + VER_7;
  h_00 = makePylon_new("70", left_x + HOR_0, vert, "red");
  h_01 = makePylon_new("71", left_x + HOR_1, vert, "green");
  h_02 = makePylon_new("_2", left_x + HOR_2, vert, "blue");
  h_03 = makePylon_new("_3", left_x + HOR_3, vert, "red");
  h_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  h_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  h_06 = makePylon_new("_6", left_x + HOR_6, vert, "red");
  h_07 = makePylon_new("_7", left_x + HOR_7, vert, "green");
  h_08 = makePylon_new("78", left_x + HOR_8, vert, "yellow");
  h_09 = makePylon_new("79", left_x + HOR_9, vert, "yellow");
  h_0A = makePylon_new("7A", left_x + HOR_A, vert, "green");
  h_0B = makePylon_new("7B", left_x + HOR_B, vert, "blue");
  h_0C = makePylon_new("7C", left_x + HOR_C, vert, "red");
  h_0D = makePylon_new("7D", left_x + HOR_D, vert, "green");
  h_0E = makePylon_new("7E", left_x + HOR_E, vert, "blue");
  h_0F = makePylon_new("7F", left_x + HOR_F, vert, "red");
  h_0G = makePylon_new("7G", left_x + HOR_G, vert, "yellow");
  h_0H = makePylon_new("_H", left_x + HOR_H, vert, "blue");
  h_0I = makePylon_new("_I", left_x + HOR_I, vert, "red");
  h_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  h_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  h_0L = makePylon_new("_L", left_x + HOR_L, vert, "yellow");
  h_0M = makePylon_new("7M", left_x + HOR_M, vert, "yellow");
  h_0N = makePylon_new("7N", left_x + HOR_N, vert, "blue");

  pylons_h = [h_00, h_01, h_02, h_03, h_04, h_05, h_06, h_07, h_08, h_09, h_0A, h_0B, h_0C, h_0D, h_0E, h_0F, h_0G, h_0H, h_0I, h_0J, h_0K, h_0L, h_0M, h_0N];



  //0123456789ABCDEFGHIJKLMN
  //0123..67.........HI...MN
  vert = top_y + VER_8;
  i_00 = makePylon_new("80", left_x + HOR_0, vert, "red");
  i_01 = makePylon_new("81", left_x + HOR_1, vert, "green");
  i_02 = makePylon_new("82", left_x + HOR_2, vert, "blue");
  i_03 = makePylon_new("83", left_x + HOR_3, vert, "red");
  i_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  i_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  i_06 = makePylon_new("86", left_x + HOR_6, vert, "red");
  i_07 = makePylon_new("87", left_x + HOR_7, vert, "green");
  i_08 = makePylon_new("_8", left_x + HOR_8, vert, "blue");
  i_09 = makePylon_new("_9", left_x + HOR_9, vert, "red");
  i_0A = makePylon_new("_A", left_x + HOR_A, vert, "green");
  i_0B = makePylon_new("_B", left_x + HOR_B, vert, "blue");
  i_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  i_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  i_0E = makePylon_new("_E", left_x + HOR_E, vert, "blue");
  i_0F = makePylon_new("_F", left_x + HOR_F, vert, "red");
  i_0G = makePylon_new("_G", left_x + HOR_G, vert, "yellow");
  i_0H = makePylon_new("8H", left_x + HOR_H, vert, "blue");
  i_0I = makePylon_new("8I", left_x + HOR_I, vert, "red");
  i_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  i_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  i_0L = makePylon_new("_L", left_x + HOR_L, vert, "yellow");
  i_0M = makePylon_new("8M", left_x + HOR_M, vert, "yellow");
  i_0N = makePylon_new("8N", left_x + HOR_N, vert, "blue");

  pylons_i = [i_00, i_01, i_02, i_03, i_04, i_05, i_06, i_07, i_08, i_09, i_0A, i_0B, i_0C, i_0D, i_0E, i_0F, i_0G, i_0H, i_0I, i_0J, i_0K, i_0L, i_0M, i_0N];

  //0123456789ABCDEFGHIJKLMN
  //0123..67..........IJ..MN
  vert = top_y + VER_9;
  j_00 = makePylon_new("90", left_x + HOR_0, vert, "red");
  j_01 = makePylon_new("91", left_x + HOR_1, vert, "green");
  j_02 = makePylon_new("92", left_x + HOR_2, vert, "blue");
  j_03 = makePylon_new("93", left_x + HOR_3, vert, "red");
  j_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  j_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  j_06 = makePylon_new("96", left_x + HOR_6, vert, "red");
  j_07 = makePylon_new("97", left_x + HOR_7, vert, "green");
  j_08 = makePylon_new("_8", left_x + HOR_8, vert, "blue");
  j_09 = makePylon_new("_9", left_x + HOR_9, vert, "red");
  j_0A = makePylon_new("_A", left_x + HOR_A, vert, "green");
  j_0B = makePylon_new("_B", left_x + HOR_B, vert, "blue");
  j_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  j_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  j_0E = makePylon_new("_E", left_x + HOR_E, vert, "blue");
  j_0F = makePylon_new("_F", left_x + HOR_F, vert, "red");
  j_0G = makePylon_new("_G", left_x + HOR_G, vert, "yellow");
  j_0H = makePylon_new("_H", left_x + HOR_H, vert, "blue");
  j_0I = makePylon_new("9I", left_x + HOR_I, vert, "red");
  j_0J = makePylon_new("9J", left_x + HOR_J, vert, "green");
  j_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  j_0L = makePylon_new("_L", left_x + HOR_L, vert, "yellow");
  j_0M = makePylon_new("9M", left_x + HOR_M, vert, "yellow");
  j_0N = makePylon_new("9N", left_x + HOR_N, vert, "blue");

  pylons_j = [j_00, j_01, j_02, j_03, j_04, j_05, j_06, j_07, j_08, j_09, j_0A, j_0B, j_0C, j_0D, j_0E, j_0F, j_0G, j_0H, j_0I, j_0J, j_0K, j_0L, j_0M, j_0N];





  //0123456789ABCDEFGHIJKLMN
  //0123..6789AB..EFGHIJ..MN
  vert = top_y + VER_A;
  k_00 = makePylon_new("A0", left_x + HOR_0, vert, "red");
  k_01 = makePylon_new("A1", left_x + HOR_1, vert, "green");
  k_02 = makePylon_new("A2", left_x + HOR_2, vert, "blue");
  k_03 = makePylon_new("A3", left_x + HOR_3, vert, "red");
  k_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  k_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  k_06 = makePylon_new("A6", left_x + HOR_6, vert, "red");
  k_07 = makePylon_new("A7", left_x + HOR_7, vert, "green");
  k_08 = makePylon_new("A8", left_x + HOR_8, vert, "blue");
  k_09 = makePylon_new("A9", left_x + HOR_9, vert, "red");
  k_0A = makePylon_new("AA", left_x + HOR_A, vert, "green");
  k_0B = makePylon_new("AB", left_x + HOR_B, vert, "blue");
  k_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  k_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  k_0E = makePylon_new("AE", left_x + HOR_E, vert, "blue");
  k_0F = makePylon_new("AF", left_x + HOR_F, vert, "red");
  k_0G = makePylon_new("AG", left_x + HOR_G, vert, "yellow");
  k_0H = makePylon_new("AH", left_x + HOR_H, vert, "blue");
  k_0I = makePylon_new("AI", left_x + HOR_I, vert, "red");
  k_0J = makePylon_new("AJ", left_x + HOR_J, vert, "green");
  k_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  k_0L = makePylon_new("_L", left_x + HOR_L, vert, "yellow");
  k_0M = makePylon_new("AM", left_x + HOR_M, vert, "yellow");
  k_0N = makePylon_new("AN", left_x + HOR_N, vert, "blue");

  pylons_k = [k_00, k_01, k_02, k_03, k_04, k_05, k_06, k_07, k_08, k_09, k_0A, k_0B, k_0C, k_0D, k_0E, k_0F, k_0G, k_0H, k_0I, k_0J, k_0K, k_0L, k_0M, k_0N];






  //0123456789ABCDEFGHIJKLMN
  //012....789A....FGHI....N
  vert = top_y + VER_B;
  // l_00 = makePylon_new("B0", left_x + HOR_0, vert, "red");
  // l_01 = makePylon_new("B1", left_x + HOR_1, vert, "green");
  // l_02 = makePylon_new("B2", left_x + HOR_2, vert, "blue");
  // l_03 = makePylon_new("_3", left_x + HOR_3, vert, "red");
  // l_04 = makePylon_new("_4", left_x + HOR_4, vert, "green");
  // l_05 = makePylon_new("_5", left_x + HOR_5, vert, "blue");
  // l_06 = makePylon_new("_6", left_x + HOR_6, vert, "red");
  // l_07 = makePylon_new("B7", left_x + HOR_7, vert, "green");
  // l_08 = makePylon_new("B8", left_x + HOR_8, vert, "blue");
  // l_09 = makePylon_new("B9", left_x + HOR_9, vert, "red");
  // l_0A = makePylon_new("BA", left_x + HOR_A, vert, "green");
  // l_0B = makePylon_new("_B", left_x + HOR_B, vert, "blue");
  // l_0C = makePylon_new("_C", left_x + HOR_C, vert, "red");
  // l_0D = makePylon_new("_D", left_x + HOR_D, vert, "green");
  // l_0E = makePylon_new("_E", left_x + HOR_E, vert, "blue");
  // l_0F = makePylon_new("BF", left_x + HOR_F, vert, "red");
  // l_0G = makePylon_new("BG", left_x + HOR_G, vert, "yellow");
  // l_0H = makePylon_new("BH", left_x + HOR_H, vert, "blue");
  // l_0I = makePylon_new("BI", left_x + HOR_I, vert, "red");
  // l_0J = makePylon_new("_J", left_x + HOR_J, vert, "green");
  // l_0K = makePylon_new("_K", left_x + HOR_K, vert, "blue");
  // l_0L = makePylon_new("_L", left_x + HOR_L, vert, "yellow");
  // l_0M = makePylon_new("_M", left_x + HOR_M, vert, "yellow");
  l_0N = makePylon_new("BN", left_x + HOR_N, vert, "blue");

  //pylons_l = [l_00, l_01, l_02, l_03, l_04, l_05, l_06, l_07, l_08, l_09, l_0A, l_0B, l_0C, l_0D, l_0E, l_0F, l_0G, l_0H, l_0I, l_0J, l_0K, l_0L, l_0M, l_0N];


  pylons_l = [l_0N];

  // [Violation] 'requestAnimationFrame' handler took 50ms
  // game - loop.js: 209[Violation] 'requestAnimationFrame' handler took 52ms
  // with_empties = [...pylons_a, ...pylons_b, ...pylons_c, ...pylons_d, ...pylons_e, ...pylons_f, ...pylons_g, ...pylons_h, ...pylons_i, ...pylons_j, ...pylons_k, ...pylons_l];  // 40b

  // [Violation] 'requestAnimationFrame' handler took 50ms
  //with_empties = [...pylons_a, ...pylons_b, ...pylons_c, ...pylons_d, ...pylons_e, ...pylons_f, ...pylons_g, ...pylons_h, ...pylons_i, ...pylons_j, ...pylons_k];  // 45b



  //with_empties = [...pylons_a, ...pylons_b, ...pylons_c, ...pylons_d, ...pylons_e, ...pylons_f];  // jumpy FireFox


  with_empties = [...pylons_a];   //60b 50f

  //console.log("fffffffffff");
  useful_pylons = clearEmptyPylons(with_empties);
  return useful_pylons;

  //return [...pylons_a, ...pylons_b, ...pylons_c, ...pylons_d, ...pylons_e, ...pylons_f];
  // return [...pylons_a, ...pylons_b];
  // return [...pylons_a, ...pylons_b, ...pylons_c];
  //return [...pylons_a, ...pylons_b, ...pylons_c, ...pylons_d];
  //return [...pylons_a, ...pylons_b, ...pylons_c, ...pylons_d, ...pylons_e];
  //  return [...pylons_a, ...pylons_b, ...pylons_c, ...pylons_d, ...pylons_e, ...pylons_f];
}


function makePylons() {   //F-32
  // left wall
  pylon_a_1 = makePylon_A("A", 1, 0, 0);
  pylon_a_2 = makePylon_A("A", 2, 0, 50);
  pylon_a_3 = makePylon_A("A", 3, 0, 100);
  pylon_a_4 = makePylon_A("A", 4, 0, 150);
  pylon_a_5 = makePylon_A("A", 5, 0, 200);
  pylon_a_6 = makePylon_A("A", 6, 0, 250);
  pylon_a_7 = makePylon_A("A", 7, 0, 300);
  pylon_a_8 = makePylon_A("A", 8, 0, 350);
  pylon_a_9 = makePylon_A("A", 9, 0, 400);
  pylon_a_10 = makePylon_A("A", 10, 0, 450);
  pylon_a_11 = makePylon_A("A", 11, 0, 500);
  pylon_a_12 = makePylon_A("A", 12, 0, 550);
  left_wall = [pylon_a_1, pylon_a_2, pylon_a_3, pylon_a_4, pylon_a_5, pylon_a_6, pylon_a_7, pylon_a_8, pylon_a_9, pylon_a_10, pylon_a_11, pylon_a_12];

  pylon_b_1 = makePylon_A("B", 1, 2048, 0);
  pylon_b_2 = makePylon_A("B", 2, 2048, 50);
  pylon_b_3 = makePylon_A("B", 3, 2048, 100);
  pylon_b_4 = makePylon_A("B", 4, 2048, 150);
  pylon_b_5 = makePylon_A("B", 5, 2048, 200);
  pylon_b_6 = makePylon_A("B", 6, 2048, 250);
  pylon_b_7 = makePylon_A("B", 7, 2048, 300);
  pylon_b_8 = makePylon_A("B", 8, 2048, 350);
  pylon_b_9 = makePylon_A("B", 9, 2048, 400);
  pylon_b_10 = makePylon_A("B", 10, 2048, 450);
  pylon_b_11 = makePylon_A("B", 11, 2048, 500);
  pylon_b_12 = makePylon_A("B", 12, 2048, 550);
  right_wall = [pylon_b_1, pylon_b_2, pylon_b_3, pylon_b_4, pylon_b_5, pylon_b_6, pylon_b_7, pylon_b_8, pylon_b_9, pylon_b_10, pylon_b_11, pylon_b_12];


  pylon_c_1 = makePylon_A("C", 1, 256, 23);
  pylon_c_2 = makePylon_A("C", 2, 512, 23);
  pylon_c_3 = makePylon_A("C", 3, 768, 23);
  pylon_c_4 = makePylon_A("C", 4, 1024, 23);
  pylon_c_5 = makePylon_A("C", 5, 1280, 23);
  pylon_c_6 = makePylon_A("C", 6, 1536, 23);
  pylon_c_7 = makePylon_A("C", 7, 1792, 23);
  front_wall = [pylon_c_1, pylon_c_2, pylon_c_3, pylon_c_4, pylon_c_5, pylon_c_6, pylon_c_7];



  pylon_d_1 = makePylon_A("D", 1, 256, 600);
  pylon_d_2 = makePylon_A("D", 2, 512, 600);
  pylon_d_3 = makePylon_A("D", 3, 768, 600);
  pylon_d_4 = makePylon_A("D", 4, 1024, 600);
  pylon_d_5 = makePylon_A("D", 5, 1280, 600);
  pylon_d_6 = makePylon_A("D", 6, 1536, 600);
  pylon_d_7 = makePylon_A("D", 7, 1792, 600);
  back_wall = [pylon_d_1, pylon_d_2, pylon_d_3, pylon_d_4, pylon_d_5, pylon_d_6, pylon_d_7];




  declared_pylons = [...left_wall, ...right_wall, ...front_wall, ...back_wall];
  //declared_pylons = [...back_wall];
  return declared_pylons;
}
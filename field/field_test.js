





L = 'L';
R = 'R';
TEST_ENDED = false;

// TEST_SCENE_MOVES_R = [            // with 64 Rights, x_shift_list[255]==0 and all bad
//   //  R, R, R, R,
//   R, R, R, R,
//   R, R, R, R, R, R, R, R, R, R,
//   R, R, R, R, R, R, R, R, R, R,
//   R, R, R, R, R, R, R, R, R, R,
//   R, R, R, R, R, R, R, R, R, R,
//   R, R, R, R, R, R, R, R, R, R,
//   R, R, R, R, R, R, R, R, R, R];

// TEST_SCENE_MOVES_L = [            // with 64 Lights, x_shift_list[255]==0 and all bad
//   //  L, L, L, L,
//   L, L, L, L,
//   L, L, L, L, L, L, L, L, L, L,
//   L, L, L, L, L, L, L, L, L, L,
//   L, L, L, L, L, L, L, L, L, L,
//   L, L, L, L, L, L, L, L, L, L,
//   L, L, L, L, L, L, L, L, L, L,
//   L, L, L, L, L, L, L, L, L, L];


TEST_SCENE_MOVES_s = [            // with 64 Rights, x_shift_list[255]==0 and all bad
  R, R, R, R, R, R, R, R,       // column_3b = { m_x: -2048, m_y: 512, 

  R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,


  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,


  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,
  R, R, R, R, R, R, R, R, R, R,

];


TEST_SCENE_MOVES = TEST_SCENE_MOVES_s;
test_scene_index = 0;


function getTestMove(timestamp) {

  test_move = TEST_SCENE_MOVES[test_scene_index];
  test_scene_index++;
  if (test_move == 'F') {
    return MOVING_FORWARD;
  } else if (test_move == 'R') {
    return MOVING_RIGHT;
  } else if (test_move == 'B') {
    return MOVING_BACKWARDS;
  } else if (test_move == 'L') {
    return MOVING_LEFT;
  } else {
    TESTING_STOPPED = true;
    //if (!TEST_ENDED) {
    return MOVING_STOP;
    // if (TEST_SCENE_MOVES[0] == 'R') {
    //   return MOVING_LEFT;
    // } else {
    //   return MOVING_RIGHT;
    // }
  }
  //}
}





const THE_PLANET = 4;

const PARAMS_STR = getParams(window.location);
const THIS_PLANET = "area-4-fast/index.html" + PARAMS_STR;
const NEXT_PLANET = "index.html" + PARAMS_STR;

const FIELD_IN_SQUARES = [20, 40];
const PLAYER_START = [5, 38];
const PLAYER_BOUNDS = [2, 0, 8, 40];

const MISSILE_LIFETIME = 50;

function action_checkForOccurance() {
  const all_dead = enemiesAllZombies(g_enemies);
  if (all_dead) {
    g_exit_sign.m_sign_text_col = EXIT_ON_COLOR;
    g_pylons = unHidePylons(g_pylons);
    g_holes = unHideHoles(g_holes);
  }
}

function action_hitExit() {
  const game_state = GAME_4_SPACE;
  const part_state = PART_SPACE_40_LIFTOFF;
  return [game_state, part_state];
}

function action_runGame() {
  startReadKeys(read4Keys);
  const the_planet = initBoundedPlanet(
    FIELD_IN_SQUARES,
    PLAYER_BOUNDS,
    MOVINGx_N,
    MOVINGx_N,
  );
  const the_player = initPlayer(PLAYER_START);

  const guard_holes = [
    [-4, -30],
    [-5, -31],
    [-6, -30],
  ];
  const red_jumps = makeHoles(0, "red", guard_holes);

  const side_holes = [
    [0, 0],
    [0, 2],
    [0, 4],
    [0, 6],
    [0, 8],
    [0, 10],
    [0, 12],
    [0, 14],
    [0, 16],
    [0, 18],
    [0, 20],
    [0, 22],
    [0, 24],
    [0, 26],
    [0, 28],
    [0, 30],
    [0, 32],
    [0, 34],
    [0, 36],
    [0, 38],

    [10, 0],
    [10, 2],
    [10, 4],
    [10, 6],
    [10, 8],
    [10, 10],
    [10, 12],
    [10, 14],
    [10, 16],
    [10, 18],
    [10, 20],
    [10, 22],
    [10, 24],
    [10, 26],
    [10, 28],
    [10, 30],
    [10, 32],
    [10, 34],
    [10, 36],
    [10, 38],
  ];

  const hole_index = red_jumps.length;
  const white_sides = makeHoles(hole_index, "white", side_holes);
  const the_holes = [...white_sides, ...red_jumps];

  g_exit_sign = initSign("sign-exit", [5, 29], "Fini", EXIT_OFF_TRANSLUCENT);

  const sign_0 = initSign("sign-00", [3, 31], "F", "#FFFFFF");
  const sign_1 = initSign("sign-01", [4.5, 31], "a", "#EEEEEE");
  const sign_2 = initSign("sign-02", [6, 31], "s", "#DDDDDD");
  const sign_3 = initSign("sign-03", [7.5, 31], "t", "#CCCCCC");
  const the_signs = [g_exit_sign, sign_0, sign_1, sign_2, sign_3];

  const the_pylons = makePylons(
    [
      [-4, -29],
      [-6, -29],
    ],
    [WHITE_BLACK, WHITE_BLACK],
  );

  const train_speed = VELOCITY_0;

  const train_1 = plainEnemy(
    [5, 0],
    RED_BLUE_1,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_A,
  );
  const train_2 = plainEnemy(
    [5, 1],
    RED_BLUE_2,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_B,
  );
  const train_3 = plainEnemy(
    [5, 2],
    RED_BLUE_3,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_C,
  );
  const train_4 = plainEnemy(
    [5, 3],
    RED_BLUE_4,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_D,
  );

  const train_5 = plainEnemy(
    [5, 4],
    ORANGE_GREY_1,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_E,
  );
  const train_6 = plainEnemy(
    [5, 5],
    ORANGE_GREY_2,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_F,
  );
  const train_7 = plainEnemy(
    [5, 6],
    ORANGE_GREY_3,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_G,
  );
  const train_8 = plainEnemy(
    [5, 7],
    ORANGE_GREY_4,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_H,
  );

  const train_9 = plainEnemy(
    [5, 8],
    LIME_MAGENTA_1,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_I,
  );
  const train_10 = plainEnemy(
    [5, 9],
    LIME_MAGENTA_2,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_J,
  );
  const train_11 = plainEnemy(
    [5, 10],
    LIME_MAGENTA_3,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_K,
  );
  const train_12 = plainEnemy(
    [5, 11],
    LIME_MAGENTA_4,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_L,
  );

  const train_13 = plainEnemy(
    [5, 12],
    YELLOW_CYAN_4,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_M,
  );
  const train_14 = plainEnemy(
    [5, 13],
    YELLOW_CYAN_3,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_N,
  );
  const train_15 = plainEnemy(
    [5, 14],
    YELLOW_CYAN_2,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_O,
  );
  const train_16 = plainEnemy(
    [5, 15],
    YELLOW_CYAN_1,
    ZERO_10,
    NEAR_10,
    train_speed,
    BALL_START_P,
  );

  const the_train = [
    train_1,
    train_2,
    train_3,
    train_4,
    train_5,
    train_6,
    train_7,
    train_8,
    train_9,
    train_10,
    train_11,
    train_12,
    train_13,
    train_14,
    train_15,
    train_16,
  ];

  const enemy_0 = plainEnemy([2, 2], RED_BLUE_2, LEFT_10, NEAR_10, VELOCITY_0);
  const enemy_1 = plainEnemy([2, 12], RED_CYAN, LEFT_10, NEAR_10, VELOCITY_2);
  const enemy_2 = plainEnemy(
    [2, 22],
    YELLOW_BLUE,
    LEFT_10,
    NEAR_10,
    VELOCITY_3,
  );
  const enemy_3 = plainEnemy(
    [2, 32],
    PURPLE_GREEN,
    LEFT_10,
    NEAR_10,
    VELOCITY_4,
  );

  //  const the_enemies = [];
  const the_enemies = makeEnemies([
    ...the_train,
    enemy_0,
    enemy_1,
    enemy_2,
    enemy_3,
  ]);

  startItUp(
    the_planet,
    the_player,
    the_enemies,
    the_pylons,
    the_signs,
    the_holes,
  );
}

const THE_PLANET = 3;

const PARAMS_STR = getParams(window.location);
const THIS_PLANET = "area-3-shoot/index.html" + PARAMS_STR;
const NEXT_PLANET = "area-4-fast/index.html" + PARAMS_STR;
const FIELD_IN_SQUARES = [54, 34];
const PLAYER_START = [6, 10];
const PLAYER_BOUNDS = [1, 1, 35, 10];

const MISSILE_LIFETIME = 35;

function action_checkForOccurance() {
    const all_dead = enemiesAllZombies(g_enemies);
    if (all_dead) {
        g_exit_sign.m_sign_text_col = EXIT_ON_COLOR;
    }
}

function action_hitExit() {
    window.location.href = NEXT_PLANET;
}

function action_runGame() {
    startReadKeys(read11Keys);
    const the_planet = initBoundedPlanet(FIELD_IN_SQUARES, PLAYER_BOUNDS, MOVINGx_NOT, MOVINGx_E);
    const the_player = initPlayer(PLAYER_START);

    const side_holes = [
        [2, 0],
        [4, 0],
        [6, 0],
        [8, 0],
        [10, 0],
        [12, 0],
        [14, 0],
        [16, 0],
        [18, 0], // back wall
        [20, 0],
        [22, 0],
        [24, 0],
        [26, 0],
        [28, 0],
        [30, 0],
        [32, 0],
        [34, 0],

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
        [0, 28], // left wall
        [0, 30],

        [36, 0],
        [36, 2],
        [36, 4],
        [36, 6],
        [36, 8],
        [36, 10],
        [36, 12],
        [36, 14],
        [36, 16],
        [36, 18], // right wall
        [36, 20],
        [36, 22],
        [36, 24],
        [36, 26],
        [36, 28],
        [36, 30]
    ];

    const white_sides = makeHoles(0, "green", side_holes);
    const the_holes = [...white_sides];

    g_exit_sign = initSign("sign-exit", [5, 2], "Next", EXIT_OFF_COLOR);
    const sign_0 = initSign("sign-00", [0, 7], "S", "#FFFFFF");
    const sign_1 = initSign("sign-01", [1.5, 7], "h", "#EEEEEE");
    const sign_2 = initSign("sign-02", [3, 7], "o", "#DDDDDD");
    const sign_3 = initSign("sign-03", [4.5, 7], "o", "#CCCCCC");
    const sign_4 = initSign("sign-04", [6, 7], "t", "#BBBBBB");
    const the_signs = [g_exit_sign, sign_0, sign_1, sign_2, sign_3, sign_4];

    const slow_0_back_front_enemy = plainEnemy([18, 3], ORANGE_GREY_FOG, ZERO_10, AWAY_10, 1);
    const slow_1_back_front_enemy = plainEnemy([18, 3], GREY_ORANGE_FOG, ZERO_10, NEAR_10, 1);
    const slow_back_front_2_pylon_points = [
        [18, 0],
        [18, 7]
    ];
    const slow_back_front_2_pylon_colors = [ORANGE_GREY_FOG, ORANGE_GREY_FOG];

    const fast_0_left_right_enemy = plainEnemy([28, 2], WHITE_BLACK, RGHT_10, ZERO_10, 6);
    const fast_1_left_right_enemy = plainEnemy([28, 2], BLACK_WHITE, LEFT_10, ZERO_10, 6);
    const fast_left_right_2_pylon_points = [
        [23, 2],
        [33, 2]
    ];
    const fast_left_right_2_pylon_colors = [WHITE_BLACK, WHITE_BLACK];

    const corners_4_pylon_points = [
        [12, 5],
        [2, 5],
        [12, 1],
        [2, 1]
    ];
    const corners_4_pylon_colors = [LIME_FUCHSIA, RED_YELLOW, RED_YELLOW, LIME_FUCHSIA];

    const pylon_points = [...fast_left_right_2_pylon_points, ...corners_4_pylon_points, ...slow_back_front_2_pylon_points];
    const pylon_colors = [...fast_left_right_2_pylon_colors, ...corners_4_pylon_colors, ...slow_back_front_2_pylon_colors];

    const the_pylons = makePylons(pylon_points, pylon_colors);

    const corner_0_enemy = plainEnemy([7, 3], YELLOW_RED, RGHT_100, AWAY_100, 1);
    const corner_1_enemy = plainEnemy([7, 3], RED_YELLOW, LEFT_100, NEAR_100, 1);
    const corner_2_enemy = plainEnemy([7, 3], LIME_FUCHSIA, LEFT_100, AWAY_100, 2);
    const corner_3_enemy = plainEnemy([7, 3], FUCHSIA_LIME, RGHT_100, NEAR_100, 2);

    const corner_enemies = [corner_0_enemy, corner_1_enemy, corner_2_enemy, corner_3_enemy];
    const fast_enemies = [fast_0_left_right_enemy, fast_1_left_right_enemy];
    const slow_enemies = [slow_0_back_front_enemy, slow_1_back_front_enemy];
    const the_enemies = makeEnemies([...corner_enemies, ...fast_enemies, ...slow_enemies]);

    startItUp(the_planet, the_player, the_enemies, the_pylons, the_signs, the_holes);
}

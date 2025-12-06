const THE_PLANET = 2;

const PARAMS_STR = getParams(window.location);
const THIS_PLANET = 'area-2-carom/index.html' + PARAMS_STR;
const NEXT_PLANET = 'area-3-shoot/index.html' + PARAMS_STR;

const FIELD_IN_SQUARES = [34, NO_MISSILE_DEPTH_OVERFLOW];
const PLAYER_START = [1, 11];


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
    const the_planet = initInfinitePlanet(FIELD_IN_SQUARES, MOVINGx_NOT, MOVINGx_E);
    const the_player = initPlayer(PLAYER_START);

    const holes_0 = [[3, 0], [5, 0], [7, 0], [9, 0]];
    const holes_1 = [[4, 1],     /*  */[8, 1]];
    const holes_2 = [[3, 2],        /*                   */[9, 2]];
    const holes_3 = [[4, 3],         /*  */[8, 3]];
    const holes_4 = [[3, 4], [5, 4], [7, 4], [9, 4]];
    const holes_5 = [[4, 5],         /* */[8, 5]];
    const holes_6 = [[3, 6], [5, 6], [7, 6], [9, 6]];
    const holes_numberic = [...holes_0, ...holes_1, ...holes_2, ...holes_3, ...holes_4, ...holes_5, ...holes_6];

    const holes_a = [[4, 0], [6, 0], [8, 0],];
    const holes_b = [[3, 1], [5, 1],  /*  */[7, 1], [9, 1]];
    const holes_c = [[4, 2], /*                   */[8, 2]];
    const holes_d = [[3, 3], [5, 3],  /*  */[7, 3], [9, 3]];
    const holes_e = [[4, 4], [6, 4], [8, 4]];
    const holes_f = [[3, 5], [5, 5], [7, 5], [9, 5]];
    const holes_g = [[4, 6], [6, 6], [8, 6]];
    const holes_alphbetic = [...holes_a, ...holes_b, ...holes_c, ...holes_d, ...holes_e, ...holes_f, ...holes_g];

    const red_holes = makeHoles(0, "red", holes_numberic);
    const number_reds = red_holes.length;
    const green_holes = makeHoles(number_reds, "green", holes_alphbetic);
    const the_holes = [...red_holes, ...green_holes];

    g_exit_sign = initSign("sign-exit", [8, 7], 'Next', EXIT_OFF_COLOR);
    const sign_0 = initSign("sign-00", [3, 7], 'C', "#FFFFFF");
    const sign_1 = initSign("sign-01", [4.5, 7], 'a', "#EEEEEE");
    const sign_2 = initSign("sign-02", [6, 7], 'r', "#DDDDDD");
    const sign_3 = initSign("sign-03", [7.5, 7], 'o', "#CCCCCC");
    const sign_4 = initSign("sign-04", [9, 7], 'm', "#BBBBBB");
    const the_signs = [g_exit_sign, sign_0, sign_1, sign_2, sign_3, sign_4];

    const the_pylons = makePylons([[6, 5], [1, 2], [11, 2]], [WHITE_BLACK, WHITE_BLACK, WHITE_BLACK]);

    const enemy_0 = {
        start_pos: [6, 2],
        the_colors: ['yellow', 'purple'],
        x_moves: [ZERO_10],
        y_moves: [ZERO_10],
        the_speed: 0,
        ball_start: '-1s'
    };
    const the_enemies = makeEnemies([enemy_0]);
    startItUp(the_planet, the_player, the_enemies, the_pylons, the_signs, the_holes);
}
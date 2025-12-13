const THE_PLANET = 1;
const PARAMS_STR = getParams(window.location);

const THIS_PLANET = "area-1-jump/index.html" + PARAMS_STR;
const NEXT_PLANET = "area-2-carom/index.html" + PARAMS_STR;

const FIELD_IN_SQUARES = [34, 32];
const PLAYER_START = [7, 30];
const PLAYER_BOUNDS = [0, 18, 34, 31];

const DITCH_LINE = 23;
const DITCH_COLOR = "black";

const MISSILE_LIFETIME = 50;

function action_checkForOccurance() {
    const player_offset_squares_y = Math.floor(g_player.m_y / DEPTH_OF_SQUARE);
    if (player_offset_squares_y < DITCH_LINE) {
        g_holes = hideHoles(g_holes, DITCH_COLOR);
    }
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

    const back_one = DITCH_LINE - 0.5;
    const forward_one = DITCH_LINE + 0.5;

    const ditch_holes = [
        [0, DITCH_LINE],
        [1.0625, forward_one],
        [2.125, DITCH_LINE],
        [3.1875, back_one],
        [4.25, DITCH_LINE],
        [5.3125, forward_one],
        [6.375, DITCH_LINE],
        [7.4375, back_one],
        [8.5, DITCH_LINE],
        [9.5625, forward_one],
        [10.625, DITCH_LINE],
        [11.6875, back_one],
        [12.75, DITCH_LINE],
        [13.8125, forward_one],
        [14.875, DITCH_LINE],
        [15.9375, back_one],

        [17, DITCH_LINE],
        [18.0625, forward_one],
        [19.125, DITCH_LINE],
        [20.1875, back_one],
        [21.25, DITCH_LINE],
        [22.3125, forward_one],
        [23.375, DITCH_LINE],
        [24.4375, back_one],
        [25.5, DITCH_LINE],
        [26.5625, forward_one],
        [27.625, DITCH_LINE],
        [28.6875, back_one],
        [29.75, DITCH_LINE],
        [30.8125, forward_one],
        [31.875, DITCH_LINE],
        [32.9375, back_one]
    ];

    const red_holes = makeHoles(0, DITCH_COLOR, ditch_holes, "white");

    const back_holes = [
        [0, 17],
        [2, 17],
        [4, 17],
        [6, 17],
        [8, 17],
        [10, 17],
        [12, 17],
        [14, 17],
        [16, 17],
        [18, 17],
        [20, 17],
        [22, 17],
        [24, 17],
        [26, 17],
        [28, 17],
        [30, 17],
        [32, 17]
    ];

    const hole_index = red_holes.length;
    const white_edge = makeHoles(hole_index, "white", back_holes);

    const the_holes = [...white_edge, ...red_holes];

    g_exit_sign = initSign("sign-exit", [6, 20], "Next", EXIT_OFF_COLOR);

    const sign_0 = initSign("sign-00", [6.375, 27], "J", "#FFFFFF");
    const sign_1 = initSign("sign-01", [7.5, 27], "u", "#EEEEEE");
    const sign_2 = initSign("sign-02", [9, 27], "m", "#DDDDDD");
    const sign_3 = initSign("sign-03", [10.5, 27], "p", "#CCCCCC");

    const the_signs = [g_exit_sign, sign_0, sign_1, sign_2, sign_3];

    const the_pylons = [];

    const enemy_0 = {
        start_pos: [10, 16],
        the_colors: ["green", "black"],
        x_moves: [ZERO_10],
        y_moves: [ZERO_10],
        the_speed: 0,
        ball_start: "-1s"
    };
    const the_enemies = makeEnemies([enemy_0]);

    startItUp(the_planet, the_player, the_enemies, the_pylons, the_signs, the_holes);
}

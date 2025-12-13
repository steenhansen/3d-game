function makeNudges() {
    let affix_line = 0;
    while (affix_line < NUMBER_LINES) {
        let r = Math.floor(Math.random() * 2);
        let direction;
        if (r === 0) {
            direction = -1;
        } else {
            direction = 1;
        }
        let length_direction = Math.floor(Math.random() * 16) + 16;
        for (let i = 0; i < length_direction; i++) {
            g_field_xs_nudges[affix_line] = direction;
            affix_line++;
            if (affix_line === NUMBER_LINES) {
                break;
            }
        }
    }
}

function pushDeathNudges() {
    for (let affix_line = 0; affix_line < NUMBER_LINES; affix_line++) {
        let death_nudge = g_field_xs_death[affix_line];
        if (death_nudge !== 0) {
            const left_right = g_field_xs_nudges[affix_line];
            if (left_right === 1) {
                g_field_xs_shift[affix_line]++;
            } else {
                g_field_xs_shift[affix_line]--;
            }
        }
    }
}

// caching line elements, and/or css variables didn't help Firefox speed up
function affixLeftRight(is_dying) {
    const y_counter = Math.floor(g_y_flip_count);
    const invert_lines = Y_INVERT_LILNES[y_counter];
    if (is_dying) {
        pushDeathNudges();
    }
    for (let affix_line = 0; affix_line < NUMBER_LINES; affix_line++) {
        const inverted_x = invert_lines[affix_line];
        let affix_shift = g_field_xs_shift[affix_line];
        if (inverted_x === 0) {
            let [_index, _start, _stop, invert_flip] = START_STOP_FLIP[affix_line];
            affix_shift -= invert_flip;
        }
        const line_name = `line${affix_line}`;
        const line_element = document.getElementById(line_name);
        line_element.style = `background-position-x: ${affix_shift}px `;
    }
}

function fieldLeft(travel_speed, diagonal_weight) {
    for (let i = 0; i < travel_speed; i++) {
        for (let j = 0; j < diagonal_weight; j++) {
            incrementLeft();
        }
    }
}

function fieldRight(travel_speed, diagonal_weight) {
    for (let i = 0; i < travel_speed; i++) {
        for (let j = 0; j < diagonal_weight; j++) {
            incrementRight();
        }
    }
}

function initIncrementers() {
    g_field_xs_accums = Array(DEPTH_LINES).fill(0);
    g_field_xs_shift = Array(DEPTH_LINES).fill(0);
    if (INIT_RIGHT) {
        resetRight();
    } else {
        resetLeft();
    }
}

function initLeftRight() {
    initIncrementers();

    incrementForward();
    incrementForward();
    incrementForward();
    incrementForward();
}

function xyNotInField(out_x, out_y, err_mess) {
    const x_min = g_planet.s_playground_x_min;
    const x_max = g_planet.s_playground_x_max;
    const x_original = out_x - x_min;
    const max_x_original = x_max - x_min;
    if (out_x < x_min || out_x > x_max) {
        const x_err = `${err_mess}, X:${x_original} is not in range of 0 < X < ${max_x_original}`;
        throw new Error(x_err);
    }

    const y_min = g_planet.s_playground_y_min;
    const y_max = g_planet.s_playground_y_max;
    const y_original = out_y - y_min;
    const max_y_original = y_max - y_min;
    if (out_y < y_min || out_y > y_max) {
        const y_err = `${err_mess}, Y:${y_original} is not in range of 0 < Y < ${max_y_original}`;
        throw new Error(y_err);
    }
}

function xAllowed(player_x) {
    if (player_x < g_planet.s_playground_x_min || player_x > g_planet.s_playground_x_max) {
        return false;
    }
    return true;
}

function yAllowed(player_y) {
    if (player_y < g_planet.s_playground_y_min) {
        dbg_y_too_small = `${player_y}<${g_planet.s_playground_y_min}`;
        return false;
    } else if (player_y > g_planet.s_playground_y_max) {
        dbg_y_too_large = `${player_y}>${g_planet.s_playground_y_max}`;
        return false;
    }
    return true;
}

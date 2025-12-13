const L_MATCH_DEATH_TO_DISTANCE = 1.5;

function dyingCheckerboard(the_planet) {
    g_planet.m_dying_distance++;
    const dying_line = DEPTH_LINES - g_planet.m_dying_distance;
    const the_dividers = [31, 29, 23, 19, 17, 13, 11, 7, 3];
    const a_div_ind = Math.trunc(g_planet.m_dying_distance / 32);
    const a_div = the_dividers[a_div_ind];
    const jagged_offset = g_planet.m_dying_distance % a_div;
    g_field_xs_death[dying_line] = jagged_offset;
    const checkerboard_death = getCssVar("--checkerboard-death");
    setCssLineBackground(dying_line, checkerboard_death);
    let just_died;
    if (g_planet.m_dying_distance > DEPTH_LINES) {
        just_died = true;
    } else {
        just_died = false;
    }
    return [the_planet, just_died];
}

function dyingPylons(the_player, pylon_list) {
    let changed_pylons = [];
    const number_pylons = pylon_list.length;
    const crawling_dist = g_planet.m_dying_distance * L_MATCH_DEATH_TO_DISTANCE;
    for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
        const a_pylon = pylon_list[pylon_index];
        if (a_pylon.m_alive) {
            const dist_abs_y = distanceAbsY([a_pylon.m_y, the_player.m_y]);
            if (dist_abs_y < crawling_dist) {
                a_pylon.m_alive = false;
            }
        }
        changed_pylons[pylon_index] = a_pylon;
    }
    return changed_pylons;
}

function dyingEnemies(the_player, enemy_list) {
    let changed_enemies = [];
    const number_enemies = enemy_list.length;
    const crawling_dist = g_planet.m_dying_distance * L_MATCH_DEATH_TO_DISTANCE;
    for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
        const an_enemy = enemy_list[enemy_index];
        const dist_abs_y = distanceAbsY([an_enemy.m_y, the_player.m_y]);
        if (dist_abs_y < crawling_dist) {
            setCssEnemyStarFill(enemy_index, DYING_STAR_COLOR);
            setCssEnemyBallFill(enemy_index, DYING_BALL_COLOR);
        }
        changed_enemies[enemy_index] = an_enemy;
    }
    return changed_enemies;
}

function reAnimateScreen() {
    g_field_xs_shift = Array(DEPTH_LINES).fill(0);
    const cur_checkerboard_img = getCssVar("--checkerboard-image");
    for (let i = 0; i < DEPTH_LINES; i++) {
        setCssLineBackground(i, cur_checkerboard_img); // delete grey checkerboard
    }
}

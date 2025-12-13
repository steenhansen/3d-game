function plainPylon(the_player, a_pylon) {
    if (the_player.m_screen_askew === 0 && THE_PLANET !== 4) {
        the_player.m_recoil_count = PLAYER_RECOIL_COUNTDOWN;
        const new_direction = objectBounced(g_planet.m_move_direction);
        g_planet.m_move_direction = new_direction;
        the_player.m_screen_askew = 10;
    }
    return [the_player, a_pylon];
}

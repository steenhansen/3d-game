function runGame(the_planet, the_player, the_enemies, the_pylons, the_signs, the_holes) {
  initGame();
  g_planet = the_planet;
  g_player = the_player;
  g_enemies = the_enemies;
  g_pylons = the_pylons;
  g_signs = the_signs;
  g_holes = the_holes;

  g_planet.m_game_state = GAME_0_INIT;

  if (isMobile()) {
    g_planet.m_part_state = PART_INIT_01_MOBILE;
  } else {
    g_planet.m_part_state = PART_INIT_00_DESKTOP;
  }
  gameLoop();

  function gameLoop() {
    const start_loop = performance.now();
    action_checkForOccurance();
    game_state = g_planet.m_game_state;
    part_state = g_planet.m_part_state;
    if (game_state == GAME_0_INIT) {
      [game_state, part_state, g_planet, g_player] = initPart0(game_state, part_state, g_planet, g_player);
    } else if (game_state == GAME_1_INTRO) {
      [game_state, part_state, g_signs] = introPart1(game_state, part_state, g_signs);
    } else if (game_state == GAME_2_PLAY) {
      const variable_list = playPart2(game_state, part_state, g_planet, g_player, g_enemies, g_pylons, g_signs);
      [game_state, part_state, g_planet, g_player, g_enemies, g_pylons] = variable_list;
      if (the_player.m_is_dying) {
        game_state = GAME_3_DEATH;
        part_state = PART_DEATH_30_APPEAR;
      }
    } else if (game_state == GAME_3_DEATH) {
      [part_state] = deathPart3(part_state, g_planet, g_player, g_enemies, g_pylons);
    } else if (game_state == GAME_4_SPACE) {
      [part_state, g_player] = spacePart4(part_state, g_planet, g_player, g_enemies, g_pylons);
    } else if (game_state == GAME_5_DONE) {
      donePart5();
    } else {
      dbg_print('gameLoop() - unknown game_state', game_state);
    }
    g_planet.m_game_state = game_state;
    g_planet.m_part_state = part_state;
    requestAnimationFrame(gameLoop);
    const end_loop = performance.now();
    const loop_time = end_loop - start_loop;
    debugAnimation(loop_time);
  }
}

function loopDone() {
  resetSections();
  sceneInit();
  // if (document.fullscreenElement != null) {
  //   //  document.exitFullscreen();
  // }
  window.location.href = 'index.html';
}

function initGame() {
  gameInit();
  sceneInit();
  debugInit();
}






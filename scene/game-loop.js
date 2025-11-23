




function runGame(the_planet, the_player, the_enemies, the_pylons, the_holes, the_signs) {
  initGame();
  g_planet = the_planet;
  g_player = the_player;
  g_enemy_list = the_enemies;
  g_pylon_list = the_pylons;
  g_sign_list = the_signs;
  g_hole_list = the_holes;

  g_planet.m_game_state = GAME_0_INIT;

  if (isMobile()) {
    g_planet.m_part_state = PART_INIT_01_MOBILE;
  } else {
    g_planet.m_part_state = PART_INIT_00_DESKTOP;
  }
  gameLoopNew();

  function gameLoopNew() {
    game_state = g_planet.m_game_state;
    part_state = g_planet.m_part_state;
    if (game_state == GAME_0_INIT) {
      [game_state, part_state, g_planet, g_player] = initPart0(game_state, part_state, g_planet, g_player);
    } else if (game_state == GAME_1_INTRO) {
      [game_state, part_state] = introPart1(game_state, part_state);
      if (part_state == PART_INTRO_13_AFTER_ELEVATOR) {
        deleteStartLetters(the_signs, ERASE_START_MESSAGE_TIME);
      }
    } else if (game_state == GAME_2_PLAY) {
      zxc = playPart2(game_state, part_state, g_planet, g_player, g_enemy_list, g_pylon_list, g_hole_list);
      [game_state, part_state, g_planet, g_player, g_enemy_list, g_pylon_list, g_hole_list] = zxc;
    } else if (game_state == GAME_3_DEATH) {
      [part_state] = deathPart3(part_state, g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (game_state == GAME_4_SPACE) {
      [part_state, g_player] = spacePart4(part_state, g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (game_state == GAME_5_DONE) {
      donePart5();
    } else {
      dbg_print('gameLoopNew() - unknown game_state', game_state);
    }
    g_planet.m_game_state = game_state;
    g_planet.m_part_state = part_state;
    requestAnimationFrame(gameLoopNew);
    debugAnimation();
  }




}


function turnOnExit(sign_list) {
  all_dead = enemiesAllZombies(g_enemy_list);
  if (all_dead) {
    exiting_signs = [...sign_list];
    exiting_signs[0].m_sign_text_col = EXIT_ON_COLOR;


    return exiting_signs;
  }
  return sign_list;
}

function loopDone() {
  resetSections();
  sceneInit();
  if (document.fullscreenElement != null) {
    //  document.exitFullscreen();
  }
  window.location.href = 'index.html';
}

function initGame() {
  gameInit();
  sceneInit();
  debugInit();
}






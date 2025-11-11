




function runGame(land_speeds, fly_speed, the_pylons, the_signs, the_enemies, the_holes, the_player, the_planet) {
  initGame();
  let [land_speed, elevator_speed] = land_speeds;
  g_pylon_list = the_pylons;
  g_sign_list = the_signs;
  g_enemy_list = the_enemies;
  g_hole_list = the_holes;
  g_player = the_player;
  g_planet = the_planet;

  g_planet.m_game_state = GAME_0_INIT;

  if (isMobile()) {
    g_planet.m_part_state = PART_INIT_01_MOBILE;
  } else {
    g_planet.m_part_state = PART_INIT_00_DESKTOP;
  }
  gameLoopNew();
  //hideArrows("arrow-nw");
  //console.log()
  function gameLoopNew() {
    debugFrameTime();
    game_state = g_planet.m_game_state;
    part_state = g_planet.m_part_state;
    if (game_state == GAME_0_INIT) {
      [game_state, part_state, g_planet, g_player] = initPart0(game_state, part_state, g_planet, g_player);
    } else if (game_state == GAME_1_INTRO) {
      [game_state, part_state] = introPart1(game_state, part_state, land_speed, elevator_speed);
    } else if (game_state == GAME_2_PLAY) {
      zxc = playPart2(game_state, part_state, g_planet, g_player, g_enemy_list, g_pylon_list);
      [game_state, part_state, g_planet, g_player, g_enemy_list, g_pylon_list] = zxc;
    } else if (game_state == GAME_3_DEATH) {
      [part_state] = deathPart3(part_state, g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (game_state == GAME_4_SPACE) {
      [part_state, g_player] = spacePart4(part_state, g_planet, g_player, g_enemy_list, g_pylon_list);
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
    exiting_signs[0].p_sign_text_col = EXIT_ON_COLOR;
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






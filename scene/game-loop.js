




function runGame(the_planet, the_player, the_enemies, the_pylons, the_holes, the_signs) {
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
  gameLoopNew();

  function gameLoopNew() {
    game_state = g_planet.m_game_state;
    part_state = g_planet.m_part_state;
    if (game_state == GAME_0_INIT) {
      [game_state, part_state, g_planet, g_player] = initPart0(game_state, part_state, g_planet, g_player);
    } else if (game_state == GAME_1_INTRO) {
  //    console.log('in 1 intro');
      [game_state, part_state] = introPart1(game_state, part_state);
    } else if (game_state == GAME_2_PLAY) {
    //  console.log("in 2 ");
      zxc = playPart2(game_state, part_state, g_planet, g_player, g_enemies, g_pylons, g_holes);
      [game_state, part_state, g_planet, g_player, g_enemies, g_pylons, g_holes] = zxc;
      if (the_player.m_is_dying){
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
      dbg_print('gameLoopNew() - unknown game_state', game_state);
    }
      g_planet.m_game_state = game_state;
      g_planet.m_part_state = part_state;
    
    requestAnimationFrame(gameLoopNew);
    debugAnimation();
  }




}


function turnOnExit(sign_list) {
  all_dead = enemiesAllZombies(g_enemies);
  if (all_dead) {
    exit_signs = [...sign_list];
    exit_signs[0].m_sign_text_col = EXIT_ON_COLOR;
    return exit_signs;
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






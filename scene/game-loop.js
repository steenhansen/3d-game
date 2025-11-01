// function loopStart() {
//   divVisHidden('desktop-dir');
// }

function loopDesktopStart(the_planet) {
  the_planet.m_planet_state = LOOP_1_BEGIN;
  return the_planet;
}

function loopMobileStart(the_planet) {
  unHideDiv('start-mobile');
  fixMobile();
  the_planet.m_planet_state = LOOP_1_BEGIN;
  return the_planet;
}

function loopBegin(the_planet, the_player) {
  animateStart();


  initDebugVars();
  debugClear();
  dbg_report = true;
  setCssVar("--cracked-glass-display", "none");
  the_player = resetPlayer();
  the_planet.m_planet_state = LOOP_2_AFTER_BEGIN;
  return [the_planet, the_player];
}

function loopAfterBegin(the_planet) {
  fixDevice();
  hideDiv('playing-game');
  initLanding();
  the_planet.m_planet_state = LOOP_3_LANDING;
  return the_planet;
}

function loopLanding(the_planet, land_speed) {
  loop_state = animateLanding(land_speed);
  the_planet.m_planet_state = loop_state;
  return the_planet;
}

function loopAfterLanding(the_planet) {
  initElevator();
  the_planet.m_planet_state = LOOP_5_ELEVATOR;
  return the_planet;
}

function loopElevator(the_planet, elevator_speed) {
  loop_state = animateElevator(elevator_speed);
  the_planet.m_planet_state = loop_state;
  return the_planet;
}

function loopAfterElevator(the_planet) {
  initPlay();
  readyInputArrows();
  if (isDebugging()) {
    delete g_planet.t_drift_direction;
  }
  // hide landing from really tall phones    iPhone SE 375 x 667
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `display:none`;
  the_planet.m_planet_state = LOOP_7_PLAY_NORMAL;
  return the_planet;
}

function loopPlay(the_planet, the_player, enemy_list, g_pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, g_pylon_list, g_hole_list);
  if (the_player.m_hit_hole_last_move) {
    loop_state = LOOP_7_PLAY_HOLE_A_HIT;
  } else if ('t_is_dying' in the_player) {
    loop_state = LOOP_10_DEAD_START;
  } else {
    loop_state = LOOP_7_PLAY_NORMAL;
  }
  the_planet.m_planet_state = loop_state;
  collisionShake(the_player);
  return [the_planet, the_player, enemy_list, pylon_list];
}

function loopPlayHoleHit(the_planet, the_player, enemy_list, g_pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, g_pylon_list, g_hole_list);
  the_player = animateHoleHit(the_player);
  the_planet.m_planet_state = LOOP_7_PLAY_HOLE_B_INSIDE;
  collisionShake(the_player);
  return [the_planet, the_player, enemy_list, pylon_list];
}

// what if stop inside hole?
function loopPlayHoleInside(the_planet, the_player, enemy_list, g_pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, g_pylon_list, g_hole_list);

  the_player = animateHoleInside(the_player);
  if (the_player.m_hit_hole_last_move) {
    loop_state = LOOP_7_PLAY_HOLE_B_INSIDE;
  } else {
    loop_state = LOOP_7_PLAY_HOLE_C_LEAVE;
  }
  the_planet.m_planet_state = loop_state;
  return [the_planet, the_player, enemy_list, pylon_list];
}

function loopPlayHoleLeave(the_planet, the_player, enemy_list, g_pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, g_pylon_list, g_hole_list);
  the_player = animateHoleLeave(the_player);
  the_planet.m_planet_state = LOOP_7_PLAY_NORMAL;
  return [the_planet, the_player, enemy_list, pylon_list];
}

function loopPlayJumpStart(the_planet, the_player, enemy_list, g_pylon_list) {
  the_player.t_jump_amount = 0;
  the_planet.m_planet_state = LOOP_7_PLAY_B_JUMP_UP;
  return loopPlayJumpUp(the_planet, the_player, enemy_list, g_pylon_list);
}

function loopPlayJumpUp(the_planet, the_player, enemy_list, g_pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, g_pylon_list, g_hole_list);
  [the_player, new_state] = animateJumpUp(the_player);
  the_planet.m_planet_state = new_state;
  collisionShake(the_player);
  return [the_planet, the_player, enemy_list, pylon_list];
}

function loopPlayJumpDown(the_planet, the_player, enemy_list, g_pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, g_pylon_list, g_hole_list);
  [the_player, new_state] = animateJumpDown(the_player);
  the_planet.m_planet_state = new_state;
  collisionShake(the_player);
  return [the_planet, the_player, enemy_list, pylon_list];
}

function jumpStartFly() {
  g_planet.t_move_direction = MOVINGx_N;
  g_planet.m_planet_state = LOOP_9_FLY;
  g_player.t_fly_amount = 0;
}

function loopAfterPlay(the_planet, the_player) {
  the_planet.t_move_direction = MOVINGx_N;
  the_planet.m_planet_state = LOOP_9_FLY;
  the_player.t_fly_amount = 0;
  return [the_planet, the_player];
}

function loopFly(the_planet, the_player, fly_speed, enemy_list, g_pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, g_pylon_list, g_hole_list);
  [the_player, new_state] = animateFly(fly_speed, the_player);
  the_planet.m_planet_state = new_state;
  return [the_planet, the_player, enemy_list, pylon_list];
}

function loopDeadStart(the_planet, the_player, enemy_list, pylon_list) {
  the_player.m_num_cracks = 0;
  setCssVar("--sun-image", "url('../images/grey-sun.png')");
  setCssVar("--pyramids-image", "url('../images/black-pyramids.png')");
  the_planet.m_planet_state = LOOP_11_DEAD_FIELD;
  planet_player_enemies_pylons = loopDeadField(the_planet, the_player, enemy_list, pylon_list);
  [the_planet, the_player, enemy_list, pylon_list] = planet_player_enemies_pylons;
  return [the_planet, the_player, enemy_list, pylon_list];
}



function loopDeadField(the_planet, the_player, enemy_list, pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, pylon_list, g_hole_list);
  pylon_list = dyingPylons(the_player, pylon_list);
  enemy_list = dyingEnemies(the_player, enemy_list);
  [the_planet, just_died] = dyingCheckerboard(the_planet);
  if (just_died) {
    the_planet.m_planet_state = LOOP_12_DEAD_SKY;
  }
  return [the_planet, the_player, enemy_list, pylon_list];
}























function runGame(land_fly_speeds, the_pylons, the_enemies, the_holes, the_player, the_planet) {
  initGame();
  let [land_speed, elevator_speed, fly_speed] = land_fly_speeds;
  g_pylon_list = the_pylons;
  g_enemy_list = the_enemies;
  g_hole_list = the_holes;
  g_player = the_player;
  g_planet = the_planet;
  gameLoop();

  function gameLoop(the_time) {

    st = Date.now();
    debugFrameTime();
    loop_state = g_planet.m_planet_state;
    if (loop_state == LOOP_0_DESKTOP_START) {
      g_planet = loopDesktopStart(g_planet);
    } else if (loop_state == LOOP_0_MOBILE_START) {
      g_planet = loopMobileStart(g_planet);
    } else if (loop_state == LOOP_1_BEGIN) {
      [g_planet, g_player] = loopBegin(g_planet, g_player);
    } else if (loop_state == LOOP_2_AFTER_BEGIN) {
      g_planet = loopAfterBegin(g_planet);
    } else if (loop_state == LOOP_3_LANDING) {
      g_planet = loopLanding(g_planet, land_speed);
    } else if (loop_state == LOOP_4_AFTER_LANDING) {
      g_planet = loopAfterLanding(g_planet);
    } else if (loop_state == LOOP_5_ELEVATOR) {
      g_planet = loopElevator(g_planet, elevator_speed);
    } else if (loop_state == LOOP_6_AFTER_ELEVATOR) {
      g_planet = loopAfterElevator(g_planet);
    } else if (loop_state == LOOP_7_PLAY_NORMAL) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopPlay(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_7_PLAY_HOLE_A_HIT) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopPlayHoleHit(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_7_PLAY_HOLE_B_INSIDE) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopPlayHoleInside(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_7_PLAY_HOLE_C_LEAVE) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopPlayHoleLeave(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_7_PLAY_A_JUMP_START) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopPlayJumpStart(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_7_PLAY_B_JUMP_UP) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopPlayJumpUp(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_7_PLAY_C_JUMP_DOWN) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopPlayJumpDown(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_8_AFTER_PLAY) {
      [g_planet, g_player] = loopAfterPlay(g_planet, g_player);
    } else if (loop_state == LOOP_9_FLY) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopFly(g_planet, g_player, fly_speed, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_10_DEAD_START) {
      zxcv = loopDeadStart(g_planet, g_player, g_enemy_list, g_pylon_list);
      [g_planet, g_player, g_enemy_list, g_pylon_list] = zxcv;

    } else if (loop_state == LOOP_11_DEAD_FIELD) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopDeadField(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_12_DEAD_SKY) {
      [g_planet, g_player, g_enemy_list, g_pylon_list] = loopDeadSky(g_planet, g_player, g_enemy_list, g_pylon_list);
    } else if (loop_state == LOOP_13_DONE) {
      dbg_report = false;
      g_planet = loopDone();
    } else {
      loop_error = `bad::loop_state ${loop_state}`;
      throw new Error(loop_error);
    }

    singularPlanetCode('calling-specific-planet-code-exit');

    requestAnimationFrame(gameLoop);
    en = Date.now();
    debugAnimation();
  }
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






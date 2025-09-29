



function loopBegin() {
  divVisHidden('desktop-dir');
  animateStart();
  flyingInit();
  g_taking_off = false;

  initDebugVars();
  debugClear();
  dbg_report = true;
  g_player.m_enemy_collision = false;
  setCssVar("--cracked-glass-display", "none");
}

function loopAfterBegin() {
  fixDevice();
  hideDiv('playing-game');
  initLanding();
  g_loop_state = LOOP_2_LANDING;
}

function loopLanding(land_speed) {
  g_loop_state = animateLanding(land_speed);
}

function loopAfterLanding() {
  initElevator();
  g_loop_state = LOOP_4_ELEVATOR;
}

function loopElevator(elevator_speed) {
  g_loop_state = animateElevator(elevator_speed);
}

function loopAfterElevator() {
  initPlay();
  g_drift_direction = MOVINGx_N;
  turnOnKeys();
  readyInputArrows();
  if (isDebugging()) {
    g_is_drifting = false;
  } else {
    g_is_drifting = true;
  }
  // hide landing from really tall phones    iPhone SE 375 x 667
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `display:none`;
  g_loop_state = LOOP_6_PLAY;
}

function loopPlay(enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list);
  if (g_taking_off) {
    g_loop_state = LOOP_7_AFTER_PLAY;
  } else {
    g_loop_state = LOOP_6_PLAY;
  }
  collisionShake();
  return [enemy_list, pylon_list];
}

function loopAfterPlay() {
  g_move_direction = MOVINGx_N;
  g_loop_state = LOOP_8_FLY;
}

function loopFly(fly_speed, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list);
  g_loop_state = animateFly(fly_speed);
  return [enemy_list, pylon_list];
}

function loopDone() {
  g_number_lands++;
  resetSections();
  g_loop_state = LOOP_0_BEGIN;
  sceneInit();
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  }
}

function initGame() {
  beginButtonInit();
  debugInit();
  gameInit();
  sceneInit();
}


function runGame(land_speed, elevator_speed, fly_speed) {
  initGame();
  gameLoop();

  function gameLoop() {
    debugFrameTime();
    if (g_loop_state == LOOP_0_BEGIN) {
      loopBegin();
    } else if (g_loop_state == LOOP_1_AFTER_BEGIN) {
      loopAfterBegin();
    } else if (g_loop_state == LOOP_2_LANDING) {
      loopLanding(land_speed);
    } else if (g_loop_state == LOOP_3_AFTER_LANDING) {
      loopAfterLanding();
    } else if (g_loop_state == LOOP_4_ELEVATOR) {
      loopElevator(elevator_speed);
    } else if (g_loop_state == LOOP_5_AFTER_ELEVATOR) {
      loopAfterElevator();
    } else if (g_loop_state == LOOP_6_PLAY) {
      [g_enemy_list, g_pylon_list] = loopPlay(g_enemy_list, g_pylon_list);
    } else if (g_loop_state == LOOP_7_AFTER_PLAY) {
      loopAfterPlay();
    } else if (g_loop_state == LOOP_8_FLY) {
      [g_enemy_list, g_pylon_list] = loopFly(fly_speed, g_enemy_list, g_pylon_list);
    } else if (g_loop_state == LOOP_9_DONE) {
      dbg_report = false;
      loopDone();
    } else {
      console.log("error ani", g_loop_state);
    }
    requestAnimationFrame(gameLoop);
    debugAnimation();
  }


}





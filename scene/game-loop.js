
function loopBegin() {
  divVisHidden('desktop-dir');
  animateStart();
  flyingInit();
  g_taking_off = false;
}


function loopAfterBegin() {
  fixDevice();
  hideDiv('playing-game');
  initLanding();
  g_loop_state = LOOP_2_LANDING;
}

function loopLanding() {
  g_loop_state = animateLanding();
}

function loopAfterLanding() {
  initElevator();
  g_loop_state = LOOP_4_ELEVATOR;
}

function loopElevator() {
  //console.log("go north");
  initPlay();
  g_drift_direction = MOVINGx_N;
  g_loop_state = animateElevator();
}

function loopAfterElevator() {
  turnOnKeys();
  readyInputArrows();


  g_is_drifting = true;
  //g_is_drifting = false;

  // hide landing from really tall phones    iPhone SE 375 x 667
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `display:none`;


  // initPlay();
  g_loop_state = LOOP_6_PLAY;
}

function loopPlay() {
  //initPlay();
  g_loop_state = animateScene();
  collisionShake();
}

function loopAfterPlay() {
  g_move_direction = MOVINGx_N;
  g_loop_state = LOOP_8_FLY;
}

function loopFly() {
  animateScene();
  g_loop_state = animateFly();
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

function gameLoop(_time_stamp) {
  //console.log("g_loop_state", g_loop_state);
  if (g_loop_state == LOOP_0_BEGIN) {
    loopBegin();
  } else if (g_loop_state == LOOP_1_AFTER_BEGIN) {
    loopAfterBegin();
  } else if (g_loop_state == LOOP_2_LANDING) {
    loopLanding();
  } else if (g_loop_state == LOOP_3_AFTER_LANDING) {
    loopAfterLanding();
  } else if (g_loop_state == LOOP_4_ELEVATOR) {
    // console.log('in elv');
    loopElevator();
  } else if (g_loop_state == LOOP_5_AFTER_ELEVATOR) {
    //console.log('in after elv');
    loopAfterElevator();
    //console.log("after elv ", g_loop_state);
  } else if (g_loop_state == LOOP_6_PLAY) {
    loopPlay();
  } else if (g_loop_state == LOOP_7_AFTER_PLAY) {
    loopAfterPlay();
  } else if (g_loop_state == LOOP_8_FLY) {
    console.log("8888");
    loopFly();
  } else if (g_loop_state == LOOP_9_DONE) {
    console.log("99999");
    loopDone();
  } else {
    console.log("error ani", g_loop_state);
  }
  requestAnimationFrame(gameLoop);
}











function objectSide(the_object) {
  let the_side;
  if (the_object.m_x < SCENE_MIDDLE_X) {
    the_side = LEFT_X_LOW;
  } else {
    the_side = RIGHT_X_HIGH;
  }
  return the_side;
}

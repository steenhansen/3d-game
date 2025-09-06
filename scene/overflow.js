
function objectSide(the_object) {
  let the_side;
  if (the_object.m_x < SCENE_MIDDLE_X) {
    the_side = LEFT_X_LOW;
  } else {
    the_side = RIGHT_X_HIGH;
  }
  return the_side;
}



function gameLoop(_time_stamp) {

  if (ani_sec == 'ani-begin') {
    animateStart();

  } else if (ani_sec == 'ani-after-begin') {
    initLanding();
    ani_sec = 'ani-landing';
  } else if (ani_sec == 'ani-landing') {
    ani_sec = animateLanding();
  } else if (ani_sec == 'ani-after-landing') {
    initElevator();
    ani_sec = 'ani-elevator';
  } else if (ani_sec == 'ani-elevator') {
    ani_sec = animateElevator();
  } else if (ani_sec == 'ani-after-elevator') {
    initPlay();
    ani_sec = 'ani-play';
  } else if (ani_sec == 'ani-play') {
    ani_sec = animateScene();
  } else if (ani_sec == 'ani-after-play') {
    g_move_direction = MOVINGx_N;
    ani_sec = 'ani-fly';
  } else if (ani_sec == 'ani-fly') {
    ani_sec = animateFly();
  } else if (ani_sec == 'ani-done') {
    resetSections();
    ani_sec = 'ani-begin';
    if (document.fullscreenElement != null) {
      document.exitFullscreen();
    }
  } else {
    console.log("error ani", ani_sec);
  }
  requestAnimationFrame(gameLoop);
}
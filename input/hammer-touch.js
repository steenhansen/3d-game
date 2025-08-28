const TOUCH_PRESS_TIME = 999;
const TOUCH_PRESS = 'e-press';

const TOUCH_SINGLE_TAP = 'e-single-tap';
const TOUCH_DOUBLE_TAP = 'e-double-tap';
const TOUCH_TRIPLE_TAP = 'e-triple-tap';

function hammerSingleTap(e) {
  direction_id = e.srcEvent.target.id;
  //  console.log('e-single-tap1', e, e.srcEvent, e.srcEvent.target);
  //console.log('e-single-tap2', e.srcEvent.target.id);
  if (g_move_continue == 0) {
    if (direction_id == "input-nw") {
      g_move_direction = MOVINGx_NW;
      direction_name = 'nw';
    } else if (direction_id == 'input-n') {
      g_move_direction = MOVINGx_N;
      direction_name = 'n';
    } else if (direction_id == 'input-ne') {
      g_move_direction = MOVINGx_NE;
      direction_name = 'ne';
    } else if (direction_id == 'input-e') {
      g_move_direction = MOVINGx_E;
      direction_name = 'e';
    } else if (direction_id == 'input-se') {
      g_move_direction = MOVINGx_SE;
      direction_name = 'se';
    } else if (direction_id == 'input-s') {
      g_move_direction = MOVINGx_S;
      direction_name = 's';
    } else if (direction_id == 'input-sw') {
      g_move_direction = MOVINGx_SW;
      //flashArrowBox('sw');
      direction_name = 'sw';
    } else if (direction_id == 'input-w') {
      g_move_direction = MOVINGx_W;
      //flashArrowBox('w');
      direction_name = 'w';
    } else {
      direction_name = 'unknown-tap-dir';
      // console.log("unkown TAP direction", direction_id);
    }
    if (direction_name != 'unknown-tap-dir') {
      flashArrowBox(direction_name);
    }
  }
}

function hammerDoubleTap(e) {
  the_missile_1 = launchMissile(the_missile_1);
  //console.log('e-double-tap SHOOT');
}

function hammerTripleTap(e) {
  //console.log('e-Triple-tap something');
}


function hammerPress(e) {
  //console.log('pressHammer');
  stopMoving();
}

function hammerSwipe(e) {
  //console.log('swipeHammer');
  // var swipe_direction = e.offsetDirection;
  document.exitFullscreen();
}


function turnOnHammerGestures(div_id) {
  var the_scene = document.getElementById(div_id);
  var tap_manager = new Hammer.Manager(the_scene);

  enableTouch321Click(tap_manager);
  // enableTouch21Click(tap_manager);
  // enableTouch1Click(tap_manager);

  enableTouchPress(tap_manager);
  enableTouchSwipe(tap_manager);
}



function enableTouch321Click(tap_manager) {
  var single_tap = new Hammer.Tap({ event: TOUCH_SINGLE_TAP });
  tap_manager.add(single_tap);
  tap_manager.on(TOUCH_SINGLE_TAP, hammerSingleTap);

  var double_tap = new Hammer.Tap({ event: TOUCH_DOUBLE_TAP, taps: 2 });
  tap_manager.add(double_tap);
  tap_manager.on(TOUCH_DOUBLE_TAP, hammerDoubleTap);

  var triple_tap = new Hammer.Tap({ event: TOUCH_TRIPLE_TAP, taps: 3 });
  tap_manager.add(triple_tap);
  tap_manager.on(TOUCH_TRIPLE_TAP, hammerTripleTap);

  tap_manager.add([triple_tap, double_tap, single_tap]);

  triple_tap.recognizeWith([double_tap, single_tap]);

  double_tap.recognizeWith(single_tap);
  double_tap.requireFailure(triple_tap);

  single_tap.requireFailure([triple_tap, double_tap]);
}

function enableTouch21Click(tap_manager) {
  var single_tap = new Hammer.Tap({ event: TOUCH_SINGLE_TAP });
  tap_manager.add(single_tap);
  tap_manager.on(TOUCH_SINGLE_TAP, hammerDoubleTap);

  var double_tap = new Hammer.Tap({ event: TOUCH_DOUBLE_TAP, taps: 2 });
  tap_manager.add(double_tap);
  tap_manager.on(TOUCH_DOUBLE_TAP, hammerDoubleTap);

  tap_manager.add([double_tap, single_tap]);

  double_tap.recognizeWith(single_tap);

  single_tap.requireFailure([double_tap]);
}

function enableTouch1Click(tap_manager) {
  var single_tap = new Hammer.Tap({ event: TOUCH_SINGLE_TAP });
  tap_manager.add(single_tap);
  tap_manager.on(TOUCH_SINGLE_TAP, hammerSingleTap);
  tap_manager.add(single_tap);
}

function enableTouchPress(tap_manager) {
  var press_stop = new Hammer.Press({
    event: TOUCH_PRESS,
    time: TOUCH_PRESS_TIME
  });
  tap_manager.add(press_stop);
  tap_manager.on(TOUCH_PRESS, hammerPress);
}




function enableTouchSwipe(tap_manager) {
  var swipe_quit = new Hammer.Swipe();
  tap_manager.add(swipe_quit);
  tap_manager.on('swipe', hammerSwipe);
}
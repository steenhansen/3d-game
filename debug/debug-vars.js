

let dbg_start_swipe_x = 0;
let dbg_start_swipe_y = 0;
let dbg_end_swipe_x = 0;
let dbg_end_swipe_y = 0;
let dbg_swipe_dir = "no-swipe-dir";

let dbg_report = true;


function initDebugVars() {
  dbg_start_swipe_x = 0;
  dbg_start_swipe_y = 0;
  dbg_end_swipe_x = 0;
  dbg_end_swipe_y = 0;
  dbg_swipe_dir = "no-swipe-dir";
}


function testToField(test_name) {
  TEST_NAME = test_name;
  initGame();
  loopAfterBegin();
  loopAfterLanding();
  elevatorInOneStep();
  loopAfterElevator();

}
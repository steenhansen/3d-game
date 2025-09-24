

let g_start_swipe_x = 0;
let g_start_swipe_y = 0;
let g_end_swipe_x = 0;
let g_end_swipe_y = 0;
let g_swipe_dir = "no-swipe-dir";

let dbg_report = true;


function initDebugVars() {
  g_start_swipe_x = 0;
  g_start_swipe_y = 0;
  g_end_swipe_x = 0;
  g_end_swipe_y = 0;
  g_swipe_dir = "no-swipe-dir";
}


function testToField(test_name) {
  TEST_NAME = test_name;
  initGame();
  loopAfterBegin();
  loopAfterLanding();
  elevatorInOneStep();
  loopAfterElevator();

}
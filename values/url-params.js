
/*
 if true then debugging 
  if commented out or false then normal

if (typeof DBG_MISSILE_ADVANCE == 'string') {
  return the_missile;
}
*/


// file:///c%3A/Users/16043/Documents/GitHub/3ddd/index.html?debug-env=true
var g_is_debugging = 'unknown';
function isDebugging() {
  if (g_is_debugging == 'unknown') {
    location_url = new URL(window.location);
    debug_param = location_url.searchParams.get("debug-env");  // debug-env
    g_is_debugging = (debug_param == 'true');
  }
  return g_is_debugging;
}


//  file:///c%3A/Users/16043/Documents/GitHub/3ddd/index.html?mobile-downgrade=false
var g_mobile_downgrading = 'unknown';
function mobileDowngrade() {
  if (g_mobile_downgrading == 'unknown') {
    location_url = new URL(window.location);
    mobile_downgrade = location_url.searchParams.get("mobile-downgrade");
    // console.log("mobile_downgrade", mobile_downgrade);
    g_mobile_downgrading = (mobile_downgrade != 'false');
    //  console.log("g_mobile_downgrading", g_mobile_downgrading);
  }
  return g_mobile_downgrading;
}

function urlParams() {
  isDebugging();
  mobileDowngrade();
}

function gotoLoopState() {
  location_url = new URL(window.location);
  loop_state = location_url.searchParams.get("g_loop_state");
  console.log("debug_param: " + debug_param);
  // g_loop_state = LOOP_0_DESKTOP_START;     //debug_param;
  g_loop_state = loop_state;
  console.log("g_loop_state: " + loop_state);
}


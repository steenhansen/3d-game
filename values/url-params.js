
/*
 if true then debugging 
  if commented out or false then normal

if (typeof DBG_MISSILE_ADVANCE == 'string') {
  return the_missile;
}
*/


// file:///c%3A/Users/16043/Documents/GitHub/3ddd/index.html?debug-env=true
//dbg_is_debugging = 'unknown';
function isDebugging() {
  if (dbg_is_debugging == 'unknown') {
    location_url = new URL(window.location);
    debug_param = location_url.searchParams.get(DEBUG_PARAM_ENV);
    dbg_is_debugging = (debug_param == 'true');
  }
  return dbg_is_debugging;
}


//  file:///c%3A/Users/16043/Documents/GitHub/3ddd/index.html?mobile-downgrade=false
// g_mobile_downgrading = 'unknown';
function mobileDowngrade() {
  if (g_mobile_downgrading == 'unknown') {
    location_url = new URL(window.location);
    mobile_downgrade = location_url.searchParams.get("mobile-downgrade");
    g_mobile_downgrading = (mobile_downgrade != 'false');
  }
  return g_mobile_downgrading;
}

function urlParams() {
  isDebugging();
  mobileDowngrade();
}

function getParams(window_location) {
  location_url = new URL(window_location);
  debug_param = location_url.searchParams.get(DEBUG_PARAM_ENV);
  degrade_param = location_url.searchParams.get(DEGRADE_PARAM_SCROLL);
  the_params = [];
  if (debug_param == 'true') {
    the_params.push(`${DEBUG_PARAM_ENV}=true`);
  }
  available_degrades = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (available_degrades.includes(degrade_param)) {
    the_params.push(`${DEGRADE_PARAM_SCROLL}=${degrade_param}`);
  }

  let params_string = "";
  if (the_params.length > 0) {

    params_string = "?" + the_params.join("&");
  }
  return params_string;



}


function getDegradeParam(window_location) {
  location_url = new URL(window_location);
  degrade_param = location_url.searchParams.get(DEGRADE_PARAM_SCROLL);
  degrade_init = 0;
  if (degrade_param) {
    degrade_int = parseInt(degrade_param);
    degrade_init += degrade_int;
  }
  return degrade_init;
}
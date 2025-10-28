
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
    debug_param = location_url.searchParams.get("debug-env");  // debug-env
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


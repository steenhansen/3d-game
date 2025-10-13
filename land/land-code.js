




const STOP_FLY_COUNT = 700;
const STOP_JUMP_UP_DOWN = 100;

var START_FAST_FLY_COUNT = STOP_FLY_COUNT - 1;

function animateHoleHit(g_player) {
  g_player.m_num_cracks++;
  return g_player;
}

function animateHoleInside(g_player) {
  return g_player;
}

function animateHoleLeave(g_player) {
  return g_player;
}


// function flyingInit() {
//   lift_amount_f = 0;
// }



const JUMP_STEP = 3;

function animateJumpUp(g_player) {
  g_player.t_jump_amount += JUMP_STEP;
  if (g_player.t_jump_amount > STOP_JUMP_UP_DOWN) {
    return [g_player, LOOP_7_PLAY_C_JUMP_DOWN];
  }
  doFlying(g_player.t_jump_amount);
  return [g_player, LOOP_7_PLAY_B_JUMP_UP];
}

function animateJumpDown(g_player) {
  g_player.t_jump_amount -= JUMP_STEP;
  if (g_player.t_jump_amount < 1) {
    delete g_player.t_jump_amount;
    return [g_player, LOOP_7_PLAY_NORMAL];
  }
  doFlying(g_player.t_jump_amount);
  return [g_player, LOOP_7_PLAY_C_JUMP_DOWN];
}



function animateFly(fly_speed, g_player) {
  if (fly_speed == FAST_FLY) {
    doFlying(STOP_FLY_COUNT - 1);
    delete g_player.t_fly_amount;
    return [g_player, LOOP_10_DONE];
  } else if (fly_speed == SLOW_FLY) {
    g_player.t_fly_amount += FLY_STEP;
    if (g_player.t_fly_amount > STOP_FLY_COUNT) {
      delete g_player.t_fly_amount;
      return [g_player, LOOP_10_DONE];
    }
    doFlying(g_player.t_fly_amount);
    return [g_player, LOOP_9_FLY];
  } else {
    g_player.t_fly_amount += 1.5;
    if (g_player.t_fly_amount > STOP_FLY_COUNT) {
      delete g_player.t_fly_amount;
      return [g_player, LOOP_10_DONE];
    }
    doFlying(g_player.t_fly_amount);
    return [g_player, LOOP_9_FLY];
  }
}



function doFlying(lift_amount_x) {
  const sky_aperature = document.getElementById('sky-aperature');
  sky_height = 256 + lift_amount_x;
  sky_aperature.style.height = `${sky_height}px`;

  const the_sky = document.getElementById('the-sky');
  margin_top = -1000 - lift_amount_x;
  the_sky.marginTop = `${margin_top}px`;
  height_sky = 2400 + 4 * lift_amount_x;
  the_sky.style.height = `${height_sky}px`;

  const pylon_html = document.getElementById('pylon-html');
  pylon_html.style.top = `${lift_amount_x}px`;

  const holes_html = document.getElementById('hole-html');
  holes_html.style.top = `${lift_amount_x}px`;

  const enemy_area = document.getElementById('enemy-area');
  enemy_area.style.top = `${lift_amount_x}px`;

  const the_sun = document.getElementById('the-sun');
  the_sun.style.top = `${lift_amount_x}px`;

  const missile_area = document.getElementById('missile-area');
  missile_area.style.top = `${lift_amount_x}px`;


  const saturn_planet = document.getElementById('saturn-space');

  saturn_x = lift_amount_x - 200;

  saturn_planet.style.left = `${saturn_x}px`;




  //  if (lift_amount_x > 289) {
  if (lift_amount_x > 350) {
    const saturn_space = document.getElementById('star-space');
    // doStyle('star-space', opacity, `${lift_amount_x}px`); 
    saturn_opacity = (lift_amount_x - 350) / 300;

    saturn_space.style.opacity = saturn_opacity;
  }



}













num_lines = 255;

function expandCheckerboard(the_count) {
  let normal_line = `background-position: -${the_count + 1}px -${the_count}px`;
  let flip_line = `background-position: 0px                 -${the_count}px`;
  let flip_count = 0;
  let is_flip = false;
  for (let cur_line = 0; cur_line < num_lines; cur_line++) {
    const reverse_vertical = num_lines - cur_line - 1;
    const ne_element = document.getElementById(`ne${reverse_vertical}`);
    const se_element = document.getElementById(`se${cur_line}`);
    const sw_element = document.getElementById(`sw${cur_line}`);
    const nw_element = document.getElementById(`nw${reverse_vertical}`);
    if (is_flip) {
      ne_element.style = flip_line;
      se_element.style = normal_line;
      sw_element.style = flip_line;
      nw_element.style = normal_line;
    } else {
      ne_element.style = normal_line;
      se_element.style = flip_line;
      sw_element.style = normal_line;
      nw_element.style = flip_line;
    }
    flip_count++;
    if (flip_count == the_count) {
      flip_count = 0;
      is_flip = !is_flip;
    }
  }
}






function flashScrollingArrow(arrow_id) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  const an_arrow = document.getElementById(arrow_id);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  let flash_grey = `fill: ${rgb}; opacity:100%`;
  an_arrow.style = flash_grey;
}



function readyInputArrows() {


  stopFlashArrow('arrow-nw');
  stopFlashArrow('arrow-n');
  stopFlashArrow('arrow-ne');
  stopFlashArrow('arrow-e');
  stopFlashArrow('arrow-se');
  stopFlashArrow('arrow-s');
  stopFlashArrow('arrow-sw');
  stopFlashArrow('arrow-w');
}

// what is this????
function stopFlashArrow(arrow_id) {
  // const stop_arrow = document.getElementById(arrow_id);
  // let flash_none = `fill: rgb(0 ,0 , 0)`;
  // stop_arrow.style = flash_none;
}









function divVisVisible(hide_id) {
  let hide_div = document.getElementById(hide_id);
  hide_div.style.visibility = 'visible';
}

function divVisHidden(unhide_id) {
  let hide_div = document.getElementById(unhide_id);
  hide_div.style.visibility = 'hidden';
}



//  divDispNone
function hideDiv(hide_id) {
  let hide_div = document.getElementById(hide_id);
  hide_div.style.display = 'none';
}

// divDispHide
function unHideDiv(unhide_id) {
  let hide_div = document.getElementById(unhide_id);
  hide_div.style.display = 'block';
}

function initLanding() {
  // hideDiv('click-to-begin');
  hideDiv('start-mobile');
  unHideDiv('the-scene');
}


var landing_count = 0;

function landingInit() {
  landing_count = 0;
  setLandingScroll(0);
}



function animateLanding(land_speed) {
  if (land_speed == FAST_LAND) {
    expandCheckerboard(255);
    return LOOP_4_AFTER_LANDING;
  } else if (land_speed == SLOW_LAND) {
    landing_count += 0.25;
    if (landing_count == num_lines) {
      return LOOP_4_AFTER_LANDING;
    } else {
      int_landing_count = Math.floor(landing_count);
      expandCheckerboard(int_landing_count);
      return LOOP_3_LANDING;
    }
  } else {
    landing_count++;
    if (landing_count == num_lines) {
      return LOOP_4_AFTER_LANDING;
    } else {
      expandCheckerboard(landing_count);
      return LOOP_3_LANDING;
    }
  }
}



function initPlay() {
  divVisVisible('desktop-dir');
  // unHideDiv('start-mobile');

  if (isMobile()) {
    fixMobile();
  } else {
    fixDesktop();
  }
  //fixMobile();
}


m_top_playing_game = -512;
m_top_the_land = 0;

function initElevator() {
  m_top_playing_game = -512;
  m_top_the_land = 0;
}




function elevatorInOneStep() {
  while (m_top_playing_game !== 0) {
    m_top_playing_game += 2;
    m_top_the_land += 2;
    moveCheckerboardOnce(m_top_playing_game, m_top_the_land);
  }
}


function animateElevator(elevator_speed) {
  if (elevator_speed == FAST_ELEVATOR) {
    elevatorInOneStep();
    return LOOP_6_AFTER_ELEVATOR;
  } else if (elevator_speed == SLOW_ELEVATOR) {
    m_top_playing_game += 0.5;
    m_top_the_land += 0.5;
    moveCheckerboardOnce(m_top_playing_game, m_top_the_land);
    if (m_top_playing_game == 0) {
      return LOOP_6_AFTER_ELEVATOR;
    } else {
      return LOOP_5_ELEVATOR;
    }
  } else {
    m_top_playing_game += 2;
    m_top_the_land += 2;
    moveCheckerboardOnce(m_top_playing_game, m_top_the_land);
    if (m_top_playing_game == 0) {
      return LOOP_6_AFTER_ELEVATOR;
    } else {
      return LOOP_5_ELEVATOR;
    }
  }
}






function setLandingScroll(the_pixels) {
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `top:${the_pixels}px`;
}

function moveCheckerboardOnce(top_playing_game, top_the_land) {

  const playing_game = document.getElementById(`playing-game`);
  playing_game.style = `top:${top_playing_game}px`;
  const the_landing = document.getElementById(`the-landing`);
  the_landing.style = `top:${top_the_land}px`;
  flashScrollingArrow('arrow-nw');
  flashScrollingArrow('arrow-n');
  flashScrollingArrow('arrow-ne');
  flashScrollingArrow('arrow-e');
  flashScrollingArrow('arrow-se');
  flashScrollingArrow('arrow-s');
  flashScrollingArrow('arrow-sw');
  flashScrollingArrow('arrow-w');
}

function animateStart() {
  const saturn_space = document.getElementById('star-space');
  saturn_space.style.opacity = 0;
}


function resetSections() {
  hideDiv('the-scene');
  divVisHidden('desktop-dir');
  // unHideDiv('click-to-begin');


  //hideDiv('start-mobile');



  doFlying(0);
  g_taking_off = false;
  g_move_direction = MOVINGx_NOT;



  landingInit();
  initElevator();


}

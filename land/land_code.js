
function animateStart() {
  const saturn_space = document.getElementById('saturn-space');
  saturn_space.style.opacity = 0;

  //console.log("ani-begin");
}


function resetSections() {
  hideDiv('the-scene');
  hideDiv('desktop-dir');
  unHideDiv('click-to-begin');


  //hideDiv('start-mobile');



  doFlying(0);
  g_taking_off = false;
  g_move_direction = MOVINGx_NOT;



  landingInit();
  initElevator();
  flyingInit();

}



var lift_amount_f = 0;
function flyingInit() {
  lift_amount_f = 0;
}




function animateFly() {
  if (fast_init_fly == 'fast-init-fly') {
    lift_amount_f = 489;
  }
  lift_amount_f++;
  // if taking_off then no bounce hitting works
  // console.log('fly', lift_amount_f);
  if (lift_amount_f == 490) {
    return 'ani-done';
  }
  doFlying(lift_amount_f);
  return 'ani-fly';
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

  const column_html = document.getElementById('column-html');
  column_html.style.top = `${lift_amount_x}px`;

  const enemy_area = document.getElementById('enemy-area');
  enemy_area.style.top = `${lift_amount_x}px`;

  const the_sun = document.getElementById('the-sun');
  the_sun.style.top = `${lift_amount_x}px`;

  const missile_area = document.getElementById('missile-area');
  missile_area.style.top = `${lift_amount_x}px`;


  //  if (lift_amount_x > 289) {
  if (lift_amount_x > 350) {
    const saturn_space = document.getElementById('saturn-space');
    // doStyle('saturn-space', opacity, `${lift_amount_x}px`); 
    saturn_opacity = (lift_amount_x - 350) / 300;
    console.log("saturn_opacity", saturn_opacity);
    saturn_space.style.opacity = saturn_opacity;
  }



}















// function skipLand() {
//   setLandingScroll(0);
//   readyInputArrows();
// }


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

function setLandingScroll(the_pixels) {
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `top:${the_pixels}px`;
}



function moveCheckerboardOnce(top_playing_game, top_the_land) {

  const playing_game = document.getElementById(`playing-game`);
  playing_game.style = `bottom:${top_playing_game}px`;
  //  m_top_the_land += 2;
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

function stopFlashArrow(arrow_id) {
  // const stop_arrow = document.getElementById(arrow_id);
  // let flash_none = `fill: rgb(0 ,0 , 0)`;
  // stop_arrow.style = flash_none;
}




//
//  https://javascript.info/async-await
//

// async function doLanding(skip_intro) {
//   if (skip_intro) {
//   } else {
//     // let first_time;
//     g_landing = true;
//     //    requestAnimationFrame(startLanding);
//     requestAnimationFrame(continueLanding);
//     // function startLanding(timestamp) {
//     //   first_time = timestamp;
//     //   g_landing = true;
//     //   continueLanding(timestamp);
//     // }
//   }
//   m_top_playing_game = 512;
//   m_top_the_land = 0;
// }





function oneLanding(time_stamp) {
  if (landing_count == 0)

    requestAnimationFrame(continueLanding);
  // console.log("doLanding", landing_count);
  // landing_count++;
  landing_count++;
  if (landing_count <= num_lines) {
    expandCheckerboard(landing_count);
    requestAnimationFrame(continueLanding);
  } else {
    g_program_state = 'state-elevator';
    // requestAnimationFrame(scrollLandUp);
  }
  return;
}


function hideDiv(hide_id) {
  let hide_div = document.getElementById(hide_id);
  hide_div.style.display = 'none';
}

function unHideDiv(unhide_id) {
  let hide_div = document.getElementById(unhide_id);
  hide_div.style.display = 'block';
}

function initLanding() {
  hideDiv('click-to-begin');
  hideDiv('start-mobile');
  unHideDiv('the-scene');
}

var landing_count = 0;

function landingInit() {
  landing_count = 0;
  setLandingScroll(0);
}

function animateLanding() {
  // hideDiv('click-to-begin');
  // unHideDiv('the-scene');
  if (fast_init_land == 'fast-init-land') {
    landing_count = num_lines;
  } else {
    landing_count++;
  }
  //console.log("ani-landing", landing_count, num_lines);
  if (landing_count == num_lines) {
    return 'ani-after-landing';
  } else {
    expandCheckerboard(landing_count);
    return 'ani-landing';
  }
}

function initPlay() {
  unHideDiv('desktop-dir');
  // unHideDiv('start-mobile');
  if (isMobile()) {
    fixMobile();
  } else {
    fixDesktop();
  }
  //fixMobile();
}



//m_top_playing_game = 512;
//m_top_the_land = 0;

// no leading n
// maybe p_top_playing_game  for procedure
m_top_playing_game = 512;
m_top_the_land = 0;

function initElevator() {
  m_top_playing_game = 512;
  m_top_the_land = 0;
}

function animateElevator() {
  //console.log("asdf 1111111", m_top_playing_game, m_top_the_land, landing_speed);
  if (fast_init_elevator == 'fast-init-elevator') {
    m_top_the_land = 510;
    m_top_playing_game = 2;
  }
  //console.log("asdf 2222222222222", m_top_playing_game, m_top_the_land);
  m_top_playing_game -= 2;
  m_top_the_land += 2;
  //console.log("asdf 33333333333", m_top_playing_game, m_top_the_land);

  //console.log("asdf fdd", m_top_playing_game, m_top_the_land);
  moveCheckerboardOnce(m_top_playing_game, m_top_the_land);
  if (m_top_the_land == 512) {
    INTRO_FINISHED = true;
    g_landing = false;
    g_playing = true;
    turnOnKeys();
    //console.log("land_code INTRO FINISHED YES");
    readyInputArrows();
    return 'ani-after-elevator';
  } else {
    return 'ani-elevator';
  }
}


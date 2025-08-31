
function takeOff(lift_amount) {
  const sky_aperature = document.getElementById('sky-aperature');
  sky_height = 256 + lift_amount;
  sky_aperature.style.height = `${sky_height}px`;

  const the_sky = document.getElementById('the-sky');
  margin_top = -1000 - lift_amount;
  the_sky.marginTop = `${margin_top}px`;
  height_sky = 2400 + 4 * lift_amount;
  the_sky.style.height = `${height_sky}px`;

  const column_html = document.getElementById('column-html');
  column_html.style.top = `${lift_amount}px`;


  const enemy_area = document.getElementById('enemy-area');
  enemy_area.style.top = `${lift_amount}px`;

  const the_sun = document.getElementById('the-sun');
  the_sun.style.top = `${lift_amount}px`;

  const missile_area = document.getElementById('missile-area');
  missile_area.style.top = `${lift_amount}px`;
  console.log('in take off !!!!!!!!!!!!!! ', lift_amount);
}



function skipLand() {
  setLandingScroll(0);
  readyInputArrows();
}

let new_count = 0;
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


function continueLanding(timestamp) {
  new_count++;
  //    console.log("sadfasd new_count < num_lines", new_count, num_lines);
  if (new_count <= num_lines) {
    expandCheckerboard(new_count);
    requestAnimationFrame(continueLanding);
  } else {
    requestAnimationFrame(scrollLandUp);
  }
}



function setLandingScroll(the_pixels) {
  //const playing_game = document.getElementById(`playing-game`);
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `top:${the_pixels}px`;
}

// function doLanding(show_intro) {
//   if (show_intro) {
//     startLand(true);
//   } else {
//     skipLand();
//   }
// }
function scrollLandUp(timestamp) {
  //console.log("scrroll up");
  m_top_playing_game -= 2;;

  const playing_game = document.getElementById(`playing-game`);
  playing_game.style = `bottom:${m_top_playing_game}px`;

  m_top_the_land += 2;
  //setLandingScroll(m_top_the_land);
  const the_landing = document.getElementById(`the-landing`);
  the_landing.style = `top:${m_top_the_land}px`;

  flashScrollingArrow('arrow-nw');
  flashScrollingArrow('arrow-n');
  flashScrollingArrow('arrow-ne');
  flashScrollingArrow('arrow-e');
  flashScrollingArrow('arrow-se');
  flashScrollingArrow('arrow-s');
  flashScrollingArrow('arrow-sw');
  flashScrollingArrow('arrow-w');
  //console.log("m-top", m_top_the_land);
  if (m_top_the_land < 512) {  ////512
    requestAnimationFrame(scrollLandUp);
  } else {
    INTRO_FINISHED = true;
    turnOnKeys();

    console.log("land_code INTRO FINISHED YES");
    readyInputArrows();
  }
}

function startLand(skip_intro) {
  if (skip_intro) {

    //    console.log("sadfasd new_count < num_lines", new_count, num_lines);
    // while (new_count <= num_lines) {
    //   expandCheckerboard(new_count);
    //   new_count++;
    // }


  } else {

    let first_time;

    requestAnimationFrame(startLanding);

    function startLanding(timestamp) {
      first_time = timestamp;
      continueLanding(timestamp);
    }
  }

  m_top_playing_game = 512;
  m_top_the_land = 0;

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
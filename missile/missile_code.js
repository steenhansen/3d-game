
const OUTSIDE_ID_START = 100;
const MIDDLE_ID_START = 200;
const CENTER_ID_START = 300;

const NUM_OUTSIDE_BALLS = 32;
const NUM_MIDDLE_BALLS = 16;
const NUM_CENTER_BALLS = 8;


function launchMissile(the_missile) {
  let { m_x, m_y } = g_player;
  the_missile.m_x = m_x;
  the_missile.m_y = m_y;
  the_missile.m_lifetime = MISSILE_LIFETIME;
  the_missile.m_expired = false;
  //console.log("dfsa", the_missile);
  return the_missile;
}

function missileAdvance(the_missile) {
  if (the_missile.m_expired) {
    return the_missile;
  }
  if (the_missile.m_lifetime > 0) {
    the_missile.m_lifetime--;
  } else {
    the_missile.m_expired = true;

  }
  let { m_x_dir, m_y_dir } = the_missile;
  the_missile.m_y = backwardOnBoard(the_missile.m_y, m_y_dir * -1 * TRAVEL_SPEED * 2);
  return the_missile;
}




function getRandomSize(missile_id, start_size15, max_rand10) {
  let gg = Math.floor(Math.random() * 7);
  if (gg == 0) {
    let r = Math.floor(Math.random() * max_rand10) + start_size15;
    let missile_fill = "--missile-size-" + missile_id;
    let circle_size = `${r}px`;

    missile_area = document.getElementById('missile-area');
    document.documentElement.style.setProperty(missile_fill, circle_size);
  }

}



function getRandomColorDark(missile_id) {
  let gg = Math.floor(Math.random() * 8);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 32) + 224;
    let g = 0;
    let b = 0;
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomColorMedium(missile_id) {
  let gg = Math.floor(Math.random() * 8);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 32) + 224;
    let g = Math.floor(Math.random() * 32) + 100;
    let b = Math.floor(Math.random() * 32) + 100;
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomColorBright(missile_id) {
  let gg = Math.floor(Math.random() * 8);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 32) + 224;
    let g = Math.floor(Math.random() * 32) + 175;
    let b = Math.floor(Math.random() * 32) + 175;
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomFill(missile_id) {
  let missile_display = "--missile-display-" + missile_id;
  let gg = Math.floor(Math.random() * 3);
  if (gg == 0) {
    display_none_block = `none`;
  } else {
    display_none_block = `block`;
  }
  document.documentElement.style.setProperty(missile_display, display_none_block);
}

function hideMissileBalls(missile_id) {
  let missile_display = "--missile-display-" + missile_id;
  display_none_block = `none`;
  document.documentElement.style.setProperty(missile_display, display_none_block);
}

function setFillNone() {
  for (let i = 100; i < 132; i++) {
    hideMissileBalls(i);
  }
  for (let i = 200; i < 216; i++) {
    hideMissileBalls(i);
  }
  for (let i = 300; i < 308; i++) {
    hideMissileBalls(i);
  }
}



function getRandoms() {
  for (let i = 0; i < NUM_OUTSIDE_BALLS; i++) {
    outside_missile = OUTSIDE_ID_START + i;
    getRandomColorDark(outside_missile);
    getRandomSize(outside_missile, 15, 10);
    getRandomFill(outside_missile);
  }
  for (let i = 0; i < NUM_MIDDLE_BALLS; i++) {
    middle_missile = MIDDLE_ID_START + i;
    getRandomColorMedium(middle_missile);
    getRandomSize(middle_missile, 20, 10);
    getRandomFill(middle_missile);
  }
  for (let i = 0; i < NUM_CENTER_BALLS; i++) {
    center_missile = CENTER_ID_START + i;
    getRandomColorBright(center_missile);
    getRandomSize(center_missile, 20, 10);
    getRandomFill(center_missile);
  }
}


function missileSet(real_id, the_missile, g_player) {
  collision_1a = hasCollided(column_1a, the_missile, COLLISION_SIZES);
  collision_2a = hasCollided(column_2a, the_missile, COLLISION_SIZES);
  collision_2b = hasCollided(column_2b, the_missile, COLLISION_SIZES);
  collision_3a = hasCollided(column_3a, the_missile, COLLISION_SIZES);
  collision_3b = hasCollided(column_3b, the_missile, COLLISION_SIZES);
  collision_3c = hasCollided(column_3c, the_missile, COLLISION_SIZES);

  //collision_3c = hasCollided(column_3c, the_missile, COLLISION_SIZES);

  has_collided = collision_1a || collision_2a || collision_2b || collision_3a || collision_3b || collision_3c;
  if (has_collided) {
    the_missile.m_expired = true;
  }

  if (the_missile.m_expired) {
    setFillNone();
  } else {
    getRandoms();
  }
  spriteDraw(real_id, the_missile, g_player);
}


html_missile_1 = makeMissile('missile-1');


document.getElementById('missile-area').innerHTML = `
<div id="the-missile-1" >${html_missile_1}</div>`;

let the_missile_1 = {
  s_isa: "is-missile",
  s_id: "missile-1",
  m_x: MISSILE_START_X, m_y: MISSILE_START_Y,

  m_lifetime: MISSILE_LIFETIME,
  m_expired: true,
  m_x_dir: 0, m_y_dir: -1,   // ALWAYS THIS
};


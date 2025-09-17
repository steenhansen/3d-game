
const OUTSIDE_ID_START = 100;
const MIDDLE_ID_START = 200;
const CENTER_ID_START = 300;

const NUM_OUTSIDE_BALLS = 32;
const NUM_MIDDLE_BALLS = 16;
const NUM_CENTER_BALLS = 8;

const NUM_TOTAL_BALLS = NUM_OUTSIDE_BALLS + NUM_MIDDLE_BALLS + NUM_CENTER_BALLS;  // 56



function randomMissileSize(start_size, max_rand) {
  let gg = Math.floor(Math.random() * 7);
  let circle_size = '';
  if (gg == 0) {
    let r = Math.floor(Math.random() * max_rand) + start_size;
    circle_size = `${r}px`;
  }
  return circle_size;
}


//function randomMissileColor([32, 0, 0], [244, 0, 0]) {
function randomMissileColor(rgb_ranges, rgb_bases) {
  let [red_range, green_range, blue_range] = rgb_ranges;
  let [red_base, green_base, blue_base] = rgb_bases;
  let non_zero_change = Math.floor(Math.random() * 8);
  if (non_zero_change == 0) {
    return '';
  } else {
    let none_zero_hide = Math.floor(Math.random() * 3);
    if (none_zero_hide == 0) {
      return `rgb(1,2,3,0)`;
    }
    r = Math.floor(Math.random() * red_range) + red_base;
    //   console.log(" r", r);
    g = Math.floor(Math.random() * green_range) + green_base;
    b = Math.floor(Math.random() * blue_range) + blue_base;
    rgba = `rgb(${r}, ${g}, ${b}, 1)`;
    return rgba;
  }
}

function makeList() {
  let out_arr = [];
  for (let i = 0; i < 360; i++) {   // 6 sec == 60fps * 6  
    let in_arr = [];
    for (let j = 0; j < NUM_OUTSIDE_BALLS; j++) {
      outside_missile_id = OUTSIDE_ID_START + j;
      m_size = randomMissileSize(10, 15);
      //      m_color = randomMissileColor([32, 0, 0], [223, 0, 0]);
      m_color = randomMissileColor([128, 0, 0], [255 - 128, 0, 0]);
      if (m_size !== '' || m_color !== '') {
        // console.log(" m_color", m_color);
        t_arr = [outside_missile_id, m_size, m_color];
        in_arr.push(t_arr);
      }
    }
    for (let j = 0; j < NUM_MIDDLE_BALLS; j++) {
      outside_missile_id = MIDDLE_ID_START + j;
      m_size = randomMissileSize(10, 20);
      m_color = randomMissileColor([32, 32, 32], [223, 100, 100]);
      if (m_size !== '' || m_color !== '') {
        t_arr = [outside_missile_id, m_size, m_color];
        in_arr.push(t_arr);
      }
    }
    for (let j = 0; j < NUM_CENTER_BALLS; j++) {
      outside_missile_id = CENTER_ID_START + j;
      m_size = randomMissileSize(15, 20);
      m_color = randomMissileColor([32, 32, 32], [223, 175, 175]);
      if (m_size !== '' || m_color !== '') {
        t_arr = [outside_missile_id, m_size, m_color];
        in_arr.push(t_arr);
      }
    }
    out_arr.push(in_arr);
  }
  return out_arr;
}

function getRandoms() {
  //out_arr = makeList();
  missile_area = document.querySelector('.missile-class');
  let this_tick = g_missile_states[g_missile_iteration];
  for (let j = 0; j < this_tick.length; j++) {
    let [the_id, the_size, the_color] = this_tick[j];
    if (the_size !== '') {
      let missile_size = "--missile-size-" + the_id;
      missile_area.style.setProperty(missile_size, the_size);
    }
    if (the_color !== '') {
      let missile_fill = "--missile-fill-" + the_id;
      missile_area.style.setProperty(missile_fill, the_color);
      // if (the_id == 131) {
      //   console.log(" ----", missile_fill, the_color);
      // }
    }
  }

  g_missile_iteration++;
  if (g_missile_iteration == 360) {
    g_missile_iteration = 0;
  }
}










function launchMissile(the_missile) {
  let { m_x, m_y } = g_player;
  the_missile.m_x = m_x;
  the_missile.m_y = m_y;
  the_missile.m_lifetime = MISSILE_LIFETIME;
  the_missile.m_expired = false;
  return the_missile;
}

function missileAdvance(the_missile) {
  if (typeof DBG_MISSILE_ADVANCE == 'string') {
    return the_missile;
  }
  if (the_missile.m_expired) {
    return the_missile;
  }
  if (the_missile.m_lifetime > 0) {
    the_missile.m_lifetime--;
  } else {
    the_missile.m_expired = true;

  }
  let { m_x_dir, m_y_dir } = the_missile;


  if (m_x_dir < 0) {
    the_missile.m_x = leftOnBoard(the_missile.m_x, m_x_dir * -4 * 3);
  } else if (m_x_dir > 0) {
    the_missile.m_x = rightOnBoard(the_missile.m_x, m_x_dir * 4 * 3);
  }



  the_missile.m_y = backwardOnBoard(the_missile.m_y, m_y_dir * -1 * TRAVEL_SPEED * 2);
  return the_missile;
}




// stupid way to do this!!!!!!!
function hideMissileBalls(missile_id) {
  let missile_fill = "--missile-fill-" + missile_id;
  rgba = `rgb(1,2,3,0)`;
  missile_area = document.querySelector('.missile-class');
  missile_area.style.setProperty(missile_fill, rgba);
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



// 56 [ color, size, display] ==56*3=168 for each instance


// 60 frames a seconds  60*168=10080 numbers a second






function missileSet(real_id, the_missile, g_player) {
  collision_1a = hasCollided(column_1a, the_missile, COLLISION_SIZES);
  collision_2a = hasCollided(column_2a, the_missile, COLLISION_SIZES);
  collision_2b = hasCollided(column_2b, the_missile, COLLISION_SIZES);
  collision_3a = hasCollided(column_3a, the_missile, COLLISION_SIZES);
  collision_3b = hasCollided(column_3b, the_missile, COLLISION_SIZES);
  collision_3c = hasCollided(column_3c, the_missile, COLLISION_SIZES);



  has_collided = collision_1a || collision_2a || collision_2b || collision_3a || collision_3b || collision_3c;
  if (has_collided) {
    //the_missile.m_expired = true;
    the_missile.m_x_dir = -1;
    the_missile.m_y_dir = 0;
    //console.log("the_missile asdfsdf343", the_missile);
  }

  if (the_missile.m_expired) {
    the_missile.m_x_dir = 0;
    the_missile.m_y_dir = -1;
    setFillNone();
  } else {
    if (typeof DBG_FREEZE_MISSILE != 'string') {
      getRandoms();
    }

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


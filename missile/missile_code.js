function getRandomColor(missile_id) {
  let gg = Math.floor(Math.random() * 16);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 128) + 128;
    let g = 0;
    let b = 0;
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomSize2(missile_id, start_size15, max_rand10) {
  let gg = Math.floor(Math.random() * 7);
  if (gg == 0) {
    let r = Math.floor(Math.random() * max_rand10) + start_size15;
    let missile_fill = "--missile-size-" + missile_id;
    let circle_size = `${r}px`;

    missile_area = document.getElementById('missile-area');
    document.documentElement.style.setProperty(missile_fill, circle_size);
  }

}


function getRandomSize(missile_id) {
  let gg = Math.floor(Math.random() * 7);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 10) + 15;
    let missile_fill = "--missile-size-" + missile_id;
    let circle_size = `${r}px`;
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

function getRandoms() {
  for (let i = 100; i < 132; i++) {
    getRandomColorDark(i);
    getRandomSize2(i, 15, 10);
    getRandomFill(i);
  }
  for (let i = 200; i < 216; i++) {
    getRandomColorMedium(i);
    getRandomSize2(i, 20, 10);
    getRandomFill(i);
  }
  for (let i = 300; i < 308; i++) {
    getRandomColorBright(i);
    getRandomSize2(i, 20, 10);
    getRandomFill(i);
  }
}


function missileSet(real_id, the_sprite, g_player) {
  spriteDraw(real_id, the_sprite, g_player);
  getRandoms();
}


html_missile_1 = makeMissile('missile-1');
html_missile_2 = makeMissile('missile-2');
document.getElementById('missile-area').innerHTML = `
<div id="the-missile-1" >${html_missile_1}</div>
<div id="the-missile-2" >${html_missile_2}</div>`;

let the_missile_1 = {
  s_isa: "is-missile",
  s_id: "missile-1",
  m_x: 400, m_y: 310,

  m_lifetime: 256,
  m_expired: false,
  m_x_dir: 1, m_y_dir: 1,
  // ALT gives an angle shot m_x_dir =-1, m_y_dir_dir=-1(always)

  // m_dead: false,
  // m_index: 0,

  // s_moves_x: [1],
  // s_moves_y: [1],



};


let the_missile_2 = {
  s_isa: "is-missile",
  s_id: "missile-2",
  m_x: 100, m_y: 210,
  m_lifetime: 256,
  m_expired: false,
  m_x_dir: -1, m_y_dir: -1
};

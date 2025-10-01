

the_diamonds = [
  [60, 128],
  [65, 104],
  [80, 80],
  [102, 66],
  [128, 60],
  [154, 66],
  [176, 80],
  [192, 104],
  [197, 128],
  [192, 154],
  [176, 176],
  [154, 192],
  [128, 196],
  [102, 192],
  [80, 176],
  [65, 154]];




html_missile = makeMissile('the-missile');


document.getElementById('missile-area').innerHTML = `
<div id="single-missile" >${html_missile}</div>`;

let g_missile = {
  s_isa: "is-missile",
  s_id: "the-missile",
  m_x: MISSILE_START_X, m_y: MISSILE_START_Y,
  m_random: 0,
  m_caromed: false,
  m_lifetime: MISSILE_LIFETIME,
  m_expired: true,
  m_x_dir: 0, m_y_dir: -1,   // ALWAYS THIS
};


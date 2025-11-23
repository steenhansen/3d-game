

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




html_missile = createMissileHtml('the-missile');


document.getElementById('missile-area').innerHTML = `
<div id="single-missile" >${html_missile}</div>`;

let g_missile = {
  s_isa: "is-missile",
  s_id: "the-missile",
  m_x: "x-set-at-fire", m_y: "y-set-at-fire",
  m_random: 0,
  m_phase: MISSILE_0_NO_SHOT,
  m_lifetime: 0,
  m_x_dir: 0,
  m_y_dir: -1,   // ALWAYS starts THIS way, but might change left or right on a collision
};


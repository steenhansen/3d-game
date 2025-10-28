const HIT_FLASH_ENEMY = 20;



// s_moves_x: [LEFT_100, RGHT_100, RGHT_100, LEFT_100].flat(),
// s_moves_y: [AWAY_100, AWAY_100, NEAR_100, NEAR_100].flat(),

//  m_state: ENEMY_0_FLOATING, ENEMY_1_BOUNCE, ENEMY_1_HIT, ENEMY_2_LIFTING, ENEMY_3_ZOMBIE

let base_enemy_0 = {
  s_enemy_number: 0,
  s_isa: "is-enemy",
  s_id: "enemy-1",
  s_moves_x: [RGHT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  s_colors: ['#ee2288', '#004488'],    // enemies never change colors
  m_move_count: 0,       // m_move_index
  m_x: 1600, m_y: 64,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  //t_enemy_hit_flash: 0,
  //t_hover_up: 0,
};

let base_enemy_1 = {
  s_enemy_number: 1,
  s_isa: "is-enemy",
  s_id: "enemy-2",
  s_moves_x: [ZERO_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 2200, m_y: 77,
  t_enemy_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  t_hover_up: 0,
  s_colors: ['#FFbb22', '#ffffff'],
};

function makeEnemy_A(xy_origin, enemy_base) {
  let [origin_x, origin_y] = xy_origin;
  the_x = origin_x + enemy_base.m_x;
  the_y = origin_y + enemy_base.m_y;
  xyNotInField(the_x, the_y, "Not-In-Field makeEnemy_A()");
  the_id = `enemy-${enemy_base.s_enemy_number}`;
  different_obj = { s_id: the_id, m_x: the_x, m_y: the_y };
  //different_obj = { m_x: the_x, m_y: the_y };


  enemy_data = Object.assign({}, enemy_base, different_obj);

  html_enemy = makeEnemy(enemy_data);
  enemy_number = enemy_base.s_enemy_number;
  enemy_container_id = `enemy-${enemy_number}-container`;
  document.getElementById('enemy-area').innerHTML += `
       <div id="${enemy_container_id}" >${html_enemy}</div>
   `;
  //console.log("ddddd", enemy_container_id, enemy_data);
  return enemy_data;
}




function makeEnemies1(xy_origin) {
  //enemy_0 = makeEnemy_A(xy_origin, base_enemy_1);
  enemy_1 = makeEnemy_A(xy_origin, base_enemy_1);
  //  declared_enemies = [enemy_0, enemy_1];
  declared_enemies = [enemy_1];
  return declared_enemies;
}

function makeEnemies(xy_origin) {
  enemy_0 = makeEnemy_A(xy_origin, base_enemy_0);
  declared_enemies = [enemy_0];
  return declared_enemies;
}

// function makeEnemies(xy_origin) {
//   enemy_0 = makeEnemy_A(xy_origin, base_enemy_1);
//   enemy_1 = makeEnemy_A(xy_origin, base_enemy_2);
//   declared_enemies = [enemy_0, enemy_1];
//   return declared_enemies;
// }

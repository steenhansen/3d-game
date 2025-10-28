const HIT_FLASH_ENEMY = 20;



// s_moves_x: [LEFT_100, RGHT_100, RGHT_100, LEFT_100].flat(),
// s_moves_y: [AWAY_100, AWAY_100, NEAR_100, NEAR_100].flat(),

//  m_state: ENEMY_0_FLOATING, ENEMY_1_BOUNCE, ENEMY_1_HIT, ENEMY_2_LIFTING, ENEMY_3_ZOMBIE

let base_enemy_0 = {
  s_enemy_number: 0,
  s_isa: "is-enemy",
  s_id: "enemy-0",
  s_moves_x: [LEFT_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  //    --enemy-star-color-1: yellow;
  //      --enemy-ball-color-1: blue;
  s_colors: ['#ee2288', '#004488'],    // enemies never change colors
  m_move_count: 0,       // m_move_index
  m_x: 2000, m_y: 1,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  //t_enemy_hit_flash: 0,
  //t_hover_up: 0,
};

let base_enemy_1 = {
  s_enemy_number: 1,
  s_isa: "is-enemy",
  s_id: "enemy-1",
  s_moves_x: [RGHT_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 3000, m_y: 0,
  t_enemy_hit_flash: 30,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  t_hover_up: 0,
  s_colors: ['#11bb22', '#ffffff'],
};

function makeEnemy_A(playground_box, enemy_base) {
  let [left_x, top_y, _right_x, _bottom_y] = playground_box;
  //let [origin_x, origin_y] = xy_origin;
  the_x = left_x + enemy_base.m_x;
  the_y = top_y + enemy_base.m_y;

  the_id = `enemy-${enemy_base.s_enemy_number}`;
  xyNotInField(the_x, the_y, `Offset enemy '${pylon_name}' coords are out of bounds`);




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
  enemy_1 = makeEnemy_A(xy_origin, base_enemy_2);
  //  declared_enemies = [enemy_0, enemy_1];
  declared_enemies = [enemy_1];
  return declared_enemies;
}

// function makeEnemies(xy_origin) {
//   enemy_0 = makeEnemy_A(xy_origin, base_enemy_0);
//   declared_enemies = [enemy_0];
//   return declared_enemies;
// }

function makeEnemiesOld(playground_box) {
  enemy_0 = makeEnemy_A(playground_box, base_enemy_0);
  enemy_1 = makeEnemy_A(playground_box, base_enemy_1);
  // console.log("enemy", enemy_1, 1000, 0);
  declared_enemies = [enemy_0, enemy_1];
  //declared_enemies = [enemy_1];
  return declared_enemies;
}

///////////////////
function makeEnemies(playground_box) {
  declared_enemies = [];
  for (let r = 0; r < 11; r++) {
    an_enemy = makeEnemy_B(playground_box, base_enemy, r);
    declared_enemies.push(an_enemy);
  }
  return declared_enemies;
}

function makeEnemy_B(playground_box, enemy_base, r) {
  let [left_x, top_y, _right_x, _bottom_y] = playground_box;
  the_x = left_x + enemy_base.m_x + r * 200;
  the_y = top_y + enemy_base.m_y;
  the_id = `enemy-${r}`;
  xyNotInField(the_x, the_y, `Offset enemy '${the_id}' coords are out of bounds`);

  different_obj = { s_id: the_id, m_x: the_x, m_y: the_y, s_enemy_number: r };

  enemy_data = Object.assign({}, enemy_base, different_obj);

  html_enemy = makeEnemy(enemy_data);
  enemy_number = r;
  enemy_container_id = `enemy-${enemy_number}-container`;
  document.getElementById('enemy-area').innerHTML += `
       <div id="${enemy_container_id}" >${html_enemy}</div>
   `;
  //console.log("aaaaaa", enemy_container_id, different_obj);
  //console.log("ddddd", enemy_container_id, enemy_data);
  return enemy_data;
}


let base_enemy = {
  s_enemy_number: 0,
  s_isa: "is-enemy",
  s_id: "enemy-0",
  s_moves_x: [LEFT_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  //    --enemy-star-color-1: yellow;
  //      --enemy-ball-color-1: blue;
  s_colors: ['#ee2288', '#004488'],    // enemies never change colors
  m_move_count: 0,       // m_move_index
  m_x: 2000, m_y: 1,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  //t_enemy_hit_flash: 0,
  //t_hover_up: 0,
};

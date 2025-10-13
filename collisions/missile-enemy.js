

// only from front
function playerHitEnemies(g_player, the_enemies) {
  changed_enemies = [];
  number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    enemy_state = an_enemy.m_state;
    if (enemy_state == ENEMY_0_FLOATING) {
      has_collided = hasCollided(g_player, an_enemy, COLLISION_SIZES);
      if (has_collided) {
        g_player.m_num_cracks++;
        if (g_player.m_num_ == MAX_CRACKS) {
          g_taking_off = true;
        }
      }
    }
  }
  return g_player;
}

// only from front  ????
function playerHitHoles(g_player, the_holes) {
  hit_hole_last_move = false;
  if (!('t_jump_amount' in g_player)) {
    changed_enemies = [];
    number_holes = the_holes.length;
    for (let hole_index = 0; hole_index < number_holes; hole_index++) {
      a_hole = the_holes[hole_index];
      has_collided = hasCollided(g_player, a_hole, COLLISION_SIZES);
      if (has_collided) {
        hit_hole_last_move = true;
        if (g_player.m_num_cracks == MAX_CRACKS) {
          g_taking_off = true;
        }
      }
    }
  }
  return [g_player, hit_hole_last_move];
}

function playerHitPylons(g_player, the_pylons) {
  hit_pylon_last_move = false;
  changed_pylons = [];
  number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    has_collided = hasCollided(g_player, a_pylon, COLLISION_SIZES);
    if (has_collided) {
      hit_pylon_last_move = true;
      a_pylon.t_pylon_hit_flash = 17;
      g_player.t_recoil_count = RECOIL_COUNTDOWN;

      if ('m_a_front_color' in a_pylon) {
        temp_front = a_pylon.m_a_front_color;
        a_pylon.m_a_front_color = a_pylon.m_a_left_color;
        a_pylon.m_a_left_color = a_pylon.m_a_right_color;
        a_pylon.m_a_right_color = temp_front;
      } else {

        temp_front_from = a_pylon.m_b_front_grad_from;
        temp_front_to = a_pylon.m_b_front_grad_to;


        a_pylon.m_b_front_grad_from = a_pylon.m_b_left_grad_from;
        a_pylon.m_b_front_grad_to = a_pylon.m_b_left_grad_to;


        a_pylon.m_b_left_grad_from = a_pylon.m_b_right_grad_from;
        a_pylon.m_b_left_grad_to = a_pylon.m_b_right_grad_to;



        a_pylon.m_b_right_grad_from = temp_front_from;
        a_pylon.m_b_right_grad_to = temp_front_to;



      }
      new_direction = objectBounced(g_move_direction);


      g_player.t_screen_askew = 10;
      g_move_direction = new_direction;

    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return [g_player, changed_pylons];
}







function missileHitPylons(the_missile, the_pylons) {
  number_pylons = the_pylons.length;
  const missile_flying = 't_lifetime' in g_missile;
  if (!missile_flying || number_pylons == 0) {
    return [the_missile, the_pylons];
  }
  changed_pylons = [];
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    has_collided = hasCollided(the_missile, a_pylon, COLLISION_SIZES);
    if (has_collided) {
      a_pylon.t_pylon_hit_flash = 13;
      the_missile.m_caromed = true;
      if (a_pylon.m_x > the_missile.m_x) {
        the_missile.m_x_dir = -1;
        the_missile.m_y_dir = 0;
      } else {
        the_missile.m_x_dir = 1;
        the_missile.m_y_dir = 0;
      }
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return [the_missile, changed_pylons];
}




function enemiesHitPylons(the_enemies, the_pylons) {
  number_enemies = the_enemies.length;
  number_pylons = the_pylons.length;
  if (number_enemies == 0 || number_pylons == 0) {
    return [the_enemies, the_pylons];
  }
  changed_enemies = [];
  changed_pylons = [];
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
      a_pylon = the_pylons[pylon_index];
      has_collided = hasCollided(an_enemy, a_pylon, COLLISION_SIZES);
      if (has_collided) {
        a_pylon.t_pylon_hit_flash = HIT_FLASH_PYLON;  // 23;
        an_enemy.m_state = ENEMY_1_BOUNCE;
        an_enemy.t_enemy_hit_flash = HIT_FLASH_ENEMY;
        an_enemy.m_bounced_x_dir *= LEFT_RIGHT_BOUNCE_X_INVERSION;  //flip x directions if hit pylon
      }
      changed_pylons[pylon_index] = a_pylon;
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return [changed_enemies, changed_pylons];
}







function enemyHitHoles(the_enemies, the_holes) {
  number_enemies = the_enemies.length;
  number_holes = the_holes.length;
  if (number_enemies == 0 || number_holes == 0) {
    return the_enemies;
  }
  changed_enemies = [];
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    enemy_state = an_enemy.m_state;
    if (enemy_state == ENEMY_0_FLOATING) {
      for (let hole_index = 0; hole_index < number_holes; hole_index++) {
        a_hole = the_holes[hole_index];
        has_collided = hasCollided(an_enemy, a_hole, COLLISION_SIZES);
        if (has_collided) {
          an_enemy = killEnemy(an_enemy);
          an_enemy.m_state = ENEMY_1_HIT;

          an_enemy.t_enemy_hit_flash = 10;
        }
      }
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return changed_enemies;
}





function missileHitEnemies(the_missile, the_enemies) {
  changed_enemies = [];
  number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    enemy_state = an_enemy.m_state;
    if (enemy_state == ENEMY_0_FLOATING) {
      has_collided = hasCollided(the_missile, an_enemy, COLLISION_SIZES);
      if (has_collided) {
        an_enemy = killEnemy(an_enemy);
        an_enemy.m_state = ENEMY_1_HIT;

        an_enemy.t_enemy_hit_flash = 10;
        an_enemy.m_dead = true;
      }
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return changed_enemies;
}




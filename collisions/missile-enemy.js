

// only from front
function playerHitEnemies(the_player, the_enemies) {
  changed_enemies = [];
  number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    enemy_state = an_enemy.m_state;
    if (enemy_state == ENEMY_0_FLOATING) {
      has_collided = hasCollided(the_player, an_enemy, COLLISION_SIZES);
      if (has_collided) {
        the_player.m_num_cracks++;
        if (the_player.m_num_ == MAX_CRACKS) {
          the_player.t_is_dying = true;
        }
      }
    }
  }
  return the_player;
}

// only from front  ????
function playerHitHoles(the_player, the_holes) {
  hit_hole_last_move = false;
  if (!('t_jump_amount' in the_player)) {
    changed_enemies = [];
    number_holes = the_holes.length;
    for (let hole_index = 0; hole_index < number_holes; hole_index++) {
      a_hole = the_holes[hole_index];
      has_collided = hasCollided(the_player, a_hole, COLLISION_SIZES);
      if (has_collided) {
        hit_hole_last_move = true;
        if (the_player.m_num_cracks == MAX_CRACKS) {
          the_player.t_is_dying = true;
        }
      }
    }
  }
  return [the_player, hit_hole_last_move];
}

function playerHitPylons(the_player, the_pylons) {
  changed_pylons = [];
  number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    has_collided = hasCollided(the_player, a_pylon, COLLISION_SIZES);
    if (has_collided) {
      if (a_pylon.s_isa == 'is-pylon-sign') {
        possibleExit(a_pylon);
      } else {
        [the_player, a_pylon] = plainPylon(the_player, a_pylon);
      }
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return [the_player, changed_pylons];
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
        a_pylon.t_pylon_hit_flash = HIT_FLASH_PYLON;
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




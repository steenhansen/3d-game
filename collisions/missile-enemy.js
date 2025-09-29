
function playerHitPylons(g_player, the_pylons) {
  changed_pylons = [];
  number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    has_collided = hasCollided(g_player, a_pylon, COLLISION_SIZES);
    if (has_collided) {
      a_pylon.m_hit_flash = 10;
      g_player.m_recoiling = true;
      g_player.m_recoil_count = RECOIL_COUNTDOWN;

      new_direction = objectBounced(g_move_direction);
      document_style.setProperty("--collide-shake-angle", "45deg");
      g_move_direction = new_direction;

    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return [g_player, changed_pylons];
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
        an_enemy.m_hover_up = 0;
        an_enemy.m_hit_flash = 10;
      }
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return changed_enemies;
}

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
        g_taking_off = true;
        g_player.m_enemy_collision = true;
      }
    }
  }
  return g_player;
}




function missileHitPylons(the_missile, the_pylons) {
  changed_pylons = [];
  number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    has_collided = hasCollided(the_missile, a_pylon, COLLISION_SIZES);
    if (has_collided) {
      a_pylon.m_hit_flash = 10;
      // a_pylon.s_outline = true;


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
  changed_enemies = [];
  number_enemies = the_enemies.length;
  changed_pylons = [];
  number_pylons = the_pylons.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
      a_pylon = the_pylons[pylon_index];
      has_collided = hasCollided(an_enemy, a_pylon, COLLISION_SIZES);
      if (has_collided) {
        a_pylon.m_hit_flash = 5;
        //    a_pylon.s_outline = true;

        an_enemy.m_state = ENEMY_1_BOUNCE;
        //   an_enemy.m_hover_up = 0;
        an_enemy.m_hit_flash = 10;

        // an_enemy.m_y -= room_depth;
        an_enemy.m_bounced_x_dir *= LEFT_RIGHT_BOUNCE_X_INVERSION;  //flip x directions if hit pylon
        // if (an_enemy.m_y < SCENE_Y_MIN) {
        //   an_enemy.m_y += SCENE_Y_MAX;
        // }

        //console.log("dxxxxxxxxxx", an_enemy.m_bounced_x_dir);
      }
      changed_pylons[pylon_index] = a_pylon;
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return [changed_enemies, changed_pylons];
}

const L_HIT_FLASH_ENEMY = 20;

function missileHitEnemies(the_missile, the_enemies) {
  let changed_enemies = [];
  const number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    let an_enemy = the_enemies[enemy_index];
    const enemy_state = an_enemy.m_enemy_state;
    if (enemy_state == ENEMY_0_HUNTING) {
      const has_collided = hasCollided(the_missile, an_enemy);
      if (has_collided) {
        if (the_missile.m_lifetime > 0) {
          an_enemy = killEnemy(an_enemy);
          an_enemy.m_enemy_state = ENEMY_2_HIT;
          an_enemy.m_enemy_hit_flash = 10;
        }
      }
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return changed_enemies;
}

function playerHitSigns(game_state, part_state, the_player, the_signs) {
  const number_signs = the_signs.length;
  for (let sign_index = 0; sign_index < number_signs; sign_index++) {
    const a_sign = the_signs[sign_index];
    if (a_sign.s_sign_name == "sign-exit") {
      const has_collided = hasCollided(the_player, a_sign);
      if (has_collided) {
        the_player.m_jump_amount = 0;
        [game_state, part_state] = action_hitExit(); // 1&2 do not return
        break;
      }
    }
  }
  return [game_state, part_state, the_player];
}

function missileHitPylons(the_missile, the_pylons) {
  const number_pylons = the_pylons.length;
  const missile_flying = g_missile.m_lifetime > 0;
  if (!missile_flying || number_pylons == 0) {
    return [the_missile, the_pylons];
  }
  let changed_pylons = [];
  let missile_hit_pylon = false;
  let hit_pylon = "no-pylon-hit";
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    let a_pylon = the_pylons[pylon_index];
    if (a_pylon.s_isa == "is-pylon") {
      if (!a_pylon.m_hidden) {
        const has_collided = hasCollided(the_missile, a_pylon);
        if (has_collided) {
          missile_hit_pylon = true;
          hit_pylon = a_pylon;
          a_pylon.m_pylon_hit_flash = 13;
        }
      }
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  if (missile_hit_pylon) {
    if (the_missile.m_phase == MISSILE_1_SHOT_FORWARD) {
      the_missile.m_phase = MISSILE_2_HITTING_PYLON;
      the_missile.m_hit_pylon = hit_pylon;
    } else if (the_missile.m_phase == MISSILE_2_HITTING_PYLON) {
      //
    } else if (the_missile.m_phase == MISSILE_3_AFTER_PYLON_HIT) {
      the_missile.m_phase = MISSILE_4_SECOND_PYLON_HIT;
    }
  } else {
    if (the_missile.m_phase == MISSILE_2_HITTING_PYLON) {
      the_missile.m_phase = MISSILE_3_AFTER_PYLON_HIT;
    }
  }
  return [the_missile, changed_pylons];
}

function playerHitEnemies(the_player, the_enemies) {
  let player_touching_enemy = false;
  const number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    const an_enemy = the_enemies[enemy_index];
    const enemy_state = an_enemy.m_enemy_state;
    if (enemy_state == ENEMY_0_HUNTING) {
      const has_collided = hasCollided(the_player, an_enemy);
      if (has_collided) {
        player_touching_enemy = true;
        if (!the_player.m_enemy_hitting) {
          the_player.m_enemy_hitting = true;
          the_player.m_num_cracks++;
          if (the_player.m_num_cracks == MAX_CRACKS) {
            the_player.m_is_dying = true;
          }
        }
        break;
      }
    }
  }
  if (!player_touching_enemy) {
    the_player.m_enemy_hitting = false;
  }
  return the_player;
}

function playerHitHoles(the_player, the_holes) {
  the_player.m_hit_hole_last_move = false;
  if (the_player.m_jump_amount == 0) {
    const number_holes = the_holes.length;
    for (let hole_index = 0; hole_index < number_holes; hole_index++) {
      const a_hole = the_holes[hole_index];
      if (!a_hole.m_hidden) {
        const has_collided = hasCollided(the_player, a_hole);
        if (has_collided) {
          the_player.m_hit_hole_last_move = true;
          if (the_player.m_num_cracks == MAX_CRACKS) {
            the_player.m_is_dying = true;
          }
          break;
        }
      }
    }
  }
  return the_player;
}

function playerHitPylons(the_player, the_pylons) {
  let changed_pylons = [];
  const number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    let a_pylon = the_pylons[pylon_index];
    if (!a_pylon.m_hidden) {
      const has_collided = hasCollided(the_player, a_pylon);
      if (has_collided) {
        [the_player, a_pylon] = plainPylon(the_player, a_pylon);
      }
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return [the_player, changed_pylons];
}

function enemiesHitPylons(the_enemies, the_pylons) {
  const number_enemies = the_enemies.length;
  const number_pylons = the_pylons.length;
  if (number_enemies == 0 || number_pylons == 0) {
    return [the_enemies, the_pylons];
  }
  let changed_enemies = [];
  let changed_pylons = [];
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    let an_enemy = the_enemies[enemy_index];
    for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
      let a_pylon = the_pylons[pylon_index];
      const has_collided = hasCollided(an_enemy, a_pylon);
      if (has_collided) {
        a_pylon.m_pylon_hit_flash = HIT_FLASH_PYLON;
        an_enemy.m_enemy_state = ENEMY_1_BOUNCE;
        an_enemy.m_enemy_hit_flash = L_HIT_FLASH_ENEMY;
        an_enemy.m_bounced_x_dir *= LEFT_RIGHT_BOUNCE_X_INVERSION; //flip x directions if hit pylon
        an_enemy.m_bounced_y_dir *= LEFT_RIGHT_BOUNCE_X_INVERSION; //flip x directions if hit pylon
      }
      changed_pylons[pylon_index] = a_pylon;
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return [changed_enemies, changed_pylons];
}

function enemiesHitBounds(the_enemies, the_planet) {
  // the_pylons
  const number_enemies = the_enemies.length;
  if (number_enemies == 0) {
    return the_enemies;
  }
  let changed_enemies = [];
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    let an_enemy = the_enemies[enemy_index];
    let has_collided;
    if (an_enemy.m_x < the_planet.s_playground_x_min) {
      has_collided = true;
    } else if (the_planet.s_playground_x_max < an_enemy.m_x) {
      has_collided = true;
    } else {
      has_collided = false;
    }

    if (has_collided) {
      an_enemy.m_enemy_state = ENEMY_1_BOUNCE;
      an_enemy.m_enemy_hit_flash = L_HIT_FLASH_ENEMY;
      an_enemy.m_bounced_x_dir *= LEFT_RIGHT_BOUNCE_X_INVERSION; //flip x directions if hit pylon
    }

    changed_enemies[enemy_index] = an_enemy;
  }
  return changed_enemies;
}

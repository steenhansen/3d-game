function playPart2(
  game_state,
  part_state,
  the_planet,
  the_player,
  enemy_list,
  pylon_list,
  sign_list,
) {
  if (part_state == PART_PLAY_20_NORMAL) {
    let variable_list = generalPlay(
      part_state,
      the_planet,
      the_player,
      enemy_list,
      pylon_list,
      sign_list,
    );
    [part_state, the_planet, the_player, enemy_list, pylon_list] =
      variable_list;
  } else if (part_state == PART_PLAY_21_HIT_HOLE) {
    const transfer_obj = holeHitPlay(
      game_state,
      part_state,
      the_planet,
      the_player,
      enemy_list,
      pylon_list,
      sign_list,
    );
    [game_state, part_state, the_planet, the_player, enemy_list, pylon_list] =
      transfer_obj;
    the_player.m_is_dying = true;
  } else if (part_state == PART_PLAY_22_JUMP_START) {
    [part_state, the_player] = jumpStartPlay(the_player);
  } else if (part_state == PART_PLAY_23_JUMP_UP) {
    [part_state, the_planet, the_player, enemy_list, pylon_list] = jumpUpPlay(
      the_planet,
      the_player,
      enemy_list,
      pylon_list,
      sign_list,
    );
  } else if (part_state == PART_PLAY_24_JUMP_DOWN) {
    [part_state, the_planet, the_player, enemy_list, pylon_list] = jumpDownPlay(
      the_planet,
      the_player,
      enemy_list,
      pylon_list,
      sign_list,
    );
  } else {
    dbg_print("playPart2() unknown part_state", part_state);
  }

  const all_dead = enemiesAllZombies(enemy_list);
  if (all_dead) {
    [game_state, part_state, the_player] = playerHitSigns(
      game_state,
      part_state,
      the_player,
      sign_list,
    );
  }
  const the_return = [
    game_state,
    part_state,
    the_planet,
    the_player,
    enemy_list,
    pylon_list,
  ];
  return the_return;
}

function jumpStartFly() {
  g_planet.m_move_direction = MOVINGx_N;
  g_planet.m_part_state = PART_PLAY_22_JUMP_START;
  g_player.m_fly_amount = 0;
}

function generalPlay(
  part_state,
  the_planet,
  the_player,
  enemy_list,
  pylon_list,
  sign_list,
) {
  [the_planet, the_player, enemy_list, pylon_list] = animateScene(
    the_planet,
    the_player,
    enemy_list,
    pylon_list,
    sign_list,
    g_holes,
  );
  if (the_player.m_hit_hole_last_move) {
    part_state = PART_PLAY_21_HIT_HOLE;
  }
  the_player = collisionShake(the_player);
  return [part_state, the_planet, the_player, enemy_list, pylon_list];
}

function holeHitPlay(
  game_state,
  part_state,
  the_planet,
  the_player,
  enemy_list,
  pylon_list,
  sign_list,
) {
  [the_planet, the_player, enemy_list, pylon_list] = animateScene(
    the_planet,
    the_player,
    enemy_list,
    pylon_list,
    sign_list,
    g_holes,
  );
  the_player = collisionShake(the_player);
  return [
    game_state,
    part_state,
    the_planet,
    the_player,
    enemy_list,
    pylon_list,
  ];
}

function jumpStartPlay(the_player) {
  the_player.m_jump_amount = 0;
  const part_state = PART_PLAY_23_JUMP_UP;
  return [part_state, the_player];
}

function jumpUpPlay(the_planet, the_player, enemy_list, pylon_list, sign_list) {
  [the_planet, the_player, enemy_list, pylon_list] = animateScene(
    the_planet,
    the_player,
    enemy_list,
    pylon_list,
    sign_list,
    g_holes,
  );
  [the_player, part_state] = animateJumpUp(the_player);
  the_player = collisionShake(the_player);
  return [part_state, the_planet, the_player, enemy_list, pylon_list];
}

function jumpDownPlay(
  the_planet,
  the_player,
  enemy_list,
  pylon_list,
  sign_list,
) {
  [the_planet, the_player, enemy_list, pylon_list] = animateScene(
    the_planet,
    the_player,
    enemy_list,
    pylon_list,
    sign_list,
    g_holes,
  );
  [the_player, part_state] = animateJumpDown(the_player);
  the_player = collisionShake(the_player);
  return [part_state, the_planet, the_player, enemy_list, pylon_list];
}

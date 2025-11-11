
function deathPart3(part_state, the_planet, the_player, enemy_list, pylon_list) {
  if (part_state == PART_DEATH_30_APPEAR) {
    [part_state, the_player] = startDeath(the_player);
  } else if (part_state == PART_DEATH_31_FIELD) {
    [part_state, the_planet, the_player, enemy_list, pylon_list] = fieldDeath(part_state, the_planet, the_player, enemy_list, pylon_list);
  } else if (part_state == PART_DEATH_32_SKY) {
    [part_state, the_planet, the_player, enemy_list, pylon_list] = skyDeath(part_state, the_planet, the_player, enemy_list, pylon_list);
  } else if (part_state == PART_DEATH_33_RESTART) {
    skyRestart();
  } else {
    dbg_print('deathPart3() unknown part_state', part_state);
  }
  return [part_state];
}

function skyRestart() {
  window.location.href = THIS_PLANET;
}

function startDeath(the_player) {

  the_player.m_num_cracks = MAX_CRACKS;
  setCssVar("--sun-image", "url('../images/grey-sun.png')");
  setCssVar("--pyramids-image", "url('../images/black-pyramids.png')");
  part_state = PART_DEATH_31_FIELD;
  return [part_state, the_player];
}

function fieldDeath(part_state, the_planet, the_player, enemy_list, pylon_list) {
  [the_planet, the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, pylon_list, g_sign_list, g_hole_list);
  pylon_list = dyingPylons(the_player, pylon_list);
  enemy_list = dyingEnemies(the_player, enemy_list);
  [the_planet, just_died] = dyingCheckerboard(the_planet);
  if (just_died) {
    part_state = PART_DEATH_32_SKY;
    the_player.t_sky_restart = 10;
  }
  return [part_state, the_planet, the_player, enemy_list, pylon_list];
}

function skyDeath(part_state, the_planet, the_player, enemy_list, pylon_list) {
  [the_planet, the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, pylon_list, g_sign_list, g_hole_list);
  setCssSkyColor('black');
  the_player.t_sky_restart--;
  if (the_player.t_sky_restart == 0) {
    part_state = PART_DEATH_33_RESTART;
  }

  return [part_state, the_planet, the_player, enemy_list, pylon_list];
}

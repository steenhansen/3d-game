
function spacePart4(part_state, the_planet, the_player, enemy_list, pylon_list) {
  if (part_state == PART_SPACE_40_LIFTOFF) {
    [part_state, the_player] = spaceLiftoff(the_player);
  } else if (part_state == PART_SPACE_41_CLIMB) {
    [part_state, the_player] = spaceClimb(the_planet, the_player, enemy_list, pylon_list);

  } else if (part_state == PART_SPACE_42_FINISHED) {
    spaceFinished();
  } else {
    dbg_print('spacePart4() unknown part_state', part_state);
  }
  the_return = [part_state, the_player];
  return the_return;
}

function spaceLiftoff(the_player) {
  the_player.m_jump_amount = 0;
  part_state = PART_SPACE_41_CLIMB;
  return [part_state, the_player];
}

function spaceClimb(the_planet, the_player, enemy_list, pylon_list) {
  [the_planet, the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, enemy_list, pylon_list, g_signs, g_holes);
  the_player.m_jump_amount += JUMP_STEP;
  if (the_player.m_jump_amount > STOP_FLY_COUNT) {
    return [PART_SPACE_42_FINISHED, the_player];
  }
  doFlying(the_player.m_jump_amount);
  return [PART_SPACE_41_CLIMB, the_player];
}

function spaceFinished() {
  window.location.href = NEXT_PLANET;
}
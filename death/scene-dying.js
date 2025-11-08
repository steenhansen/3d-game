

function dyingCheckerboard(the_planet) {
  g_planet.m_dying_distance++;
  dying_line = 256 - g_planet.m_dying_distance;
  the_divs = [31, 29, 23, 19, 17, 13, 11, 7, 3];
  a_div_ind = Math.trunc(g_planet.m_dying_distance / 32);
  a_div = the_divs[a_div_ind];
  g_field_xs_death[dying_line] = (g_planet.m_dying_distance % a_div);
  back_ground = "url('../images/board-death.png')";
  setCssLineBackground(dying_line, "url('../images/board-death.png')");
  if (g_planet.m_dying_distance > 256) {
    just_died = true;
  } else {
    just_died = false;
  }
  return [the_planet, just_died];
}

function dyingPylons(the_player, pylon_list) {
  changed_pylons = [];
  number_pylons = pylon_list.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = pylon_list[pylon_index];
    if (a_pylon.m_alive) {
      difference_y = spriteDiffY(a_pylon, the_player);
      if (difference_y < g_planet.m_dying_distance) {
        a_pylon.m_alive = false;
      }
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return changed_pylons;
}

function dyingEnemies(the_player, enemy_list) {
  changed_enemies = [];
  number_enemies = enemy_list.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = enemy_list[enemy_index];
    difference_y = spriteDiffY(an_enemy, the_player);
    if (difference_y < g_planet.m_dying_distance) {
      setCssEnemyStarFill(enemy_index, DYING_STAR_COLOR);
      setCssEnemyBallFill(enemy_index, DYING_BALL_COLOR);
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return changed_enemies;

}

// function loopDeadSky(the_planet, the_player, sign_list, enemy_list, pylon_list) {
//   [the_planet, the_player, enemy_list, pylon_list] = animateScene(the_planet, the_player, sign_list, enemy_list, pylon_list, g_hole_list);
//   setCssSkyColor('black');
//   return [the_planet, the_player, enemy_list, pylon_list];
// }
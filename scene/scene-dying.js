

function dyingCheckerboard() {
  g_dying_distance++;
  dying_line = 256 - g_dying_distance;
  back_ground = "url('../images/board-death.png')";
  setCssLineBackground(dying_line, "url('../images/board-death.png')");
  if (g_dying_distance > 256) {
    return true;
  }
  return false;
}



function dyingPylons(the_player, pylon_list) {
  changed_pylons = [];
  number_pylons = pylon_list.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = pylon_list[pylon_index];
    if (a_pylon.m_alive) {
      difference_y = spriteDiffY(a_pylon, the_player);
      if (difference_y < g_dying_distance) {
        a_pylon.m_alive = false;
      }
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return changed_pylons;
}

// const DYING_STAR_COLOR = "black";
// const DYING_BALL_COLOR = 'grey';
function dyingEnemies(the_player, enemy_list) {
  changed_enemies = [];
  number_enemies = enemy_list.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = enemy_list[enemy_index];
    if (an_enemy.m_state != ENEMY_5_DEAD) {
      difference_y = spriteDiffY(an_enemy, the_player);
      if (difference_y < g_dying_distance) {
        // setCssEnemyStarFill(enemy_index + 1, "black");
        // setCssEnemyBallFill(enemy_index + 1, "grey");
        setCssEnemyStarFill(enemy_index + 1, DYING_STAR_COLOR);
        setCssEnemyBallFill(enemy_index + 1, DYING_BALL_COLOR);
      }
    }
    changed_enemies[enemy_index] = an_enemy;
  }
  return changed_enemies;

}

function loopDeadSky(the_planet, the_player, enemy_list, pylon_list) {
  [the_player, enemy_list, pylon_list] = animateScene(the_player, enemy_list, pylon_list, g_hole_list);
  setCssSkyColor('black');
  return [the_planet, the_player, enemy_list, pylon_list];
}
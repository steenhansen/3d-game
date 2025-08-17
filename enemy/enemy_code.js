
function objectMomentum(the_enemy) {
  x_move = the_enemy.x_move;
  if (x_move < 0) {
    the_enemy.x = leftOnBoard(the_enemy.x, x_move * -4 * 3);
  } else if (x_move > 0) {
    the_enemy.x = rightOnBoard(the_enemy.x, x_move * 4 * 3);
  }

  y_move = the_enemy.y_move;
  if (y_move < 0) {
    the_enemy.y = backwardOnBoard(the_enemy.y, y_move * -4);
  } else if (y_move > 0) {
    the_enemy.y = forwardOnBoard(the_enemy.y, y_move * 4);
  }
}

function enemySet(real_id, the_sprite, g_player, the_type, da_name) {
  enemyMissileDraw(real_id, the_sprite, g_player, the_type, da_name);
}


html_enemy_1 = makeEnemy('enemy-1', 'cyan', 'blue', 'green');
html_enemy_2 = makeEnemy('enemy-2', 'black', 'white', 'grey');
document.getElementById('enemy-area').innerHTML = `
<div id="the-enemy-1" >${html_enemy_1}</div>
<div id="the-enemy-2" >${html_enemy_2}</div>
`;

// console.log(`
// <div id="the-enemy-1" >${html_enemy_1}</div>
// <div id="the-enemy-2" >${html_enemy_2}</div>
// `);

let the_enemy_1 = {
  is_a: "is-enemy",
  id: "enemy-planets1", spin: 31,
  //  x: area_width_half + 260, y: 854,
  //  x: 50000, y: 313,
  x: 7, y: 20,
  //x_move: 0, y_move: 0,
  move_index: 0,
  column_colors: COL_EMENY,
  x_moves: [LEFT_100, ZERO_500, RGHT_100, ZERO_500].flat(),  // 45% then square
  y_moves: [ZERO_100, AWAY_500, ZERO_100, NEAR_500].flat()     // 45% then square
  //x_moves: [LEFT_100, RGHT_100].flat(),  // 45% then square
  // y_moves: [ZERO_10, ZERO_10].flat()     // 45% then square
};


/*
 zero_10=[+0,+0,+0,+0,+0,+0,+0,+0,+0,+0];
 left_10=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
 rght_10=[+1,+1,+1,+1,+1,+1,+1,+1,+1,+1];
 away_10=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
 near_10=[+1,+1,+1,+1,+1,+1,+1,+1,+1,+1];

  x_moves: [ left_10, zero_10, left_10, zero_10, rght_10]     // 45% then square
  y_moves: [ away_10, away_10, zero_10, near_10, zero_10]     // 45% then square

   x_moves = x_moves.flat()


*/




let the_enemy_2 = {
  is_a: "is-enemy",
  id: "enemy-planets2", spin: 31,
  //  x: area_width_half + 260, y: 854,
  //  x: 50000, y: 200,
  x: 70, y: 200,
  //x_move: 0, y_move: 0,
  move_index: 0,
  x_moves: [LEFT_10, ZERO_10, LEFT_10, ZERO_10, RGHT_10],  // 45% then square
  y_moves: [AWAY_10, AWAY_10, ZERO_10, NEAR_10, ZERO_10],     // 45% then square,
  column_colors: COL_EMENY
};
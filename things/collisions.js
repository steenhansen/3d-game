
/*

  const field_width = SCENE_WIDTH;
  const room_width = TILE_WIDTH;

  const field_depth = SCENE_Y_MAX;
  const room_depth = 16;

  let COLLISION_SIZES = [field_width, room_width, field_depth, room_depth];
  collision_2 = hasCollided(a_pylon, the_player, COLLISION_SIZES);

*/


function hasCollided(a_thing, an_object, COLLISION_SIZES) {
  let [field_width, room_width, field_depth, room_depth] = COLLISION_SIZES;
  let { m_x: thing_x, m_y: thing_y } = a_thing;
  let { m_x: object_x, m_y: object_y } = an_object;
  x_collided = collideOverflow(thing_x, object_x, field_width, room_width);
  y_collided = collideOverflow(thing_y, object_y, field_depth, room_depth);
  if (x_collided && y_collided) {
    return true;
  }
  if (a_thing.s_isa == 'is-missile' && an_object.s_isa == 'is-enemy' && an_object.s_id == 'enemy-1') {



  } else {
    //
  }

  return false;
}

function collideOverflow(thing_pos, object_pos, overflow_size, min_space) {


  diff_1 = thing_pos - object_pos;
  if (diff_1 < 0) {
    diff_1 += overflow_size;
  }
  diff_2 = object_pos - thing_pos;
  if (diff_2 < 0) {
    diff_2 += overflow_size;
  }
  if (diff_1 < diff_2) {
    if (diff_1 <= min_space) {
      return true;
    }
  } else {
    if (diff_2 <= min_space) {
      return true;
    }
  }
  return false;
}


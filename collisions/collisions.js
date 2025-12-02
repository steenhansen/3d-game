
function hasCollided(a_thing, an_object) {
  const [field_width, room_width, field_depth, room_depth] = COLLISION_SIZES;
  const { m_x: thing_x, m_y: thing_y } = a_thing;
  const { m_x: object_x, m_y: object_y } = an_object;
  const x_collided = collideOverflow(thing_x, object_x, field_width, room_width);
  const y_collided = collideOverflow(thing_y, object_y, field_depth, room_depth);
  if (x_collided && y_collided) {
    return true;
  }
  return false;
}

function collideOverflow(thing_pos, object_pos, overflow_size, min_space) {
  let diff_1 = thing_pos - object_pos;
  if (diff_1 < 0) {
    diff_1 += overflow_size;
  }
  let diff_2 = object_pos - thing_pos;
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


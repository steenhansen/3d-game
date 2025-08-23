
function objectSide(the_object) {
  let the_side;
  if (the_object.m_x < SCENE_MIDDLE_X) {
    the_side = LEFT_X_LOW;
  } else {
    the_side = RIGHT_X_HIGH;
  }
  return the_side;
}




/*          this is wrong !!!!!!!!!!!
                |-----------------------------SCENE_MIDDLE_X-------------------------------|
                |----------LEFT_X_LOW----------------|------RIGHT_X_HIGH-------------------|
|---UNDERFLOW---|---ZERO_QUARTER---|---ONE_QUARTER---|---TWO_QUARTER---|---THREE_QUARTER---|---OVERFLOW---|
-16384          0                16384             32768             49152-------------65535          81919

So can fingure out what objects roll over in the scene view
*/
function objectSide(the_object) {
  let the_side;
  if (the_object.x < SCENE_MIDDLE_X) {
    the_side = LEFT_X_LOW;
  } else {
    the_side = RIGHT_X_HIGH;
  }
  return the_side;
}



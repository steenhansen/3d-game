

function makePylons(xy_origin) {
  let [origin_x, origin_y] = xy_origin;
  pylon_a_1 = makePylon_A("A", 1, origin_x + 0, origin_y + 0);
  return [pylon_a_1];
}
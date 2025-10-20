
HOLE_A = {
  s_isa: "is-hole",
  c_hole_color: 'red',
  c_vert_color: 'black',
};




function makeHole_A(hole_num, x, y) {
  //  console.log("make hole", g_planet);
  checkerboard_width = g_planet.s_checkerboard_width;
  checkerboard_depth = g_planet.s_checkerboard_depth;
  if (x < 0 || x > checkerboard_width) {
    throw new Error("Part-1, x is out of range", x, checkerboard_width);
  }

  if (y < 0 || y > checkerboard_depth) {
    throw new Error("Part-1, y is out of range " + y + checkerboard_depth);
  }

  hole_name = `hole-${hole_num}`;
  different_obj = { s_pylon_name: hole_name, m_x: x, m_y: y };
  merged_pylon = Object.assign({}, HOLE_A, different_obj);
  return merged_pylon;
}



function makeHoles() {
  hole_1 = makeHole_A(1, 256, 256);
  hole_2 = makeHole_A(2, 512, 256);
  hole_3 = makeHole_A(3, 768, 256);
  hole_4 = makeHole_A(4, 1024, 256);
  hole_5 = makeHole_A(5, 1280, 256);
  hole_6 = makeHole_A(6, 1536, 256);
  hole_7 = makeHole_A(7, 1792, 256);
  declared_holes = [hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7];
  return declared_holes;
}


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
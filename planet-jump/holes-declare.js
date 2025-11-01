

function makeHoles(playground_box) {
  hole_1 = initHoleData(playground_box, "00", 256, 256, "blue");
  hole_2 = initHoleData(playground_box, "02", 512, 256);
  hole_3 = initHoleData(playground_box, "03", 768, 256);
  hole_4 = initHoleData(playground_box, "04", 1024, 256);
  hole_5 = initHoleData(playground_box, "05", 1280, 256);
  hole_6 = initHoleData(playground_box, "06", 1536, 256);
  hole_7 = initHoleData(playground_box, "07", 1792, 256);

  declared_holes = [hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7];
  return declared_holes;
}


// function makeHolesSQS(sqs_bounds, sqs_origin) {
//   hole_1 = initHoleData(sqs_bounds, "00", 256, 256, "blue");
//   hole_2 = initHoleData(sqs_bounds, "02", 512, 256);
//   hole_3 = initHoleData(sqs_bounds, "03", 768, 256);
//   hole_4 = initHoleData(sqs_bounds, "04", 1024, 256);
//   hole_5 = initHoleData(sqs_bounds, "05", 1280, 256);
//   hole_6 = initHoleData(sqs_bounds, "06", 1536, 256);
//   hole_7 = initHoleData(sqs_bounds, "07", 1792, 256);

//   declared_holes = [hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7];
//   return declared_holes;
// }
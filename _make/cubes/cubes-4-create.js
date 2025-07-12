//  \Users\16043\Documents\GitHub\squares\make-images\cubes>node cubes-2-create.js

// cd documents/GitHub/squares/make/cubes/

/// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform

// https://stock.adobe.com/search?k=digital+clock+numbers


object_width = 256;
object_height = 256;

numInitDrawings = 360;
numWinnowedDrawings = 1; //90;  // 360/4


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numWinnowedDrawings, object_height);
const ctx = canvas.getContext('2d');

//ctx.transform


line_width = 16;  //3;  squish 16/2 = -8

var deg_0_360 = 0;
var cube_lines = [];

var cube_lines_90 = [];
var cubes_stretched_90 = [];

////////////////////////////////////


//  cube_lines[the_degrees] = getCube(99, 128, 96, 64, the_degrees);
function getCube(radius, center_x, top_center_y, height_diff, degree_360) {
  radius = 36;
  flatten = 1;
  a_deg = degree_360;
  b_deg = degree_360 + 180;


  left_x = Math.round(center_x + radius * Math.cos(2 * Math.PI * a_deg / 360));
  top_y = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * a_deg / 360) * flatten);

  middle_x = Math.round(center_x);
  center_y = Math.round(top_center_y + 80);

  right_x = Math.round(center_x + radius * Math.cos(2 * Math.PI * b_deg / 360));
  bottom_y = Math.round(top_center_y + 160 + radius * Math.sin(2 * Math.PI * b_deg / 360) * flatten);


  let p1 = [right_x, top_y];
  let p2 = [middle_x, top_y];
  let p3 = [left_x, top_y];
  let p4 = [right_x, center_y];
  let p5 = [middle_x, center_y];
  let p6 = [left_x, center_y];
  let p7 = [right_x, bottom_y];
  let p8 = [middle_x, bottom_y];
  let p9 = [left_x, bottom_y];
  /*
        1  2  3
        4  5  6
        7  8  9
  */
  red_color = `rgb(255,0,0)`;
  blue_color = `rgb(0,0,255)`;
  green_color = `rgb(0,255,0)`;

  black_color = `rgb(0,0,0)`;
  white_color = `rgb(255,255,255)`;
  purple_color = `rgb(157,0,255)`;

  orange_color = `rgb(255,157,0)`;
  cyan_color = `rgb(0,157,157)`;
  yellow_color = `rgb(157,157,0)`;

  grey_color = `rgb(157,157,157)`;
  gg_color = `rgb(0,255,165)`;
  super_purp_color = `rgb(157,0,157)`;






  the_lines = [
    [p1, p2, red_color],
    [p2, p3, red_color],
    [p4, p5, red_color],
    [p5, p6, red_color],
    [p7, p8, red_color],
    [p8, p9, red_color],
    [p1, p4, red_color],
    //[p2, p5, red_color],
    [p3, p6, red_color],
    // [p4, p7, grey_color],
    //  [p5, p8, gg_color],
    [p6, p9, red_color],

    // [p1, p2, red_color],
    // [p2, p3, blue_color],
    // [p4, p5, green_color],
    // [p5, p6, black_color],
    // [p7, p8, white_color],
    // [p8, p9, purple_color],
    // [p1, p4, orange_color],
    // [p2, p5, cyan_color],
    // [p3, p6, yellow_color],
    // // [p4, p7, grey_color],
    // //  [p5, p8, gg_color],
    // [p6, p9, super_purp_color],


    // [p3, [120, 0], red_color],
    // [p2, [128, 0], blue_color],
    // [p1, [136, 0], green_color],
    // [p6, [0, 0], black_color],
    // [p5, [255, 0], white_color],
    // [p4, [255, 255], purple_color],
    // [p9, [120, 255], orange_color],
    // [p8, [128, 255], cyan_color],
    // [p7, [136, 255], yellow_color],
  ];
  //console.log("the_lines", the_lines);

  return the_lines;
}
/*

cyan_color = `rgb(0,157,157)`;
grey_color = `rgb(157,157,157)`;
yellow_color = `rgb(157,157,0)`;
gg_color = `rgb(0,255,165)`;
*/

///////////////////////////////

function drawLines(to_from) {
  to_from.forEach(a_line => {
    let [p1, p2, the_color] = a_line;
    [x1, y1] = p1;
    [x2, y2] = p2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = the_color;
    ctx.lineWidth = line_width;
    ctx.stroke();
    ctx.closePath();
  });
}

function winnowExtras(cube_lines_360) {
  var winnowed_lines_90 = [];
  for (var i = 0; i < cube_lines_360.length; i = i + 4) {
    a_cube = cube_lines_360[i];
    winnowed_lines_90.push(a_cube);
  }
  return winnowed_lines_90;
}


function stretchXValues(overlap_cube_lines) {
  var stretched_cubes = [];
  x_window = 0;
  for (var i = 0; i < overlap_cube_lines.length; i++) {
    a_cube = overlap_cube_lines[i];
    stretched_cubes[i] = [];
    for (var j = 0; j < a_cube.length; j++) {
      a_line = overlap_cube_lines[i][j];
      let [p1, p2, the_color] = a_line;
      [x1, y1] = p1;
      [x2, y2] = p2;
      let x1_shift = x1 + i * object_width;
      let x2_shift = x2 + i * object_width;
      s1 = [x1_shift, y1];
      s2 = [x2_shift, y2,];
      shifted_lines = [s1, s2, the_color];


      stretched_cubes[i][j] = shifted_lines;
    }
  }
  return stretched_cubes;
}

function makeCubes() {
  for (var the_degrees = 0; the_degrees < numInitDrawings; the_degrees++) {
    //  function getCube(radius, center_x, top_center_y, height_diff, degree_360) {
    cube_lines[the_degrees] = getCube(99, 128, 48, 100, the_degrees);
  }
  cube_lines_90 = winnowExtras(cube_lines);
  cubes_stretched_90 = stretchXValues(cube_lines_90);

}

function rotateDeg() {
  deg_0_360 = deg_0_360 + 1;
  if (deg_0_360 == numWinnowedDrawings) {
    deg_0_360 = 0;
    finished = true;
  } else {
    finished = false;
  }
  return finished;
}

//////////////////////////////////

makeCubes();


while (true) {
  drawLines(cubes_stretched_90[deg_0_360]);
  finished = rotateDeg();
  if (finished) break;
}

const out = fs.createWriteStream('cubes.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('The PNG file was created.'));

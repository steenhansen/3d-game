//  \Users\16043\Documents\GitHub\squares\make-images\cubes>node cubes.js

object_width = 200;
object_height = 300;

numInitDrawings = 360;
numWinnowedDrawings = 90;  // 360/4


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numWinnowedDrawings, object_height);
const ctx = canvas.getContext('2d');



line_width = 1;

var deg_0_360 = 0;
var cube_lines = [];

var cube_lines_90 = [];
var cubes_stretched_90 = [];

////////////////////////////////////


orange_color = `rgb(255,165,0)`;
purple_color = `rgb(157,0,255)`;

function getCube(radius, center_x, top_center_y, height_diff, degree_360) {
  radius = 99;
  flatten = 1;
  a_deg = degree_360;
  b_deg = degree_360 + 90;
  c_deg = degree_360 + 180;
  d_deg = degree_360 + 270;

  bot_center_y = top_center_y + height_diff;

  top_x_1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * a_deg / 360));
  top_y_1 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * a_deg / 360) * flatten);

  top_x_2 = Math.round(center_x + radius * Math.cos(2 * Math.PI * b_deg / 360));
  top_y_2 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * b_deg / 360) * flatten);

  top_x_3 = Math.round(center_x + radius * Math.cos(2 * Math.PI * c_deg / 360));
  top_y_3 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * c_deg / 360) * flatten);

  top_x_4 = Math.round(center_x + radius * Math.cos(2 * Math.PI * d_deg / 360));
  top_y_4 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * d_deg / 360) * flatten);

  the_lines = [
    // top square
    [top_x_1, top_y_1, top_x_2, top_y_2, orange_color],
    [top_x_2, top_y_2, top_x_3, top_y_3, orange_color],
    [top_x_3, top_y_3, top_x_4, top_y_4, purple_color],
    [top_x_4, top_y_4, top_x_1, top_y_1, orange_color],
    // bot square
    [top_x_1, top_y_1 + height_diff, top_x_2, top_y_2 + height_diff, orange_color],
    [top_x_2, top_y_2 + height_diff, top_x_3, top_y_3 + height_diff, orange_color],
    [top_x_3, top_y_3 + height_diff, top_x_4, top_y_4 + height_diff, orange_color],
    [top_x_4, top_y_4 + height_diff, top_x_1, top_y_1 + height_diff, purple_color],
    // top to bottom
    [top_x_1, top_y_1, top_x_1, top_y_1 + height_diff, orange_color],
    [top_x_2, top_y_2, top_x_2, top_y_2 + height_diff, orange_color],
    [top_x_3, top_y_3, top_x_3, top_y_3 + height_diff, orange_color],
    [top_x_4, top_y_4, top_x_4, top_y_4 + height_diff, purple_color],
  ];
  return the_lines;
}

///////////////////////////////

function drawLines(to_from) {
  to_from.forEach(a_line => {
    [x1, y1, x2, y2, the_color] = a_line;
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
      let [x1, y1, x2, y2, the_color] = a_line;
      let x1_shift = x1 + i * object_width;
      let x2_shift = x2 + i * object_width;
      shifted_lines = [x1_shift, y1, x2_shift, y2, the_color];
      stretched_cubes[i][j] = shifted_lines;
    }
  }
  return stretched_cubes;
}

function makeCubes() {
  for (var the_degrees = 0; the_degrees < numInitDrawings; the_degrees++) {
    cube_lines[the_degrees] = getCube(99, 100, 100, 100, the_degrees);
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

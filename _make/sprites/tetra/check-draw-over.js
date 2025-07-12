//  \Users\16043\Documents\GitHub\squares\make-images\cubes>node tetra-2-create.js


function drawVertex(vertex, start, end) {
  [x_vertex, y_vertex] = vertex;
  [x_start, y_start] = start;
  [x_end, y_end] = end;
  if (x_start < x_end) {

    if (y_start < y_end) {
      console.log("h");
    } else if (y_start > y_end) {

    } else {

    }

  } else if (x_start > x_end) {
    if (y_start < y_end) {

    } else if (y_start > y_end) {

    } else {

    }
  } else {
    if (y_start < y_end) {

    } else if (y_start > y_end) {

    } else {

    }
  }
}

drawVertex([10, 10], [15, 15], [18, 8]);



object_width = 200;
object_height = 300;

numInitDrawings = 360;
numWinnowedDrawings = 90;  // 360/4


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numWinnowedDrawings, object_height);
const ctx = canvas.getContext('2d');



line_width = 3;

var deg_0_360 = 0;
var cube_lines = [];

var cube_lines_90 = [];
var cubes_stretched_90 = [];

////////////////////////////////////

red_color = `rgb(255,0,0)`;
blue_color = `rgb(0,0,255)`;
green_color = `rgb(0,255,0)`;
black_color = `rgb(0,0,0)`;
white_color = `rgb(255,255,255)`;

cyan_color = `rgb(0,157,157)`;
grey_color = `rgb(157,157,157)`;
yellow_color = `rgb(157,157,0)`;
gg_color = `rgb(0,255,165)`;


orange_color = `rgb(255,165,0)`;
purple_color = `rgb(157,0,255)`;

function getCube(radius, center_x, top_center_y, height_diff, degree_360) {
  radius = 95;
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

  //
  corn_outside_rad = radius;
  corn_mid_rad = 70;
  corn_inside_rad = 0;

  corn_x_1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * a_deg / 360));
  corn_y_1 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * a_deg / 360) * flatten);

  e_deg = degree_360 + 45;
  corn_x_2 = Math.round(center_x + corn_mid_rad * Math.cos(2 * Math.PI * e_deg / 360));
  corn_y_2 = Math.round(top_center_y + corn_mid_rad * Math.sin(2 * Math.PI * e_deg / 360) * flatten);

  corn_x_3 = Math.round(center_x);
  corn_y_3 = Math.round(top_center_y);

  g_deg = degree_360 + 270 + 45;
  corn_x_4 = Math.round(center_x + corn_mid_rad * Math.cos(2 * Math.PI * g_deg / 360));
  corn_y_4 = Math.round(top_center_y + corn_mid_rad * Math.sin(2 * Math.PI * g_deg / 360) * flatten);

  var corn_height = height_diff / 2;
  the_lines = [
    // top square
    [top_x_1, top_y_1, top_x_2, top_y_2, blue_color],
    [top_x_2, top_y_2, top_x_3, top_y_3, blue_color],
    [top_x_3, top_y_3, top_x_4, top_y_4, blue_color],
    [top_x_4, top_y_4, top_x_1, top_y_1, blue_color],
    // bot square
    [top_x_1, top_y_1 + height_diff, top_x_2, top_y_2 + height_diff, blue_color],
    [top_x_2, top_y_2 + height_diff, top_x_3, top_y_3 + height_diff, blue_color],
    [top_x_3, top_y_3 + height_diff, top_x_4, top_y_4 + height_diff, blue_color],
    [top_x_4, top_y_4 + height_diff, top_x_1, top_y_1 + height_diff, blue_color],
    // top to bottom
    [top_x_1, top_y_1, top_x_1, top_y_1 + height_diff, blue_color],
    [top_x_2, top_y_2, top_x_2, top_y_2 + height_diff, blue_color],
    [top_x_3, top_y_3, top_x_3, top_y_3 + height_diff, blue_color],
    [top_x_4, top_y_4, top_x_4, top_y_4 + height_diff, blue_color],


    /*

    cyan_color = `rgb(0,157,157)`;
grey_color = `rgb(157,157,157)`;
yellow_color = `rgb(157,157,0)`;
gg_color = `rgb(0,255,165)`;
*/

    // top corner
    [corn_x_1, corn_y_1, corn_x_2, corn_y_2, red_color],
    [corn_x_2, corn_y_2, corn_x_3, corn_y_3, red_color],
    [corn_x_3, corn_y_3, corn_x_4, corn_y_4, red_color],
    [corn_x_4, corn_y_4, corn_x_1, corn_y_1, red_color],


    // bot corner
    [corn_x_1, corn_y_1 + corn_height, corn_x_2, corn_y_2 + corn_height, red_color],
    [corn_x_2, corn_y_2 + corn_height, corn_x_3, corn_y_3 + corn_height, red_color],
    [corn_x_3, corn_y_3 + corn_height, corn_x_4, corn_y_4 + corn_height, red_color],
    [corn_x_4, corn_y_4 + corn_height, corn_x_1, corn_y_1 + corn_height, red_color],

    [corn_x_1, corn_y_1, corn_x_1, corn_y_1 + corn_height, red_color],
    [corn_x_2, corn_y_2, corn_x_2, corn_y_2 + corn_height, red_color],
    [corn_x_3, corn_y_3, corn_x_3, corn_y_3 + corn_height, red_color],
    [corn_x_4, corn_y_4, corn_x_4, corn_y_4 + corn_height, red_color],


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


ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.strokeStyle = `rgb(255,255,0, 0.528)`;;
ctx.lineWidth = 40;
ctx.stroke();
ctx.closePath();


const out = fs.createWriteStream('cubes.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('The PNG file was created.'));

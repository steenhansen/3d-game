file_name = 'one.png';
SHOW_SLIDE_NUMBER = true;
SHOW_FRAME = true;
SHADE_DIFFERENCE = 4;

// \Users\16043\Documents\GitHub\squares\make\sprites\three>node three_1.js
// cd documents/GitHub/squares/make/cubes/sprites/three

object_width = 256;
object_height = 256;
numDrawings = 90;


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numDrawings, object_height);
const ctx = canvas.getContext('2d');

line_width = 16;
var deg_0_90 = 0;
var cube_lines = [];
var cubes_stretched_90 = [];

//  0 darkest       lighter       23 lighter    darker   45 darker  lighter 67  lighter  90 dark
let brighten = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 21, 20, 19, 18, 17, 16, 15,   // 23rd lightest)
  14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
  4, 3, 2, 1, 0, 1, 2, 3, 4, 5,       // 45th darkest
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 22, 21, 20,   // 67th lightest
  19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
  9, 8, 7, 6, 5, 4, 3, 2, 1, 0,  //90th darkest
];


function getCube(degree_90) {
  center_x = 128;
  top_center_y = 10;
  degree_360 = degree_90 * 4;
  radius = 60;
  flatten = 0;
  a_deg = degree_360;
  b_deg = degree_360 + 180;

  left_x = Math.round(center_x + radius * Math.cos(2 * Math.PI * a_deg / 360));
  top_y = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * a_deg / 360) * flatten);

  middle_x = Math.round(center_x);
  center_y = Math.round(top_center_y + 118);

  right_x = Math.round(center_x + radius * Math.cos(2 * Math.PI * b_deg / 360));
  bottom_y = Math.round(top_center_y + 236 + radius * Math.sin(2 * Math.PI * b_deg / 360) * flatten);

  let ptop_a = [(middle_x + right_x) / 2, top_y + 32];
  let pbot_a = [(middle_x + right_x) / 2, bottom_y];
  let pbot_b = [(middle_x + left_x) / 2, bottom_y];

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

  the_lines = [
    [ptop_a, p2, ''],
    [pbot_a, pbot_b, ''],
    //[p1, p2, ''],
    //[p2, p3, ''],
    //[p4, p5, ''],
    //[p5, p6, ''],
    //[p7, p8, ''],
    //[p8, p9, ''],
    //   [p1, p4, ''],
    [p2, p5, ''],
    //[p3, p6, ''],
    // [p4, p7, ''],
    [p5, p8, ''],
    //[p6, p9, ''],
  ];

  return the_lines;
}

function drawLines(to_from) {
  to_from.forEach(a_line => {
    let [p1, p2, debug_color] = a_line;
    [x1, y1] = p1;
    [x2, y2] = p2;

    if (SHOW_SLIDE_NUMBER) {
      ctx.font = "48px serif";
      ctx.strokeStyle = `rgb(0,0,0)`;
      ctx.strokeText(deg_0_90, deg_0_90 * 256 + 2, 28);
    }
    if (SHOW_FRAME) {
      ctx.strokeStyle = `rgb(0,0,0)`;;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(deg_0_90 * 256, 0);
      ctx.lineTo(deg_0_90 * 256, 256);
      ctx.lineTo(0, 256);
      ctx.lineTo(0, 0);
      ctx.stroke();
      ctx.closePath();
    }

    let bright_dark = brighten[deg_0_90];
    let blue_brightness = SHADE_DIFFERENCE * bright_dark;
    let green_brightness = SHADE_DIFFERENCE * bright_dark;
    a_color = `rgb(255,${blue_brightness},${green_brightness})`;
    for (let i = line_width; i > 0; i--) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = a_color;
      ctx.lineWidth = i;
      ctx.stroke();
      ctx.closePath();
    }
  });
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
//////////////////////////////////

for (var the_degrees = 0; the_degrees < numDrawings; the_degrees++) {
  cube_lines[the_degrees] = getCube(the_degrees);
}

cubes_stretched_90 = stretchXValues(cube_lines);


while (true) {
  if (deg_0_90 == numDrawings) {
    break;
  }
  drawLines(cubes_stretched_90[deg_0_90]);
  deg_0_90 = deg_0_90 + 1;
}

const out = fs.createWriteStream(file_name);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log(`${file_name} created.`));
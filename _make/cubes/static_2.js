SHOW_SLIDE_NUMBER = true;

SHADE_DIFFERENCE = 4;

SHOW_FRAME = true;

//  \Users\16043\Documents\GitHub\squares\make-images\cubes>node nines-create_5.js

// cd documents/GitHub/squares/make/cubes/

/// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform

// https://stock.adobe.com/search?k=digital+clock+numbers



object_width = 256;
object_height = 256;

numDrawings = 90;
//numWinnowedDrawings = 90; //90;  // 360/4


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numDrawings, object_height);
const ctx = canvas.getContext('2d');

//ctx.transform


line_width = 16;  //3;  squish 16/2 = -8

var deg_0_90 = 0;
var cube_lines = [];

var cube_lines_90 = [];
var cubes_stretched_90 = [];

////////////////////////////////////

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


//  cube_lines[the_degrees] = getCube(99, 128, 96, 64, the_degrees);
//cube_lines[the_degrees] = getCube(99, 128, 10, 100, the_degrees);
function getCube(radius, center_x, top_center_y, height_diff, degree_90) {
  console.log("sss");
  let the_lines = [];
  degree_360 = degree_90 * 4;
  //  radius = 120;         // 50=116     54=124        58=132 60=136           134;
  flatten = 1; //.1;
  inner_radius = radius - 1;
  a_deg = degree_360;
  b_deg = degree_360 + 180;
  black_color = `rgb(0,0,0)`;
  grey_color = `rgb(128,128,128)`;
  for (i = 0; i < 180; i = i + 1) {
    console.log("sss");
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360));
    y1 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);
    let p1 = [x1, y1];
    //   x2 = Math.round(center_x + radius * Math.cos(2 * Math.PI * (i - 180) / 360));
    //  y2 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * (i - 180) / 360) * flatten);
    //    let p2 = [x1 + 0.01, y1 + 0.01];
    diff = y1 - 128;
    y2 = 128 - diff;
    let p2 = [x1, y2];


    for (j = y1; j > y2; j--) {
      let the_color;
      let rand = Math.floor(Math.random() * 2);
      if (rand == 0) {
        the_color = black_color;
      } else {
        the_color = grey_color;  //grey_color;
      }

      ctx.strokeStyle = the_color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, j);
      ctx.lineTo(x1, j + 1);
      console.log(x1, j);
      ctx.stroke();
      ctx.closePath();

      //the_lines.push([[x1, i], [x1, i + 1], the_color]);
    }
    //  console.log([p1, p2, the_color]);

  }

  return the_lines;
}
/*

cyan_color = `rgb(0,157,157)`;
grey_color = `rgb(157,157,157)`;
yellow_color = `rgb(157,157,0)`;
gg_color = `rgb(0,255,165)`;
*/

///////////////////////////////

function drawLines(deg_0_90, to_from) {
  console.log(to_from);
  console.log("/////////////////");
  to_from.forEach(a_line => {
    let [p1, p2, debug_color] = a_line;
    [x1, y1] = p1;
    [x2, y2] = p2;

    if (SHOW_SLIDE_NUMBER) {
      ctx.font = "48px serif";
      ctx.strokeStyle = black_color;
      ctx.strokeText(deg_0_90, deg_0_90 * 256 + 2, 28);
    }
    if (SHOW_FRAME) {
      ctx.strokeStyle = debug_color;
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
    //  a_color = debug_color;
    a_color = `rgb(33,${blue_brightness},${green_brightness})`;
    //   console.log("222", a_color);
    // for (let i = line_width; i > 0; i--) {

    //  console.log("111", x1, y1);
    //   console.log("222", x2, y2);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = debug_color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
    //   }


    // ctx.beginPath();
    // ctx.moveTo(x1, y1);
    // ctx.lineTo(x2, y2);
    // ctx.strokeStyle = the_color;
    // ctx.lineWidth = line_width;
    // ctx.stroke();
    // ctx.closePath();



  });
}

// function winnowExtras(cube_lines_360) {
//   var winnowed_lines_90 = [];
//   for (var i = 0; i < cube_lines_360.length; i = i + 4) {
//     a_cube = cube_lines_360[i];
//     winnowed_lines_90.push(a_cube);
//   }
//   return winnowed_lines_90;
// }


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

  //  for (var the_degrees = 0; the_degrees < numDrawings; the_degrees++) {
  //  for (var the_degrees = 0; the_degrees < numDrawings; the_degrees++) {
  the_degrees = 0;
  cube_lines[0] = getCube(120, 128, 128, 250, the_degrees);
  //}
  cubes_stretched_90 = stretchXValues(cube_lines);
}

function rotateDeg() {
  deg_0_90 = deg_0_90 + 1;
  if (deg_0_90 == numDrawings) {
    deg_0_90 = 0;
    finished = true;
  } else {
    finished = false;
  }
  return finished;
}

//////////////////////////////////

makeCubes();


//while (true) {
//drawLines(deg_0_90, cubes_stretched_90[deg_0_90]);
// finished = rotateDeg();
// if (finished) break;
//}

const out = fs.createWriteStream('cubes.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('The PNG file was created.'));

// cd documents/GitHub/squares/make/sprites/balls/

// node colored-ball-10.js

file_name = 'colored-ball.png';

DO_DEBUG = false;
SHOW_SLIDE_NUMBER = true;
SHOW_FRAME = false;

radius = 50;
center_x = 128;

var y_centers = new Array(45);
var y_flattens = new Array(45);
var up_downs = new Array(45);

var bot_curve_ys = new Array(45);

for (var i = 0; i < bot_curve_ys.length; i++) {
  bot_curve_ys[i] = new Array();
}

match_swirl_at_90 = 14.3;
object_width = 256;
object_height = 256;
numDrawings = 90;
swirl_width = 16;

white_color = `rgb(255,255,255,255)`;
black_color = `rgb(0,0,0,255)`;
grey_color = `rgb(127,127,127,255)`;
red_color = `rgb(255,0,0,255)`;
green_color = `rgb(0,255,0,255)`;

yellow_top = `rgb(255, 255, 0,255)`;
yellow_middle = `rgb(255, 234, 0,255)`;


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numDrawings, object_height);
const ctx = canvas.getContext('2d');

center_y = 110;


function ball(x, y, color) {

  var radius = 10;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  //  if (fill) {
  ctx.fillStyle = color;
  ctx.fill();
  // }
  // if (stroke) {
  //  ctx.lineWidth = 1;
  // ctx.strokeStyle = 'red';
  // ctx.stroke();
  //}

  // var radius = 10;

  // let circle = new Path2D();  // <<< Declaration
  // circle.arc(x, y, radius, 0, 2 * Math.PI, false);

  // context.fillStyle = 'blue';
  // context.fill(circle); //   <<< pass circle to context

  // context.lineWidth = 10;
  // context.strokeStyle = color;
  // context.stroke(circle);  // <<< pass circle here too
}


function planet(degree_90, start, stop) {
  radius = 80;
  ctx.lineWidth = 1;

  frame_step = degree_90 * 256;
  for (i = start; i < stop; i = i + 0.2) {
    cos_x = Math.cos(2 * Math.PI * i / 360);
    sin_y = Math.sin(2 * Math.PI * i / 360);
    x1 = Math.round(center_x + radius * cos_x) + frame_step;
    y1 = Math.round(center_y + radius * sin_y);

    x2 = center_x + frame_step;
    y2 = center_y;

    ctx.strokeStyle = `rgb(128,128,128,255)`;;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }

}


function draw_w_e(degree_90) {
  degree_360 = degree_90 * 4;
  radius = 110;
  inside_radius = 100;
  the_color = 255 - degree_90;
  flatten = 0.5;
  ctx.lineWidth = 1;
  frame_step = degree_90 * 256;
  cos_x = Math.cos(2 * Math.PI * degree_360 / 360);
  sin_y = Math.sin(2 * Math.PI * degree_360 / 360);
  x1 = Math.round(center_x + radius * cos_x) + frame_step;
  y1 = Math.round(center_y + radius * sin_y * flatten);
  ball(x1, y1, `rgb(0,${the_color},0,255)`);
  planet(degree_90, 180, 335);

  drawBorder(degree_90);
  drawSlidNum(degree_90);
}




function drawBorder(degree_90) {
  if (SHOW_FRAME) {
    ctx.strokeStyle = `rgb(0,255,165)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(degree_90 * 256, 0);
    ctx.lineTo(degree_90 * 256 + 255, 0);
    ctx.lineTo(degree_90 * 256 + 255, 255);
    ctx.lineTo(degree_90 * 256, 255);
    ctx.lineTo(degree_90 * 256, 0, 0);
    ctx.stroke();
    ctx.closePath();
  }
}

function drawSlidNum(degree_90) {
  if (SHOW_SLIDE_NUMBER) {
    ctx.font = "48px serif";
    ctx.strokeStyle = black_color;
    ctx.strokeText(degree_90, degree_90 * 256 + 2, 28);
  }
}

function makeBullets() {
  if (DO_DEBUG) {
    drawBullet_left(0);


    // for (var the_degrees = 9; the_degrees < numDrawings; the_degrees = the_degrees + 10) {
    //   drawBullet(the_degrees);
    // }
  } else {
    for (var the_degrees = 0; the_degrees < 90; the_degrees = the_degrees + 1) {


      //for (var the_degrees = 0; the_degrees < 1; the_degrees = the_degrees + 1) {
      planet(the_degrees, 0, 360);
      draw_w_e(the_degrees);
      //  console.log(the_degrees);
    }
    //console.log("y_centers", y_centers);

    // drawBand_left(0);
    // drawBand_left(1);
    // drawBand_left(2);
    // drawBand_left(3);
    // drawBand_left(4);
    // drawBand_left(5);
    // drawBand_left(6);


    // drawBand_left(7);
    // drawBand_left(8);
    // drawBand_left(9);
    // drawBand_left(10);
    // drawBand_left(11);
    // drawBand_left(12);
    // drawBand_left(13);



    // drawBand_left(14);


    // drawBand_left(15);
    // drawBand_left(16);
    // drawBand_left(17);
    // drawBand_left(18);
    // drawBand_left(19);


    // drawBand_left(20);
    // drawBand_left(21);
    // drawBand_left(22);
    // drawBand_left(23);
    // drawBand_left(24);
    // drawBand_left(25);
    // drawBand_left(26);
    // drawBand_left(27);
    // drawBand_left(28);
    // drawBand_left(29);
    // for (var the_degrees = 0; the_degrees < 90; the_degrees = the_degrees + 1) {
    //   drawBand_left(the_degrees);
    //   //  console.log(the_degrees);
    // }

    // for (var the_degrees = 45; the_degrees < numDrawings; the_degrees = the_degrees + 1) {
    //   drawBullet_right(the_degrees);
    // }

    // for (var the_degrees = 60; the_degrees < numDrawings; the_degrees = the_degrees + 1) {

    //   drawBand_right(the_degrees);
    // }
    // drawBand_right(87);
    // drawBand_right(88);
    // drawBand_right(89);
  }
  //  console.log(bot_curve_ys);

}


makeBullets();
const out = fs.createWriteStream(file_name);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log(`${file_name} created.`));

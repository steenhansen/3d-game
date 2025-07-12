




/*

draw back balls

draw 3 part circle

draw front balls

*/










// cd documents/GitHub/squares/make/sprites/balls/

// node colored-ball-60.js

file_name = 'colored-ball.png';

DO_DEBUG = false;
SHOW_SLIDE_NUMBER = true;
SHOW_FRAME = true;

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

center_y = 127;


function ball(x, y, color) {
  var radius = 10;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawOneThird(i) {
  cos_x = Math.cos(2 * Math.PI * i / 360);
  sin_y = Math.sin(2 * Math.PI * i / 360);
  x1 = Math.round(center_x + radius * cos_x) + frame_step;
  y1 = Math.round(center_y + radius * sin_y);
  x2 = Math.round(center_x + radius22 * cos_x) + frame_step;
  y2 = Math.round(center_y + radius22 * sin_y);
  ctx.strokeStyle = `rgb(128,128,128,255)`;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}


function planet2(degree_90) {
  deg_first_start = degree_90 * 4 / 6;
  deg_first_end = deg_first_start + 60;
  deg_second_start = degree_90 * 4 / 6 + 120;
  deg_second_end = deg_second_start + 60;
  deg_third_start = degree_90 * 4 / 6 + 240;
  deg_third_end = deg_third_start + 60;
  radius = 90;
  ctx.lineWidth = 1;
  radius22 = 55;
  frame_step = degree_90 * 256;
  for (i = deg_first_start; i < deg_first_end; i = i + 0.2) {
    drawOneThird(i);
  }
  for (i = deg_second_start; i < deg_second_end; i = i + 0.2) {
    drawOneThird(i);
  }
  for (i = deg_third_start; i < deg_third_end; i = i + 0.2) {
    drawOneThird(i);
  }
}



function draw_green(degree_90, the_green) {
  degree_360 = degree_90 * 4;
  radius = 110;
  inside_radius = 100;
  flatten = 0.5;
  ctx.lineWidth = 1;
  frame_step = degree_90 * 256;
  cos_x = Math.cos(2 * Math.PI * degree_360 / 360);
  sin_y = Math.sin(2 * Math.PI * degree_360 / 360);
  x1 = Math.round(center_x + radius * cos_x) + frame_step;
  y1 = Math.round(center_y + radius * sin_y * flatten);
  ball(x1, y1, the_green);

  drawBorder(degree_90);
  drawSlidNum(degree_90);
}



function draw_blue(degree_90, the_blue) {
  degree_360 = degree_90 * 4 + 180;
  radius = 110;
  inside_radius = 100;
  flatten = 0.5;
  ctx.lineWidth = 1;
  frame_step = degree_90 * 256;
  cos_x = Math.cos(2 * Math.PI * degree_360 / 360);
  sin_y = Math.sin(2 * Math.PI * degree_360 / 360);
  x1 = Math.round(center_x + radius * cos_x * flatten) + frame_step;
  y1 = Math.round(center_y + radius * sin_y);
  ball(x1, y1, the_blue);

  drawBorder(degree_90);
  drawSlidNum(degree_90);
}

function draw_red(degree_90, the_red) {
  degree_360 = degree_90 * 4; // + 90;
  radius = 110;
  inside_radius = 100;
  flatten = 0.5;
  ctx.lineWidth = 1;
  frame_step = degree_90 * 256;
  cos_x = Math.cos(2 * Math.PI * (degree_360 + 45) / 360);
  sin_y = Math.sin(2 * Math.PI * degree_360 / 360);
  x1 = Math.round(center_x + radius * cos_x * flatten) + frame_step;
  y1 = Math.round(center_y + radius * sin_y);
  ball(x1, y1, the_red);

  drawBorder(degree_90);
  drawSlidNum(degree_90);
}

function draw_yellow(degree_90, the_yellow) {
  degree_360 = degree_90 * 4 + 270;
  radius = 110;
  inside_radius = 100;
  flatten = 0.5;
  ctx.lineWidth = 1;
  frame_step = degree_90 * 256;
  cos_x = Math.cos(2 * Math.PI * (degree_360 - 45) / 360);
  sin_y = Math.sin(2 * Math.PI * degree_360 / 360);
  x1 = Math.round(center_x + radius * cos_x * flatten) + frame_step;
  y1 = Math.round(center_y + radius * sin_y);
  ball(x1, y1, the_yellow);
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
    ctx.lineTo(degree_90 * 256, 0);
    ctx.lineTo(0, 0);
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



    for (var the_degrees = 0; the_degrees <= 89; the_degrees = the_degrees + 1) {
      draw_green(the_degrees, `rgb(0,192,0,255)`);
      draw_blue(the_degrees, `rgb(0,0,192,255)`);
      draw_red(the_degrees, `rgb(192,0,0,255)`);
      draw_yellow(the_degrees, `rgb(224,224,0,255)`);
      planet2(the_degrees);
    }

    for (var the_degrees = 0; the_degrees <= 51; the_degrees = the_degrees + 1) {
      draw_yellow(the_degrees, `rgb(255,255,0,255)`);
    }
    for (var the_degrees = 80; the_degrees <= 89; the_degrees = the_degrees + 1) {
      draw_yellow(the_degrees, `rgb(255,255,0,255)`);
    }
    for (var the_degrees = 0; the_degrees <= 31; the_degrees = the_degrees + 1) {
      draw_red(the_degrees, `rgb(255,0,0,255)`);
    }
    for (var the_degrees = 61; the_degrees <= 89; the_degrees = the_degrees + 1) {
      draw_red(the_degrees, `rgb(255,0,0,255)`);
    }


    for (var the_degrees = 0; the_degrees <= 29; the_degrees = the_degrees + 1) {
      draw_blue(the_degrees, `rgb(0,0,255,255)`);
    }
    for (var the_degrees = 61; the_degrees <= 89; the_degrees = the_degrees + 1) {
      draw_blue(the_degrees, `rgb(0,0,255,255)`);
    }

    for (var the_degrees = 0; the_degrees <= 52; the_degrees = the_degrees + 1) {
      draw_green(the_degrees, `rgb(0,255,0,255)`);
    }
    for (var the_degrees = 83; the_degrees <= 89; the_degrees = the_degrees + 1) {
      draw_green(the_degrees, `rgb(0,255,0,255)`);
    }

    // for (var the_degrees = 0; the_degrees < 90; the_degrees = the_degrees + 1) {
    //   planet(the_degrees, 0, 360, `rgb(128,128,128,255)`);
    //   draw_green(the_degrees);
    //   // draw_blue(the_degrees);
    //   // draw_red(the_degrees);
    //   // draw_yellow(the_degrees);
    // }
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

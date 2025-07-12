// cd documents/GitHub/squares/make/sprites/balls/

// node colored-ball-10.js

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


function planet(degree_90, start, stop, color) {
  radius = 80;
  ctx.lineWidth = 1;
  radius22 = 55;
  frame_step = degree_90 * 256;
  for (i = start; i < stop; i = i + 0.2) {
    cos_x = Math.cos(2 * Math.PI * i / 360);
    sin_y = Math.sin(2 * Math.PI * i / 360);
    x1 = Math.round(center_x + radius * cos_x) + frame_step;
    y1 = Math.round(center_y + radius * sin_y);

    // x2 = center_x + frame_step;
    // y2 = center_y;

    x2 = Math.round(center_x + radius22 * cos_x) + frame_step;
    y2 = Math.round(center_y + radius22 * sin_y);


    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }

}



function draw_green(degree_90) {
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
  if (degree_90 < 61) {
    ball(x1, y1, `rgb(0,255,0,255)`);
    if (degree_90 > 55) {
      planet(degree_90, 200, 230, `rgb(64,128,64,255)`);
    }
  } else if (degree_90 > 74) {
    ball(x1, y1, `rgb(0,255,0,255)`);
    if (degree_90 < 80) {
      planet(degree_90, 310, 340, `rgb(96,128,96,255)`);
    }
  } else {
    ctx.font = "48px serif";
    ctx.strokeStyle = black_color;
    ctx.strokeText(degree_90, degree_90 * 256 + 2, 64);
    if (degree_90 > 63 && degree_90 < 73) {
      ball(x1, y1, `rgb(0,255,0,255)`);
      planet(degree_90, 220, 320, `rgb(0,128,0,255)`);
    }

  }
  drawBorder(degree_90);
  drawSlidNum(degree_90);
}



function draw_blue(degree_90) {
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
  if (degree_90 < 39) {
    ball(x1, y1, `rgb(0,0,255,255)`);
    if (degree_90 > 33) {
      //planet(degree_90, 110, 140, `rgb(0,0,128,255)`);
      planet(degree_90, 110 + 180, 140 + 180, `rgb(0,0,128,255)`);
    }
  } else if (degree_90 > 51) {
    ball(x1, y1, `rgb(0,0,255,255)`);
    if (degree_90 < 58) {
      //      planet(degree_90, 220, 250, `rgb(0,0,128,255)`);
      planet(degree_90, 220 + 180, 250 + 180, `rgb(0,0,128,255)`);
    }
  } else {
    ctx.font = "48px serif";
    ctx.strokeStyle = black_color;
    ctx.strokeText(degree_90, degree_90 * 256 + 2, 64);
    //ball(x1, y1, `rgb(0,0,128,255)`);
  }
  drawBorder(degree_90);
  drawSlidNum(degree_90);
}

function draw_red(degree_90) {
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
  if (degree_90 < 39) {
    ball(x1, y1, `rgb(255,0,0,255)`);
    if (degree_90 > 35) {
      planet(degree_90, 125, 145, `rgb(128,0,0,255)`);
    }
  } else if (degree_90 > 54) {
    ball(x1, y1, `rgb(255,0,0,255)`);
    if (degree_90 < 59) {
      planet(degree_90, 235, 280, `rgb(128,0,0,255)`);
    }
  } else {
    ctx.font = "48px serif";
    ctx.strokeStyle = black_color;
    ctx.strokeText(degree_90, degree_90 * 256 + 2, 64);
    // ball(x1, y1, `rgb(128,128,0,255)`);
  }
  drawBorder(degree_90);
  drawSlidNum(degree_90);
}

function draw_yellow(degree_90) {
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
  if (degree_90 < 54) {
    ball(x1, y1, `rgb(255,255,0,255)`);
    // if (degree_90 > 8) {
    //   planet(degree_90, 210, 240, `rgb(128,128,0,255)`);
    // }
  } else if (degree_90 < 58) {
    ball(x1, y1, `rgb(255,255,0,255)`);
    if (degree_90 < 58) {
      planet(degree_90, 80, 100, `rgb(128,128,0,255)`);
    }
  } else if (degree_90 > 74) {
    ball(x1, y1, `rgb(255,255,0,255)`);
    if (degree_90 < 79) {
      planet(degree_90, 215, 240, `rgb(128,128,0,255)`);
    }
  } else {
    ctx.font = "48px serif";
    ctx.strokeStyle = black_color;
    ctx.strokeText(degree_90, degree_90 * 256 + 2, 64);
    // ball(x1, y1, `rgb(128,128,0,255)`);
  }
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
    for (var the_degrees = 0; the_degrees < 90; the_degrees = the_degrees + 1) {



      planet(the_degrees, 0, 360, `rgb(128,128,128,255)`);
      draw_green(the_degrees);
      // draw_blue(the_degrees);
      // draw_red(the_degrees);
      // draw_yellow(the_degrees);
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

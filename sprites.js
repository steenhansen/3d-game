

/*
    256 is the width of the square, and column

COLUMN_WIDTH = 256
HALF_COLUMN_WIDTH=COLUMN_WIDTH/2

    128 == PX_FROM_CENTER

*/

function drawLine(point_1, point_2, the_color) {
  // console.log("P1", point_1);
  const canvas = document.getElementById("the-draw");
  const ctx = canvas.getContext("2d");

  let [x1, y1] = point_1;
  let [x2, y2] = point_2;
  if (the_color === undefined) {
    the_color = `rgb(0,0,0)`;
  }
  ctx.strokeStyle = the_color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}



document.getElementById('the-sprites').innerHTML = `
<div id="square-right">2</div>

<div id="square-front">1</div>
<div id="square-back">2</div>

<div id="bullet-1">1</div>
<div id="ball-1">1</div>

<div id="octa-1">1</div>

<div id="cube-1">1</div>
<div id="cube-2">2</div>
<div id="cube-3">3</div>
<div id="cube-4">4</div>
<div id="cube-5">5</div>
<div id="cube-6">6</div>
<div id="cube-7">7</div>
<div id="cube-8">8</div>
<div id="cube-9">9</div>
<div id="cube-10">10</div>
<div id="cube-11">11</div>
<div id="cube-12">12</div>
<div id="cube-13">13</div>
<div id="cube-14">14</div>
<div id="cube-15">15</div>
<div id="cube-16">16</div>

<div id="cube-y">Y2</div>




`;


let the_bullet = {
  id: "the-bullet", spin: 31,
  x: area_width_half + 260, y: 854,
  //  x_move: +1, y_move: -1,
  x_move: 0, y_move: 0,
  x_steps: 6, y_steps: 2,
};


let cube_x = {
  id: "cube-x", spin: 31,
  x: area_width_half, y: 854,
  //  x_move: +1, y_move: -1,
  x_move: 0, y_move: 0,
  x_steps: 6, y_steps: 2,
};





function spriteSvg(the_sprite, the_player) {
  let is_visible = (the_player.y >= the_sprite.y);
  if (is_visible) {
    difference_y = the_player.y - the_sprite.y;
    player_start_left = the_player.x - HALF_COLUMN_WIDTH;
    player_start_right = the_player.x + HALF_COLUMN_WIDTH;


    //console.log("DDDDD", the_player.x, player_start_left);
    if (the_player.x > player_start_left) {
      //console.log("MMMMMMM");
      let middle_column = spriteMiddle(the_sprite, the_player, difference_y);
      return middle_column;

      //let left_column = columnLeft(the_sprite, the_player, difference_y);
      //return left_column;
    } else if (player_x > player_start_right) {
      let right_column = columnRight(the_sprite, the_player, difference_y);
      return right_column;
    } else {
      //    console.log("MMMMMMM");
      let middle_column = spriteMiddle(the_sprite, the_player, difference_y);
      return middle_column;
    }
  }
}

function spriteMiddle(sprite_point, the_player, difference_y) {
  spinObject(sprite_point);
  difference_x = the_player.x - sprite_point.x;

  x_offset = HALF_VIEW_WIDTH - difference_x;

  front_left_bot_vanish_point_XXXX = [x_offset, BOTTOM_CHECKERBOARD];
  // console.log("ffffffff");
  left_front_bot = distancedPoint(difference_y, front_left_bot_vanish_point_XXXX);

  let [x, y] = left_front_bot;

  const sprite_element = document.getElementById(sprite_point.id);
  the_scale = sprite_sizes[difference_y];


  x = left_front_bot[0] - HALF_COLUMN_WIDTH;
  y = y - HALF_COLUMN_WIDTH;

  sprite_element.style.transform = `scale(${the_scale})`;

  /*
       ball at 864 == column at 902
       thus 902-864=38
  */
  cheat_sprite_y = difference_y - 49;           // 40 bad              50 good
  // console.log("ccccccc", cheat_sprite_y);
  z_index = zIndex(difference_x, cheat_sprite_y);



  sprite_element.style.marginLeft = `${x}px`;
  sprite_element.style.marginTop = `${y}px`;
  sprite_element.style.zIndex = z_index;
}

function spinObject(the_sprite) {
  // 
  if (the_sprite.x_move == 1) {
    the_sprite.x += the_sprite.x_steps;
  } else if (the_sprite.x_move == -1) {
    the_sprite.x -= the_sprite.x_steps;
  } else if (the_sprite.y_move == 1) {
    the_sprite.y += the_sprite.y_steps;
  } else if (the_sprite.y_move == -1) {
    the_sprite.y -= the_sprite.y_steps;
  }


  // the_sprite.x += the_sprite.x_move;
  // the_sprite.y += the_sprite.y_move;

  const sprite_element = document.getElementById(the_sprite.id);
  // console.log("sprite_element", sprite_element);
  let the_spin = the_sprite.spin;
  the_spin = the_spin + 1;
  if (the_spin > numDrawings) {
    the_spin = 0;
  }
  the_sprite.spin = the_spin;
  let int_spin = Math.floor(the_spin);
  //console.log('sprite_element.style', sprite_element.style.backgroundPositionX);
  sprite_element.style.backgroundPositionX = int_spin * 256 + "px";
}













let sprite_right = { id: "square-right", spin: 31, x: area_width_half - 232, y: 333 };
let sprite_front = { id: "square-front", spin: 31, x: area_width_half - 384, y: 333 };
let sprite_back = { id: "square-back", spin: 31, x: area_width_half - 384, y: 333 };


let cube_1 = { id: "cube-1", spin: 31, x: area_width_half - 384, y: 333 };

/*
        y=100 sprite can see
        y=512 player
        y= 1000 sprite hidden
*/

// function moveObject(the_sprite, player_x, player_y) {
//   spinObject(the_sprite);
//   const sprite_element = document.getElementById(the_sprite.id);
//   if (player_y >= the_sprite.y) {
//     delta_y = player_y - the_sprite.y;
//     the_scale = sprite_sizes[delta_y];

//     sprite_element.style.transform = `scale(${the_scale})`;  //'front';

//     if (player_x > the_sprite.x) {
//       the_side = 'left';
//       delta_x = player_x - the_sprite.x;
//       parallax_centering = the_scale * delta_x + 128;
//       viewport_x = 512 - parallax_centering;
//     } else {
//       the_side = 'right';
//       delta_x = the_sprite.x - player_x;
//       parallax_centering = the_scale * delta_x - 128;
//       viewport_x = 512 + parallax_centering;
//     }
//     sprite_element.style.left = `${viewport_x}px`;
//   } else {
//     sprite_element.style.transform = `scale(0)`; //'behind'
//   }
// }

// function spinObject(the_sprite) {
//   // console.log("sdfasdf", the_sprite.id);
//   const sprite_element = document.getElementById(the_sprite.id);
//   // console.log("sprite_element", sprite_element);
//   let the_spin = the_sprite.spin;
//   the_spin = the_spin + 1;
//   if (the_spin > numDrawings) {
//     the_spin = 0;
//   }
//   the_sprite.spin = the_spin;
//   let int_spin = Math.floor(the_spin);
//   //console.log('sprite_element.style', sprite_element.style.backgroundPositionX);
//   sprite_element.style.backgroundPositionX = int_spin * 256 + "px";
// }



/*


                |
           \ forward /
            \   |   /
             \  |  /
  left        \ | /        right
               \|/
--------------------------------------
   quadrant 4   |  quadrant 3



*/

const el = document.getElementById("the-layers");
//el.addEventListener("touchstart", handleStart);

left_right_width = el.clientWidth;
up_down_height = el.clientHeight;
left_right_middle = el.clientWidth / 2;
up_down_middle = el.clientHeight / 2;


function handleStart(evt) {
        evt.preventDefault();
        let the_touch = evt.touches[0];
        touch_x = the_touch.clientX;
        touch_y = the_touch.clientY;
        //        console.log("touchstart.", the_touch.clientX, the_touch.clientY);
        //        console.log("the box", el.clientHeight, el.clientWidth);
        if (touch_x < left_right_middle) {
                on_left_side = true;
        } else {
                on_left_side = false;
        }
        if (touch_y < up_down_middle) {
                on_top_side = true;
        } else {
                on_top_side = false;
        }
        x_larger_than_y = touch_x >= touch_y;
        x_plus_y = touch_x + touch_y;

        if (on_left_side && on_top_side) {
                the_quadrant = 1;
        } else if (!on_left_side && on_top_side) {
                the_quadrant = 2;
        } else if (!on_left_side && !on_top_side) {
                the_quadrant = 3;
        } else {
                the_quadrant = 4;
        }
        if (the_quadrant == 1) {
                //   console.log("11111");
                if (x_larger_than_y) {
                        touch_type = "up";
                } else {
                        touch_type = "left";
                }
        } else if (the_quadrant == 2) {
                if (x_plus_y > left_right_width) {
                        touch_type = "right";
                } else {
                        touch_type = "up";
                }
        } else if (the_quadrant == 3) {
                if (x_larger_than_y) {
                        touch_type = "right";
                } else {
                        touch_type = "down";
                }
        } else {
                if (x_plus_y > up_down_height) {
                        touch_type = "down";
                } else {
                        touch_type = "left";
                }
        }
        console.log(touch_type);
}

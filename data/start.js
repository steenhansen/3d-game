





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

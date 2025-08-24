





let sprite_right = { s_id: "square-right", spin: 31, m_x: area_width_half - 232, m_y: 333 };
let sprite_front = { s_id: "square-front", spin: 31, m_x: area_width_half - 384, m_y: 333 };
let sprite_back = { s_id: "square-back", spin: 31, m_x: area_width_half - 384, m_y: 333 };


let cube_1 = { s_id: "cube-1", spin: 31, m_x: area_width_half - 384, m_y: 333 };


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

const el = document.getElementById("the-scene");
left_right_width = el.clientWidth;
up_down_height = el.clientHeight;
left_right_middle = el.clientWidth / 2;
up_down_middle = el.clientHeight / 2;


function handleStart(evt) {
        evt.preventDefault();
        let the_touch = evt.touches[0];
        touch_x = the_touch.clientX;
        touch_y = the_touch.clientY;
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

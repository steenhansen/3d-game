var g_planet;
var g_player;
var g_enemies;
var g_pylons;
var g_signs;
var g_holes;

let CACHED_MISSILE_SHAPES;
let g_collison_sizes;

let g_bounds_in_squares;
let g_bounds_in_pixels;

let g_p_environment_type = P_UNKNOWN;
let g_p_scroll_quality = P_UNKNOWN;
let g_p_graphics_style = P_UNKNOWN;
let g_p_display_fps = P_UNKNOWN;


let g_touch_press_time = 0;
let g_waiting_for_start = true;

const INIT_Y_FLIP_COUNT = 4;
let g_y_flip_count = INIT_Y_FLIP_COUNT;

// new Float32Array(256);  // slower
let g_field_xs_shift = Array(DEPTH_LINES).fill(0);
let g_field_xs_death = Array(DEPTH_LINES).fill(0);
let g_field_xs_accums = Array(DEPTH_LINES).fill(0);

let g_field_xs_nudges = Array(DEPTH_LINES).fill(0);



let g_field_in_pixels;

///////////

let dbg_record_line = 128;  // used for debugging checkerboard overflows
let dbg_y_too_large;
let dbg_y_too_small;
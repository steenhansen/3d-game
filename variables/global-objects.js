var g_planet;
var g_player;
var g_enemies;
var g_pylons;
var g_signs;
var g_holes;

let CACHED_MISSILE_SHAPES;
let COLLISION_SIZES;

let BOUNDS_IN_SQUARES;

let g_p_environment_type = P_UNKNOWN;
let g_p_scroll_quality = P_UNKNOWN;
let g_p_graphics_style = P_UNKNOWN;
let g_p_display_fps = P_UNKNOWN;


let g_touch_press_time = 0;
let g_waiting_for_start = true;

const INIT_Y_FLIP_COUNT = 4;
let y_flip_count = INIT_Y_FLIP_COUNT;

// new Float32Array(256);  // slower
let g_field_xs_shift = Array(256).fill(0);
let g_field_xs_death = Array(256).fill(0);
let g_field_xs_accums = Array(256).fill(0);






///////////

let dbg_record_line = 128;  // used for debugging checkerboard overflows
let dbg_y_too_large;
let dbg_y_too_small;

var g_planet;
var g_player;

var g_enemies;
var g_pylons;
var g_holes;
var g_signs;



let dbg_record_line = 128;  // used for debugging checkerboard overflows

let g_p_environment_type = P_UNKNOWN;
var g_p_scroll_quality = P_UNKNOWN;
var g_p_graphics_style = P_UNKNOWN;
var g_p_display_fps = P_UNKNOWN;


let CACHED_MISSILE_SHAPES;



// new Float32Array(256);  // slower
let g_field_xs_shift = Array(256).fill(0);
let g_field_xs_death = Array(256).fill(0);

// new Float32Array(256);  // slower
let g_field_xs_accums = Array(256).fill(0);




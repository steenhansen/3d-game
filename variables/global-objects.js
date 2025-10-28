

var g_enemy_list;
var g_pylon_list;
var g_hole_list;
var g_player;
var g_planet;




let dbg_record_line = 128;  // used for debugging checkerboard overflows

let dbg_is_debugging = 'unknown';

var g_mobile_downgrading = 'unknown';

let CACHED_MISSILE_SHAPES;



// new Float32Array(256);  // slower
let g_field_xs_shift = Array(256).fill(0);
let g_field_xs_death = Array(256).fill(0);

// new Float32Array(256);  // slower
let g_field_xs_accums = Array(256).fill(0);


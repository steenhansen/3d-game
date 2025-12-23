const IGNORE_BOUNDS = "IGNORE_BOUNDS";

const SKY_RESTART_COUNTER = 30;

const PLAYER_RECOIL_COUNTDOWN = 5;

const INVISIBLE_COLOR = `rgb(1, 2, 3, 0)`;

const SPRITE_CENTER_Y = -200;

const DEPTH_LINES = 256;

const NO_MISSILE_DEPTH_OVERFLOW = 31;

const PLAYER_TRAVEL_SPEED = 8; //1sluggish  4slow  8normal 16fast  32extreme

const P_UNKNOWN = "unknown-param";

// index.html?env-type=debug
const P_ENVIROMENT_TYPE = "env-type";
const P_DEBUG = "debug";
const P_NORMAL = "normal";

// index.html?scroll-quality=course
const P_SCROLL_QUALITY = "scroll-quality";
const P_COURSE = "course";
const P_FINE = "fine";

// index.html?graphics-style=simple
const P_GRAPHICS_STYLE = "graphics-style";
const P_SIMPLE = "simple";
const P_COMPLEX = "complex";

// index.html?display-fps=show
const P_DISPLAY_FPS = "display-fps";
const P_SHOW = "show";
const P_HIDE = "hide";

// index.html?speak-input=talk
const P_SPEAK_INPUT = "speak-input";
const P_TALK = "talk";
const P_SILENT = "silent";
const P_GARBLED = "garbled";

const PART_INIT_00_DESKTOP = "PART_INIT_00_DESKTOP";
const PART_INIT_01_MOBILE = "PART_INIT_01_MOBILE";
const PART_INIT_02_AFTER_BEGIN = "PART_INIT_02_AFTER_BEGIN";

const PART_INTRO_10_LANDING = "PART_INTRO_10_LANDING";
const PART_INTRO_11_AFTER_LANDING = "PART_INTRO_11_AFTER_LANDING";
const PART_INTRO_12_ELEVATOR = "PART_INTRO_12_ELEVATOR";
const PART_INTRO_13_AFTER_ELEVATOR = "PART_INTRO_13_AFTER_ELEVATOR";

const PART_PLAY_20_NORMAL = "PART_PLAY_20_NORMAL";
const PART_PLAY_21_HIT_HOLE = "PART_PLAY_21_HIT_HOLE";
const PART_PLAY_22_JUMP_START = "PART_PLAY_22_JUMP_START";
const PART_PLAY_23_JUMP_UP = "PART_PLAY_23_JUMP_UP";
const PART_PLAY_24_JUMP_DOWN = "PART_PLAY_24_JUMP_DOWN";

const PART_DEATH_30_APPEAR = "PART_DEATH_30_APPEAR";
const PART_DEATH_31_FIELD = "PART_DEATH_31_FIELD";
const PART_DEATH_32_SKY = "PART_DEATH_32_SKY";
const PART_DEATH_33_RESTART = "PART_DEATH_33_RESTART";

const PART_SPACE_40_LIFTOFF = "PART_SPACE_40_LIFTOFF";
const PART_SPACE_41_CLIMB = "PART_SPACE_41_CLIMB";
const PART_SPACE_42_FINISHED = "PART_SPACE_42_FINISHED";

const GAME_0_INIT = "GAME_0_INIT";
const GAME_1_INTRO = "GAME_1_INTRO";
const GAME_2_PLAY = "GAME_2_PLAY";
const GAME_3_DEATH = "GAME_3_DEATH";
const GAME_4_SPACE = "GAME_4_SPACE";
const GAME_5_DONE = "GAME_5_DONE";

let LEFT_OF_PLAYER = "LEFT_OF_PLAYER";
let RIGHT_OF_PLAYER = "RIGHT_OF_PLAYER";
let MIDDLE_OF_PLAYER = "MIDDLE_OF_PLAYER";

let ENEMY_TO_HORIZON_LIFT = 56;

const ENEMY_HIDDEN = 512;

const ERASE_START_MESSAGE_TIME = 2000;
const MOVING_NOT = 0;
const area_width_half = 16 * 1048; //16768

let player_x = area_width_half;

let player_y = 512;

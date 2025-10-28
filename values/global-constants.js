

const HOR_0 = 256 * 0;
const HOR_1 = 256 * 1;
const HOR_2 = 256 * 2;
const HOR_3 = 256 * 3;
const HOR_4 = 256 * 4;
const HOR_5 = 256 * 5;
const HOR_6 = 256 * 6;
const HOR_7 = 256 * 7;
const HOR_8 = 256 * 8;
const HOR_9 = 256 * 9;
const HOR_A = 256 * 10;
const HOR_B = 256 * 11;
const HOR_C = 256 * 12;
const HOR_D = 256 * 13;
const HOR_E = 256 * 14;
const HOR_F = 256 * 15;
const HOR_G = 256 * 16;
const HOR_H = 256 * 17;
const HOR_I = 256 * 18;
const HOR_J = 256 * 19;
const HOR_K = 256 * 20;
const HOR_L = 256 * 21;
const HOR_M = 256 * 22;
const HOR_N = 256 * 23;
const HOR_O = 256 * 24;
const HOR_P = 256 * 25;
const HOR_Q = 256 * 26;
const HOR_R = 256 * 27;
const HOR_S = 256 * 28;
const HOR_T = 256 * 29;
const HOR_U = 256 * 30;
const HOR_V = 256 * 31;
const HOR_W = 256 * 32;
const HOR_X = 256 * 33;
const HOR_Y = 256 * 34;
const HOR_Z = 256 * 35;



const VER_0 = 50 * 0;
const VER_1 = 50 * 1;
const VER_2 = 50 * 2;
const VER_3 = 50 * 3;
const VER_4 = 50 * 4;
const VER_5 = 50 * 5;
const VER_6 = 50 * 6;
const VER_7 = 50 * 7;
const VER_8 = 50 * 8;
const VER_9 = 50 * 9;
const VER_A = 50 * 10;
const VER_B = 50 * 11;
const VER_C = 50 * 12;
const VER_D = 50 * 13;
const VER_E = 50 * 14;
const VER_F = 50 * 15;
const VER_G = 50 * 16;
const VER_H = 50 * 17;
const VER_I = 50 * 18;
const VER_J = 50 * 19;
const VER_K = 50 * 20;
const VER_L = 50 * 21;
const VER_M = 50 * 22;
const VER_N = 50 * 23;
const VER_O = 50 * 24;
const VER_P = 50 * 25;
const VER_Q = 50 * 26;
const VER_R = 50 * 27;
const VER_S = 50 * 28;
const VER_T = 50 * 29;
const VER_U = 50 * 30;
const VER_V = 50 * 31;
const VER_W = 50 * 32;
const VER_X = 50 * 33;
const VER_Y = 50 * 34;
const VER_Z = 50 * 35;







let COLLISION_SIZES;

const INIT_Y_FLIP_COUNT = 4;



const DEVICE_UNKNOWN = 0;
const DEVICE_DESKTOP = 1;
const DEVICE_MOBILE = 2;

ZERO_10 = [+0, +0, +0, +0, +0, +0, +0, +0, +0, +0];
LEFT_10 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
RGHT_10 = [+1, +1, +1, +1, +1, +1, +1, +1, +1, +1];
AWAY_10 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
NEAR_10 = [+1, +1, +1, +1, +1, +1, +1, +1, +1, +1];

LEFT_100 = [LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10, LEFT_10].flat();



RGHT_100 = [RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10, RGHT_10].flat();




AWAY_100 = [AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10, AWAY_10].flat();


NEAR_100 = [NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10, NEAR_10].flat();



ZERO_100 = [ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10, ZERO_10].flat();




AWAY_500 = [AWAY_100, AWAY_100, AWAY_100, AWAY_100, AWAY_100].flat();


NEAR_500 = [NEAR_100, NEAR_100, NEAR_100, NEAR_100, NEAR_100].flat();



ZERO_500 = [ZERO_100, ZERO_100, ZERO_100, ZERO_100, ZERO_100].flat();

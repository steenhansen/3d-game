let f_last_4_move = "NE";

function read4Keys(event) {
    const the_key = event.key;
    if (g_player.m_recoil_count === 0) {
        g_planet.m_drift_direction = 0;
        if (NE_KEYS.includes(the_key) || E_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_NE;
            initiateMovement(MOVINGx_NE);
            flashArrow("ne");
            f_last_4_move = "NE";
        } else if (N_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_N;
            initiateMovement(MOVINGx_N);
            flashArrow("n");
            f_last_4_move = "N";
        } else if (NW_KEYS.includes(the_key) || W_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_NW;
            initiateMovement(MOVINGx_NW);
            flashArrow("nw");
            f_last_4_move = "NW";
        } else if (JUMP_KEYS.includes(the_key)) {
            g_planet = possibleJump(g_planet);
        } else if (SHOOT_KEYS.includes(the_key)) {
            g_missile = initMissileData(g_missile, g_player);
        } else {
            if (f_last_4_move === "NE") {
                initiateMovement(MOVINGx_NE);
                flashArrow("e");
            } else if (f_last_4_move === "N") {
                initiateMovement(MOVINGx_N);
                flashArrow("n");
            } else if (f_last_4_move === "NW") {
                initiateMovement(MOVINGx_NW);
                flashArrow("w");
            }
        }
    }
}

function readKeyUp(event) {
    const the_key = event.key;
    if (JUMP_KEYS.includes(the_key) || SHOOT_KEYS.includes(the_key)) {
        //
    } else if (THE_PLANET !== 4) {
        stopMoving();
    }
}

const NW_KEYS = ["Q", "q", "Home", "7"];
const N_KEYS = ["W", "w", "ArrowUp", "8"];
const NE_KEYS = ["E", "e", "PageUp", "9"];
const E_KEYS = ["D", "d", "ArrowRight", "6"];
const SE_KEYS = ["C", "c", "PageDown", "3"];
const S_KEYS = ["X", "x", "ArrowDown", "2"];
const SW_KEYS = ["Z", "z", "End", "1"];
const W_KEYS = ["A", "a", "ArrowLeft", "4"];

const JUMP_KEYS = [" "];
const SHOOT_KEYS = ["Enter"];
const STOP_KEYS = ["S", "s", "Clear", "5"];

function read11Keys(event) {
    const the_key = event.key;
    if (g_player.m_recoil_count === 0) {
        g_planet.m_drift_direction = 0;
        if (NW_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_NW;
            initiateMovement(MOVINGx_NW);
            flashArrow("nw");
        } else if (N_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_N;
            initiateMovement(MOVINGx_N);
            flashArrow("n");
        } else if (NE_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_NE;
            initiateMovement(MOVINGx_NE);
            flashArrow("ne");
        } else if (E_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_E;
            initiateMovement(MOVINGx_E);
            flashArrow("e");
        } else if (SE_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_SE;
            initiateMovement(MOVINGx_SE);
            flashArrow("se");
        } else if (S_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_S;
            initiateMovement(MOVINGx_S);
            flashArrow("s");
        } else if (SW_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_SW;
            initiateMovement(MOVINGx_SW);
            flashArrow("sw");
        } else if (W_KEYS.includes(the_key)) {
            g_planet.m_last_direction_key = MOVINGx_W;
            initiateMovement(MOVINGx_W);
            flashArrow("w");
        } else if (STOP_KEYS.includes(the_key)) {
            stopMoving();
        } else if (JUMP_KEYS.includes(the_key)) {
            g_planet = possibleJump(g_planet);
        } else if (SHOOT_KEYS.includes(the_key)) {
            g_missile = initMissileData(g_missile, g_player);
        } else {
            stopMoving();
        }
    }
}

function turnOnKeys(readKeyFunc) {
    document.addEventListener("keydown", readKeyFunc, { passive: false });
    document.addEventListener("keyup", readKeyUp, { passive: false });
}

function clickOnDirectionsSvg(event) {
    const svg_target = event.target.id;
    const svg_parts = svg_target.split("-");
    const svg_id_prefix = svg_parts[0] + "-" + svg_parts[1];
    if (svg_id_prefix === "SVG-Q") {
        initiateMovement(MOVINGx_NW);
        flashArrow("nw");
    } else if (svg_id_prefix === "SVG-W") {
        initiateMovement(MOVINGx_N);
        flashArrow("n");
    } else if (svg_id_prefix === "SVG-E") {
        initiateMovement(MOVINGx_NE);
        flashArrow("ne");
    } else if (svg_id_prefix === "SVG-A") {
        initiateMovement(MOVINGx_W);
        flashArrow("w");
    } else if (svg_id_prefix === "SVG-S") {
        g_planet.m_drift_direction = 0;
        stopMoving();
    } else if (svg_id_prefix === "SVG-D") {
        initiateMovement(MOVINGx_E);
        flashArrow("e");
    } else if (svg_id_prefix === "SVG-Z") {
        initiateMovement(MOVINGx_SW);
        flashArrow("sw");
    } else if (svg_id_prefix === "SVG-X") {
        initiateMovement(MOVINGx_S);
        flashArrow("s");
    } else if (svg_id_prefix === "SVG-C") {
        initiateMovement(MOVINGx_SE);
        flashArrow("se");
    } else if (svg_id_prefix === "SVG-SPACE") {
        g_planet = possibleJump(g_planet);
    } else if (svg_id_prefix === "SVG-ENTER") {
        g_missile = initMissileData(g_missile, g_player);
    }
}

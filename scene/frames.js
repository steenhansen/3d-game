const L_FRAME_FILTER_STRENGTH = 20;

let f_the_fps = 0; // more better name and location?
let f_draw_every_ith_frame; // 1,2,3,4,5 to try to get 60fps
let f_the_frame_time = 0;
let f_the_last_loop = new Date();
let f_the_start_loop;

function browserReFocus() {
    const RESTART_FPS_CALCS = 1007;
    window.addEventListener(
        "focus",
        function (_event) {
            setTimeout(() => {
                f_draw_every_ith_frame = 1;
            }, RESTART_FPS_CALCS);
        },
        false
    );
}

function tiltingReset() {
    f_the_frame_time = 0;
    f_the_last_loop = new Date();
    f_draw_every_ith_frame = 1;
}

function accumFPS() {
    f_the_start_loop = new Date();
    const this_frame_time = f_the_start_loop - f_the_last_loop;
    f_the_frame_time += (this_frame_time - f_the_frame_time) / L_FRAME_FILTER_STRENGTH;
    f_the_last_loop = f_the_start_loop;
    f_the_fps = (1000 / f_the_frame_time).toFixed(1);
}

function timeFrames(the_planet, the_player) {
    if (the_player.m_screen_askew > 0) {
        tiltingReset();
    } else if (the_planet.m_game_state === GAME_2_PLAY) {
        accumFPS();
    } else {
        tiltingReset();
    }
    frameInfoSE();
}

function frameInfoSE() {
    if (g_p_display_fps === P_SHOW) {
        const round_fps = Math.round(f_the_fps);
        let the_scene = document.getElementById("fps-value");
        const average_frames = " fps " + round_fps + " " + g_p_scroll_quality;
        the_scene.innerHTML = average_frames;
    }
}

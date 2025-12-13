let f_landing_count = 0;
let f_top_playing_game = -512;
let f_top_the_land = 0;
const L_STOP_JUMP_UP_DOWN = 100;

function elevatorInOneStep() {
    while (f_top_playing_game !== 0) {
        f_top_playing_game += 2;
        f_top_the_land += 2;
        moveCheckerboardOnce(f_top_playing_game, f_top_the_land);
    }
}

function animateJumpUp(the_player) {
    the_player.m_jump_amount += JUMP_STEP;
    if (the_player.m_jump_amount > L_STOP_JUMP_UP_DOWN) {
        return [the_player, PART_PLAY_24_JUMP_DOWN];
    }
    doFlying(the_player.m_jump_amount);
    return [the_player, PART_PLAY_23_JUMP_UP];
}

function animateJumpDown(the_player) {
    the_player.m_jump_amount -= JUMP_STEP;
    if (the_player.m_jump_amount < 1) {
        the_player.m_jump_amount = 0;
        return [the_player, PART_PLAY_20_NORMAL];
    }
    doFlying(the_player.m_jump_amount);
    return [the_player, PART_PLAY_24_JUMP_DOWN];
}

function doFlying(lift_amount_x) {
    const sky_aperature = document.getElementById("sky-aperature");
    const sky_height = 256 + lift_amount_x;
    sky_aperature.style.height = `${sky_height}px`;

    const the_sky = document.getElementById("the-sky");
    const margin_top = -1000 - lift_amount_x;
    the_sky.marginTop = `${margin_top}px`;
    const height_sky = 2400 + 4 * lift_amount_x;
    the_sky.style.height = `${height_sky}px`;

    const signs_html = document.getElementById("signs-area");
    signs_html.style.top = `${lift_amount_x}px`;

    const pylon_html = document.getElementById("pylons-area");
    pylon_html.style.top = `${lift_amount_x}px`;

    const holes_html = document.getElementById("holes-area");
    holes_html.style.top = `${lift_amount_x}px`;

    const enemy_area = document.getElementById("enemy-area");
    enemy_area.style.top = `${lift_amount_x}px`;

    const the_sun = document.getElementById("the-sun");
    the_sun.style.top = `${lift_amount_x}px`;

    const missile_area = document.getElementById("missile-area");
    missile_area.style.top = `${lift_amount_x}px`;

    const saturn_planet = document.getElementById("saturn-space");
    const saturn_x = lift_amount_x - 200;
    saturn_planet.style.left = `${saturn_x}px`;
    if (lift_amount_x > 350) {
        const saturn_space = document.getElementById("star-space");
        const saturn_opacity = (lift_amount_x - 350) / 300;
        saturn_space.style.opacity = saturn_opacity;
    }
}

function expandCheckerboard(the_count) {
    let normal_line = `background-position: -${the_count + 1}px -${the_count}px`;
    let flip_line = `background-position: 0px                 -${the_count}px`;
    let flip_count = 0;
    let is_flip = false;
    for (let cur_line = 0; cur_line < NUMBER_LINES; cur_line++) {
        const reverse_vertical = NUMBER_LINES - cur_line - 1;
        const ne_element = document.getElementById(`ne${reverse_vertical}`);
        const se_element = document.getElementById(`se${cur_line}`);
        const sw_element = document.getElementById(`sw${cur_line}`);
        const nw_element = document.getElementById(`nw${reverse_vertical}`);
        if (is_flip) {
            ne_element.style = flip_line;
            se_element.style = normal_line;
            sw_element.style = flip_line;
            nw_element.style = normal_line;
        } else {
            ne_element.style = normal_line;
            se_element.style = flip_line;
            sw_element.style = normal_line;
            nw_element.style = flip_line;
        }
        flip_count++;
        if (flip_count === the_count) {
            flip_count = 0;
            is_flip = !is_flip;
        }
    }
}

function flashScrollingArrow(arrow_id) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    const an_arrow = document.getElementById(arrow_id);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    let flash_grey = `fill: ${rgb}; opacity:100%`;
    an_arrow.style = flash_grey;
}

function divVisVisible(hide_id) {
    let hide_div = document.getElementById(hide_id);
    hide_div.style.visibility = "visible";
}

function divVisHidden(unhide_id) {
    let hide_div = document.getElementById(unhide_id);
    hide_div.style.visibility = "hidden";
}

function hideDiv(hide_id) {
    let hide_div = document.getElementById(hide_id);
    hide_div.style.display = "none";
}

function unHideDiv(unhide_id) {
    let hide_div = document.getElementById(unhide_id);
    hide_div.style.display = "block";
}

function initLanding() {
    hideDiv("start-mobile");
    unHideDiv("the-scene");
}

function landingInit() {
    f_landing_count = 0;
    setLandingScroll(0);
}

function initPlay() {
    divVisVisible("desktop-dir");
    if (isMobile()) {
        fixMobileTouch();
    } else {
        fixDesktop();
    }
}

function initElevator() {
    const screen_height = window.screen.height;
    if (screen_height >= 512) {
        f_top_playing_game = -512;
    } else {
        f_top_playing_game = 0 - screen_height;
    }

    f_top_the_land = 0;
}

function animateElevator() {
    f_top_playing_game += 4;
    f_top_the_land += 4;
    moveCheckerboardOnce(f_top_playing_game, f_top_the_land);
    if (f_top_playing_game >= 0) {
        return PART_INTRO_13_AFTER_ELEVATOR;
    } else {
        return PART_INTRO_12_ELEVATOR;
    }
}

function setLandingScroll(the_pixels) {
    const playing_game = document.getElementById(`the-landing`);
    playing_game.style = `top:${the_pixels}px`;
}

function moveCheckerboardOnce(top_playing_game, top_the_land) {
    const playing_game = document.getElementById(`playing-game`);
    playing_game.style = `top:${top_playing_game}px`;
    const the_landing = document.getElementById(`the-landing`);
    the_landing.style = `top:${top_the_land}px`;
    if (THE_PLANET !== 4) {
        flashScrollingArrow("arrow-se");
        flashScrollingArrow("arrow-s");
        flashScrollingArrow("arrow-sw");
        flashScrollingArrow("arrow-e");
        flashScrollingArrow("arrow-w");
    }
    flashScrollingArrow("arrow-nw");
    flashScrollingArrow("arrow-n");
    flashScrollingArrow("arrow-ne");
}

function animateStart() {
    const saturn_space = document.getElementById("star-space");
    saturn_space.style.opacity = 0;
}

function resetSections() {
    hideDiv("the-scene");
    divVisHidden("desktop-dir");
    doFlying(0);
    g_planet.m_move_direction = MOVINGx_NOT;
    landingInit();
    initElevator();
}

function animateLanding() {
    f_landing_count += 4;
    if (f_landing_count >= NUMBER_LINES) {
        expandCheckerboard(f_landing_count - 1);
        return PART_INTRO_11_AFTER_LANDING;
    } else {
        expandCheckerboard(f_landing_count);
        return PART_INTRO_10_LANDING;
    }
}

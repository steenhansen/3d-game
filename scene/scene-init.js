function sceneInit() {
    g_y_flip_count = INIT_Y_FLIP_COUNT;
    CACHED_MISSILE_SHAPES = makeDiamondsBalls();
    initIncrementers();
    initLeftRight();
    const is_dying = false;
    affixLeftRight(is_dying);
}

function screenSizeIntoCss(_event) {
    initDebugVars();
    const screen_width = window.screen.width;
    const screen_height = window.screen.height;
    const screen_width_px = screen_width + "px";
    const screen_height_px = screen_height + "px";
    setCssVar("--scene-width", screen_width_px);
    setCssVar("--scene-height", screen_height_px);

    if (screen_width < 1024) {
        setCssVar("--device-screen", "is-mobile");
        const mobile_margin = (1024 - screen_width) / 2;
        const mobile_margin_px = `-${mobile_margin}px`;
        setCssVar("--margin-left_px", mobile_margin_px);
        setCssVar("--scene-margin", `0 0 0 ${mobile_margin_px}`);
    } else {
        setCssVar("--device-screen", "is-desktop");
        setCssVar("--margin-left_px", "0px");

        setCssVar("--scene-margin", "0 auto");
        setCssVar("--scene-width", "1024px");
        setCssVar("--scene-height", "512px");
    }
}

function gameInit() {
    if (environmentTypeParam()) {
        setInterval(debugReportFrameTime, 500);
    }
}

function resizeOrientEvents() {
    window.addEventListener("orientationchange", screenSizeIntoCss, true);
    window.addEventListener("resize", screenSizeIntoCss, true);
}

function startItUp(the_planet, the_player, the_enemies, the_pylons, the_signs, the_holes) {
    browserReFocus();
    addDesktopEvents();
    addMobileEvents();
    resizeOrientEvents();
    runGame(the_planet, the_player, the_enemies, the_pylons, the_signs, the_holes);
}

function startReadKeys(readKeyFunc) {
    turnOnKeys(readKeyFunc);
    if (THE_PLANET === 4) {
        onlyLeftRight();
    }
}

function onlyLeftRight() {
    function hideArrows(arrow_id) {
        document.getElementById(arrow_id).style.visibility = "hidden";
    }

    hideArrows("arrow-sw");
    hideArrows("arrow-s");
    hideArrows("arrow-se");

    hideArrows("s-1");
    hideArrows("s-2");
    hideArrows("s-3");
    hideArrows("s-4");

    hideArrows("sw-1");
    hideArrows("sw-2");
    hideArrows("sw-3");
    hideArrows("sw-4");

    hideArrows("se-1");
    hideArrows("se-2");
    hideArrows("se-3");
    hideArrows("se-4");
}

// ?env-type=debug
function environmentTypeParam() {
    if (g_p_environment_type === P_UNKNOWN) {
        const location_url = new URL(window.location);
        const debug_param = location_url.searchParams.get(P_ENVIROMENT_TYPE);
        g_p_environment_type = debug_param === P_DEBUG;
    }
    setCssVar("--p-environment-type", g_p_environment_type);
    return g_p_environment_type;
}

// ?scroll-quality=course
function scrollQualityParam() {
    if (g_p_scroll_quality === P_UNKNOWN) {
        const location_url = new URL(window.location);
        const scroll_quality = location_url.searchParams.get(P_SCROLL_QUALITY);
        if (scroll_quality === P_COURSE) {
            g_p_scroll_quality = P_COURSE;
        } else {
            g_p_scroll_quality = P_FINE;
        }
    }
}
//      ?env-type=debug&scroll-quality=course&graphics-style=simple&display-fps=show

// ?graphics-style=simple
function graphicsStyleParam() {
    const location_url = new URL(window.location);
    const graphics_style = location_url.searchParams.get(P_GRAPHICS_STYLE);
    if (graphics_style === P_SIMPLE) {
        setCssVar("--p-graphics-sun-animation", "none");
        setCssVar("--p-graphics-sky-image", "none");
        setCssVar("--p-graphics-sky-skew", "none");
        setCssVar("--p-graphics-sun-visible", "hidden");
        setCssVar("--p-graphics-saturn", "hidden");
        setCssVar("--p-graphics-pyramids", "hidden");
        setCssVar("--p-graphics-boxes", "0");
        g_p_graphics_style = P_SIMPLE;
    } else {
        g_p_graphics_style = P_COMPLEX;
    }
}

// ?display-fps=show
function displayFpsParam() {
    if (g_p_display_fps === P_UNKNOWN) {
        const location_url = new URL(window.location);
        const show_fps = location_url.searchParams.get(P_DISPLAY_FPS);
        if (show_fps === P_SHOW) {
            g_p_display_fps = P_SHOW;
        } else {
            g_p_display_fps = P_HIDE;
        }
    }
}

function urlParams() {
    environmentTypeParam();
    scrollQualityParam();
    graphicsStyleParam();
    displayFpsParam();
}

//   index.html?env-type=debug&scroll-quality=course&graphics-style=simple&display-fps=show

function getParams(window_location) {
    urlParams();

    const location_url = new URL(window_location);
    const env_type = location_url.searchParams.get(P_ENVIROMENT_TYPE); // debug/normal
    const scroll_quality = location_url.searchParams.get(P_SCROLL_QUALITY); // course/fime
    const graphics_style = location_url.searchParams.get(P_GRAPHICS_STYLE); // simple/complex
    const display_fps = location_url.searchParams.get(P_DISPLAY_FPS); // show/hide

    let the_params = [];
    if (env_type === P_DEBUG) {
        the_params.push(`${P_ENVIROMENT_TYPE}=${P_DEBUG}`);
    }

    if (scroll_quality === P_COURSE) {
        the_params.push(`${P_SCROLL_QUALITY}=${P_COURSE}`);
    }

    if (graphics_style === P_SIMPLE) {
        the_params.push(`${P_GRAPHICS_STYLE}=${P_SIMPLE}`);
    }

    if (display_fps === P_SHOW) {
        the_params.push(`${P_DISPLAY_FPS}=${P_SHOW}`);
    }

    let params_string = "";
    if (the_params.length > 0) {
        params_string = "?" + the_params.join("&");
    }
    return params_string;
}

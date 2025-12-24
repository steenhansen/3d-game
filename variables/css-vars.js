// css   :root properties/vars
function setCssVar(css_name, new_value) {
    let document_style = document.documentElement.style;
    document_style.setProperty(css_name, new_value);
}

function getCssVar(css_name) {
    const css_value = window.getComputedStyle(document.body).getPropertyValue(css_name);
    return css_value;
}

// css enemies vars
function setCssEnemyOpacity(enemy_number, new_value) {
    const css_var_name = "--enemy-star-opacity-" + enemy_number;
    let enemy_vars = document.querySelector(".enemy-vars");
    enemy_vars.style.setProperty(css_var_name, new_value);
}

function setCssEnemyEdge(enemy_number, new_value) {
    const css_var_name = "--enemy-star-edge-width-" + enemy_number;
    let enemy_vars = document.querySelector(".enemy-vars");
    enemy_vars.style.setProperty(css_var_name, new_value);
}

function setCssEnemyStarFill(enemy_number, new_value) {
    const css_var_name = "--enemy-star-color-" + enemy_number;
    let enemy_vars = document.querySelector(".enemy-vars");
    enemy_vars.style.setProperty(css_var_name, new_value);
}

function setCssEnemyBallFill(enemy_number, new_value) {
    const css_var_name = "--enemy-ball-color-" + enemy_number;
    let enemy_vars = document.querySelector(".enemy-vars");
    enemy_vars.style.setProperty(css_var_name, new_value);
}

function setCssSkyColor(new_color) {
    let enemy_vars = document.querySelector(".sky-vars");
    enemy_vars.style.setProperty("--sky-color", new_color);
    setCssVar("--p-graphics-sky-image", " radial-gradient(#000000, #ff0000 75%)");
}

function setCssLineBackground(line_number, new_image) {
    const css_var_name = "--line" + line_number;
    let enemy_vars = document.querySelector(".line-vars");
    enemy_vars.style.setProperty(css_var_name, new_image);
}

function setCssDisplay(elem_id, display_setting) {
    const an_elem = document.querySelector(elem_id);
    an_elem.style.display = display_setting;
}

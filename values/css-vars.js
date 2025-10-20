
// css   :root properties/vars
function setCssVar(css_name, new_value) {
  document_style = document.documentElement.style;
  document_style.setProperty(css_name, new_value);
}

function getCssVar(css_name) {
  const css_value = window.getComputedStyle(document.body).getPropertyValue(css_name);
  return css_value;
}



// css enemies vars
function setCssEnemyOpacity(enemy_number, new_value) {
  css_var_name = '--enemy-star-opacity-' + enemy_number;
  enemy_vars = document.querySelector('.enemy-vars');
  enemy_vars.style.setProperty(css_var_name, new_value);
}

function setCssEnemyEdge(enemy_number, new_value) {
  css_var_name = '--enemy-star-edge-width-' + enemy_number;
  enemy_vars = document.querySelector('.enemy-vars');
  enemy_vars.style.setProperty(css_var_name, new_value);
}

function setCssEnemyStarFill(enemy_number, new_value) {
  css_var_name = '--enemy-star-color-' + enemy_number;
  enemy_vars = document.querySelector('.enemy-vars');
  //console.log("BASL END", css_var_name, new_value);
  enemy_vars.style.setProperty(css_var_name, new_value);
}

function setCssEnemyBallFill(enemy_number, new_value) {
  css_var_name = '--enemy-ball-color-' + enemy_number;
  enemy_vars = document.querySelector('.enemy-vars');
  //console.log("BASL END", css_var_name, new_value);
  enemy_vars.style.setProperty(css_var_name, new_value);
}

// css line vars
//   setCssLineBackground(0, "url('../images/board-death.png')") 
function setCssLineBackground(line_number, new_image) {
  css_var_name = '--line' + line_number;
  enemy_vars = document.querySelector('.line-vars');
  enemy_vars.style.setProperty(css_var_name, new_image);
}



function setCssSkyColor(new_color) {
  enemy_vars = document.querySelector('.sky-vars');
  enemy_vars.style.setProperty('--sky-color', new_color);
}

// root
function setCssVar(css_name, new_value) {
  document_style = document.documentElement.style;  // :root
  document_style.setProperty(css_name, new_value);
}

function getCssVar(css_name) {
  const css_value = window.getComputedStyle(document.body).getPropertyValue(css_name);
  return css_value;
}



// setCssEnemyColor(1, 'pink');

function setCssEnemyColor(enemy_number, new_value) {
  css_var_name = '--enemy-star-color-' + enemy_number;
  enemy_vars = document.querySelector('.enemy-vars');
  enemy_vars.style.setProperty(css_var_name, new_value);
}

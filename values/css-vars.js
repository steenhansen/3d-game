
function setCssVar(css_name, new_value) {
  document_style = document.documentElement.style;  // :root
  document_style.setProperty(css_name, new_value);
}

function getCssVar(css_name) {
  const css_value = window.getComputedStyle(document.body).getPropertyValue(css_name);
  return css_value;
}




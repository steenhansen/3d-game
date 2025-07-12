
// function findRelativeRect2Player() {

// }


function svgIntoRect(the_sprite, html_id, elem_id) {

  const element = document.getElementById(elem_id);
  const rect = element.getBoundingClientRect();
  const x = rect.left - 64;// + window.scrollX;
  const y = rect.top + window.scrollY;
  const w = rect.width;
  const h = rect.height;

  x_px = x + "px";
  y_px = y + "px";
  w_px = w + "px";
  h_px = h + "px";

  the_rect = [x_px, y_px, w_px, h_px];
  return the_rect;
}

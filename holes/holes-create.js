
HOLE_A = {
  s_isa: "is-hole",
  c_hole_color: 'red',
  c_vert_color: 'black',
};




function makeHole_A(playground_box, hole_num, x, y, o_color) {
  let [left_x, top_y, _right_x, _bottom_y] = playground_box;
  offset_x = left_x + x;
  offset_y = top_y + y;
  hole_name = `hole-${hole_num}`;
  xyNotInField(offset_x, offset_y, `Offset hole '${hole_name}' coords are out of bounds`);

  different_obj = { s_hole_name: hole_name, m_x: offset_x, m_y: offset_y };
  merged_hole = Object.assign({}, HOLE_A, different_obj);
  if (o_color != undefined) {
    merged_hole.c_hole_color = o_color;
  }
  return merged_hole;
}
;

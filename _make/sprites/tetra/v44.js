
//   cd \Users\16043\Documents\GitHub\squares\make\sprites\tetra

//   node v39.js


/*
UPHILL_FLAT_TOP 1
                   APEX OF SHORTS     [[10, 300], [900, 100], [200, 50]]
                         /\200,50
                      /      \
                   /            \
                /                  \
             /                        \
          /                      --------\900,100
       /       ---LONGEST_SIDE---
10,300/----------

[  [ [ [ 20, 5 ], [ 0, 10 ] ], [ [ 20, 5 ], [ 8, 2 ] ] ],
   [ [ [ 0, 10 ], [ 20, 5 ] ], [ [ 0, 10 ], [ 8, 2 ] ] ]  ]

LONGEST-SIDE
            UPHILL
                FLAT
                    TOP 1      [[0, 10],  [8, 2],  [20, 5]]
                    BOTTOM 3   [[0, 10], [8, 12], [20, 5]]
                STEEP
                    LEFT 5     [[0, 50], [40, 1], [3, 3]]
                    RIGHT 7    [[60, 50], [40, 1], [3, 3]]
                            20,0

                         18,15              
           0,30                 



            DOWNHILL
                FLAT
                    TOP 2
                    BOTTOM 4
                STEEP
                    LEFT 8
                    RIGHT 6

DOWNHILL_STEEP_RIGHT 6
L \---
 O \   ---
  N \      ---
   G \         ---APEX OF SHORTS
    E \          /
     S \        /
  S   T \      /
   I     \    /
    D     \  /
     E     \/


*/

function lineLength(point_a, point_b) {
  [a_x, a_y] = point_a;
  [b_x, b_y] = point_b;
  x_diff = Math.abs(a_x - b_x);
  y_diff = Math.abs(a_y - b_y);
  the_hyp = x_diff * x_diff + y_diff * y_diff;
  the_length = Math.sqrt(the_hyp);
  return the_length;
}

function longestLineFirst2(three_points) {
  [point_a, point_b, point_c] = three_points;
  a_b_len = lineLength(point_a, point_b);
  b_c_len = lineLength(point_b, point_c);
  c_a_len = lineLength(point_c, point_a);
  if (a_b_len > b_c_len) {
    if (a_b_len > c_a_len) {
      return [[[point_a, point_b], [point_a, point_c]], [[point_b, point_a], [point_b, point_c]]];
    } else {
      return [[[point_c, point_a], [point_c, point_b]], [[point_a, point_c], [point_a, point_b]]];
    }
  } else {
    if (b_c_len > c_a_len) {
      return [[[point_b, point_c], [point_b, point_a]], [[point_c, point_b], [point_c, point_a]]];
    } else {
      return [[[point_c, point_a], [point_c, point_b]], [[point_a, point_c], [point_a, point_b]]];
    }
  }
}

function isFlat(longest_line) {
  long_slope = getSlope(longest_line);
  pos_slope = Math.abs(long_slope);
  console.log("long_slope", pos_slope);
  if (pos_slope <= 1) {
    return true;
  } else {
    return false;
  }
}

function isUphill(longest_line) {
  long_slope = getSlope(longest_line);
  if (long_slope <= 0) {
    return true;
  } else {
    return false;
  }
}

// [[0, 10],  [8, 2],  [20, 5]]
// [ [ 20, 5 ], [ 0, 10 ] ]
function shortApex(three_points, uft_longest) {
  [long_a, long_b] = uft_longest;      //[ 20, 5 ], [ 0, 10 ]
  [point_a, point_b, point_c] = three_points;
  if (uft_longest.indexOf(point_a) === -1) {
    return point_a;
  } else if (uft_longest.indexOf(point_b) === -1) {
    return point_b;
  }
  return point_c; // [8, 2]
}


function getSlope(a_line) {
  [[begin_x, begin_y], [end_x, end_y]] = a_line;
  diff_x = end_x - begin_x;
  diff_y = end_y - begin_y;
  let the_slope;
  if (diff_y > diff_x) {
    if (diff_x == 0) {
      the_slope = 0;
    } else {
      the_slope = diff_y / diff_x;
    }
  } else {
    if (diff_y == 0) {
      the_slope = 0;
    } else {
      the_slope = diff_y / diff_x;
    }
  }
  return the_slope;
}

function isOnTop(a_triangle) {
  uft_lines = longestLineFirst2(a_triangle);
  uft_longest = uft_lines[0][0];
  apex_point = shortApex(a_triangle, uft_longest);
  uft_slope = getSlope(uft_longest);
  [[start_x, start_y], [end_x, end_y]] = uft_longest;
  [left_a_x, left_a_y] = apex_point;
  [right_a_x, right_a_y] = apex_point;
  //console.dir(uft_longest);
  for (i = 0; i < 10000; i++) {
    left_a_x--;
    left_a_y += uft_slope;
    if (left_a_x == start_x) {
      if (left_a_y < start_y) {
        //      console.log(left_a_x, left_a_y, "T", start_x, start_y);
        return true;
      } else {
        //        console.log(left_a_x, left_a_y, "B", start_x, start_y);
        return false;
      }
    } else if (right_a_x == start_x) {
      if (right_a_y < start_y) {
        //  console.log(right_a_x, right_a_y, "T", start_x, start_y);
        return true;
      } else {
        //console.log(right_a_x, right_a_y, "B", start_x, start_y);
        return false;
      }
    } else if (left_a_x == end_x) {
      if (left_a_y < end_y) {
        //  console.log(left_a_x, left_a_y, "T", end_x, end_y);
        return true;
      } else {
        //    console.log(left_a_x, left_a_y, "B", end_x, end_y);
        return false;
      }
    } else if (right_a_x == end_x) {
      if (right_a_y < end_y) {
        //      console.log(right_a_x, right_a_y, "T", end_x, end_y);
        return true;

      } else {
        //        console.log(right_a_x, right_a_y, "B", end_x, end_y);
        return false;
      }
    }
    right_a_x++;
    right_a_y += uft_slope;
  }
}


// UPHILL_FLAT_TOP = [[0, 10], [8, 2], [20, 5]];
// uft_lines = longestLineFirst2(UPHILL_FLAT_TOP);
// uft_longest = uft_lines[0][0];
// uft_uphill = isUphill(uft_longest);
// uft_flat = isFlat(uft_longest);
// on_top = isOnTop(UPHILL_FLAT_TOP);
// console.log(uft_uphill, uft_flat, on_top, "TTT");
// console.dir(uft_lines, { depth: null });

// UPHILL_FLAT_BOTTOM = [[0, 10], [8, 12], [20, 5]];
// uft_lines = longestLineFirst2(UPHILL_FLAT_BOTTOM);
// uft_longest = uft_lines[0][0];
// uft_uphill = isUphill(uft_longest);
// uft_flat = isFlat(uft_longest);
// on_top = isOnTop(UPHILL_FLAT_BOTTOM);
// console.log(uft_uphill, uft_flat, on_top, "TTF");
// //console.dir(uft_lines, { depth: null });



// UPHILL_STEEP_LEFT = [[0, 50], [40, 1], [3, 3]];
// uft_lines = longestLineFirst2(UPHILL_STEEP_LEFT);
// uft_longest = uft_lines[0][0];
// uft_uphill = isUphill(uft_longest);
// uft_flat = isFlat(uft_longest);
// on_top = isOnTop(UPHILL_STEEP_LEFT);
// console.log(uft_uphill, uft_flat, on_top, "TFT");
// //console.dir(uft_lines, { depth: null });



UPHILL_STEEP_RIGHT = [[20, 0], [18, 15], [0, 30]];
uft_lines = longestLineFirst2(UPHILL_STEEP_RIGHT);
uft_longest = uft_lines[0][0];
uft_uphill = isUphill(uft_longest);
uft_flat = isFlat(uft_longest);
on_top = isOnTop(UPHILL_STEEP_RIGHT);
console.log(uft_uphill, uft_flat, on_top, "TFF");
//console.dir(uft_lines, { depth: null });


/////////////////////////////////////////////////////////////////////////////
function longestLineFirst(point_a, point_b, point_c) {
  a_b_len = lineLength(point_a, point_b);
  b_c_len = lineLength(point_b, point_c);
  c_a_len = lineLength(point_c, point_a);
  if (a_b_len > b_c_len) {
    if (a_b_len > c_a_len) {
      return [[[point_a, point_b], [point_a, point_c]], [[point_b, point_a], [point_b, point_c]]];
    } else {
      return [[[point_c, point_a], [point_c, point_b]], [[point_a, point_c], [point_a, point_b]]];
    }
  } else {
    if (b_c_len > c_a_len) {
      return [[[point_b, point_c], [point_b, point_a]], [[point_c, point_b], [point_c, point_a]]];
    } else {
      return [[[point_c, point_a], [point_c, point_b]], [[point_a, point_c], [point_a, point_b]]];
    }
  }
}

function roundPoints(long_x, long_y, short_x, short_y) {
  l_x = Math.round(long_x);
  l_y = Math.round(long_y);
  s_x = Math.round(short_x);
  s_y = Math.round(short_y);
  return [l_x, l_y, s_x, s_y];
}

function sweepDir(m_begin_x, m_end_x, m_sweep_x) {
  if (m_begin_x < m_end_x) {
    m_sweep_x++;
  } else {
    m_sweep_x--;
  }
  return m_sweep_x;
}


function showLines(l_sweep_x, l_sweep_y, m_sweep_x, m_sweep_y, vertex_meet) {
  [r_lx, r_ly, r_mx, r_my] = roundPoints(l_sweep_x, l_sweep_y, m_sweep_x, m_sweep_y);
  if (i == m_begin_x) {
    console.log("START NO", r_lx, r_ly, " .. ", r_mx, r_my);
  } else if (vertex_meet == "miss-second-vertex" && i == m_end_x) {
    console.log("VERTEX NO", r_lx, r_ly, " .. ", r_mx, r_my);
  } else {
    console.log(r_lx, r_ly, " -- ", r_mx, r_my);
  }
}

/*
                 /
               / |
              /  /
     apex    /   |
             \   /
              \ /
*/



function fillVer(longest_line, minor_line, stop_twice) {
  [[l_begin_x, l_begin_y], [l_end_x, l_end_y]] = longest_line;    // [10,10], [20,20]        note that they must start the same
  [[m_begin_x, m_begin_y], [m_end_x, m_end_y]] = minor_line;    // [10,10], [15,15]
  l_slope = getSlope(longest_line);
  console.log("l_slope", l_slope);
  m_slope = getSlope(minor_line);
  [l_sweep_x, l_sweep_y] = longest_line[0];
  [m_sweep_x, m_sweep_y] = minor_line[0];
  if (l_begin_x < l_end_x) {
    for (i = m_begin_x; i <= m_end_x; i++) {
      showLines(l_sweep_x, l_sweep_y, m_sweep_x, m_sweep_y, stop_twice);
      l_sweep_x = sweepDir(m_begin_x, m_end_x, l_sweep_x);
      m_sweep_x = sweepDir(m_begin_x, m_end_x, m_sweep_x);
      l_sweep_y += l_slope;
      m_sweep_y += m_slope;
    }
  } else {
    for (i = m_begin_x; i >= m_end_x; i--) {
      showLines(l_sweep_x, l_sweep_y, m_sweep_x, m_sweep_y, stop_twice);
      l_sweep_x = sweepDir(m_begin_x, m_end_x, l_sweep_x);
      m_sweep_x = sweepDir(m_begin_x, m_end_x, m_sweep_x);
      l_sweep_y += l_slope;
      //    console.log("DFD");
      m_sweep_y += m_slope;
    }
  }

}







// // 0,0------
// //    \    ------------
// //      \              --------------- 30,5
// //       \                           /
// //           \         /
// //            10,15
// point_1 = [0, 0];
// point_2 = [30, 5];
// point_3 = [10, 15];
// lines = longestLineFirst(point_1, point_2, point_3);
// //console.dir(lines, { depth: null });

// [[first_sweep_bot, first_sweep_top], [second_sweep_bot, second_sweep_top]] = lines;
// if (isSteepLine(lines[0])) {
//   console.log("VV");
//   fillVer(first_sweep_bot, first_sweep_top, "include_last");
//   fillVer(second_sweep_bot, second_sweep_top, "miss-second-vertex");
// } else {
//   console.log("HH");
//   // fillHor(longest_line, first_shortest);
//   //fillHor(longest_line, second_shortest);
// }





//            10,0
//         /        \
//    /                   \ 
// 0,5                         \
//     -------10,7--                   \
//                    --------------- 30,10
// point_1 = [0, 5];
// point_2 = [30, 10];
// point_3 = [10, 0];
// lines = longestLineFirst(point_1, point_2, point_3);
// //console.dir(lines, { depth: null });

// [[first_sweep_bot, first_sweep_top], [second_sweep_bot, second_sweep_top]] = lines;
// if (isSteepLine(lines[0])) {
//   console.log("VV");
//   fillVer(first_sweep_bot, first_sweep_top, "include_last");
//   fillVer(second_sweep_bot, second_sweep_top, "miss-second-vertex");
// } else {
//   console.log("HH");
//   // fillHor(longest_line, first_shortest);
//   //fillHor(longest_line, second_shortest);
// }





// //             10,0
// //          /                 \
// //        /                 ------------30,5
// //     /            --------
// //0,10 \    --------
// point_1 = [0, 10];
// point_2 = [30, 5];
// point_3 = [10, 0];
// lines = longestLineFirst(point_1, point_2, point_3);
// //console.dir(lines, { depth: null });

// [[first_sweep_bot, first_sweep_top], [second_sweep_bot, second_sweep_top]] = lines;
// if (isSteepLine(lines[0])) {
//   console.log("VV");
//   fillVer(first_sweep_bot, first_sweep_top, "include_last");
//   fillVer(second_sweep_bot, second_sweep_top, "miss-second-vertex");
// } else {
//   console.log("HH");
//   // fillHor(longest_line, first_shortest);
//   //fillHor(longest_line, second_shortest);
// }







// //                       ------------30,0
// //                 --------           /
// //0,5 \    --------             /
// //      \                    /
// //       \                  /
// //           \         /
// //            10,15
// point_1 = [0, 5];
// point_2 = [30, 0];
// point_3 = [10, 15];



// lines = longestLineFirst(point_1, point_2, point_3);
// //console.dir(lines, { depth: null });

// [[first_sweep_bot, first_sweep_top], [second_sweep_bot, second_sweep_top]] = lines;
// if (isSteepLine(lines[0])) {
//   console.log("VV");
//   fillVer(first_sweep_bot, first_sweep_top, "include_last");
//   fillVer(second_sweep_bot, second_sweep_top, "miss-second-vertex");
// } else {
//   console.log("HH");
//   // fillHor(longest_line, first_shortest);
//   //fillHor(longest_line, second_shortest);
// }



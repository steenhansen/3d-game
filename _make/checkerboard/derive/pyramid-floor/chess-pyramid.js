// node chess-pyramid.js

var fs = require("fs");
var PNG = require("pngjs").PNG;



/* 8 zones,    255-16-16-16-16-16-16-16  5*16== 112
 
-16s
143
159
175
191
207
 223
 239
 255
*/



let distance_shade = [143, 143, 143, 143, 143, 143, 159, 159, 159, 159, /* 0-9 */
  159, 175, 175, 175, 175, 175, 175, 175, 191, 191,/**/
  191, 191, 191, 191, 191, 191, 191, 191, 191, 207,/**/
  207, 207, 207, 207, 207, 207, 207, 207, 207, 207,/**/
  207, 207, 207, 223, 223, 223, 223, 223, 223, 223,/**/
  223, 223, 223, 223, 223, 223, 223, 223, 223, 223,/**/
  239, 239, 239, 239, 239, 239, 239, 239, 239, 239,/**/
  239, 239, 239, 239, 239, 239, 239, 239, 239, 239,/**/
  239, 239, 239, 239, 239, 239, 255, 255, 255, 255,/**/
  255, 255, 255, 255, 255, 255, 255, 255, 255, 255,/**/
  255, 255, 255, 255, 255, 255, 255, 255, 255, 255,/**/
  255, 255, 255, 255, 255, 255, 255, 255, 255, 255,/**/
  255, 255, 255, 255, 255, 255, 255, 255,]; // 



orange_color = `rgb(255,165,0)`;
purple_color = `rgb(157,0,255)`;

var a_red = [255, 165, 0, 255]; //orange
var a_blue = [165, 0, 255, 255]; //purple  




var pojo = [];
var brightness = 0;
fs.createReadStream("empty-board.png")
  .pipe(
    new PNG({
      filterType: 4,
    })
  )
  .on("parsed", function () {
    for (var y = 0; y < this.height; y++) {

      if (y > 127) {
        brightness = 255;
      } else {
        brightness = distance_shade[y];
      }
      var size = y + 1;
      var cur_type = true; // true=>blue, false=>red
      var w_count = size;
      for (var x = 0; x < this.width; x++) {

        var idx = (this.width * y + x) << 2;
        if (cur_type) {
          pojo = a_blue;  // [0, 0, brightness, 255];       //a_blue;
        } else {
          pojo = a_red; // [brightness, 0, 0, 255];          //a_red;
        }

        this.data[idx] = pojo[0]; // red
        this.data[idx + 1] = pojo[1]; // green
        this.data[idx + 2] = pojo[2]; // blue
        this.data[idx + 3] = pojo[3];  // opacity

        w_count = w_count - 1;
        if (w_count == 0) {
          cur_type = !cur_type;
          w_count = size;
        }

      }
    }

    this.pack().pipe(fs.createWriteStream("checker-board.png"));
  });

/*
    rbrb
  rrbbrrbb
rrrbbbrrrbbb



*/
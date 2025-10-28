
const frame_filter_strength = 20;
var the_frame_time = 0;
var the_last_loop = new Date;
var the_start_loop;
var the_fps = 0;                          // more better name and location?

function timeFrames() {
  the_start_loop = new Date;
  var this_frame_time = the_start_loop - the_last_loop;
  the_frame_time += (this_frame_time - the_frame_time) / frame_filter_strength;
  the_last_loop = the_start_loop;
  the_fps = (1000 / the_frame_time).toFixed(1);
  the_scene = document.getElementById('the-fps');
  the_scene.innerHTML = the_fps;

}

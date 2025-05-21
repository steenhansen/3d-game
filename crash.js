

let number_lines2 = start_stop_flip.length;
//leftRightStart(number_lines2);


function startCrash(num_lines, crash_speed) {
  let first_time;

  requestAnimationFrame(firstCrash);

  function firstCrash(timestamp) {
    first_time = timestamp;
    restCrash(timestamp);
  }

  function restCrash(timestamp) {
    const frame_count = (timestamp - first_time) / crash_speed; // duration 10 fast, 100 slow
    let the_count = Math.floor(frame_count);

    let normal_line = `background-position: -${the_count + 2}px -${the_count}px`;
    let flip_line = `background-position: 0px                 -${the_count}px`;

    let flip_count = 0;
    let is_flip = false;

    //      for (let cur_line = 14; cur_line < num_lines; cur_line++) {
    for (let cur_line = 0; cur_line < num_lines; cur_line++) {
      const reverse_vertical = num_lines - cur_line - 1;
      const ne_element = document.getElementById(`ne${reverse_vertical}`);
      const se_element = document.getElementById(`se${cur_line}`);
      const sw_element = document.getElementById(`sw${cur_line}`);
      const nw_element = document.getElementById(`nw${reverse_vertical}`);

      if (is_flip) {
        ne_element.style = flip_line;
        se_element.style = normal_line;
        sw_element.style = flip_line;
        nw_element.style = normal_line;
      } else {
        ne_element.style = normal_line;
        se_element.style = flip_line;
        sw_element.style = normal_line;
        nw_element.style = flip_line;
      }
      flip_count++;
      if (flip_count == the_count) {
        flip_count = 0;
        is_flip = !is_flip;
      }

    }

    if (frame_count < num_lines) {
      requestAnimationFrame(restCrash);
    }
  }
}

// startCrash(128, 25);

document.getElementById('the-crash').innerHTML = `
  <div style="float:left; display:none">
    <div class="west_line" id="nw0"></div>
    <div class="west_line" id="nw1"></div>
    <div class="west_line" id="nw2"></div>
    <div class="west_line" id="nw3"></div>
    <div class="west_line" id="nw4"></div>
    <div class="west_line" id="nw5"></div>
    <div class="west_line" id="nw6"></div>
    <div class="west_line" id="nw7"></div>
    <div class="west_line" id="nw8"></div>
    <div class="west_line" id="nw9"></div>

    <div class="west_line" id="nw10"></div>
    <div class="west_line" id="nw11"></div>
    <div class="west_line" id="nw12"></div>
    <div class="west_line" id="nw13"></div>
    <div class="west_line" id="nw14"></div>
    <div class="west_line" id="nw15"></div>
    <div class="west_line" id="nw16"></div>
    <div class="west_line" id="nw17"></div>
    <div class="west_line" id="nw18"></div>
    <div class="west_line" id="nw19"></div>

    <div class="west_line" id="nw20"></div>
    <div class="west_line" id="nw21"></div>
    <div class="west_line" id="nw22"></div>
    <div class="west_line" id="nw23"></div>
    <div class="west_line" id="nw24"></div>
    <div class="west_line" id="nw25"></div>
    <div class="west_line" id="nw26"></div>
    <div class="west_line" id="nw27"></div>
    <div class="west_line" id="nw28"></div>
    <div class="west_line" id="nw29"></div>


    <div class="west_line" id="nw30"></div>
    <div class="west_line" id="nw31"></div>
    <div class="west_line" id="nw32"></div>
    <div class="west_line" id="nw33"></div>
    <div class="west_line" id="nw34"></div>
    <div class="west_line" id="nw35"></div>
    <div class="west_line" id="nw36"></div>
    <div class="west_line" id="nw37"></div>
    <div class="west_line" id="nw38"></div>
    <div class="west_line" id="nw39"></div>

    <div class="west_line" id="nw40"></div>
    <div class="west_line" id="nw41"></div>
    <div class="west_line" id="nw42"></div>
    <div class="west_line" id="nw43"></div>
    <div class="west_line" id="nw44"></div>
    <div class="west_line" id="nw45"></div>
    <div class="west_line" id="nw46"></div>
    <div class="west_line" id="nw47"></div>
    <div class="west_line" id="nw48"></div>
    <div class="west_line" id="nw49"></div>

    <div class="west_line" id="nw50"></div>
    <div class="west_line" id="nw51"></div>
    <div class="west_line" id="nw52"></div>
    <div class="west_line" id="nw53"></div>
    <div class="west_line" id="nw54"></div>
    <div class="west_line" id="nw55"></div>
    <div class="west_line" id="nw56"></div>
    <div class="west_line" id="nw57"></div>
    <div class="west_line" id="nw58"></div>
    <div class="west_line" id="nw59"></div>

    <div class="west_line" id="nw60"></div>
    <div class="west_line" id="nw61"></div>
    <div class="west_line" id="nw62"></div>
    <div class="west_line" id="nw63"></div>
    <div class="west_line" id="nw64"></div>
    <div class="west_line" id="nw65"></div>
    <div class="west_line" id="nw66"></div>
    <div class="west_line" id="nw67"></div>
    <div class="west_line" id="nw68"></div>
    <div class="west_line" id="nw69"></div>

    <div class="west_line" id="nw70"></div>
    <div class="west_line" id="nw71"></div>
    <div class="west_line" id="nw72"></div>
    <div class="west_line" id="nw73"></div>
    <div class="west_line" id="nw74"></div>
    <div class="west_line" id="nw75"></div>
    <div class="west_line" id="nw76"></div>
    <div class="west_line" id="nw77"></div>
    <div class="west_line" id="nw78"></div>
    <div class="west_line" id="nw79"></div>

    <div class="west_line" id="nw80"></div>
    <div class="west_line" id="nw81"></div>
    <div class="west_line" id="nw82"></div>
    <div class="west_line" id="nw83"></div>
    <div class="west_line" id="nw84"></div>
    <div class="west_line" id="nw85"></div>
    <div class="west_line" id="nw86"></div>
    <div class="west_line" id="nw87"></div>
    <div class="west_line" id="nw88"></div>
    <div class="west_line" id="nw89"></div>

    <div class="west_line" id="nw90"></div>
    <div class="west_line" id="nw91"></div>
    <div class="west_line" id="nw92"></div>
    <div class="west_line" id="nw93"></div>
    <div class="west_line" id="nw94"></div>
    <div class="west_line" id="nw95"></div>
    <div class="west_line" id="nw96"></div>
    <div class="west_line" id="nw97"></div>
    <div class="west_line" id="nw98"></div>
    <div class="west_line" id="nw99"></div>


    <div class="west_line" id="nw100"></div>
    <div class="west_line" id="nw101"></div>
    <div class="west_line" id="nw102"></div>
    <div class="west_line" id="nw103"></div>
    <div class="west_line" id="nw104"></div>
    <div class="west_line" id="nw105"></div>
    <div class="west_line" id="nw106"></div>
    <div class="west_line" id="nw107"></div>
    <div class="west_line" id="nw108"></div>
    <div class="west_line" id="nw109"></div>


    <div class="west_line" id="nw110"></div>
    <div class="west_line" id="nw111"></div>
    <div class="west_line" id="nw112"></div>
    <div class="west_line" id="nw113"></div>
    <div class="west_line" id="nw114"></div>
    <div class="west_line" id="nw115"></div>
    <div class="west_line" id="nw116"></div>
    <div class="west_line" id="nw117"></div>
    <div class="west_line" id="nw118"></div>
    <div class="west_line" id="nw119"></div>



    <div class="west_line" id="nw120"></div>
    <div class="west_line" id="nw121"></div>
    <div class="west_line" id="nw122"></div>
    <div class="west_line" id="nw123"></div>
    <div class="west_line" id="nw124"></div>
    <div class="west_line" id="nw125"></div>
    <div class="west_line" id="nw126"></div>
    <div class="west_line" id="nw127"></div>



  </div>


  <!--             xxxxxxxxxxxxxx               -->




  <div style="float:left; display:none ">
    <div class="east_line" id="ne0"></div>
    <div class="east_line" id="ne1"></div>
    <div class="east_line" id="ne2"></div>
    <div class="east_line" id="ne3"></div>
    <div class="east_line" id="ne4"></div>
    <div class="east_line" id="ne5"></div>
    <div class="east_line" id="ne6"></div>
    <div class="east_line" id="ne7"></div>
    <div class="east_line" id="ne8"></div>
    <div class="east_line" id="ne9"></div>

    <div class="east_line" id="ne10"></div>
    <div class="east_line" id="ne11"></div>
    <div class="east_line" id="ne12"></div>
    <div class="east_line" id="ne13"></div>
    <div class="east_line" id="ne14"></div>
    <div class="east_line" id="ne15"></div>
    <div class="east_line" id="ne16"></div>
    <div class="east_line" id="ne17"></div>
    <div class="east_line" id="ne18"></div>
    <div class="east_line" id="ne19"></div>

    <div class="east_line" id="ne20"></div>
    <div class="east_line" id="ne21"></div>
    <div class="east_line" id="ne22"></div>
    <div class="east_line" id="ne23"></div>
    <div class="east_line" id="ne24"></div>
    <div class="east_line" id="ne25"></div>
    <div class="east_line" id="ne26"></div>
    <div class="east_line" id="ne27"></div>
    <div class="east_line" id="ne28"></div>
    <div class="east_line" id="ne29"></div>


    <div class="east_line" id="ne30"></div>
    <div class="east_line" id="ne31"></div>
    <div class="east_line" id="ne32"></div>
    <div class="east_line" id="ne33"></div>
    <div class="east_line" id="ne34"></div>
    <div class="east_line" id="ne35"></div>
    <div class="east_line" id="ne36"></div>
    <div class="east_line" id="ne37"></div>
    <div class="east_line" id="ne38"></div>
    <div class="east_line" id="ne39"></div>

    <div class="east_line" id="ne40"></div>
    <div class="east_line" id="ne41"></div>
    <div class="east_line" id="ne42"></div>
    <div class="east_line" id="ne43"></div>
    <div class="east_line" id="ne44"></div>
    <div class="east_line" id="ne45"></div>
    <div class="east_line" id="ne46"></div>
    <div class="east_line" id="ne47"></div>
    <div class="east_line" id="ne48"></div>
    <div class="east_line" id="ne49"></div>

    <div class="east_line" id="ne50"></div>
    <div class="east_line" id="ne51"></div>
    <div class="east_line" id="ne52"></div>
    <div class="east_line" id="ne53"></div>
    <div class="east_line" id="ne54"></div>
    <div class="east_line" id="ne55"></div>
    <div class="east_line" id="ne56"></div>
    <div class="east_line" id="ne57"></div>
    <div class="east_line" id="ne58"></div>
    <div class="east_line" id="ne59"></div>

    <div class="east_line" id="ne60"></div>
    <div class="east_line" id="ne61"></div>
    <div class="east_line" id="ne62"></div>
    <div class="east_line" id="ne63"></div>
    <div class="east_line" id="ne64"></div>
    <div class="east_line" id="ne65"></div>
    <div class="east_line" id="ne66"></div>
    <div class="east_line" id="ne67"></div>
    <div class="east_line" id="ne68"></div>
    <div class="east_line" id="ne69"></div>

    <div class="east_line" id="ne70"></div>
    <div class="east_line" id="ne71"></div>
    <div class="east_line" id="ne72"></div>
    <div class="east_line" id="ne73"></div>
    <div class="east_line" id="ne74"></div>
    <div class="east_line" id="ne75"></div>
    <div class="east_line" id="ne76"></div>
    <div class="east_line" id="ne77"></div>
    <div class="east_line" id="ne78"></div>
    <div class="east_line" id="ne79"></div>

    <div class="east_line" id="ne80"></div>
    <div class="east_line" id="ne81"></div>
    <div class="east_line" id="ne82"></div>
    <div class="east_line" id="ne83"></div>
    <div class="east_line" id="ne84"></div>
    <div class="east_line" id="ne85"></div>
    <div class="east_line" id="ne86"></div>
    <div class="east_line" id="ne87"></div>
    <div class="east_line" id="ne88"></div>
    <div class="east_line" id="ne89"></div>

    <div class="east_line" id="ne90"></div>
    <div class="east_line" id="ne91"></div>
    <div class="east_line" id="ne92"></div>
    <div class="east_line" id="ne93"></div>
    <div class="east_line" id="ne94"></div>
    <div class="east_line" id="ne95"></div>
    <div class="east_line" id="ne96"></div>
    <div class="east_line" id="ne97"></div>
    <div class="east_line" id="ne98"></div>
    <div class="east_line" id="ne99"></div>


    <div class="east_line" id="ne100"></div>
    <div class="east_line" id="ne101"></div>
    <div class="east_line" id="ne102"></div>
    <div class="east_line" id="ne103"></div>
    <div class="east_line" id="ne104"></div>
    <div class="east_line" id="ne105"></div>
    <div class="east_line" id="ne106"></div>
    <div class="east_line" id="ne107"></div>
    <div class="east_line" id="ne108"></div>
    <div class="east_line" id="ne109"></div>

    <div class="east_line" id="ne110"></div>
    <div class="east_line" id="ne111"></div>
    <div class="east_line" id="ne112"></div>
    <div class="east_line" id="ne113"></div>
    <div class="east_line" id="ne114"></div>
    <div class="east_line" id="ne115"></div>
    <div class="east_line" id="ne116"></div>
    <div class="east_line" id="ne117"></div>
    <div class="east_line" id="ne118"></div>
    <div class="east_line" id="ne119"></div>


    <div class="east_line" id="ne120"></div>
    <div class="east_line" id="ne121"></div>
    <div class="east_line" id="ne122"></div>
    <div class="east_line" id="ne123"></div>
    <div class="east_line" id="ne124"></div>
    <div class="east_line" id="ne125"></div>
    <div class="east_line" id="ne126"></div>
    <div class="east_line" id="ne127"></div>


  </div>









  <div style="float:left; clear:left; display:none">
    <div class=" west_line" id="sw0"></div>
    <div class="west_line" id="sw1"></div>
    <div class="west_line" id="sw2"></div>
    <div class="west_line" id="sw3"></div>
    <div class="west_line" id="sw4"></div>
    <div class="west_line" id="sw5"></div>
    <div class="west_line" id="sw6"></div>
    <div class="west_line" id="sw7"></div>
    <div class="west_line" id="sw8"></div>
    <div class="west_line" id="sw9"></div>

    <div class="west_line" id="sw10"></div>
    <div class="west_line" id="sw11"></div>
    <div class="west_line" id="sw12"></div>
    <div class="west_line" id="sw13"></div>
    <div class="west_line" id="sw14"></div>
    <div class="west_line" id="sw15"></div>
    <div class="west_line" id="sw16"></div>
    <div class="west_line" id="sw17"></div>
    <div class="west_line" id="sw18"></div>
    <div class="west_line" id="sw19"></div>

    <div class="west_line" id="sw20"></div>
    <div class="west_line" id="sw21"></div>
    <div class="west_line" id="sw22"></div>
    <div class="west_line" id="sw23"></div>
    <div class="west_line" id="sw24"></div>
    <div class="west_line" id="sw25"></div>
    <div class="west_line" id="sw26"></div>
    <div class="west_line" id="sw27"></div>
    <div class="west_line" id="sw28"></div>
    <div class="west_line" id="sw29"></div>


    <div class="west_line" id="sw30"></div>
    <div class="west_line" id="sw31"></div>
    <div class="west_line" id="sw32"></div>
    <div class="west_line" id="sw33"></div>
    <div class="west_line" id="sw34"></div>
    <div class="west_line" id="sw35"></div>
    <div class="west_line" id="sw36"></div>
    <div class="west_line" id="sw37"></div>
    <div class="west_line" id="sw38"></div>
    <div class="west_line" id="sw39"></div>

    <div class="west_line" id="sw40"></div>
    <div class="west_line" id="sw41"></div>
    <div class="west_line" id="sw42"></div>
    <div class="west_line" id="sw43"></div>
    <div class="west_line" id="sw44"></div>
    <div class="west_line" id="sw45"></div>
    <div class="west_line" id="sw46"></div>
    <div class="west_line" id="sw47"></div>
    <div class="west_line" id="sw48"></div>
    <div class="west_line" id="sw49"></div>

    <div class="west_line" id="sw50"></div>
    <div class="west_line" id="sw51"></div>
    <div class="west_line" id="sw52"></div>
    <div class="west_line" id="sw53"></div>
    <div class="west_line" id="sw54"></div>
    <div class="west_line" id="sw55"></div>
    <div class="west_line" id="sw56"></div>
    <div class="west_line" id="sw57"></div>
    <div class="west_line" id="sw58"></div>
    <div class="west_line" id="sw59"></div>

    <div class="west_line" id="sw60"></div>
    <div class="west_line" id="sw61"></div>
    <div class="west_line" id="sw62"></div>
    <div class="west_line" id="sw63"></div>
    <div class="west_line" id="sw64"></div>
    <div class="west_line" id="sw65"></div>
    <div class="west_line" id="sw66"></div>
    <div class="west_line" id="sw67"></div>
    <div class="west_line" id="sw68"></div>
    <div class="west_line" id="sw69"></div>

    <div class="west_line" id="sw70"></div>
    <div class="west_line" id="sw71"></div>
    <div class="west_line" id="sw72"></div>
    <div class="west_line" id="sw73"></div>
    <div class="west_line" id="sw74"></div>
    <div class="west_line" id="sw75"></div>
    <div class="west_line" id="sw76"></div>
    <div class="west_line" id="sw77"></div>
    <div class="west_line" id="sw78"></div>
    <div class="west_line" id="sw79"></div>

    <div class="west_line" id="sw80"></div>
    <div class="west_line" id="sw81"></div>
    <div class="west_line" id="sw82"></div>
    <div class="west_line" id="sw83"></div>
    <div class="west_line" id="sw84"></div>
    <div class="west_line" id="sw85"></div>
    <div class="west_line" id="sw86"></div>
    <div class="west_line" id="sw87"></div>
    <div class="west_line" id="sw88"></div>
    <div class="west_line" id="sw89"></div>

    <div class="west_line" id="sw90"></div>
    <div class="west_line" id="sw91"></div>
    <div class="west_line" id="sw92"></div>
    <div class="west_line" id="sw93"></div>
    <div class="west_line" id="sw94"></div>
    <div class="west_line" id="sw95"></div>
    <div class="west_line" id="sw96"></div>
    <div class="west_line" id="sw97"></div>
    <div class="west_line" id="sw98"></div>
    <div class="west_line" id="sw99"></div>

    <div class=" west_line" id="sw100"></div>
    <div class="west_line" id="sw101"></div>
    <div class="west_line" id="sw102"></div>
    <div class="west_line" id="sw103"></div>
    <div class="west_line" id="sw104"></div>
    <div class="west_line" id="sw105"></div>
    <div class="west_line" id="sw106"></div>
    <div class="west_line" id="sw107"></div>
    <div class="west_line" id="sw108"></div>
    <div class="west_line" id="sw109"></div>

    <div class=" west_line" id="sw110"></div>
    <div class="west_line" id="sw111"></div>
    <div class="west_line" id="sw112"></div>
    <div class="west_line" id="sw113"></div>
    <div class="west_line" id="sw114"></div>
    <div class="west_line" id="sw115"></div>
    <div class="west_line" id="sw116"></div>
    <div class="west_line" id="sw117"></div>
    <div class="west_line" id="sw118"></div>
    <div class="west_line" id="sw119"></div>

    <div class=" west_line" id="sw120"></div>
    <div class="west_line" id="sw121"></div>
    <div class="west_line" id="sw122"></div>
    <div class="west_line" id="sw123"></div>
    <div class="west_line" id="sw124"></div>
    <div class="west_line" id="sw125"></div>
    <div class="west_line" id="sw126"></div>
    <div class="west_line" id="sw127"></div>


  </div>






  <div style="float:left; display:none">

    <div class="east_line" id="se0"></div>
    <div class="east_line" id="se1"></div>
    <div class="east_line" id="se2"></div>
    <div class="east_line" id="se3"></div>
    <div class="east_line" id="se4"></div>
    <div class="east_line" id="se5"></div>
    <div class="east_line" id="se6"></div>
    <div class="east_line" id="se7"></div>
    <div class="east_line" id="se8"></div>
    <div class="east_line" id="se9"></div>

    <div class="east_line" id="se10"></div>
    <div class="east_line" id="se11"></div>
    <div class="east_line" id="se12"></div>
    <div class="east_line" id="se13"></div>
    <div class="east_line" id="se14"></div>
    <div class="east_line" id="se15"></div>
    <div class="east_line" id="se16"></div>
    <div class="east_line" id="se17"></div>
    <div class="east_line" id="se18"></div>
    <div class="east_line" id="se19"></div>

    <div class="east_line" id="se20"></div>
    <div class="east_line" id="se21"></div>
    <div class="east_line" id="se22"></div>
    <div class="east_line" id="se23"></div>
    <div class="east_line" id="se24"></div>
    <div class="east_line" id="se25"></div>
    <div class="east_line" id="se26"></div>
    <div class="east_line" id="se27"></div>
    <div class="east_line" id="se28"></div>
    <div class="east_line" id="se29"></div>


    <div class="east_line" id="se30"></div>
    <div class="east_line" id="se31"></div>
    <div class="east_line" id="se32"></div>
    <div class="east_line" id="se33"></div>
    <div class="east_line" id="se34"></div>
    <div class="east_line" id="se35"></div>
    <div class="east_line" id="se36"></div>
    <div class="east_line" id="se37"></div>
    <div class="east_line" id="se38"></div>
    <div class="east_line" id="se39"></div>

    <div class="east_line" id="se40"></div>
    <div class="east_line" id="se41"></div>
    <div class="east_line" id="se42"></div>
    <div class="east_line" id="se43"></div>
    <div class="east_line" id="se44"></div>
    <div class="east_line" id="se45"></div>
    <div class="east_line" id="se46"></div>
    <div class="east_line" id="se47"></div>
    <div class="east_line" id="se48"></div>
    <div class="east_line" id="se49"></div>

    <div class="east_line" id="se50"></div>
    <div class="east_line" id="se51"></div>
    <div class="east_line" id="se52"></div>
    <div class="east_line" id="se53"></div>
    <div class="east_line" id="se54"></div>
    <div class="east_line" id="se55"></div>
    <div class="east_line" id="se56"></div>
    <div class="east_line" id="se57"></div>
    <div class="east_line" id="se58"></div>
    <div class="east_line" id="se59"></div>

    <div class="east_line" id="se60"></div>
    <div class="east_line" id="se61"></div>
    <div class="east_line" id="se62"></div>
    <div class="east_line" id="se63"></div>
    <div class="east_line" id="se64"></div>
    <div class="east_line" id="se65"></div>
    <div class="east_line" id="se66"></div>
    <div class="east_line" id="se67"></div>
    <div class="east_line" id="se68"></div>
    <div class="east_line" id="se69"></div>

    <div class="east_line" id="se70"></div>
    <div class="east_line" id="se71"></div>
    <div class="east_line" id="se72"></div>
    <div class="east_line" id="se73"></div>
    <div class="east_line" id="se74"></div>
    <div class="east_line" id="se75"></div>
    <div class="east_line" id="se76"></div>
    <div class="east_line" id="se77"></div>
    <div class="east_line" id="se78"></div>
    <div class="east_line" id="se79"></div>

    <div class="east_line" id="se80"></div>
    <div class="east_line" id="se81"></div>
    <div class="east_line" id="se82"></div>
    <div class="east_line" id="se83"></div>
    <div class="east_line" id="se84"></div>
    <div class="east_line" id="se85"></div>
    <div class="east_line" id="se86"></div>
    <div class="east_line" id="se87"></div>
    <div class="east_line" id="se88"></div>
    <div class="east_line" id="se89"></div>

    <div class="east_line" id="se90"></div>
    <div class="east_line" id="se91"></div>
    <div class="east_line" id="se92"></div>
    <div class="east_line" id="se93"></div>
    <div class="east_line" id="se94"></div>
    <div class="east_line" id="se95"></div>
    <div class="east_line" id="se96"></div>
    <div class="east_line" id="se97"></div>
    <div class="east_line" id="se98"></div>
    <div class="east_line" id="se99"></div>

    <div class="east_line" id="se100"></div>
    <div class="east_line" id="se101"></div>
    <div class="east_line" id="se102"></div>
    <div class="east_line" id="se103"></div>
    <div class="east_line" id="se104"></div>
    <div class="east_line" id="se105"></div>
    <div class="east_line" id="se106"></div>
    <div class="east_line" id="se107"></div>
    <div class="east_line" id="se108"></div>
    <div class="east_line" id="se109"></div>

    <div class="east_line" id="se110"></div>
    <div class="east_line" id="se111"></div>
    <div class="east_line" id="se112"></div>
    <div class="east_line" id="se113"></div>
    <div class="east_line" id="se114"></div>
    <div class="east_line" id="se115"></div>
    <div class="east_line" id="se116"></div>
    <div class="east_line" id="se117"></div>
    <div class="east_line" id="se118"></div>
    <div class="east_line" id="se119"></div>

    <div class="east_line" id="se120"></div>
    <div class="east_line" id="se121"></div>
    <div class="east_line" id="se122"></div>
    <div class="east_line" id="se123"></div>
    <div class="east_line" id="se124"></div>
    <div class="east_line" id="se125"></div>
    <div class="east_line" id="se126"></div>
    <div class="east_line" id="se127"></div>



  </div>
`;

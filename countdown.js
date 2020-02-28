function CountdownJS(config) {
  var deadline = config.deadline;

  var codeBlock =   '<div>'
                      + '<span class="days"></span>'
                      + '<div class="smalltext">Days</div>   '
                  + '</div>'
                  + '<div>'
                      + '<span class="hours"></span>'
                      + '<div class="smalltext">Hours</div>'
                  + '</div>'
                  + '<div>'
                              + '<span class="minutes"></span>'
                              + '<div class="smalltext">Minutes</div>'
                  + '</div>'
                  + '<div>'
                              + '<span class="seconds"></span>'
                              + '<div class="smalltext">Seconds</div>'
                  + '</div>';


  // Time Remaining
  function time_remaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
  }

  // Run Clock
  function run_clock(id,endtime){
    var clock = document.getElementById(id);

    // get spans where our clock numbers are held
    var days_span = clock.querySelector('.days');
    var hours_span = clock.querySelector('.hours');
    var minutes_span = clock.querySelector('.minutes');
    var seconds_span = clock.querySelector('.seconds');

    // Update Clock
    function update_clock(){
      var t = time_remaining(endtime);

      // update the numbers in each part of the clock
      days_span.innerHTML = t.days;
      hours_span.innerHTML = ('0' + t.hours).slice(-2);
      minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
      seconds_span.innerHTML = ('0' + t.seconds).slice(-2);

      if(t.total<=0){ clearInterval(timeinterval); }
    }
    // Init Update Clock
    update_clock();
    // Set Update Clock Time Interval
    var timeinterval = setInterval(update_clock,1000);
  }

  config.useTemplate == true ? document.getElementById(config.id).innerHTML = codeBlock : "";

  // Init Run Clock
  run_clock(config.id, config.deadline);
}

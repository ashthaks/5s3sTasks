setInterval(function time(){
    var d = new Date();
    var days = 7 - d.getDay();
    var hours = 24 - d.getHours();
    if((hours + '').length == 1){
        hours = '0' + hours;
      }
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    jQuery('#countholder').html(
        '<div id="box">'+
        '<div><span class="days" id="days">'+days+'</span><div class="smalltext">Days</div></div>'+
        '<div><span class="hours" id="hours">'+hours+'</span><div class="smalltext">Hours</div></div>'+
        '<div><span class="minutes" id="minutes">'+min+'</span><div class="smalltext">Minutes</div></div>'+
        '<div><span class="seconds" id="seconds">'+sec+'</span><div class="smalltext">Seconds</div></div> </div>'
    )
  }, 1000);
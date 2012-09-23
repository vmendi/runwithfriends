function resetCanvas() { 
  $('#progress01').css("left",60);
  $('#progress02').css("left",60);

  currentTime = 0;
  $("#TimeID").text("00:00.00");
}

var currentTime = 0;

function daTimer() {

  currentTime += 33;

  var seconds = currentTime / 1000;

  $("#TimeID").text("00:" + seconds.toFixed(0) + "." + currentTime.toString().substr(seconds.toString().lenght-3, 2));
  
  setTimeout(daTimer, 33);
}

function iniciateCanvas() {
  //$('#progress02').clearQueue();

  setTimeout(daTimer, 33);
 
  $('#progress01').animate({
    left: '+=220',
  }, 19000, function() {
    resetCanvas();
    $.mobile.changePage('#ResultsPage', {transition:'none'});
  });

  $('#progress02').animate({
   left: '+=220',
    }, 20000, function() {
  });


}
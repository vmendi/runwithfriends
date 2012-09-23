
function resetCanvas(){

  $('#progress01').css("left",60);
  $('#progress02').css("left",60);


}



function iniciateCanvas(){
 

  
    

  //$('#progress02').clearQueue();
 
  $('#progress01').animate({
    left: '+=210',
  }, 19000, function() {
    resetCanvas();
    $.mobile.changePage('#ResultsPage', {transition:'none'});
    
  });


  $('#progress02').animate({
    
   left: '+=210',
    }, 20000, function() {

    
  });


}
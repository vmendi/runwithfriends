function iniciateCanvas(){
 
  $('#progress01').stop();
  $('#progress01').clearQueue();
   $("#progress01").offset({ left: "60px"});




  $(".layer2").position("left : '60px' ");


  
    

  //$('#progress02').clearQueue();
 
  $('#progress01').animate({
    left: '+=220',
  }, 19000, function() {
    
    
  });


  $('#progress02').animate({
    
   left: '+=220',
    }, 20000, function() {
    
  });


}
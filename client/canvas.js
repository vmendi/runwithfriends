


window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  /*
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };*/
})();

     


      
//function animate(myRectangle, canvas, context, startTime, imageObj1, imgx1, imgy1, imgwidth1, imgheight1, imageObj2, imgx2, imgy2, imgwidth2, imgheight2) {
  function animate(myRectangle, canvas, context, startTime, imageObj1, imgx1, imgy1){
  // update
  var time = (new Date()).getTime() - startTime;

  var linearSpeed = 10;
  // pixels / second
  var newX = linearSpeed * time / 1000;

  if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
    myRectangle.x = newX;
  }

  // clear
  context.clearRect(0, 0, canvas.width, canvas.height);



  //DRAW THINGS
  
  drawLine(context);
  drawRectangle(myRectangle, context);
  drawImage(context, imageObj1, imgx1, imgy1);
  
  //drawImage(context, imageObj2, imgx2, imgy2, imgwidth2, imgheight2);





  // request new frame
  requestAnimFrame(function() {
    animate(myRectangle, canvas, context, startTime);
  });
}





//DRAW RECTANGLE

function drawRectangle(myRectangle, context) {
  context.beginPath();
  context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  context.fillStyle = '#8ED6FF';
  context.fill();
  context.lineWidth = myRectangle.borderWidth;
  context.strokeStyle = 'black';
  context.stroke();
}


//DRAW LINE
function drawLine(context){
  
  context.moveTo(50,100);
  var lineStart = 480;
  var lineEnd = 100;
  context.lineTo(lineStart,lineEnd);
  context.stroke();
  
}







//IMAGES
/*
function drawImage(context, imageObj, x, y, width, height){
  context.drawImage(imageObj, x, y, width, height);
}*/

//IMAGES
function drawImage(context, imageObj, x, y){
  context.drawImage(imageObj, x, y);

}



//BEGIN
     
function iniciateCanvas(){
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  
        
  var myRectangle = {
    x: 0,
    y: 20,
    width: 10,
    height: 30,
    borderWidth: 2
  };


  var imageObj1 = new Image();
  var imageObj2 = new Image();
  imageObj1.src = './images/nacho.jpg';
  
  
  var imgx1= 0;
  var imgy1= 40;


  var imgx2= 0;
  var imgy2= 100;



  //var valuesImage= resizeImage(imageObj1.width,imageObj1.height);
  //var imgwidth1=valuesImage[0];
  //var imgheight1=valuesImage[1];

  var imgwidth1= 50;
  var imgheight1= 50;  
  imageObj1.onload = function() {
    drawImage(context, imageObj1, imgx1, imgy1);
  }

 
  var imgwidth2= 50;
  var imgheight2= 50;
 // drawImage(context, imageObj2, imgx2, imgy2, imgwidth2, imgheight2);
  
  
  drawLine(context);
  drawRectangle(myRectangle, context);


  // wait one second before starting animation
  
  setTimeout(function() {
    var startTime = (new Date()).getTime();
    animate(myRectangle, canvas, context, startTime, context, imageObj1, imgx1, imgy1);
    //, imgwidth1, imgheight1, context, imageObj2, imgx2, imgy2, imgwidth2, imgheight2
  }, 1000);

};
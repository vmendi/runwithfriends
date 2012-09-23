


     window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

     
      
function animate(myRectangle, canvas, context, startTime) {
  // update
  var time = (new Date()).getTime() - startTime;

  var linearSpeed = 100;
  // pixels / second
  var newX = linearSpeed * time / 1000;

  if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
    myRectangle.x = newX;
  }

  // clear
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawRectangle(myRectangle, context);

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
  
  context.moveTo(0,20);
  var lineStart = 480;
  var lineEnd = 20;
  context.lineTo(lineStart,lineEnd);
  context.stroke();
  
}



//BEGIN
     
function iniciateCanvas(){
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
        
  var myRectangle = {
    x: 0,
    y: 20,
    width: 30,
    height: 30,
    borderWidth: 2
  };

  drawLine(context);
  drawRectangle(myRectangle, context);


  // wait one second before starting animation
  setTimeout(function() {
    var startTime = (new Date()).getTime();
    animate(myRectangle, canvas, context, startTime);
  }, 1000);

};
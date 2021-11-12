// window.addEventListener('load',()=>{
  const canvas = document.querySelector("#canvas");
  let context = canvas.getContext("2d");
    canvas.height = window.innerHeight-80;
    // canvas.width = innerWidth - 25;
    canvas.width = window.innerWidth-80;
  
  
  // let EarserSelected=false;
  // if(!EarserSelected){
  //   earserAJ.style.color="white";
  // }
  
  //brush
  let brushSelecdted = false;
  const brush = document.getElementById("pen");
  
  brush.addEventListener('click', function () {
    brushSelecdted = true;
    drawAJ();
    brush.style.color = "#1E90FF";
   
    // EarserSelected=false;
    
  });
  
  //choose color of pen
  let color = "black";
  const colorPicker = document.getElementById('chooseColor');
  colorPicker.addEventListener("click", function() {
    console.log(colorPicker.value)
    color = colorPicker.value;
  })
  
  //choose size of pen
  const sizeA=document.getElementById('sizeAJ');
  
  sizeA.addEventListener('click',function(){
    
      context.lineWidth=sizeA.value;
    
  })
   
  //drawing
  function drawAJ() {
    
    if (brushSelecdted) {
      isSquare=false;
      isCircle=false;
      
      let isDrawing = false;
      let x = 0;
      let y = 0;
      context.styleStroke = color;
      context.fillStyle = color;
      console.log(color)
      // Add the event listeners for mousedown, mousemove, and mouseup
      canvas.addEventListener("mousedown", (e) => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
      });
  
      canvas.addEventListener("mousemove", (e) => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY);
          x = e.offsetX;
          y = e.offsetY;
        }
      });
  
      window.addEventListener("mouseup", (e) => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY);
          x = e.offsetX;
          y = e.offsetY;
          isDrawing = false;
        }
      });
  
      function drawLine(context, x1, y1, x2, y2) {
        context.beginPath();
     
        context.lineWidth = sizeA;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);

        // if(flag==false){
        //   context.strokeStyle="white";
        // }else{
        //   context.strokeStyle = color;
        // }
        context.strokeStyle = color;
        context.stroke();
      }
    }
  }
    // context.strokeRect(x1, y1, x2, y2);
  
    //earseAll
    const clear=document.getElementById('clearAll');
    clear.addEventListener('click',function(){
      brushSelecdted=false;
      brush.style.color = "white";
      // context.fillStyle='white';
      // context.getElementById('sizeAJ').value="white";
      // context.fillRect(0,0,window.innerWidth-80,window.innerHeight-60);

      context.clearRect(0,0,window.innerWidth-80,window.innerWidth-80);
    
    })
  
  
    //earser
    let flag=false;
    const earserAJ= document.getElementById('earser');
    earserAJ.addEventListener('click',function(){
      brush.style.color = "white";
      earserAJ.style.color="#1E90FF"; 
      // drawAJ(flag);
      
    })
  // })
  function reset(){
    window.location.reload();
  }

   //draw Rectangle
  let isMouseDown = false;
      let startPoint;
      let endPoint;
      let canvasSnapShot;
      let drawCommand = drawLine2;
      // window.addEventListener("keyup", function (e) {
      //     console.log(e.key, e.code);
      //   if (e.code === "KeyL") {
      //     drawCommand = drawLine2;
      //   } else if (e.code === "KeyR") {
      //     drawCommand = drawRect;
      //   } else if (e.code === "KeyC") {
      //     drawCommand = drawCircle;
      //   }
      // });


      let isSquare=false;
      const square=document.getElementById('sqaure');
      const circle=document.getElementById('circle');
      const line=document.getElementById('line');

  square.addEventListener('click',function (){
    isSquare=true;
   brushSelecdted=false;
    // brush.style.color="white";
    // earserAJ.style.color="white";
    square.style.color="#1E90FF";
         drawCommand = drawRect;
         
     
    });

    let isCircle=false;
    circle.addEventListener('click',function(){
      isCircle=true;
      circle.style.color="#1E90FF";
      drawCommand=drawCircle;
    })

    let isLine=false;
    line.addEventListener('click',function(){
      isLine=true;
      line.style.color="#1E90FF";
      drawCommand=drawLine2;
    })
      canvas.addEventListener("mousedown", function (e) {
        isMouseDown = true;
        startPoint = new Point(e.clientX, e.clientY);
        canvasSnapShot = context.getImageData(0, 0, canvas.width, canvas.height);
      });
      canvas.addEventListener("mouseup", function (e) {
        context.putImageData(canvasSnapShot, 0, 0);
        drawCommand();
        isMouseDown = false;
        startPoint = null;
        endPoint = null;
        canvasSnapShot = null;
      });
      canvas.addEventListener("mousemove", function (e) {
        if (isMouseDown) {
          endPoint = new Point(e.clientX, e.clientY);
        drawCommand();
          context.restore();
        }
      });

      function drawLine2() {
        if(isCircle==true || isSquare==true || isLine==true){
          context.putImageData(canvasSnapShot, 0, 0);
          context.strokeStyle = color;
          context.lineWidth = sizeA.value;
          context.beginPath();
          context.moveTo(startPoint.x, startPoint.y);
          context.lineTo(endPoint.x, endPoint.y);
          context.stroke();
          context.closePath();
        }
        }
        

      function drawRect() {
        if(isSquare){
          square.style.color="#1E90FF";
          
          context.putImageData(canvasSnapShot, 0, 0);
          context.strokeStyle = color;
          context.lineWidth = sizeA.value;
          context.beginPath();
          context.rect(
            startPoint.x,
            startPoint.y,
            endPoint.distance(startPoint).x,
            endPoint.distance(startPoint).y
          );
          context.stroke();
          context.closePath();
        }
        
      }

      function drawCircle() {
        if(isCircle){
          context.putImageData(canvasSnapShot, 0, 0);
          context.strokeStyle = color;
          context.lineWidth = sizeA.value;
          context.beginPath();
          context.arc(
            startPoint.x,
            startPoint.y,
            endPoint.hypotenuse(startPoint),
            0,
            Math.PI * 2
          );
          context.stroke();
          context.closePath();
        }
        }
      
      class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        hypotenuse(point) {
          return Math.sqrt(
            Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
          );
        }
        distance(point) {
          return new Point(
            Math.abs(this.x - point.x),
            Math.abs(this.y - point.y)
          );
        }
      }

 
 

  
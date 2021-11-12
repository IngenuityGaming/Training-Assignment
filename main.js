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
    drawAJ();
    brushSelecdted = true;
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
  function drawAJ(flag) {
    
    if (brushSelecdted) {
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
        context.strokeStyle = color;
        context.lineWidth = sizeA;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
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
      context.fillStyle='white';
      // context.getElementById('sizeAJ').value="white";
  
     
      context.fillRect(0,0,window.innerWidth-80,window.innerHeight-60);
    //  drawAJ();
    })
  
  
    //earser
    const earserAJ= document.getElementById('earser');
    earserAJ.addEventListener('click',function(){
      brushSelecdted=false;
  
      brush.style.color = "white";
  
      earserAJ.style.color="#1E90FF";
      
    })
    
  
  
  // })
  function reset(){
    window.location.reload();
  }
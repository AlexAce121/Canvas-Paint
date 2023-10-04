var mouse_event = "empty" ;
var lastPositionOfX,lastPositionOfY;

canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black" ;
var width = 1;

canvas.addEventListener("mousedown",Leo_mousedown);

function Leo_mousedown(e){
    mouse_event="mousedown";
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup",Leo_mouseup);

function Leo_mouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",Leo_mouseleave);

function Leo_mouseleave(e){
 mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",Leo_mousemove);

function Leo_mousemove(e){
    currentX=e.clientX- canvas.offsetLeft;
    currentY=e.clientY- canvas.offsetTop;
    if(mouse_event="mousedown") {
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=width;
 console.log("inmousemove");
 ctx.moveTo(lastPositionOfX,lastPositionOfY);
 ctx.lineTo(currentX,currentY);
 ctx.stroke();

    }
   lastPositionOfX=currentX;
   lastPositionOfY=currentY; 
}

function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
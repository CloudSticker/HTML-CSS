//document.querySelector("button").onclick = JSAnimationActive;
//document.querySelector("button").onclick = JSGradient;
//window.onload = JSGradient;
// document.querySelector(".canvas").style.height = document.querySelector(".JSElement").height;
// document.querySelector(".canvas").style.width = document.querySelector(".JSElement").width;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.lineWidth = 2;
ctx.fillStyle = "#FF33FF";
ctx.strokeStyle = "#FF33FF";
document.querySelector(".JSElement").style.backgroundColor = "#FFFFFF"; 
var PosX = 0;
var PosY = 0;

canvas.style.backgroundColor = "#FFFFFF";



    
let timerId = setInterval( () => 
{
    
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(PosX, PosY);
    ctx.stroke();
    PosX += 1.5;
}
 , 20);


    

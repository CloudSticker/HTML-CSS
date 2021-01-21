//document.querySelector("button").onclick = JSAnimationActive;
//document.querySelector("button").onclick = JSGradient;
//window.onload = JSGradient;
// document.querySelector(".canvas").style.height = document.querySelector(".JSElement").height;
// document.querySelector(".canvas").style.width = document.querySelector(".JSElement").width;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.lineWidth = 2;
var posX = 10;
var posY = 10;
var i = 0;
var n = 256;
var k = true;
var k3 = true;
var k2 = true;
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "#ffff00";
document.querySelector(".JSElement").style.backgroundColor = "#00FFFF"; 

setInterval(function () 
{

    ctx.clearRect(0, 0, 885, 615);

    ctx.beginPath();
    ctx.arc(posX, posY, 10, 0, 2 * Math.PI, false);    
    ctx.fillStyle =  "#" +  n.toString(16) + (255 - n).toString(16)  + (255).toString(16);
	ctx.strokeStyle =  "#" +  n.toString(16) + (255 - n).toString(16)  + (255).toString(16);
    ctx.fill();
	ctx.stroke();

    if (n == 256){
        k3 = false;
    }else if (n == 0){
        k3 = true;
    }

    if (k3){
        n++;
    }else{
        n--;
    }
    
    if (posX == 290){
        k1 = false
    }else if (posX == 10){
        k1 = true;
    }
        

    if (k1){
        posX++;
    }else{
        posX--;
    }


    if (posY == 140){
        k2 = false
    }else if (posY == 10){
        k2 = true;
    }
        

    if (k2){
        posY++;
    }else{
        posY--;
    }

    // console.log(document.getElementById("canvas").clientHeight);
    // console.log(document.getElementById("canvas").clientWidth);
}
, 20)





function setFadeColor(i, element){
        var t =  "#" +  i.toString(16) + (255 - i).toString(16)  + (255).toString(16);
        document.querySelector(element).style.backgroundColor = t; 
}



let timerId = setInterval( () => 
{
    if (document.querySelector("#gradient_check_box").checked){
        
        //console.log("#" +  r.toString(16) + ' ' +  g.toString(16)  + ' ' + b.toString(16));

        //console.log(i);

        if (i == 256){
            k = false;
        }else if (i == 0){
            k = true;
        }

        if (k){
            i++;
        }else{
            i--;
        }

        setFadeColor(i, ".JSElement"); 
        
    }
}
 , 20);




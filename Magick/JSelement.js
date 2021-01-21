//document.querySelector("button").onclick = JSAnimationActive;
//document.querySelector("button").onclick = JSGradient;
//window.onload = JSGradient;
// document.querySelector(".canvas").style.height = document.querySelector(".JSElement").height;
// document.querySelector(".canvas").style.width = document.querySelector(".JSElement").width;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.lineWidth = 2;
var pos = 0;

setInterval(function () 
{

    ctx.clearRect(0, 0, 900, 630);
    ctx.fillRect(pos, pos, 10, 10);
    
    if (pos == 100){
        k1 = false
    }else if (pos == 0){
        k1 = true;
    }
        

    if (k1){
        pos++;
    }else{
        pos--;
    }
    
    console.log(document.getElementById("canvas").clientHeight);
    console.log(document.getElementById("canvas").clientWidth);
}
, 20)


var i = 1;
var k = true;



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
        //setFadeColor(255 - i, ".canvas");  
    }
}
 , 20);




//document.querySelector("button").onclick = JSAnimationActive;
//document.querySelector("button").onclick = JSGradient;
//window.onload = JSGradient;

function JSAnimationActive(){
    console.log(document.querySelector("#password_01").value);
    //style
    document.querySelector("#JSElement").style.backgroundColor = document.querySelector("#password_01").value;
}


//#E57ED7
var r = 229;
var g = 126;
var b = 215;
var i = 1;
var k = true;

function setFadeColor(i){
        var t =  "#" +  i.toString(16) + (255 - i).toString(16)  + (255).toString(16);
        document.querySelector("#JSElement").style.backgroundColor = t; 
}

let timerId = setInterval( () => 
{
    if (document.querySelector("#gradient_check_box").checked){
        
        //console.log("#" +  r.toString(16) + ' ' +  g.toString(16)  + ' ' + b.toString(16));

        

        
        console.log(i);

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

        setFadeColor(i);   
    }
}
 , 20);




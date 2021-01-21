document.querySelector("button").onclick = JSAnimationActive;


function JSAnimationActive(){
    console.log(document.querySelector("#password_01").value);
    //style
    document.querySelector("#password_01").style.backgroundColor = document.querySelector("#password_01").value;
}

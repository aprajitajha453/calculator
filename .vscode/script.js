const container=document.getElementById('container')
 
function allClear(){
    container.innerHTML=''
}
function showText(value){
let val=value.innerText
container.innerHTML+=val

}
function calculation(){
    container.innerHTML=eval(container.innerHTML)
}
function del(){
    container.innerHTML=container.innerHTML.slice(0,-1)
}
///////////////////////////////

let isOn = false;

function togglePower() {
    let btn = document.getElementById("powerBtn");

    // toggle state
    isOn = !isOn;

    if (isOn) {
        btn.innerText = "ON";
        btn.classList.add("bg-green-500");
        btn.classList.remove("bg-gray-300");
    } else {
        btn.innerText = "OFF";
        btn.classList.add("bg-gray-300");
        btn.classList.remove("bg-green-500");
    }
}



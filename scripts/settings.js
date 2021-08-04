function changeColor(t, id) {
    document.querySelector(id).style.backgroundColor = t.value;
}

function changeFontColor(t) {
    document.querySelector("#clock").style.color = t.value;
    document.querySelector("#title").style.color = t.value;
}

function Aumenta() {
    var fonte       = document.querySelector("#clock");
    var sizeinput   = document.querySelector("#slider");
    var size        = `${sizeinput.value}rem`;
    fonte.style.fontSize = size;
}
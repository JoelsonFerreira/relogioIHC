function changeColor(t, id) {
    document.querySelector(id).style.backgroundColor = t.value;
}

function changeFontColor(t) {
    document.querySelector("#clock").style.color = t.value;
    document.querySelector("#title").style.color = t.value;
}

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}

setInterval(function(){
    
    let novaHora = new Date();

    let hora      = novaHora.getHours();
    let minuto    = novaHora.getMinutes();
    let segundo   = novaHora.getSeconds();
    
    minuto  = zero(minuto);
    segundo = zero(segundo);
    
    document.getElementById('clock').textContent = hora+':'+minuto+':'+segundo;
}, 1000)
const form      = document.querySelector('#settings');
const fontsize  = document.querySelector('#change_font_size');

function readScreen(){
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'pt';
    speech.volume = 50;

    let novaHora = new Date();

    let hora      = novaHora.getHours();
    let minuto    = novaHora.getMinutes();

    speech.text = hora + " horas e " + minuto + " minutos.";
    
    window.speechSynthesis.speak(speech);
}


document.addEventListener("click", (e) => { 
    const isClickInside = form.contains(e.target) || fontsize.contains(e.target);
    if(!isClickInside) {
        readScreen();
    }
});

document.querySelector("#title").innerText += Intl.DateTimeFormat().resolvedOptions().timeZone;

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
}, 1000);
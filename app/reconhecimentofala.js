const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0] [0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
    finalizaComGameOver(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHMTL = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}
function finalizaComGameOver(chute){
        if(chute === 'game over'){
            document.body.innerHTML =`
            <h2>Game Over!</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`

            document.body.style.backgroundColor = 'red'
        }
}


recognition.addEventListener('end', () => recognition.start());
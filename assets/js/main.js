const timeDisplay = document.getElementById('tDispaly');
const buttonPomodoro = document.getElementById('buttonPomodoro');
const buttonDescanso = document.getElementById('buttonDescanso');


const tempoEstudo = 25; // 25min
const tempoDescanso = 5;

let intervalo;
let segundos;

function pomodoro(tempo) {
 segundos = tempo * 60;

 intervalo = setInterval(function() {
    const minutos = Math.floor(segundos / 60);
    const segundosRest = segundos % 60;

    if(segundos === 0) {
        clearInterval(intervalo);

        return;
    }

    console.log(`min${minutos}.${segundosRest} ${segundos}`);

    segundos--;
 }, 1000)
};

// Função de pausa

let pauseInterval;

function resume() {
    setInterval(function () {
        const rMinutos = Math.floor(pauseInterval / 60);
        const rSegundosRest = pauseInterval % 60;

        if (pauseInterval === 0) {
            clearInterval(intervalo);

            return;
        }

        console.log(`min${rMinutos}.${rSegundosRest}`)

        pauseInterval--;
        console.log(pauseInterval);
    }, 1000);
}



buttonPomodoro.addEventListener('click', () => {
    resume();
});


buttonDescanso.addEventListener('click', () => {
    // clearInterval(intervalo)
    // pauseInterval = segundos;
})

pomodoro(tempoEstudo)
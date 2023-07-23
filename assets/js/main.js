const timeDisplay = document.getElementById('tDisplay');
const buttonPomodoro = document.getElementById('buttonPomodoro');
const buttonDescanso = document.getElementById('buttonDescanso');
const buttonStart = document.getElementById('buttonStart');
const buttonPause = document.getElementById('buttonPause');
const sMin = document.getElementById('sMin');
const sSec = document.getElementById('sSec');

let tempoDefault = 25; // 25 minutos (tempo em minutos)
const tempoDescanso = 5; // 5 minutos (tempo em minutos)

let intervalo;
let segundos;
let min;
let sec;
let paused = false;
let timeLeft = 0;

function pomodoro(tempo) {
  segundos = tempo * 60;

  intervalo = setInterval(function() {
    if (!paused) {
      const minutos = Math.floor(segundos / 60);
      const segundosRest = segundos % 60;

      if (segundos < 0) {
        clearInterval(intervalo);
        return;
      }

      min = minutos;
      sec = segundosRest;
      if (minutos < 10) {
        min = "0" + minutos;
      }
      if (segundosRest < 10) {
        sec = "0" + segundosRest;
      }

      sMin.innerText = min;
      sSec.innerText = ':' + sec;

      document.title = `${min}:${sec} - Não perca o foco.`

      segundos--;
    }
  }, 1000);
}

buttonStart.addEventListener('click', () => { //Chat GPT
  if (timeLeft > 0) {
    clearInterval(intervalo);
    paused = false;
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'block';
    pomodoro(timeLeft / 60);
  } else {

    clearInterval(intervalo);
    paused = false;
    pomodoro(tempoDefault);
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'block';
  }
});

buttonPause.addEventListener('click', () => { // chat GPT
  if (paused == false) {
    clearInterval(intervalo);
    paused = true;
    buttonStart.style.display = 'block';
    buttonPause.style.display = 'none';
    timeLeft = segundos; // Salva o tempo restante em segundos
  }
});

buttonPomodoro.addEventListener('click', () => {
  timeLeft = 0;
  clearInterval(intervalo);
  tempoDefault = 25;
  sMin.innerText = 25;
  sSec.innerText = ':0' + 0;
  if(paused == false) {
    buttonStart.style.display = 'block';
    buttonPause.style.display = 'none';
  }
});

buttonDescanso.addEventListener('click', () => {
  clearInterval(intervalo);
  timeLeft = 0;
  tempoDefault = 5;
  sMin.innerText = '0' + 5;
  sSec.innerText = ':0' + 0;
  if(paused == false) {
    buttonStart.style.display = 'block';
    buttonPause.style.display = 'none';
   }
});

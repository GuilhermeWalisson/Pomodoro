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
let isPaused = false;
let tempoRestante = 0; // Variável para rastrear o tempo restante após a pausa
let tempoPause = 0;

// Função do temporizador
function pomodoro(tempo) {
  segundos = tempo * 60;

  intervalo = setInterval(function() {
    if (!isPaused) {
      const minutos = Math.floor(segundos / 60);
      const segundosRest = segundos % 60;

      if (segundos <= 0) {
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

buttonStart.addEventListener('click', () => {
  console.log(tempoPause)
  console.log(tempoRestante)
  if(tempoRestante > 100000) {
    tempoRestante = 1500;
  }
  if(tempoRestante == 30000) {
    tempoRestante = 300
  }
  if(isNaN(tempoRestante)) {
    clearInterval(intervalo);
    isPaused = false;
    alert('Você está louco(a), pare de clicar sem parar!!')
  }
  if(isPaused === true) {
    clearInterval(intervalo);
    isPaused = false;
    tempoPause = tempoRestante;
    pomodoro(tempoPause / 60);
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'block';
  } else {
    clearInterval(intervalo);
    isPaused = false;
    pomodoro(tempoDefault);
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'block';
  }
});

// Função de pausa
buttonPause.addEventListener('click', () => {
  console.log(tempoRestante)
  clearInterval(intervalo)
  if (isPaused == false) {
    isPaused = true;
    buttonStart.style.display = 'block';
    buttonPause.style.display = 'none';
  }
  clearInterval(intervalo);
  buttonStart.style.display = 'block';
  buttonPause.style.display = 'none';
  tempoRestante = min * 60 + sec; // Salva o tempo restante após a pausa
});


buttonPomodoro.addEventListener('click', () => {
  if(isPaused == false) {
    buttonStart.style.display = 'block';
    buttonPause.style.display = 'none';
  } else {
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'block';
  }
  clearInterval(intervalo);
  tempoDefault = 25;
  sMin.innerText = 25;
  sSec.innerText = ':0' + 0;
});

buttonDescanso.addEventListener('click', () => {
  if(isPaused == false) {
    buttonStart.style.display = 'block';
    buttonPause.style.display = 'none';
  } else {
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'block';
  }
  clearInterval(intervalo);
  tempoDefault = 5;
  sMin.innerText = '0' + 5;
  sSec.innerText = ':0' + 0;
});

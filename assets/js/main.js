const timeDisplay = document.getElementById("tDisplay");
const buttonPomodoro = document.getElementById("buttonPomodoro");
const buttonDescanso = document.getElementById("buttonDescanso");
const buttonStart = document.getElementById("buttonStart");
const buttonPause = document.getElementById("buttonPause");
const sMin = document.getElementById("sMin");
const sSec = document.getElementById("sSec");
const bodyStats = document.getElementById("body");
const songsList = document.getElementById("songs-list");
const btnConfig = document.getElementById("btn-config");

let colorBody = localStorage.getItem("bodyColor");
bodyStats.style.backgroundColor = colorBody;
let tempoDefault = 25;
const tempoDescanso = 5;
let intervalo;
let segundos;
let min;
let sec;
let paused = false;
let timeLeft = 0;
let music = localStorage.getItem("music") ?? "assets/audio/music_lofi_1.mp3";
var song = new Audio(music);
let timeNext;
let timeA;

function pomodoro(tempo) {
  segundos = tempo * 60;

  intervalo = setInterval(function () {
    if (!paused) {
      const minutos = Math.floor(segundos / 60);
      const segundosRest = segundos % 60;

      min = minutos;
      sec = segundosRest;

      if (minutos < 10) {
        min = "0" + minutos;
      }

      if (segundosRest < 10) {
        sec = "0" + segundosRest;
      }

      if (segundos === 0) {
        clearInterval(intervalo);

        song.play();

        setTimeout(() => {
          song.pause();
        }, 60000);

        if (timeA == 5) {
          timeNext = 25;
          min = timeNext;
        } else {
          timeNext = 5;
          min = "0" + timeNext;
        }
      }

      sMin.innerText = min;
      sSec.innerText = ":" + sec;

      document.title = `${min}:${sec}`;

      segundos--;
    }
  }, 1000);
}

buttonStart.addEventListener("click", () => {
  if (timeLeft > 0) {
    clearInterval(intervalo);
    paused = false;
    buttonStart.style.display = "none";
    buttonPause.style.display = "block";
    pomodoro(timeLeft / 60);
  } else {
    clearInterval(intervalo);
    paused = false;
    pomodoro(timeNext || tempoDefault);
    buttonStart.style.display = "none";
    buttonPause.style.display = "block";
  }
});

buttonPause.addEventListener("click", () => {
  if (song.currentTime != 0) {
    song.currentTime = 0;
    song.pause();
  }
  if (paused == false) {
    clearInterval(intervalo);
    paused = true;
    buttonStart.style.display = "block";
    buttonPause.style.display = "none";
    timeLeft = segundos; // Salva o tempo restante em segundos
  }
});

buttonPomodoro.addEventListener("click", () => {
  timeLeft = 0;
  clearInterval(intervalo);
  timeA = 25;
  timeNext = 25;
  tempoDefault = 25;
  sMin.innerText = 25;
  sSec.innerText = ":0" + 0;
  if (paused == false) {
    buttonStart.style.display = "block";
    buttonPause.style.display = "none";
  }
});

buttonDescanso.addEventListener("click", () => {
  clearInterval(intervalo);
  timeA = 5;
  timeNext = 5;
  timeLeft = 0;
  tempoDefault = 5;
  sMin.innerText = "0" + 5;
  sSec.innerText = ":0" + 0;
  if (paused == false) {
    buttonStart.style.display = "block";
    buttonPause.style.display = "none";
  }
});

btnConfig.addEventListener("click", () => {
  if (song) {
    song.pause();
    song.currentTime = 0;
  }
});

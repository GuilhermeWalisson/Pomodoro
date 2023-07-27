const btnColorDefault = document.getElementById("btn-bg-default");
const btnColorRed = document.getElementById("btn-bg-red");
const btnColorPurple = document.getElementById("btn-bg-purple");
const btnColorDark = document.getElementById("btn-bg-dark");
const btnColorOrange = document.getElementById("btn-bg-orange");
const body = document.getElementById("body");

let color;

btnColorDefault.addEventListener('click', () =>{
    color = '#03c988'
    body.style.background = color;
    localStorage.setItem('bodyColor', color)
});

btnColorRed.addEventListener('click', () =>{
    color = 'rgb(255, 55, 55)'
    body.style.background = color;
    localStorage.setItem('bodyColor', color)
});

btnColorPurple.addEventListener('click', () =>{
    color = 'rgb(141, 99, 255)'
    body.style.background = color;
    localStorage.setItem('bodyColor', color)
});

btnColorDark.addEventListener('click', () =>{
    color = 'rgba(0, 0, 0, 0.89)'
    body.style.background = color;
    localStorage.setItem('bodyColor', color)
});

btnColorOrange.addEventListener('click', () =>{
    color = 'rgb(255, 174, 99)'
    body.style.background = color;
    localStorage.setItem('bodyColor', color)
});
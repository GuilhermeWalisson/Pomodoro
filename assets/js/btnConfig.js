const buttonConfig = document.getElementById("btn-config");
const timeCount = document.getElementById("timeCount");
const configContainer = document.getElementById("config-container");
const btnBack = document.getElementById("btnBack");

let mainState = false;

buttonConfig.addEventListener('click', () => {
    if(mainState == false) {
        timeCount.style.display = 'none';
        configContainer.style.display = 'flex';
        btnBack.style.display = 'flex';
        mainState = true;
    } else {
        timeCount.style.display = 'block';
        configContainer.style.display = 'none';
        btnBack.style.display = 'none';
        mainState = false;
    }
});

btnBack.addEventListener('click', () => {
    timeCount.style.display = 'block';
    configContainer.style.display = 'none';
    btnBack.style.display = 'none';
    mainState = false;
})
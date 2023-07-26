const btnConfig = document.getElementById("btn-config");
const timeCount = document.getElementById("timeCount");
const configContainer = document.getElementById("config-container");

let mainState = false;

btnConfig.addEventListener('click', () => {
    if(mainState == false) {
        timeCount.style.display = 'none';
        configContainer.style.display = 'flex';
        mainState = true;
    } else {
        timeCount.style.display = 'block';
        configContainer.style.display = 'none';
        mainState = false;
    }
});
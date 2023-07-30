const body = document.getElementById("body");

const colors = {
    red: 'rgb(255, 55, 55)',
    default: '#03c988',
    purple: 'rgb(141, 99, 255)',
    dark: 'rgba(0, 0, 0, 0.89)',
    orange: 'rgb(255, 174, 99)'
};

function bodyBgColorEdit(btnId, color) {
    document.getElementById(btnId).addEventListener('click', () => {
        body.style.background = color;
        localStorage.setItem('bodyColor', color);
    })
};

bodyBgColorEdit('btn-bg-default', colors.default);
bodyBgColorEdit('btn-bg-red', colors.red);
bodyBgColorEdit('btn-bg-purple', colors.purple);
bodyBgColorEdit('btn-bg-dark', colors.dark);
bodyBgColorEdit('btn-bg-orange', colors.orange);
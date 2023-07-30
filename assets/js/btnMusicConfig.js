const buttonConfigMusic = document.getElementById("btn-config");
const btnBackConfig = document.getElementById("btnBack");
let btnStatus = false;
let tSong;
var mPosition;
let buttonId;

function musicTest(btnId, song, position) {
    document.getElementById(btnId).addEventListener('click', () => {

        if(!mPosition) {
            mPosition = position;
        }
        
        if(mPosition != position) {
            document.getElementById(`btn-play-${mPosition}`)
            .getElementsByTagName('img')[0].src = './assets/svg/play.svg';
        }
        mPosition = position;
        if(btnStatus == false) {
            document.getElementById(btnId)
            .getElementsByTagName('img')[0].src = './assets/svg/pause.svg';            
            tSong = new Audio(song);
            tSong.play();
            btnStatus = true;
        } else {
            tSong.pause();
            document.getElementById(btnId)
            .getElementsByTagName('img')[0].src = './assets/svg/play.svg';
            btnStatus = false;
        }
        buttonConfigMusic.addEventListener('click', () => {
            if(btnStatus == true) {
                document.getElementById(`btn-play-${mPosition}`)
                .getElementsByTagName('img')[0].src = './assets/svg/play.svg';
            }
            tSong.pause();
            tSong.currentTime = 0;
        })

        btnBackConfig.addEventListener('click', () => {
            if(btnStatus == true) {
                document.getElementById(`btn-play-${mPosition}`)
                .getElementsByTagName('img')[0].src = './assets/svg/play.svg';
            }
            tSong.pause();
            tSong.currentTime = 0;
        })
    });

}

musicTest('btn-play-1', './assets/audio/music_lofi_1.mp3', 1);
musicTest('btn-play-2', './assets/audio/music_lofiCYFMH_2.mp3', 2);
musicTest('btn-play-3', './assets/audio/music_interestellar_3.mp3', 3);
musicTest('btn-play-4', './assets/audio/music_yoasobi_4.mp3', 4);

let btnPlusStatus = false;
let btnPosition;

function setMusic(btnId, music, setPosition) {

    document.getElementById(btnId).addEventListener('click', () => {

        if(!btnPosition) {
            btnPosition = setPosition;
        }

        if(btnPosition != setPosition) {
            document.getElementById(`btn-check-${btnPosition}`)
                .getElementsByTagName('img')[0].src = './assets/svg/plus.svg';
        }
        btnPosition = setPosition;

            if(btnPlusStatus == false) {
            btnPlusStatus = true;
            document.getElementById(btnId)
            .getElementsByTagName('img')[0].src = './assets/svg/check.svg';
            localStorage.setItem('music', music);
    } else {
        btnPlusStatus = false;
        document.getElementById(btnId)
            .getElementsByTagName('img')[0].src = './assets/svg/plus.svg';
    }

        btnBackConfig.addEventListener('click', () => {
            if(btnPlusStatus == true) {
                tSong.pause();
                tSong.currentTime = 0;
            }
            location.reload()
        })
        buttonConfigMusic.addEventListener('click', () => {
            if(btnPlusStatus == true) {
                tSong.pause();
                tSong.currentTime = 0;
            }
            location.reload()
        })
    });
};

setMusic('btn-check-1', './assets/audio/music_lofi_1.mp3', 1);
setMusic('btn-check-2', './assets/audio/music_lofiCYFMH_2.mp3', 2);
setMusic('btn-check-3', './assets/audio/music_interestellar_3.mp3', 3);
setMusic('btn-check-4', './assets/audio/music_yoasobi_4.mp3', 4);

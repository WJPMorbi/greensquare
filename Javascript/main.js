

let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        masterPlay.classList.remove('ri-play-circle-fill');
        masterPlay.classList.add('ri-pause-circle-fill');
    }else {
        music.pause();
        masterPlay.classList.remove('ri-pause-circle-fill');
        masterPlay.classList.add('ri-play-circle-fill');
    }
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    if (sec1<10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if (sec2<10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    seek.value = parseInt((music_curr/music_dur)*100);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

music.addEventListener('ended',()=>{
    masterPlay.classList.remove('ri-pause-circle-fill');
    masterPlay.classList.add('ri-play-circle-fill');
    bar2.style.width = `${0}%`;
    seek.value = 0;
    currentStart.innerText = '0:00';
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener("change",()=>{
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    music.volume = vol_a/100;
});

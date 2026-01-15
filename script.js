let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// jab song load ho jaye
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = 0;
};

// play / pause function
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// progress bar auto update (NO setInterval)
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

// progress bar move karne par song seek ho
progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};

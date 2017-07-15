// Get our elements

var player = document.querySelector('.player');
var video = player.querySelector('.viewer');
var progress = player.querySelector('.progress');
var progressBar = player.querySelector('.progress__filled');
var toggle = player.querySelector('.toggle');
var skipButtons = player.querySelectorAll('[data-skip]');
var ranges = player.querySelectorAll('.player__slider');

// Build our functions

function togglePlay() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    var icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdates() {
    video[this.name] = this.value;
}

function handleProgress() {
    var percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    var scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}
// Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdates));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdates));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousedown', () => mousedown = false);

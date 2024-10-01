document.addEventListener('DOMContentLoaded', function () {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audio = document.getElementById('audio');

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });
});
let chieuCaoToanBo = window.screen.height;
console.log("Chiều cao toàn bộ màn hình: " + chieuCaoToanBo + "px");

// Stopwatch functionality
const timeDisplay = document.querySelector('.time-display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let time = 0;
let stopwatchInterval = null;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (stopwatchInterval) return;
    stopwatchInterval = setInterval(() => {
        time++;
        timeDisplay.textContent = formatTime(time);
    }, 1000);
    startBtn.textContent = 'Running...';
}

function stopTimer() {
    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        startBtn.textContent = 'Start';
    }
}

function resetTimer() {
    stopTimer();
    time = 0;
    timeDisplay.textContent = formatTime(time);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
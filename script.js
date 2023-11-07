const startButtonEl = document.getElementById('startButton');
const stopButtonEl = document.getElementById('stopButton');
const resetButtonEl = document.getElementById('resetButton');
const stopWatchEl = document.getElementById('stopwatch');

let timer; // Variabel til at holde styr på timeren
let isRunning = false; // Variabel til at indikere om stopuret kører
let seconds = 0;
let minutes = 0;

resetButtonEl.addEventListener('click', () => {
    stopWatchEl.textContent = '0:00'; // Sætter stopurets værdi tilbage til '0:00'
    clearInterval(timer); // Stopper timeren
    isRunning = false; // Nulstiller isRunning
    startButtonEl.textContent = 'Start'; // Ændrer teksten på knappen til "Start"
    seconds = 0; // Nulstiller sekunder
    minutes = 0; // Nulstiller minutter
})

startButtonEl.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        // Start timeren
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            stopWatchEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }, 500); //Sekunderne i millisekunder
    } else {
        isRunning = false;
        startButtonEl.textContent = 'Start'; // Ændrer teksten på knappen til "Start"
        // Stop timeren
        clearInterval(timer);
    }
})

stopButtonEl.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        startButtonEl.textContent = 'Start'; // Ændrer teksten på knappen til "Start"
        // Stop timeren
        clearInterval(timer);
    }
})

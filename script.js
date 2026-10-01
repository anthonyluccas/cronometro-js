const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let cronometer
let number = 0;


function startTimer() {

    cronometer = setInterval(() => {
        number++;

        const h = Math.floor(number / 3600);
        const m = Math.floor((number % 3600) / 60);
        const s = number % 60;

        hours.innerHTML = h.toString().padStart(2, '0');
        minutes.innerHTML = m.toString().padStart(2, '0');
        seconds.innerHTML = s.toString().padStart(2, '0');
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startButton.innerHTML = 'Retomar';
}

function stopTimer() {
    clearInterval(cronometer);
    startButton.disabled = false;
    resetButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    number = 0;
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';

    startButton.disabled = false;
    resetButton.disabled = true;
    startButton.innerHTML = 'Iniciar';
}
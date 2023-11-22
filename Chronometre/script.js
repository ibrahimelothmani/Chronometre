const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const millisecondEl = document.getElementById("millisecond");
const lapList = document.getElementById('laplist');
const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById("resetBtn");


let minute = 0;
let second = 0;
let millisecond = 0;
let interval

function start(){
    interval =  setInterval(updateTimer,10);
    startButton.disabled = true;
}

function pause(){
    clearInterval(interval);
    startButton.disabled = false;
}

function stop(){

    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;
}
function reset(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;

}

function updateTimer(){
    millisecond++;
    if(millisecond === 100){  //// 1000  -> 1 seconds = 1000 millseconds
        millisecond = 0;
        second++;
        if(second === 60){
            second = 0;
            minute++;
        }
    }

    displayTimer();
}

function displayTimer(){
    millisecondEl.textContent = padTime(millisecond);
    secondEl.textContent = padTime(second);
    minuteEl.textContent = padTime(minute);    
}

function padTime(time){
    return time.toString().padStart(2,'0');
}

function resetTimerData(){
    minute = 0;
    second = 0;
    millisecond = 0;
    displayTimer();
}

function addToLapList(){
    const lapTime = `${padTime(minute)}:${padTime(second)}:${padTime(millisecond)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
}

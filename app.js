var hr = 00;
var min = 00;
var sec = 00;
var msec = 00;
var hrHeading = document.getElementById("hrs");
var minHeading = document.getElementById("mins");
var secHeading = document.getElementById("secs");
var msecHeading = document.getElementById("msecs");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 00
    } else if (sec >= 60) {
        min++
        minHeading.innerHTML = min;
        sec = 00
    } else if (min >= 60) {
        hr++
        hrHeading.innerHTML = hr;
        min = 00
    }
}

function start() {
    interval = setInterval(timer, 10)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    hr = "00"
    min = "00"
    sec = "00"
    msec = "00"
    hrHeading.innerHTML = hr
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
}

function disable() {
    document.getElementById("disable").disabled = true;
}

function enable() {
    document.getElementById("disable").disabled = false;
}
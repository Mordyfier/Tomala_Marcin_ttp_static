function getTime () {
    let current = new Date();
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    if (hours > 12) {
        hours = hours - 12; 
    }
    currentTime = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    return currentTime;
}

function updateTime() {
    time = getTime()
    document.getElementById("time").innerHTML = "The current time is: " + time;
    setTimeout(updateTime, 1000);
}

function addZero (number) {
    return number < 10 ? "0"+number : number;
}
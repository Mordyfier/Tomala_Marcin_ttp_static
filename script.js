function getTime() {
    // Obtains the current time and composes a time string out of it
    let current = new Date();
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    //To implement AM/PM, we can add the following variable that would also need to be concatenated at the end of currentTime.
    //let deMeridiem = "AM"
    // getHours returns 24-clock hour values. To convert to 12-hour clock, we subtract 12. Any value above 12 also indicates a PM hour.
    if (hours > 12) {
        hours -= 12;
        //deMeridiem = "PM"
    }
    // Since Date() returns hours from 0-23, to represent midnight as '12AM' we add 12.
    if (hours === 0) { hours = 12; }
    currentTime = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    return currentTime;
}

function updateTime() {
    // A function that updates the time on the page, set to refresh every 1000ms.
    time = getTime()
    document.getElementById("time").innerHTML = "The current time is: " + time;
    setTimeout(updateTime, 1000);
}

function addZero(number) {
    // An auxiliary function to add a non-significant zero in front of single digit values (to display e.g. 12:01 instead of 12:1)
    return number < 10 ? "0"+number : number;
}
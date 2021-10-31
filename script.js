function getTime () {
    let current = new Date();
    let hours = current.getHours() >= "10" ? current.getHours() : "0"+current.getHours();
    let minutes = current.getMinutes() >= "10" ? current.getMinutes() : "0"+current.getMinutes();
    let seconds = current.getSeconds() >= "10" ? current.getSeconds() : "0"+current.getSeconds();
    return hours + ":" + minutes + ":" + seconds
}

function updateTime() {
    time = getTime()
    console.log(getTime())
    document.getElementById("time").innerHTML = "The current time is: " + time;
    setTimeout(updateTime, 1000);
}
updateTime();

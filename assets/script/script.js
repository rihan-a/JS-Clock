let secondHand = document.querySelector(".second-hand");
let minsHand = document.querySelector(".min-hand");
let hoursHand = document.querySelector(".hour-hand");
let digitalTime = document.querySelector(".digital-time");
let ticksContainer = document.querySelector(".ticks-container");
let clockTicks = document.querySelector(".clock-ticks");
let datePlaceholder = document.querySelector(".date-place");

// function to get the real time and convert it to degrees for rotation
function setTime() {
    let now = new Date();
    let seconds = now.getSeconds();
    let mins = now.getMinutes();
    let hours = now.getHours();

    let secondsDegrees = (seconds / 60.0) * 360 + 90;
    let minsDegrees = (mins / 60.0) * 360 + 90;
    let hoursDegrees = (hours / 12.0) * 360 + 90;

    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // digital time
    if (seconds < 10) {
        digitalTime.innerHTML = `${hours}:${mins}:0${seconds}`;
    } else if (mins < 10) {
        digitalTime.innerHTML = `${hours}:0${mins}:${seconds}`;
    } else if (hours < 10) {
        digitalTime.innerHTML = `0${hours}:${mins}:${seconds}`;
    } else {
        digitalTime.innerHTML = ` ${hours}:${mins}:${seconds}`;
    }

    console.log(hours);
}

setInterval(setTime, 1000);

// create the clock ticks
function clockTicksRotate() {
    for (let i = 0; i < 4; i++) {
        ticksContainer.innerHTML += `<div class="clock-ticks " style= "transform: rotate(${
      i * 90
    }deg);"></div>`;
    }
}

clockTicksRotate();

// create a random background color
function setBg() {
    let randomColor = Math.floor((Math.random() + 0.1) * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

setBg();

function getDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) {
        datePlaceholder.innerHTML = `0${day}/${month}/${year}`;
    } else if (month < 10) {
        datePlaceholder.innerHTML = `${day}/0${month}/${year}`;
    } else {
        datePlaceholder.innerHTML = `${day}/${month}/${year}`;
    }
}

getDate();
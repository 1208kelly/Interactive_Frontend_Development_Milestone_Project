//------------ Variables ------------//

let start = true;

let lightUpOrder = [];

let lightFlash = [];

let roundCounter = document.querySelector("#round-counter");

let redButton = document.querySelector("#red-button");

let blueButton = document.querySelector("#blue-button");

let yellowButton = document.querySelector("#yellow-button");

let greenButton = document.querySelector("#green-button");

let startButton = document.querySelector("#start-button");

//------------ Start Button ------------//

document.getElementById("start-button").addEventListener("click", pressStart);

let powerOn = false;

function pressStart() {
    if (powerOn) {
        powerOn = false;
    } else {
        powerOn = true;
    };
    if (powerOn) {
    roundCounter.innerHTML = "-";
    redButton.style.backgroundColor = "red";
    blueButton.style.backgroundColor = "blue";
    yellowButton.style.backgroundColor = "yellow";
    greenButton.style.backgroundColor = "green";
    playGame();
    } else {
        lightsOff()
    }
};

function playGame() {
    win = false;
    
};

function lightsOff() {
    redButton.style.backgroundColor = "darkred";
    blueButton.style.backgroundColor = "darkblue";
    yellowButton.style.backgroundColor = "goldenrod";
    greenButton.style.backgroundColor = "darkgreen";
};

//------------ Red Button ------------//

document.getElementById("red-button").addEventListener("click", pressRed);

function pressRed() {
    lightUpOrder.push(1);
};

//------------ Blue Button ------------//
  
blueButton.addEventListener('click', (event) => {
    if (on) {
        lightUpOrder.push(2);
        check();
        two();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

//------------ Yellow Button ------------//
  
yellowButton.addEventListener('click', (event) => {
    if (on) {
        lightUpOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

//------------ Green Button ------------//
  
greenButton.addEventListener('click', (event) => {
    if (on) {
        lightUpOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
  
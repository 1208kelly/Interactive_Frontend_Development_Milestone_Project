let start = true;

let lightUpOrder = [];

let lightFlash = [];

let roundCounter = document.querySelector("#round-counter");

let redButton = document.querySelector("#red-button");

let blueButton = document.querySelector("#blue-button");

let yellowButton = document.querySelector("#yellow-button");

let greenButton = document.querySelector("#green-button");

let startButton = document.querySelector("#start-button");

document.getElementById("start-button").addEventListener("click", pressStart);

function pressStart() {
    document.getElementById("round-counter").innerHTML = "-";
    redButton.style.backgroundColor = "red";
        blueButton.style.backgroundColor = "blue";
        yellowButton.style.backgroundColor = "yellow";
        greenButton.style.backgroundColor = "green";
        playGame();
}

                                            

function playGame() {
    win = false;
    lightUpOrder = [];
    lightFlash = 0;
    turn = 1;
    roundCounter.innerHTML = 1;
    for (var i = 0; i < 20; i++) {
        lightUpOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
    console.log(lightUpOrder);
};

function lightsOff() {
    redButton.style.backgroundColor = "darkred";
    blueButton.style.backgroundColor = "darkblue";
    yellowButton.style.backgroundColor = "goldenrod";
    greenButton.style.backgroundColor = "darkgreen";
};

redButton.addEventListener('click', (event) => {
    if (on) {
        lightUpOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
  
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
  
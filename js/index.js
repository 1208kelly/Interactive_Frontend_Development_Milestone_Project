let start = false;

let lightUpOrder = [];

let lightFlash = [];

let roundCounter = document.querySelector("#round-counter");

let redButton = document.querySelector("#red-button");

let blueButton = document.querySelector("#blue-button");

let yellowButton = document.querySelector("#yellow-button");

let greenButton = document.querySelector("#green-button");

let startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function(event) {
    if (startButton.clicked === true) {
        on = true;
        roundCounter.innerHTML = "-";
        playGame();
    } else {
        on = false;
        roundCounter.innerHTML = "";
        lightsOff();
    }
});

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
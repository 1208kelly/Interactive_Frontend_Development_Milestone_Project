//------------ Variables ------------//

let lightUpOrder = [];

let playerLightUpOrder =[];

let lightFlash;

let playerTurn;

let good;

let gameTurn;

let intervalId;

let start = true;

let winGame;

let redButton = document.getElementById("red-button");

let blueButton = document.getElementById("blue-button");

let yellowButton = document.getElementById("yellow-button");

let greenButton = document.getElementById("green-button");

let startButton = document.getElementById("start-button");

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
    roundCounter.innerHTML = "1";
    startButton.style.borderColor = "white";
    startButton.style.backgroundColor = "#707070";
    playGame();
    } else {
        roundCounter.innerHTML = "";
        startButton.style.borderColor = "";
        startButton.style.backgroundColor = "";
        lightsOff()
    }
};

function lightsOff() {
    redButton.style.backgroundColor = "darkred";
    blueButton.style.backgroundColor = "darkblue";
    yellowButton.style.backgroundColor = "goldenrod";
    greenButton.style.backgroundColor = "darkgreen";
};

//------------ Counter ------------//

let roundCounter = document.querySelector("#round-counter");

function playGame() {
    winGame = false;
    lightUpOrder = [];
    playerOrder = [];
    lightFlash = 0;
    intervalId = 0;
    playerTurn = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
         lightUpOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    gameTurn = true;

    intervalId = setInterval(gameRound, 1000);
};

function gameRound() {
    on = false;

    if (lightFlash == playerTurn) {
        clearInterval(intervalId);
        gameTurn = false;
        LightsOff();
        on = true;
    }

    if (gameTurn) {
        setTimeout(() => {
            if (lightUpOrder[lightFlash] == 1) red();
            if (lightUpOrder[lightFlash] == 2) blue();
            if (lightUpOrder[lightFlash] == 3) yellow();
            if (lightUpOrder[lightFlash] == 4) green();
            lightFlash++;
          }, 500);
        LightsOff();
    }
};

//------------ Game Operation ------------//
  
function matchOrder() {
    if (playerlightUpOrder[playerLightUpOrder.length - 1] !== lightUpOrder[playerLightUpOrder.length - 1])
        good = false;
  
    if (playerLightUpOrder.length == 20 && good) {
        gameWinner();
    }
  
    if (good == false) {
        roundCounter.innerHTML = "-";
        redButton.style.backgroundColor = "red";
        blueButton.style.backgroundColor = "blue";
        yellowButton.style.backgroundColor = "yellow";
        greenButton.style.backgroundColor = "green";
        gameTurn = true;
        lightFlash = 0;
        playerLightUpOrder = [];
        good = true;
        intervalId = setInterval(500);
        setTimeout(() => {
            lightsOut();
        }, 1000);
    }
  
    if (playerTurn == playerLightUpOrder.length && good && !winGame) {
        playerTurn++;
        playerLightUpOrder = [];
        gameTurn = true;
        intervalId = setInterval(1000);
    }
};

function gameWinner() {
    roundCounter.innerHTML = "WIN";
    redButton.style.backgroundColor = "red";
    blueButton.style.backgroundColor = "blue";
    yellowButton.style.backgroundColor = "yellow";
    greenButton.style.backgroundColor = "green";
    on = false;
    winGame = true;
};

//------------ Red Button ------------//

function red() {
    start = true;
    redButton.style.backgroundColor = "red";
}

document.getElementById("red-button").addEventListener("click", pressRed => {
    if (powerOn) {
        playerLightUpOrder.push(1);
        red();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOut();
            }, 200);
        }
    }
});

//------------ Blue Button ------------//

function blue() {
    start = true;
    blueButton.style.backgroundColor = "blue";
}
  
document.getElementById("blue-button").addEventListener("click", pressBlue => {
    if (powerOn) {
        playerLightUpOrder.push(2);
        blue();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOut();
            }, 200);
        }
    }
});

//------------ Yellow Button ------------//

function yellow() {
    start = true;
    yellowButton.style.backgroundColor = "yellow";
}
  
document.getElementById("yellow-button").addEventListener("click", pressYellow => {
    if (powerOn) {
        playerLightUpOrder.push(3);
        yellow();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOut();
            }, 200);
        }
    }
});

//------------ Green Button ------------//
function green() {
    start = true;
    greenButton.style.backgroundColor = "green";
}
  
document.getElementById("green-button").addEventListener("click", pressGreen => {
    if (powerOn) {
        playerLightUpOrder.push(4);
        green();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOut();
            }, 200);
        }
    }
});
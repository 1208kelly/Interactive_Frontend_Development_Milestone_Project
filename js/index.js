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
    turn = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
         lightUpOrder.push(Math.floor(Math.random() * 4) + 1);
     }
    gameTurn = true;

    intervalId = setInterval(gameRound, 1000);
};

function gameRound() {
    on = false;

    if (lightFlash == turn) {
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

//------------ Red Button ------------//

function red() {
    start = true;
    redButton.style.backgroundColor = "red";
}

document.getElementById("red-button").addEventListener("click", pressRed => {
    if (powerOn) {
        playerLightUpOrder.push(1);
        red();
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
        if(!winGame) {
            setTimeout(() => {
                lightsOut();
            }, 200);
        }
    }
});
  
//------------ Variables ------------//


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



//------------ Start Button ------------//

let startButton = document.getElementById("start-button");

document.getElementById("start-button").addEventListener("click", pressStart);

let powerOn = true;

function pressStart() {
    if (powerOn) {
        powerOn = true;
        startButton.style.borderColor = "white";
        startButton.style.backgroundColor = "#707070";
        let audio = document.getElementById("sound1");
        audio.play();
        let sound = true;
        playGame();
    } else {
        powerOn = false;
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

debugger;

//------------ Counter ------------//

let roundCounter = document.querySelector("#round-counter");

let lightUpOrder = [];

function playGame() {
    winGame = false;
    lightUpOrder = [];
    playerOrder = [];
    lightFlash = 0;
    roundCounter.innerHTML = 1;
    roundCounter++;
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
        lightsOff();
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
        lightsOff();
    }
};

//------------ Game Operation ------------//
  
function matchOrder() {
    if (playerLightUpOrder[playerLightUpOrder.length - 1] !== lightUpOrder[playerLightUpOrder.length - 1])
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
        intervalId = setInterval(gameRound, 500);
        setTimeout(() => {
            lightsOff();
        }, 1000);
    }
  
    if (playerTurn == playerLightUpOrder.length && good && !winGame) {
        playerTurn++;
        playerLightUpOrder = [];
        gameTurn = true;
        intervalId = setInterval(gameRound, 1000);
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
    let audio = document.getElementById("sound2");
    audio.play();
    sound = true;
    redButton.style.backgroundColor = "red";
}

document.getElementById("red-button").addEventListener("click", pressRed => {
    if (powerOn) {
        playerLightUpOrder.push(1);
        red();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOff();
            }, 1000);
        }
    }
});

//------------ Blue Button ------------//

function blue() {
    let audio = document.getElementById("sound3");
    audio.play();
    sound = true;
    blueButton.style.backgroundColor = "blue";
}
  
document.getElementById("blue-button").addEventListener("click", pressBlue => {
    if (powerOn) {
        playerLightUpOrder.push(2);
        blue();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOff();
            }, 1000);
        }
    }
});

//------------ Yellow Button ------------//

function yellow() {
    let audio = document.getElementById("sound4");
    audio.play();
    sound = true;
    yellowButton.style.backgroundColor = "yellow";
}
  
document.getElementById("yellow-button").addEventListener("click", pressYellow => {
    if (powerOn) {
        playerLightUpOrder.push(3);
        yellow();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOff();
            },1000);
        }
    }
});

//------------ Green Button ------------//
function green() {
    let audio = document.getElementById("sound5");
    audio.play();
    sound = true;
    greenButton.style.backgroundColor = "green";
}
  
document.getElementById("green-button").addEventListener("click", pressGreen => {
    if (powerOn) {
        playerLightUpOrder.push(4);
        green();
        matchOrder();
        if(!winGame) {
            setTimeout(() => {
                lightsOff();
            }, 1000);
        }
    }
});
// ------------ Variables ------------ //

let powerOn;

let playerLightUpOrder = [];

let lightFlash;

let playerTurn;

let good;

let gameTurn;

let intervalId;

let start = true;

let sound = true;

let winGame;


// ------------ Start Button ------------ //

let startButton = document.getElementById("start-button");

document.getElementById("start-button").addEventListener("click", pressStart);

function pressStart() {
    if (powerOn = true) {
        startButton.style.borderColor = "white";
        startButton.style.backgroundColor = "#707070";
        let audio = document.getElementById("sound1");
        audio.play();
        sound = true;
        audio.volume = 0.1;
        playGame();
    } else {
        powerOn = false;
        roundCounter.innerHTML = " ";
        startButton.style.borderColor = " ";
        startButton.style.backgroundColor = " ";
        clearInterval(intervalId);
        lightsOff();
    }
};

function lightsOff() {
    redButton.style.backgroundColor = "darkred";
    blueButton.style.backgroundColor = "darkblue";
    yellowButton.style.backgroundColor = "goldenrod";
    greenButton.style.backgroundColor = "darkgreen";
};

// ------------ Counter ------------ //

let roundCounter = document.querySelector("#round-counter");

let lightUpOrder = [];

// ------- NOTE: I had to look up FAQ's and tutorials and get help from my Tutor support and my Mentor to get this random order to light up correctly ------- //
// ------- link to FAQ https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array ------- //
// ------- link to lesson: https://www.w3schools.com/jsref/jsref_random.asp ------- //

function playGame() {
    winGame = false;
    lightUpOrder = [];
    playerOrder = [];
    roundCounter.innerHTML = "1";
    intervalId = 0;
    playerTurn = 1;
    lightFlash = 0;
    good = true;
    gameTurn = true;
    intervalId = setInterval(gameRound, 1000);
    for (var i = 0; i < 20; i++) {
         lightUpOrder.push(Math.floor(Math.random() * 4) + 1);
    }
};

function gameRound() {
    powerOn = false;
    if (lightFlash == playerTurn) {
        clearInterval(intervalId);
        gameTurn = false;
        lightsOff();
        powerOn = true;
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

// ------------ Game Operation ------------ //

// ------- Tutorial link: https://www.youtube.com/watch?v=n_ec3eowFLQ from 52:15  to help get the round count number to count up correctly ------- //
  
function matchOrder() {
    if (playerLightUpOrder[playerLightUpOrder.length - 1] !== lightUpOrder[playerLightUpOrder.length - 1])
        good = false;
  
// ------- I changed this to length to 4 simply for testing purposes, I understand that this could be set to ay number like 20, as would the standard game be set to ------- //

    if (playerLightUpOrder.length == 4 && good) {
        gameWinner();
    }
  
    if (good == false) {
        roundCounter.innerHTML = "**";
        redButton.style.backgroundColor = "red";
        blueButton.style.backgroundColor = "blue";
        yellowButton.style.backgroundColor = "yellow";
        greenButton.style.backgroundColor = "green";
        setTimeout(() => {
            roundCounter.innerHTML = playerTurn;
            lightsOff();
        }, 1000);
    }
  
    if (playerTurn == playerLightUpOrder.length && good && !winGame) {
        playerTurn++;
        playerLightUpOrder = [];
        gameTurn = true;
        roundCounter.innerHTML = playerTurn;
        intervalId = setInterval(gameRound, 1000);
    }
};

function gameWinner() {
    roundCounter.innerHTML = "WIN";
    redButton.style.backgroundColor = "red";
    blueButton.style.backgroundColor = "blue";
    yellowButton.style.backgroundColor = "yellow";
    greenButton.style.backgroundColor = "green";
    powerOn = false;
    winGame = true;
};

// ------------ Red Button ------------ //

let redButton = document.getElementById("red-button");

function red() {
    let audio = document.getElementById("sound2");
    audio.play();
    sound = true;
    audio.volume = 0.1;
    redButton.style.backgroundColor = "red";
};

document.getElementById("red-button").addEventListener("click", pressRed);

function pressRed() {
    playerLightUpOrder.push(1);
    red();
    matchOrder();
    if(!winGame) {
        setTimeout(() => {
            lightsOff();
        }, 500);
    }
};

// ------------ Blue Button ------------ //

let blueButton = document.getElementById("blue-button");

function blue() {
    let audio = document.getElementById("sound3");
    audio.play();
    sound = true;
    audio.volume = 0.1;
    blueButton.style.backgroundColor = "blue";
};
  
document.getElementById("blue-button").addEventListener("click", pressBlue);

function pressBlue() {
    playerLightUpOrder.push(2);
    blue();
    matchOrder();
    if(!winGame) {
        setTimeout(() => {
            lightsOff();
        }, 500);
    }
};

// ------------ Yellow Button ------------ //

let yellowButton = document.getElementById("yellow-button");

function yellow() {
    let audio = document.getElementById("sound4");
    audio.play();
    sound = true;
    audio.volume = 0.1;
    yellowButton.style.backgroundColor = "yellow";
};
  
document.getElementById("yellow-button").addEventListener("click", pressYellow);

function pressYellow() {
    playerLightUpOrder.push(3);
    yellow();
    matchOrder();
    if(!winGame) {
        setTimeout(() => {
            lightsOff();
        }, 500);
    }
};

// ------------ Green Button ------------ //

let greenButton = document.getElementById("green-button");

function green() {
    let audio = document.getElementById("sound5");
    audio.play();
    sound = true;
    audio.volume = 0.1;
    greenButton.style.backgroundColor = "green";
};
  
document.getElementById("green-button").addEventListener("click", pressGreen);

function pressGreen() {
    playerLightUpOrder.push(4);
    green();
    matchOrder();
    if(!winGame) {
        setTimeout(() => {
            lightsOff();
        }, 500);
    }
};

var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
}

function easyMode() {
    maxGuesses = 10;
    document.getElementById("easyBtn").className = "activeButton";
    document.getElementById("hardBtn").className = "";
}

function hardMode() {
    maxGuesses = 5;
    document.getElementById("hardBtn").className = "activeButton"
    document.getElementById("easyBtn").className = "";
}

function correct() {
    document.getElementById("textOutput").innerHTML = "Correct!" + "<br> You got it in " + attempts + " attempts";
    document.getElementById("container").style.backgroundColor = "green";
    gameEnded();
}

function youLose() {
    document.getElementById("textOutput").innerHTML = "You lose!" + "<br> The number was " + computerGuess;
    document.getElementById("container").style.backgroundColor = "red";
    gameEnded();
}

function compareGuess() {
    var userGuess = " " + document.getElementById("inputBox").value;
    // console.log(userGuess);

    userGuessLog.push(userGuess);
    // console.log(userGuessLog);
    document.getElementById("guessLog").innerHTML = userGuessLog;

    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    if (userGuessLog.length < maxGuesses) {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "Your guess is too high";
            document.getElementById("inputBox").value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "Your guess is too low";
            document.getElementById("inputBox").value = "";
        } else {
            correct();
        //     document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts + " attempts";
        //     document.getElementById("container").style.backgroundColor = "green";
        //     gameEnded();
        }
    } else {   
        if (userGuess > computerGuess) {
            youLose();
            // document.getElementById("textOutput").innerHTML = "You lose!" + "<br> The number was " + computerGuess;
            // document.getElementById("container").style.backgroundColor = "red";
            // gameEnded();
        } else if (userGuess < computerGuess) {
            youLose();
        } else {
            correct();
        }
    }
}

function newGame() {
    window.location.reload();
}

function gameEnded() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("easyBtn").style.display = "none";
    document.getElementById("hardBtn").style.display = "none";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");
}
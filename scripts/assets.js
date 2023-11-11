console.log("This is a test");

let secondsLeft = 76;

let timer = document.getElementById("timer");

let scoresUser = document.getElementById("scores-User");

let buttons = document.getElementById("buttons");

let buttonsDiv = document.getElementById("view-scores");

let startButton = document.getElementById("start-button");
startButton.addEventListener("click",setTime);

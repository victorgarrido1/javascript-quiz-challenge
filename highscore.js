var highscoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

var scores = JSON.parse(localStorage.getItem("scores")) || [];
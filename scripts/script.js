var questions = document.querySelector("#myQuestion");
var startButton = document.querySelector("#start-button");
var startPrompt = document.querySelector("#start-screen");
var QuestionCont = document.querySelector("#question-container");
var TimerT = document.querySelector("#time");
var QuestionIndex = 0;
let numCorrect = 0;

var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");





var timerID; 
let time = 75;

function PopulateQuestion () {
    var QuestionTitle = myQuestions[QuestionIndex]
    var output = [];

    myQuestions.forEach(questions => output.push(questions));
    innerHTML 


function buildQuiz() {
    const output = [];

    output.push({ question:"What does HTML mean?" })
    return output
}



    // Reference the correct place in your html and set the text Content with the QuestionTitle.

    // Create variables for the answer choices that will store button elements with the content equal to for example myQuestions[QuestionIndex].answers.a

    // Refernce the answer choices container and append these button choices to that section

    // Add an event listener that listens for what choice the user selects.

    // Create two functions, one for handling the right answer choice, and the other for handling the wrong answer choice.

    // Implement high scores page logic.

}


// start the quiz?

function StartQuiz() {
    quizoverDiv.style.display = 'none';
    if (currentQuestionindex === finalQuestionIndex) {
        return showScore();
    }
}

startButton.addEventListener("click", function () {


startPrompt.classList.add("hidden");
QuestionCont.classList.remove("hidden")
timerID = setInterval(() => {
    time --;
    TimerT.textContent = time;
if (time <  1) {
    clearInterval(timerID);
    endGame() 

}
}, 1000);

    PopulateQuestion()

})
function endGame() {
    
};

startQuizButton.addEventListener("Click", startQuiz);




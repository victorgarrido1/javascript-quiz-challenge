var questions = document.querySelector("#myQuestion");
var startButton = document.querySelector("#start-button");
var startPrompt = document.querySelector("#start-screen");
var QuestionCont = document.querySelector("#question-container");
var TimerT = document.querySelector("#time");
var QuestionIndex = 0;
let numCorrect = 0;
var QuestionForUser = document.querySelector("#question");
var buttonA = document.getElementById("choiceA");
var buttonB = document.getElementById("choiceB");
var buttonC = document.getElementById("choiceC");
var buttonD = document.getElementById("choiceD");
var textA = document.getElementById("a_text");
var textB = document.getElementById("b_text");
var textC = document.getElementById("c_text");
var textD = document.getElementById("d_text");
var question = document.createElement("question");

const quizData = [];

var timerID;
let time = 75;

function PopulateQuestion() {
  QuestionForUser.textContent = myQuestions[QuestionIndex].question;
  QuestionTitle = myQuestions[QuestionIndex];
  buttonA.textContent = myQuestions[QuestionIndex].answers.a;
  buttonB.textContent = myQuestions[QuestionIndex].answers.b;
  buttonC.textContent = myQuestions[QuestionIndex].answers.c;
  buttonD.textContent = myQuestions[QuestionIndex].answers.d;

 var nextButton = document.querySelector("#next");

 nextButton.addEventListener("click", function () {
    alert('Go to the next Question');
 })
 
  //   var output = [];

  //   myQuestions.forEach((questions) => output.push(questions));
}

// Reference the correct place in your html and set the text Content with the QuestionTitle.

// Create variables for the answer choices that will store button elements with the content equal to for example myQuestions[QuestionIndex].answers.a

// Refernce the answer choices container and append these button choices to that section

// Add an event listener that listens for what choice the user selects.

// Create two functions, one for handling the right answer choice, and the other for handling the wrong answer choice.

// Implement high scores page logic.

// start the quiz?

function StartQuiz() {
  quizoverDiv.style.display = "none";
  if (currentQuestionindex === finalQuestionIndex) {
    return showScore();
  }
}

startButton.addEventListener("click", function () {
  startPrompt.classList.add("hidden");
  QuestionCont.classList.remove("hidden");
  timerID = setInterval(() => {
    time--;
    TimerT.textContent = time;
    if (time < 1) {
      clearInterval(timerID);
      endGame();
    }
  }, 1000);

  PopulateQuestion();
});
function endGame() {}

//Question Objects
var myQuestions = [
  {
    question: "What does HTML mean?",
    answers: {
      a: "Hello Talk Meat Length",
      b: "High Text Make Level",
      c: "Hyper Text Markup Language",
      d: "Hyper Tent Master Language",
    },
    correctAnswer: "c",
  },

  {
    question: "Explain what does hoisting mean?",
    answers: {
      a: "It means to bring the variables down to the bottom of the scope",
      b: "A mechanism where variables are moved to the top of the scope",
      c: "It means to bring the variables are moved to the middle of the scope",
      d: "The variables are moved everywhere all in the scope",
    },
    correctAnswer: "b",
  },

  {
    question: "How do you view your inspector inside the browser?",
    answers: {
      a: "By doing a right click on your mouse and and selecting the inspector option.",
      b: "By refreshing the web page and clicking the close button",
      c: "Resetting the computer and going onto the Terminal on your computer",
      d: "Going onto the Terminal on your computer and type Inspect",
    },
    correctAnswer: "a",
  },

  {
    question: "Name some font-related CSS attributes?",
    answers: {
      a: "Rubber duck, Large, Text Base, General",
      b: "Font style, variant, weight",
      c: "Big, Small, Tall, Little,",
      d: "Enhance, Decrease, Clear, Zoom",
    },
    correctAnswer: "b",
  },
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
});

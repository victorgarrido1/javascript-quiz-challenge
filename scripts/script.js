var questions = document.querySelector("#myQuestion");
var startButton = document.querySelector("#start-button");
var startPrompt = document.querySelector("#start-screen");
var QuestionCont = document.querySelector("#question-container");
var TimerT = document.querySelector("#time");
var QuestionIndex = 0;
let numCorrect = 0;
var QuestionForUser = document.querySelector("#question"); 
var buttonA = document.getElementById("a_text");
var buttonB = document.getElementById("b_text");
var buttonC = document.getElementById("c_text");
var buttonD = document.getElementById("d_text");






var timerID; 
let time = 75;

function PopulateQuestion () {

 

    var QuestionTitle = myQuestions[QuestionIndex]
    var output = [];

    myQuestions.forEach(questions => output.push(questions));
     

}



    // Reference the correct place in your html and set the text Content with the QuestionTitle.

    // Create variables for the answer choices that will store button elements with the content equal to for example myQuestions[QuestionIndex].answers.a

    // Refernce the answer choices container and append these button choices to that section

    // Add an event listener that listens for what choice the user selects.

    // Create two functions, one for handling the right answer choice, and the other for handling the wrong answer choice.

    // Implement high scores page logic.




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
    displayContainer.classList.remove("hide")
  });




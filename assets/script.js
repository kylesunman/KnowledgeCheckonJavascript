{
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parentheses", correct: true },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      { text: "numbers and strings", correct: true },
      { text: "other arrays", correct: true },
      { text: "booleans", correct: true },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parentheses", correct: false },
    ],
  },
  {
    question:
      "A very useful tool during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal / bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console log", correct: true },
    ],
  },
];
commit 5: "added some var's to setup for the javascript"
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;

var startButton = document.getElementById("start");
var questionDisplay = document.getElementById("question");
var answersDisplay = document.getElementById("answers");
var timeDisplay = document.getElementById("time");

commit 6: "wrote the code for startquiz in java script"
function startQuiz() {
  startButton.style.display = "none";
  timerInterval = setInterval(updateTimer, 1000);
  showQuestion();
}

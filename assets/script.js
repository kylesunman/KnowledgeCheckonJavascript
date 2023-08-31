var questions = [
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
  var currentQuestionIndex = 0;
  var timeLeft = 60;
  var timerInterval;
  
  var startButton = document.getElementById("start");
  var questionDisplay = document.getElementById("question");
  var answersDisplay = document.getElementById("answers");
  var timeDisplay = document.getElementById("time");
  
  function startQuiz() {
    startButton.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
  }
  function showQuestion() {
    var question = questions[currentQuestionIndex];
    questionDisplay.textContent = question.question;
    answersDisplay.innerHTML = "";
  
    question.answers.forEach(function (answer) {
      var answerButton = document.createElement("button");
      answerButton.textContent = answer.text;
      answerButton.addEventListener("click", function () {
        checkAnswer(answer.correct);
      });
      answersDisplay.appendChild(answerButton);
    });
  }
  var timeLeft = 60; 
var score = 0; 
function checkAnswer(correct) {
  if (correct) {
    score++; 
  } else {
    timeLeft -= 10; 
  }



  showQuestion(); 
}
function updateTimer() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}
function endGame() {
  clearInterval(timerInterval);


  if (timeLeft < 0) {
    timeLeft = 0;
  }

  questionDisplay.textContent = "Quiz Over!";
  answersDisplay.innerHTML = "Your final score is: " + score + " out of " + questions.length;

  var gameOverSection = document.getElementById("game-over");
  gameOverSection.style.display = "block";

  var saveScoreButton = document.getElementById("save-score");
  saveScoreButton.addEventListener("click", saveScore);
}
  function saveScore() {
    var initialsInput = document.getElementById("initials");
    var initials = initialsInput.value.trim();
  
    if (initials !== "") {
     
      var savedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
      savedScores.push({ initials: initials, score: timeLeft });
      localStorage.setItem("quizScores", JSON.stringify(savedScores));
  
      
      console.log("Saved: Initials - " + initials + ", Score - " + timeLeft);
  
      e
      alert("Score saved!");
  
     
      initialsInput.value = "";
      var gameOverSection = document.getElementById("game-over");
      gameOverSection.style.display = "none";
    } else {
      alert("Please enter initials before saving.");
    }
  }
  startButton.addEventListener("click", startQuiz);
  var correctAnswerSelected = false;

function checkAnswer(correct) {
  if (correct) {
    score++; 
    correctAnswerSelected = true;
  } else {
    timeLeft -= 10; 
  }

  clearInterval(timerInterval);
  updateTimer(); 

  setTimeout(function () {
    if (!correctAnswerSelected) {
      timeLeft -= 10; 
    }

    currentQuestionIndex++;
    correctAnswerSelected = false; 
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endGame();
    }

    timerInterval = setInterval(updateTimer, 1000); 
  }, 1000); 
}
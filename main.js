const questions = [
  {
    question: "What is the capital of bangladesh?",
    answer: [
      { text: "Dhaka", correct: true },
      { text: "Chittagong", correct: false },
      { text: "Rajshahi", correct: false },
      { text: "Sylhet", correct: false },
    ],
  },
  {
    question: "Who is All rounder In bangladesh cricket?",
    answer: [
      { text: "Tamim", correct: false },
      { text: "Shakib al hasan", correct: true },
      { text: "Mahmudullah", correct: false },
      { text: "Musfiq", correct: false },
    ],
  },
  {
    question: "Most largest tourist place where in bangladesh?",
    answer: [
      { text: "Dhaka", correct: false },
      { text: "Chittagong", correct: true },
      { text: "Rajshahi", correct: false },
      { text: "Sylhet", correct: false },
    ],
  },
  {
    question: "How many have tea state in fatikcahri?",
    answer: [
      { text: "17", correct: false },
      { text: "18", correct: false },
      { text: "16", correct: true },
      { text: "10", correct: false },
    ],
  },
];
const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".Answerbutton");
const nextButton = document.querySelector(".next_btn");
let carrentIndexQuestion = 0;
let score = 0;
function startQuiz() {
  carrentIndexQuestion = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetStatus();
  let currentQuest = questions[carrentIndexQuestion];
  let quesNo = carrentIndexQuestion + 1;
  questionElement.innerHTML = quesNo + "." + currentQuest.question;

  //
  currentQuest.answer.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetStatus() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  let selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function buttonHandler() {
  carrentIndexQuestion++;
  if (carrentIndexQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", function () {
  if (carrentIndexQuestion < questions.length) {
    buttonHandler();
  } else {
    startQuiz();
  }
});
function showScore() {
  resetStatus();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
startQuiz();

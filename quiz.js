const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");


const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];
  
  function calculateScore() {
    const formResults = new FormData(quizForm);
    let score = 0;
    let index = 0;

    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    outputBox.innerText = "The score is " + score;
  }
  
  submitBtn.addEventListener("click", calculateScore);
  
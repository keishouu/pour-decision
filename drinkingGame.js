const drinkingQuestions = [
  "Take a drink if you've ever ghosted someone.",
  "Drink if you've drunk texted an ex.",
  "Take a sip if you've lied today.",
  "Call someone randomly or drink.",
  "Let someone send a message from your phone or drink.",
  "Speak in an accent until your next turn or drink.",
  "Say a tongue twister correctly or drink.",
  "Share an embarrassing story or drink.",
  "Post a silly selfie or drink.",
  ""
];

// Shuffle questions initially
let questions = [...drinkingQuestions].sort(() => Math.random() - 0.5);
let usedQuestions = [];

const cardContent = document.getElementById("cardContent");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");

const btnDone = document.getElementById("success");
const btnDrink = document.getElementById("punishment");

function showNextQuestion() {
  if (questions.length === 0) {
    questions = [...usedQuestions].sort(() => Math.random() - 0.5);
    usedQuestions = [];
  }

  const next = questions.pop();
  usedQuestions.push(next);

  cardContent.classList.add("flip");


  setTimeout(() => {
    cardFront.textContent = next;
    cardContent.classList.remove("flip");
  }, 600);
}

// Attach same handler to both buttons
btnDone.addEventListener("click", showNextQuestion);
btnDrink.addEventListener("click", showNextQuestion);

showNextQuestion();

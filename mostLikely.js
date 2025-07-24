const drinkingQuestions = [
    "Most likely to get arrested?",
    "Most likely to marry for money?",
    "Most likely to ghost someone?",
    "Most likely to cry during a movie?",
    "Most likely to get back with their ex?",
    "Most likely to survive a zombie apocalypse?",
    "Most likely to spill a secret?",
    "Most likely to go on a reality TV show?",
    "Most likely to drunk text their ex?",
    "Most likely to become famous?",
    "Most likely to eat something off the floor?",
    "Most likely to sleep through an alarm?",
    "Most likely to party the hardest?",
    "Most likely to forget your birthday?",
    "Most likely to date two people at once?",
    "Most likely to cancel plans last minute?",
    "Most likely to own a secret burner account?",
    "Most likely to laugh in a serious moment?",
    "Most likely to be the first one drunk?",
    "Most likely to go missing at a party?",
    "Most likely to fall in love too quickly?",
    "Most likely to start drama?",
    "Most likely to win an Oscar?",
    "Most likely to get kicked out of a bar?",
    "Most likely to prank someone?",
    "Most likely to be late",
    "Most likely to marry a celebrity",
    "Most likely to accidentally poison someone with their terrible cooking",
    "Most likely to join a cult",
    "Most likely to become president",
    "Most likely to fall asleep during sex",
    "Most likely to forgot to pick up their kids at school",
    "Most likely to have a one night stand",
    "Most likely to film a sex tape",
    "Most likely to have sex outside",
    
];

let questions = [...drinkingQuestions].sort(() => Math.random() - 0.5);
let usedQuestions = [];

const cardContent = document.getElementById("cardContent");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");

const btnDone = document.getElementById("success");

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

showNextQuestion();

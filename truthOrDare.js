
  const truthQuestions = [
    "What's your biggest fear?",
    "Have you ever lied to a friend?",
    "What's your most embarrassing moment?",
    "Who was your first crush?",
    "What's a secret no one knows?",
    "Who is your TOTGA?",
    "What's the most childish thing you still do?",
    "What's your biggest insecurity?",
    "What's the weirdest dream you've ever had?",
    "If you could date anyone here, who would it be?",
    "What's something you regret doing?",
    "What's the last thing you searched on your phone?",
    "Who do you stalk the most on social media?",
    "Have you ever been rejected? What happened?",
    "What’s your guilty pleasure?",
    "Have you ever ghosted someone?"
  ];

  const dareQuestions = [
    "Do a funny dance for 10 seconds.",
    "Sing a song loudly.",
    "Imitate someone in the room.",
    "Say a cheesy pickup line.",
    "Act like a dog for 30 seconds.",
    "Kiss the person on your left",
    "Do a backflip",
    "Do 20 jumping jacks right now.",
    "Text your crush and say 'I like you 😳'.",
    "Let someone give you a new hairstyle.",
    "Do your best celebrity impression.",
    "Talk in an accent for the next 3 rounds.",
    "Try to lick your elbow.",
    "Say the alphabet backwards.",
    "Post an embarrassing photo on your story (you can delete later).",
    "Do a TikTok dance right now.",
    "Let someone else write your next text message.",
    "Eat a spoonful of mustard or hot sauce.",
    "Do a dramatic reading of the last message you sent.",
    "Draw something on your face with a marker.",
    "Attempt to stand on your hands (or do your best try).",
    "Let the group pick a dare for you."
  ];

  let truths = [...truthQuestions];
  let dares = [...dareQuestions];
  let usedTruths = [];
  let usedDares = [];

  const btnTruth = document.getElementById("success");
  const btnDare = document.getElementById("punishment");

  const cardContent = document.getElementById("cardContent");
  const cardFront = document.getElementById("cardFront");
  const cardBack = document.getElementById("cardBack");

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  truths = shuffle(truths);
  dares = shuffle(dares);

  function showQuestion(type) {
    let question;

    if (type === "truth") {
      if (truths.length === 0) {
        truths = shuffle(usedTruths);
        usedTruths = [];
      }
      question = truths.pop();
      usedTruths.push(question);
    } else {
      if (dares.length === 0) {
        dares = shuffle(usedDares);
        usedDares = [];
      }
      question = dares.pop();
      usedDares.push(question);
    }

    // Flip the card
    cardContent.classList.add("flip");

    // After animation, swap front/back content and unflip
    setTimeout(() => {
      cardFront.textContent = question;
      cardContent.classList.remove("flip");
    }, 600);
  }

  btnTruth.addEventListener("click", () => showQuestion("truth"));
  btnDare.addEventListener("click", () => showQuestion("dare"));

  // Show one truth on load
  showQuestion("truth");

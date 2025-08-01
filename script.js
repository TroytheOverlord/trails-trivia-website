
let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {

    question: "What is the name of the recurring NPC who is known for failing at romance",
    choices: ["A. Nielson", "B. Ricky", "C. Campanella", "D. Anton"],
    answer: 3
  },

  {
      question: "What year does Trails from Zero take place",
      choices: ["A. 1202", "B. 1207", "C. 1204", "D. 1210"],
      answer: 2
  }, 

  {
      question: "How does the SSS survive their initial encounter with Joachim",
      choices: ["A. Estelle, Joshua and Renne help them", "B. Kevin freezes Joachim", "C. Arios saves the day", "D. They don't"],
      answer: 3
  },

  {
      question: "Where does Laura place on the midterm rankings in Cold Steel 1",
      choices: ["A. 7th", "B. 17th", "C. 20th", "D. 36th"],
      answer: 1
  },

  {
      question: "Which game does Gideon of the Imperial Liberation Front make his first appearance",
      choices: ["A. Trails to Azure", "B. Cold Steel 1", "C. Cold Steel 2", "D. Trails from Zero"],
      answer: 0
  },

  {
      question: "Who's alias is the Black Whirlwind",
      choices: ["A. Aurelia Le Guin", "B. Wallace Bardias", "C. Gaius Worzel", "D. Garcia Rossi"],
      answer: 1
  },

  {
      question: "Which of these is not a craft used by Kevin",
      choices: ["A. Mortal Punishment", "B. Crossgear Rage", "C. Sacred Breath", "D. Infinity Sparrows"],
      answer: 3
  },

  {
      question: "How many playable characters are in Trail into Reverie",
      choices: ["A. 47", "B. 51", "C. 53", "D. 49"],
      answer: 1
  },

  {
      question: "Who is the youngest of these character upon their initial introduction",
      choices: ["A. Tio Plato", "B. Tita Russell", "C. Renne Hayworth", "D. Ferida Al-Fayed"],
      answer: 2
  },

  {
      question: "What's the name of the ost that plays during the final boss of Trails in the Sky SC",
      choices: ["A. Get Over the Barrier", "B. Fateful Confrontation", "C. Merciless Savior", "D. Whereabouts of Hope"],
      answer: 2
  }
];

const questionElement = document.getElementById("question");
const buttons = document.querySelectorAll(".answer-btn");


// Randomizes the question order
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

shuffle(questions);

// Display the questions to the screen
function showQuestion(){
  const current = questions[currentQuestionIndex];
  questionElement.textContent = current.question;

  buttons.forEach((btn, index) => {
    btn.textContent = current.choices[index];
    btn.onclick = () => checkAnswer(index);
  });
}

// Checks the user answers and increments the score if correct
function checkAnswer(selectedIndex){
  const current = questions[currentQuestionIndex];
  if(selectedIndex === current.answer){
    score++
  }

  currentQuestionIndex++;

  if(currentQuestionIndex < questions.length){
    showQuestion();
  }

  else{
    questionElement.textContent = `Game Over Your score: ${score}/${questions.length}`;
    buttons.forEach(btn => btn.style.display = "none");
  }  
}

function removeGreeting(){
    const greetText = document.querySelectorAll(".greeting");
    greetText.forEach(el => el.remove());
}



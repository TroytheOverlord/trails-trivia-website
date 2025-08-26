
// -------------------------------------------------------------- Questions -------------------------------------------------------- //

let questions = [];

// -------------------------------------------------------------- Variables -------------------------------------------------------- //
let currentQuestionIndex = 0;
let score = 0;
let highScore = 0;

const questionElement = document.getElementById("question");
const buttons = document.querySelectorAll(".answer-btn");
const retryButton = document.getElementById("retry");
const resetButton = document.getElementById("reset");
const tracker = document.getElementById("tracker");
const scoreEl = document.getElementById("score-display");
const hsEl = document.getElementById("high-score-display");

const modeContainer = document.getElementById("modeOptions");
const modeMap = {
  "start-btn": "./data/questions.json",
  "sky-btn": "./data/sky-questions.json",
  "crossbell-btn": "./data/crossbell-questions.json",
  "coldsteel-btn": "./data/coldsteel-questions.json",
}

let currentMode = null;
let isLocked = false;
let highlighted = 0;


// ----------------------------------------------------------- Main page Setup -------------------------------------------------------- //

retryButton.style.display = "none";
resetButton.style.display = "none";
tracker.textContent = "Select a game mode to start";

document.addEventListener("DOMContentLoaded", () => {
  
  modeContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".gameMode");
    if (!btn) return; 

    const path = modeMap[btn.id];
    currentMode = btn.id;
    if (!path) return;

    // disables buttons while loading
    setModeButtonsEnabled(false);

    loadQuestions(path)
      .then(() => {
        removeGreeting();     
        showQuestion();    
        updateTracker();   
      })
      .catch(err => {
        console.error(err);
        // re-enable so user can try another mode
        setModeButtonsEnabled(true);
      });
    });
    
  });

  document.addEventListener("keydown", (e) => {
    if (isLocked) return;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      highlighted = (highlighted + 1) % buttons.length;
      updateFocusRing();
    } 
    
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      highlighted = (highlighted - 1 + buttons.length) % buttons.length;
      updateFocusRing();
    } 
    
    else if (e.key === "Enter") {
        buttons[highlighted].click();
    }
});

document.getElementById("retry").addEventListener("click", () => {
  restartGame();
});

document.getElementById("reset").addEventListener("click", () => {
  localStorage.removeItem(hsKey());
  displayHighScore();
});

document.addEventListener("DOMContentLoaded", () => {
  displayHighScore();
})

// -------------------------------------------------------------- Functions -------------------------------------------------------- //

// Randomizes the question order
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

//shuffle(questions);

// Display the questions to the screen
function showQuestion(){
  const current = questions[currentQuestionIndex];
  questionElement.textContent = current.question;

  wireAnswerButtons();
  updateTracker();

  highlighted = 0; 
  updateFocusRing();
  buttons[0].focus(); // focus the first button

}

// Checks the user answers and increments the score if correct
function checkAnswer(selectedIndex){
  if(isLocked) return;

  lockUI(true);
  const current = questions[currentQuestionIndex];
  if(selectedIndex === current.answer){
    score++;
    markAnswer(selectedIndex, true);
  }

  else{
   markAnswer(selectedIndex, false);
  }

  updateScoreUI();
  
  setTimeout(() => {
    lockUI(false);
    currentQuestionIndex++;
    
    clearAnswerMarks();

    if(currentQuestionIndex < questions.length){
      showQuestion();
    }

    else{
     showGameOver();
    }  
    
  }, 2000);
  
}

function removeGreeting(){
    const greetText = document.querySelectorAll(".greeting");
    greetText.forEach(el => el.remove());

    const gameMode = document.querySelectorAll(".gameMode");
    gameMode.forEach(el => el.remove());
}

function restartGame(){
  window.location.reload();
}

function getHighScore(){
  if(score > highScore){
    localStorage.setItem(hsKey(), score);
    highScore = score;
  }
  return highScore;
}

function hsKey(){
  const mode = (currentMode || "start").replace("-btn", "");
  return `HS:${mode}`;
}

function displayHighScore() {
  highScore = parseInt(localStorage.getItem(hsKey())) || 0;
  hsEl.textContent = `Highest Score: ${highScore}`;
}


function loadQuestions(path) {
  return fetch(path)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${path}`);
      return res.json();
    })
    .then(data => {
      const clean = data.filter(q =>
        q &&
        typeof q.question === "string" &&
        Array.isArray(q.choices) && q.choices.length === 4 &&
        Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4
      );

      if (!clean.length) throw new Error("No valid questions found");

      questions = clean;
      currentQuestionIndex = 0;
      score = 0;
      shuffle(questions);

      // update UI bits tied to state
      scoreEl.textContent = "Score: 0";
      document.getElementById("tracker").textContent = `Question 1 of ${questions.length}`;

      displayHighScore();
      updateScoreUI();

      // re-enable buttons 
      setModeButtonsEnabled(false);
    });
}

function updateFocusRing() {
  buttons.forEach((b, i) => {
    b.classList.toggle("focused", i === highlighted);
  });
}

function lockUI(state){
  isLocked = state;
  buttons.forEach(b => b.disabled = state);
}

function updateScoreUI(){
  scoreEl.textContent = `Score: ${score}`;
  hsEl.textContent = `Highest Score: ${highScore}`;
}

function markAnswer(index, isCorrect){
  buttons[index].classList.add(isCorrect ? "correct" : "wrong");
}

function clearAnswerMarks(){
  buttons.forEach(b => b.classList.remove("correct", "wrong"));
}

function updateTracker(){
  tracker.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function wireAnswerButtons(){
  const current = questions[currentQuestionIndex];
  
  buttons.forEach((btn, index) => {
    btn.textContent = current.choices[index];
    btn.onclick = () => checkAnswer(index);
  });
}

function setModeButtonsEnabled(enabled){
  modeContainer
    .querySelectorAll(".gameMode")
    .forEach(b => b.disabled = !enabled);
}

function showGameOver() {
  questionElement.textContent = `Game Over Your score: ${score}/${questions.length}`;
  buttons.forEach(btn => btn.style.display = "none");
  getHighScore();
  displayHighScore();     
  updateScoreUI();

  retryButton.style.display = "block";
  resetButton.style.display = "block";
}






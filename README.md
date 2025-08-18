# Trails Trivia

Welcome to **Trails Trivia** – a fast-paced, browser-based quiz game for fans of the *Trails* video game series! Challenge your knowledge across multiple story arcs, track your score, and aim for the high score. Whether you're a longtime Zemurian traveler or just discovering the world, Trails Trivia is a fun way to test your memory and learn more about these beloved games.

---

## 🎮 Overview

Trails Trivia is inspired by the *Trails* series (Sky, Crossbell, Cold Steel) and provides a dynamic quiz experience. Each play session features randomized questions, instant feedback, and persistent high scores. Choose your favorite arc, answer as many questions as you can, and see how you compare to your previous best!

---

## ✨ Main Features

- **Multiple Game Modes:** Select from Sky, Crossbell, and Cold Steel arcs
- **Dynamic Question Sets:** Loads questions from JSON files for each mode
- **Randomized Order:** No two games are the same!
- **Score Tracking:** See your current score and high score live
- **LocalStorage High Scores:** Your best score is saved and displayed
- **Visual Feedback:** Instantly know if your answer is correct or incorrect
- **Intuitive UI:** Start/mode buttons, answer selections, score display, and retry/reset controls

---

## 🕹️ How to Play

1. **Choose a Game Mode:** Click the *Start* button and pick your preferred arc (Sky, Crossbell, or Cold Steel).
2. **Answer Questions:** Each question appears with multiple answer buttons. Click your choice!
3. **See Feedback:** The app highlights your selection as correct or incorrect and moves to the next question.
4. **Track Your Progress:** Your current score and high score are always visible.
5. **Retry or Reset:** Play again using the retry/reset buttons to challenge yourself or switch modes.

**Example UI Flow:**

```
[Start Game] [Select Mode: Sky | Crossbell | Cold Steel]
[Question: Who is the protagonist of Trails in the Sky?]
[Answer Buttons: Estelle | Lloyd | Rean | Joshua]
[Score: 3 | High Score: 5]
[✓ Correct!]
[Next Question...]
```

---

## 🚀 Setup & Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/trails-trivia.git
   cd trails-trivia
   ```
2. **Open the App:**
   - No build steps required.
   - Simply open `index.html` in your web browser.

3. **(Optional) Customize Questions:**
   - Edit or add to `data/questions.json` or other question files to expand your trivia bank.

---

## 📁 File Structure

```
trails-trivia/
│
├── index.html               # Main HTML file
├── style.css                # App styling
├── main.js                  # Game logic & UI control
└── data/
    ├── questions.json       # Default question set
    ├── sky.json             # Sky arc questions
    ├── crossbell.json       # Crossbell arc questions
    └── coldsteel.json       # Cold Steel arc questions
```

- **index.html:** Structure of the app interface
- **style.css:** Visual design and feedback cues
- **main.js:** Game logic, score tracking, question loading, randomization
- **data/*.json:** Question banks for each mode

---

## 🛠️ Technologies Used

- **HTML5:** App structure and UI elements
- **CSS3:** Styling, layout, and visual feedback
- **JavaScript (ES6):** Game logic, dynamic question loading, localStorage management

---

## 🌱 Future Improvements

- **Responsive Design:** Optimized for mobile and tablet play
- **Additional Modes:** Add new arcs or challenge modes (e.g., Boss Rush, Timed Quiz)
- **Expanded Question Banks:** Community or official contributions for more questions
- **Sound Effects & Animations:** Enhance feedback and immersion
- **Leaderboard:** Online or local leaderboard support

---

## 💬 Feedback & Contributions

Questions, suggestions, or want to contribute? Feel free to open an issue or pull request! Trails Trivia is for fans and by fans – help us make it even better.

---

**Enjoy your adventure in Trails Trivia!**

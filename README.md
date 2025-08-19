# Trails Trivia

Trails Trivia is a browser-based quiz game inspired by the Trails series. It tests player knowledge across multiple arcs while showcasing modular JavaScript, JSON-driven data, and localStorage for persistent scores.

Live Link: https://troytheoverlord.github.io/trails-trivia-website/

---

## 🎮 Overview

Trails Trivia is a fast-paced multiple-choice quiz built with **HTML, CSS, and JavaScript**.  
All questions are stored in **JSON**, making it easy to expand or customize the quiz.  
The game tracks both **scores and high scores** using localStorage, ensuring progress is remembered.  
With **randomized questions** and **instant feedback**, no two playthroughs feel the same.

---

## ✨ Main Features

- **Multiple Modes** – Play through Sky, Crossbell, or Cold Steel arcs  
- **Dynamic Question Sets** – JSON-driven and easy to expand  
- **Score & High Score Tracking** – Persistent with localStorage  
- **Replayability** – Randomized order keeps runs fresh  
- **Responsive UI** – Simple, intuitive, and provides instant feedback
 
---

## 🕹️ How to Play

1. Click the game link.
2. Choose a mode (Sky, Crossbell, or Cold Steel).
3. Answer questions by clicking one of the four options.
4. Try to beat your saved high score!

---

## 🚀 Screenshots

<img width="1440" height="777" alt="Screenshot 2025-08-19 at 12 16 10 PM" src="https://github.com/user-attachments/assets/d7a06f8c-1153-4a44-8a5c-d7a30b2666aa" />
<img width="1440" height="778" alt="Screenshot 2025-08-19 at 12 16 28 PM" src="https://github.com/user-attachments/assets/466c0549-a51e-4415-9afc-e8effdcd5286" />
<img width="1440" height="777" alt="Screenshot 2025-08-19 at 12 16 54 PM" src="https://github.com/user-attachments/assets/251b6c5a-0197-478a-986e-8a320195a8f3" />
<img width="1440" height="777" alt="Screenshot 2025-08-19 at 12 17 42 PM" src="https://github.com/user-attachments/assets/6df1715c-a37d-475d-9f5f-b8442d0eec26" />


---

## 📁 File Structure

```
trails-trivia/
│
├── index.html               # Main HTML file
├── style.css                # App styling
├── script.js                  # Game logic & UI control
└── data/
    ├── questions.json       # Default question set
    ├── sky.json             # Sky arc questions
    ├── crossbell.json       # Crossbell arc questions
    └── coldsteel.json       # Cold Steel arc questions
```

- **index.html:** Structure of the app interface
- **style.css:** Visual design and feedback cues
- **script.js:** Game logic, score tracking, question loading, randomization
- **data/*.json:** Question banks for each mode

---

## 🛠️ Technologies Used

- **HTML5** – Structured the core interface of the quiz.  
- **CSS3** – Styled the app with a responsive layout, color-coded feedback for correct/incorrect answers, and a clean visual design.  
- **JavaScript** – Powered all game logic, including question randomization, JSON data loading, and persistent score tracking via localStorage.

---

## 🌱 Future Improvements

While the core game is complete, there are still several features that could expand replayability and polish:

- **Mobile & Accessibility Enhancements** – Optimize for small screens and improve accessibility for all players.  
- **Expanded Question Banks** – Grow the trivia library with fan-submitted content.  
- **Challenge Modes** – Introduce a timed mode or survival style marathon for advanced players.  
- **Audio & Visual Feedback** – Add sound effects and subtle animations to create a more engaging experience.  
- **Online Leaderboards** – Allow players to compete globally and track community high scores.  
---

## 💬 Contributions

Suggestions and contributions are welcome. If you’d like to expand the question bank or add a new mode, just create a pull request!
Trails Trivia is for fans and by fans – help me make it even better.

---

**Enjoy your time with Trails Trivia!**

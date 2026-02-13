const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const explanationEl = document.getElementById("explanation");
const scoreText = document.getElementById("score-text");
const usernameInput = document.getElementById("username");

let index = 0;
let score = 0;
let username = "";

const questions = [
  {
    question: "What is the main benefit of semantic HTML?",
    answers: [
      { text: "Better accessibility and SEO", correct: true },
      { text: "Faster JavaScript execution", correct: false },
      { text: "Reduced CSS size", correct: false },
      { text: "Automatic styling", correct: false }
    ],
    explanation: "Semantic HTML improves structure, accessibility, and search engine understanding."
  },
  {
    question: "Which HTTP method is used to update an existing resource?",
    answers: [
      { text: "GET", correct: false },
      { text: "POST", correct: false },
      { text: "PUT", correct: true },
      { text: "DELETE", correct: false }
    ],
    explanation: "PUT replaces or updates an existing resource on the server."
  },
  {
    question: "What does the CSS `z-index` property control?",
    answers: [
      { text: "Element width", correct: false },
      { text: "Vertical alignment", correct: false },
      { text: "Stacking order", correct: true },
      { text: "Display type", correct: false }
    ],
    explanation: "`z-index` controls which elements appear on top of others."
  },
  {
    question: "What is event delegation in JavaScript?",
    answers: [
      { text: "Assigning events to every element", correct: false },
      { text: "Handling events on a parent element", correct: true },
      { text: "Stopping event propagation", correct: false },
      { text: "Removing event listeners", correct: false }
    ],
    explanation: "Event delegation uses bubbling to handle events efficiently."
  },
  {
    question: "Which keyword prevents a variable from being reassigned?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false }
    ],
    explanation: "`const` prevents reassignment of a variable."
  },
  {
    question: "What does the DOM represent?",
    answers: [
      { text: "A browser API for styling", correct: false },
      { text: "A tree representation of the document", correct: true },
      { text: "A JavaScript framework", correct: false },
      { text: "A database model", correct: false }
    ],
    explanation: "The DOM represents the document as a structured tree."
  },
  {
    question: "Which CSS unit is relative to the root font size?",
    answers: [
      { text: "em", correct: false },
      { text: "px", correct: false },
      { text: "rem", correct: true },
      { text: "%", correct: false }
    ],
    explanation: "`rem` is relative to the root (`html`) font size."
  },
  {
    question: "What is JSON primarily used for?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Structuring and exchanging data", correct: true },
      { text: "Creating databases", correct: false },
      { text: "Handling events", correct: false }
    ],
    explanation: "JSON is a lightweight data exchange format."
  },
  {
    question: "Which Git command saves changes to the repository?",
    answers: [
      { text: "git add", correct: false },
      { text: "git commit", correct: true },
      { text: "git push", correct: false },
      { text: "git merge", correct: false }
    ],
    explanation: "`git commit` records changes in the repository."
  },
  {
    question: "What does `position: absolute` do?",
    answers: [
      { text: "Positions relative to viewport", correct: false },
      { text: "Removes element from layout flow", correct: true },
      { text: "Centers element automatically", correct: false },
      { text: "Locks element on screen", correct: false }
    ],
    explanation: "Absolute elements are positioned relative to their nearest positioned ancestor."
  },

  // 20 MORE UNIQUE QUESTIONS
  {
    question: "Which HTTP status code indicates a server error?",
    answers: [
      { text: "200", correct: false },
      { text: "301", correct: false },
      { text: "500", correct: true },
      { text: "404", correct: false }
    ],
    explanation: "500 indicates an internal server error."
  },
  {
    question: "What does `Array.map()` return?",
    answers: [
      { text: "A new array", correct: true },
      { text: "A boolean", correct: false },
      { text: "The original array", correct: false },
      { text: "A string", correct: false }
    ],
    explanation: "`map()` returns a new transformed array."
  },
  {
    question: "Which tag is used for navigation links?",
    answers: [
      { text: "<div>", correct: false },
      { text: "<nav>", correct: true },
      { text: "<section>", correct: false },
      { text: "<header>", correct: false }
    ],
    explanation: "`<nav>` represents navigation links."
  },
  {
    question: "What is CORS?",
    answers: [
      { text: "A CSS layout system", correct: false },
      { text: "A browser security policy", correct: true },
      { text: "A JavaScript framework", correct: false },
      { text: "A database protocol", correct: false }
    ],
    explanation: "CORS controls cross-origin requests."
  },
  {
    question: "What does `preventDefault()` do?",
    answers: [
      { text: "Stops event bubbling", correct: false },
      { text: "Prevents default browser behavior", correct: true },
      { text: "Deletes an event", correct: false },
      { text: "Refreshes the page", correct: false }
    ],
    explanation: "It prevents default actions like form submission."
  },
  {
    question: "Which CSS property controls text size?",
    answers: [
      { text: "font-style", correct: false },
      { text: "font-size", correct: true },
      { text: "text-align", correct: false },
      { text: "line-height", correct: false }
    ],
    explanation: "`font-size` controls text size."
  },
  {
    question: "What does `git clone` do?",
    answers: [
      { text: "Copies a repository", correct: true },
      { text: "Deletes a repository", correct: false },
      { text: "Uploads files", correct: false },
      { text: "Merges branches", correct: false }
    ],
    explanation: "`git clone` copies a remote repository."
  },
  {
    question: "Which JavaScript type is NOT primitive?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Object", correct: true },
      { text: "Boolean", correct: false }
    ],
    explanation: "Objects are reference types."
  },
  {
    question: "What does `display: none` do?",
    answers: [
      { text: "Hides element but keeps space", correct: false },
      { text: "Removes element from layout", correct: true },
      { text: "Makes element transparent", correct: false },
      { text: "Disables element", correct: false }
    ],
    explanation: "The element is removed from layout flow."
  },
  {
    question: "Which protocol secures HTTP?",
    answers: [
      { text: "FTP", correct: false },
      { text: "HTTPS", correct: true },
      { text: "SSH", correct: false },
      { text: "SMTP", correct: false }
    ],
    explanation: "HTTPS encrypts HTTP communication."
  }
];

startBtn.addEventListener("click", () => {
  username = usernameInput.value.trim() || "GUEST";
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  reset();
  const q = questions[index];
  questionEl.textContent = `QUESTION ${index + 1}: ${q.question}`;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
    answersEl.appendChild(btn);
  });
}

function reset() {
  answersEl.innerHTML = "";
  explanationEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
}

function selectAnswer(button, correct) {
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach(b => (b.disabled = true));

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons.forEach((btn, i) => {
      if (questions[index].answers[i].correct) {
        btn.classList.add("correct");
      }
    });
  }

  explanationEl.textContent = questions[index].explanation;
  explanationEl.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  index++;
  index < questions.length ? loadQuestion() : showResult();
});

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreText.textContent = `${username}, YOUR FINAL SCORE IS ${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  index = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

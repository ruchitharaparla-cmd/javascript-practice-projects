const words = [
    "which", "there", "their", "about", "would", "these", "other", "words", "could", "write", "first", "water",
    "after", "where", "right", "think", "three", "years", "place", "sound", "great", "again", "still", "every",
    "small", "found", "those", "never", "under", "might", "while", "house", "world", "below", "asked", "going",
    "large", "until", "along", "shall", "being", "often", "earth", "began", "since", "study", "night", "light",
    "above", "paper", "parts", "young", "story", "point", "times", "heard", "whole", "white", "given", "means",
    "music", "miles", "thing", "today", "later", "using", "money", "lines", "order", "group", "among", "learn",
    "known", "space", "table", "early", "trees", "short", "hands", "state", "black", "shown", "stood", "front",
    "voice", "kinds", "makes", "comes", "close", "power", "lived", "vowel", "taken", "built", "heart", "ready",
    "quite", "class", "bring", "round", "horse", "shows", "piece", "green", "stand", "birds", "start", "river",
    "tried", "least", "field", "whose", "girls", "leave", "added", "color", "third", "hours", "moved", "plant",
    "doing", "names", "forms", "heavy", "ideas", "cried", "check", "floor", "begin", "woman", "alone", "plane",
    "spell", "watch", "carry", "wrote", "clear", "named", "books", "child", "glass", "human", "takes", "party",
    "build", "seems", "blood", "sides", "seven", "mouth", "solve", "north", "value", "death", "maybe", "happy",
    "tells", "gives", "looks", "shape", "lives", "steps", "areas", "sense", "speak", "force", "ocean", "speed",
    "women", "metal", "south", "grass", "scale", "cells", "lower", "sleep", "wrong", "pages", "ships", "needs",
    "rocks", "eight", "major", "level", "total", "ahead", "reach", "stars", "store", "sight", "terms", "catch",
    "works", "board", "cover", "songs", "equal", "stone", "waves", "guess", "dance", "spoke", "break", "cause",
    "radio", "weeks", "lands", "basic", "liked", "trade", "fresh", "final", "fight", "meant", "drive", "spent",
    "local", "waxes", "knows", "train", "bread", "homes", "teeth", "coast", "thick", "brown", "clean", "quiet",
    "sugar", "facts", "steel", "forth", "rules", "notes", "units", "peace", "month", "verbs", "seeds", "helps",
    "sharp", "visit", "woods", "chief", "walls", "cross", "wings", "grown", "cases", "foods", "crops", "fruit",
    "stick", "wants", "stage", "sheep", "nouns", "plain", "drink", "bones", "apart", "turns", "moves", "touch",
    "angle", "based", "range", "marks", "tired", "older", "farms", "spend", "shoes", "goods", "chair", "twice",
    "cents", "empty", "alike", "style", "broke", "pairs", "count", "enjoy", "score", "shore", "roots", "paint",
    "heads", "shook", "serve", "angry", "crowd", "wheel", "quick", "dress", "share", "alive", "noise", "solid",
    "cloth", "signs", "hills", "types", "drawn", "worth", "truck", "piano", "upper", "loved", "usual", "faces",
    "drove", "cabin", "boats", "towns", "proud", "court", "model", "prime", "fifty", "plans", "yards", "prove",
    "tools", "price", "sheet", "smell", "boxes", "raise", "match", "truth", "roads", "threw", "enemy", "lunch",
    "chart", "scene", "graph", "doubt", "guide", "winds", "block", "grain", "smoke", "mixed", "games", "wagon",
    "sweet", "topic", "extra", "plate", "title", "knife", "fence", "falls", "cloud", "wheat", "plays", "enter",
    "broad", "steam", "atoms", "press", "lying", "basis", "clock", "taste", "grows", "thank", "storm", "agree",
    "brain", "track", "smile", "funny", "beach", "stock", "hurry", "saved", "sorry", "giant", "trail", "offer",
    "ought", "rough", "daily", "avoid", "keeps", "throw", "allow", "cream", "laugh", "edges", "teach", "frame",
    "bells", "dream", "magic", "occur", "ended", "chord", "false", "skill", "holes", "dozen", "brave", "apple",
    "climb", "outer", "pitch", "ruler", "holds", "fixed", "costs", "calls", "blank", "staff", "labor", "eaten",
    "youth", "tones", "honor", "globe", "gases", "doors", "poles", "loose", "apply", "tears", "exact", "brush",
    "chest", "layer", "whale", "minor", "faith", "tests", "judge", "items", "worry", "waste", "hoped", "strip",
    "begun", "aside", "lakes", "bound", "depth", "candy", "event", "worse", "aware", "shell", "rooms", "ranch",
    "image", "snake", "aloud", "dried", "likes", "motor", "pound", "knees", "refer", "fully", "chain", "shirt",
    "flour", "drops", "spite", "orbit", "banks", "shoot", "curve", "tribe", "tight", "blind", "slept", "shade",
    "claim", "flies", "theme", "queen", "fifth", "union", "hence", "straw", "entry", "issue", "birth", "feels",
    "anger", "brief", "rhyme", "glory", "guard", "flows", "flesh", "owned", "trick", "yours", "sizes", "noted",
    "width", "burst", "route", "lungs", "uncle", "bears", "royal", "kings", "forty", "trial", "cards", "brass",
    "opera", "chose", "owner", "vapor", "beats", "mouse", "tough", "wires", "meter", "tower", "finds", "inner",
    "stuck", "arrow", "poems", "label", "swing", "solar", "truly", "tense", "beans", "split", "rises", "weigh",
    "hotel", "stems", "pride", "swung", "grade", "digit", "badly", "boots", "pilot", "sales", "swept", "lucky",
    "prize", "stove", "tubes", "acres", "wound", "steep", "slide", "trunk", "error", "porch", "slave", "exist",
    "faced", "mines", "marry", "juice", "raced", "waved", "goose", "trust", "fewer", "favor", "mills", "views",
    "joint", "eager", "spots", "blend", "rings", "adult", "index", "nails", "horns", "balls", "flame", "rates",
    "drill", "trace", "skins", "waxed", "seats", "stuff", "ratio", "minds", "silly", "coins", "hello", "trips"];


// Select the secret word once
// Select the secret word once
const secretWord = words[
    Math.floor(Math.random() * words.length)
];

const gameContainer = document.querySelector(".game-container");

// Heading
const headingElement = document.createElement("h1");
headingElement.textContent = "Wordle Game";

// Description
const textElement = document.createElement("p");
textElement.textContent = "Guess the 5-letter word.";

// Input
const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.maxLength = 5;
inputElement.placeholder = "Enter a 5-letter word";

// Button
const buttonElement = document.createElement("button");
buttonElement.textContent = "Submit Guess";

// Message
const messageElement = document.createElement("p");
messageElement.id = "message";

// Board containing 6 rows
const boardElement = document.createElement("div");
boardElement.classList.add("wordle-board");

const maxAttempts = 6;
let attempts = 0;
let gameOver = false;

// Create 6 rows, each containing 5 squares
for (let row = 0; row < maxAttempts; row++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("letter-row");

    for (let col = 0; col < 5; col++) {
        const square = document.createElement("div");
        square.classList.add("letter-square");
        rowElement.appendChild(square);
    }

    boardElement.appendChild(rowElement);
}

// INPUT EVENT
inputElement.addEventListener("input", () => {
    inputElement.value = inputElement.value
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase();

    messageElement.textContent =
        `${inputElement.value.length}/5 letters`;
});

// CLICK EVENT
buttonElement.addEventListener("click", () => {
    if (gameOver) {
        return;
    }

    const guess = inputElement.value.trim();

    // Check the word length
    if (guess.length !== 5) {
        messageElement.textContent =
            "Please enter exactly 5 letters.";
        return;
    }

    // Check whether the guess exists in the word list
    if (!words.includes(guess)) {
        messageElement.textContent =
            "Word not found in the word list.";
        return;
    }

    // Get the current row
    const currentRow = boardElement.children[attempts];
    const squares = currentRow.children;

    // Track letters in the target word that have not been matched
    const remainingLetters = secretWord.split("");
    const results = Array(5).fill("absent");

    // First pass: identify correct-position letters
    for (let i = 0; i < 5; i++) {
        if (guess[i] === secretWord[i]) {
            results[i] = "correct";
            remainingLetters[i] = null;
        }
    }

    // Second pass: identify letters in the wrong position
    for (let i = 0; i < 5; i++) {
        if (results[i] === "correct") {
            continue;
        }

        const matchingIndex = remainingLetters.indexOf(guess[i]);

        if (matchingIndex !== -1) {
            results[i] = "present";
            remainingLetters[matchingIndex] = null;
        }
    }

    // Display the guess and apply colors
    for (let i = 0; i < 5; i++) {
        squares[i].textContent = guess[i].toUpperCase();
        squares[i].classList.add(results[i]);
    }

    attempts++;

    // Check win condition
    if (guess === secretWord) {
        messageElement.textContent =
            "Congratulations! You guessed the word!";
        gameOver = true;
        inputElement.disabled = true;
        buttonElement.disabled = true;
        return;
    }

    // Check game-over condition
    if (attempts === maxAttempts) {
        messageElement.textContent =
            `Game over, the word was "${secretWord}"`;
        gameOver = true;
        inputElement.disabled = true;
        buttonElement.disabled = true;
        return;
    }

    messageElement.textContent =
        `Try again! ${maxAttempts - attempts} attempts remaining.`;

    inputElement.value = "";
});

// KEYDOWN EVENT: Enter submits the guess
inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        buttonElement.click();
    }
});

// Add elements to the existing HTML container
gameContainer.appendChild(headingElement);
gameContainer.appendChild(textElement);
gameContainer.appendChild(boardElement);
gameContainer.appendChild(inputElement);
gameContainer.appendChild(buttonElement);
gameContainer.appendChild(messageElement);
// Game variables, Tile Class (Same as before)
// ... 

// DOM Elements (using standard JavaScript)
const gameBoardDiv = document.getElementById("game-board");
const playerHandDiv = document.getElementById("player-hand");
const scoreDisplay = document.getElementById("score");
const operatorSelect = document.getElementById("operator-select");
const newGameButton = document.getElementById("new-game-button");
const errorMessage = document.getElementById("error-message");

// UI Creation Functions 
function createGameBoardUI() {
    // ... (same as before, but use document.createElement instead of $w)
}

function createTileUI(tile) {
    // ... (same as before, but use document.createElement instead of $w)
}

// Update UI Functions 
function updateGameBoardDisplay() {
    // ... (same as before, but use standard DOM manipulation methods)
}

function updatePlayerHandDisplay() {
    // ... (same as before, but use standard DOM manipulation methods)
}

function updateScoreDisplay() {
    scoreDisplay.textContent = "Score: " + score; // Use textContent for plain text update
}


// Game Logic Functions (generateTiles, shuffle, drawTiles, placeTile, 
// isValidPlacement, getEquation, calculateScore, getValidEquations, 
// isPrime, areValidMovesLeft, endGame)
// ... (These functions remain the same as in the previous response)


// Start Game
function startGame() {
    // ... (same as before, but use document.getElementById to get elements)
}

// Event Listeners
newGameButton.addEventListener('click', startGame);
// ... (Add event listeners for wildcard selection)

// Start Game
startGame();

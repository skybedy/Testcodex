const startButton = document.getElementById("startButton");
const clickButton = document.getElementById("clickButton");
const restartButton = document.getElementById("restartButton");

const statusText = document.getElementById("statusText");
const userTimeElement = document.getElementById("userTime");
const aiTimeElement = document.getElementById("aiTime");
const winnerElement = document.getElementById("winner");

let gameState = {
  isWaiting: false,
  canClick: false,
  startTimestamp: 0,
  timeoutId: null,
};

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearResult() {
  userTimeElement.textContent = "—";
  aiTimeElement.textContent = "—";
  winnerElement.textContent = "—";
  winnerElement.className = "";
}

function resetGame() {
  if (gameState.timeoutId) {
    clearTimeout(gameState.timeoutId);
  }

  gameState = {
    isWaiting: false,
    canClick: false,
    startTimestamp: 0,
    timeoutId: null,
  };

  clickButton.disabled = true;
  startButton.disabled = false;
  statusText.textContent = "Stiskni Start a čekej na signál.";
  clearResult();
}

function startGame() {
  resetGame();

  gameState.isWaiting = true;
  startButton.disabled = true;
  statusText.textContent = "Připrav se... tlačítko se brzy aktivuje.";

  const delay = randomBetween(1200, 3200);
  gameState.timeoutId = setTimeout(() => {
    gameState.isWaiting = false;
    gameState.canClick = true;
    gameState.startTimestamp = performance.now();
    clickButton.disabled = false;
    statusText.textContent = "TEĎ! Klikni co nejrychleji!";
  }, delay);
}

function finishRound(userTime) {
  const aiTime = randomBetween(150, 350);

  userTimeElement.textContent = `${userTime} ms`;
  aiTimeElement.textContent = `${aiTime} ms`;

  let winnerText = "Remíza";
  let winnerClass = "";

  if (userTime < aiTime) {
    winnerText = "Uživatel vyhrál";
    winnerClass = "winner-user";
  } else if (aiTime < userTime) {
    winnerText = "AI vyhrála";
    winnerClass = "winner-ai";
  }

  winnerElement.textContent = winnerText;
  winnerElement.className = winnerClass;

  statusText.textContent = "Kolo dokončeno. Můžeš dát Start znovu nebo Restart.";
  clickButton.disabled = true;
  gameState.canClick = false;
  startButton.disabled = false;
}

startButton.addEventListener("click", startGame);

clickButton.addEventListener("click", () => {
  if (!gameState.canClick) {
    return;
  }

  const reactionTime = Math.round(performance.now() - gameState.startTimestamp);
  finishRound(reactionTime);
});

restartButton.addEventListener("click", resetGame);

resetGame();

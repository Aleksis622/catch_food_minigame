const gameOverBox = document.getElementById('gameOverBox');
const restartButton = document.getElementById('restartButton');
const startButton = document.getElementById('startButton');

function drawBackground()
{
    context.fillStyle = '#111827';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}

function endGame()
{
    gameRunning = false;

    finalScoreElement.textContent = score;

    saveHighScore();

    gameOverBox.classList.remove('hidden');
}

function restartGame()
{
    score = 0;
    gameSpeed = 1;
    gameRunning = true;

    scoreElement.textContent = 0;
    speedLevelElement.textContent = gameSpeed.toFixed(2);

    fallingItems.length = 0;

    basket.x = canvasWidth / 2 - 60;

    gameOverBox.classList.add('hidden');

    gameLoop();
}

function startGame()
{
    if (gameStarted) {
        return;
    }

    gameStarted = true;
    gameRunning = true;

    speedLevelElement.textContent = gameSpeed.toFixed(2);

    startButton.classList.add('hidden');

    gameLoop();
}

function updateDifficultySmooth()
{
    if (gameRunning) {
        gameSpeed += 0.0008; // smooth increase
        speedLevelElement.textContent = gameSpeed.toFixed(2);
    }
}

function gameLoop()
{
    if (!gameRunning) {
        return;
    }

    drawBackground();
    moveBasket();
    updateItems();
    drawBasket();
    drawItems();
    updateDifficultySmooth();

    requestAnimationFrame(gameLoop);
}

startButton.addEventListener('click', function() {
    startGame();
});

restartButton.addEventListener('click', function() {
    restartGame();
});

// Item spawn interval (NO difficulty logic here)
setInterval(() => {
    if (gameRunning) {
        createItem();
    }
}, 900);

// Initial static frame
drawBackground();
drawBasket();

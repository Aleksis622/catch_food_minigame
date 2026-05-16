const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('finalScore');
const speedLevelElement = document.getElementById('speedLevel');

function increaseScore()
{
    score++;
    scoreElement.textContent = score;
    increaseDifficulty();
}

function increaseDifficulty()
{
    gameSpeed += 0.03;
    speedLevelElement.textContent = gameSpeed.toFixed(2);
}

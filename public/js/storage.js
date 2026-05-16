function saveHighScore()
{
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    const gameTime = Math.floor(performance.now() / 1000);

    const newScore = {
        score: score,
        time: gameTime,
        date: new Date().toLocaleDateString()
    };

    highScores.push(newScore);

    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    const topScores = highScores.slice(0, 5);

    localStorage.setItem('highScores', JSON.stringify(topScores));
}

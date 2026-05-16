const fallingItems = [];

function createItem()
{
    const allItems = [...healthyFoods, ...badItems];

    const randomName = allItems[Math.floor(Math.random() * allItems.length)];

    const item = {
        name: randomName,
        x: Math.random() * (canvasWidth - 60),
        y: -60,
        width: 60,
        height: 60,
        speed: (2 + Math.random() * 3) * gameSpeed,
        isHealthy: healthyFoods.includes(randomName)
    };

    fallingItems.push(item);
}

function drawItems()
{
    fallingItems.forEach(function(item) {

        context.drawImage(
            images[item.name],
            item.x,
            item.y,
            item.width,
            item.height
        );
    });
}

function updateItems()
{
    if (!gameRunning) {
        return;
    }

    for (let index = fallingItems.length - 1; index >= 0; index--) {

        const item = fallingItems[index];

        item.y += item.speed;

        if (isCollision(item, basket)) {

            if (item.isHealthy) {
                increaseScore();
            } else {
                endGame();
            }

            fallingItems.splice(index, 1);
            continue;
        }

        if (item.y > canvasHeight) {
            fallingItems.splice(index, 1);
        }
    }
}

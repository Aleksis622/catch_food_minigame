const basket = {
    width: 120,
    height: 80,
    x: canvasWidth / 2 - 60,
    y: canvasHeight - 100,
    speed: 8
};

const keys = {
    left: false,
    right: false
};

function moveBasket()
{
    if (!gameRunning) {
        return;
    }

    if (keys.left && basket.x > 0) {
        basket.x -= basket.speed;
    }

    if (keys.right && basket.x < canvasWidth - basket.width) {
        basket.x += basket.speed;
    }
}

function drawBasket()
{
    context.drawImage(
        images.basket,
        basket.x,
        basket.y,
        basket.width,
        basket.height
    );
}

window.addEventListener('keydown', function(event) {

    if (event.key === 'ArrowLeft') {
        keys.left = true;
    }

    if (event.key === 'ArrowRight') {
        keys.right = true;
    }
});

window.addEventListener('keyup', function(event) {

    if (event.key === 'ArrowLeft') {
        keys.left = false;
    }

    if (event.key === 'ArrowRight') {
        keys.right = false;
    }
});

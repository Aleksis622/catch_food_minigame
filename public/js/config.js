const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let gameRunning = false;
let gameStarted = false;
let score = 0;
let gameSpeed = 1;

const healthyFoods = [
    'apple',
    'banana',
    'carrot',
    'kiwi'
];

const badItems = [
    'burger',
    'candy',
    'soda',
    'milkshake'
];

const images = {
    basket: loadImage('/images/basket.png'),

    apple: loadImage('/images/apple.png'),
    banana: loadImage('/images/banana.png'),
    carrot: loadImage('/images/carrot.png'),
    kiwi: loadImage('/images/kiwi.png'),

    burger: loadImage('/images/burger.png'),
    candy: loadImage('/images/candy.png'),
    soda: loadImage('/images/soda.png'),
    milkshake: loadImage('/images/milkshake.png')
};

function loadImage(path)
{
    const image = new Image();
    image.src = path;
    return image;
}

function isCollision(item, basket)
{
    return (
        item.x < basket.x + basket.width &&
        item.x + item.width > basket.x &&
        item.y < basket.y + basket.height &&
        item.y + item.height > basket.y
    );
}

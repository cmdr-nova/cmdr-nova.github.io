document.getElementById('upButton').addEventListener('touchstart', moveUp);
document.getElementById('downButton').addEventListener('touchstart', moveDown);
document.getElementById('leftButton').addEventListener('touchstart', moveLeft);
document.getElementById('rightButton').addEventListener('touchstart', moveRight);

document.getElementById('upButton').addEventListener('touchend', () => ship.dy = 0);
document.getElementById('downButton').addEventListener('touchend', () => ship.dy = 0);
document.getElementById('leftButton').addEventListener('touchend', () => {
  ship.dx = 0;
  ship.angle = 0;
});
document.getElementById('rightButton').addEventListener('touchend', () => {
  ship.dx = 0;
  ship.angle = 0;
});
var player = document.getElementById('internet-radio');
var playertxt = document.querySelector('.player-text'); // Use querySelector for class
console.log(player);
console.log(playertxt);

function playEr() {
  player.play();
  playertxt.style.display = 'inline';
  playertxt.classList.add('scroll-animation'); // Add the animation class
  console.log("Playing audio");
}

function stopEr() {
  player.pause();
  playertxt.style.display = 'none';
  playertxt.classList.remove('scroll-animation'); // Remove the animation class
  console.log("Stopping audio");
}

stopEr();
document.getElementById('player-stop').onclick = stopEr;
document.getElementById('player-play').onclick = playEr;
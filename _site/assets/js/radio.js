var player = document.getElementById('internet-radio');
var playertxt = document.getElementById('player-text');
console.log(player);
console.log(playertxt);

function playEr(){
  player.play();
  playertxt.style.display = 'inline';
};

function stopEr(){
  player.pause();
  playertxt.style.display = 'none';
};

stopEr();
document.getElementById('player-stop').onclick = stopEr;
document.getElementById('player-play').onclick = playEr;
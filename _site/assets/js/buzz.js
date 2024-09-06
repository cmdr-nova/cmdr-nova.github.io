function pageLoaded() {
  // Speed up the audio 3x so the test doesn't take 10 seconds.
  var audio = document.getElementById("audio");
  audio.playbackRate = 1;
  volume = 50;
  audio.play();
}
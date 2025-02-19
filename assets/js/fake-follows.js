  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var followsCount = getRandomNumber(2, 20000);
    var followersCount = getRandomNumber(2, 20000);

    document.getElementById("follows-count").textContent = followsCount;
    document.getElementById("followers-count").textContent = followersCount;
  });
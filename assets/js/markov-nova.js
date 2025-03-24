  // Fetch the Markov-generated text and display it in the "markov-content" div
  fetch('/assets/js/random_post.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('markov-content').textContent = data;
    })
    .catch(error => {
      console.error('Error loading Markov-generated text:', error);
    });
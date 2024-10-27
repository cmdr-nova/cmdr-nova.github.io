document.getElementById('theme-toggle').addEventListener('click', function() {
    console.log('Button clicked'); // Add this line
    document.body.classList.toggle('light-mode');
  });
document.addEventListener('DOMContentLoaded', () => {
  // Check the stored preference and apply it immediately
  if (localStorage.getItem('lightMode') === 'enabled') {
    document.body.classList.add('light-mode');
  }
});
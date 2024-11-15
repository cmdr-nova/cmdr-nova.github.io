document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('light-mode-toggle');
  
    toggleSwitch.addEventListener('change', () => {
      document.body.classList.toggle('light-mode', toggleSwitch.checked);
    });
  });
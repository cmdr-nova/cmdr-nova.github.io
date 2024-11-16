document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('light-mode-toggle');

  // Check the stored preference and apply it
  const currentMode = localStorage.getItem('lightMode');
  if (currentMode === 'enabled') {
    document.body.classList.add('light-mode');
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('lightMode', 'enabled');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('lightMode', 'disabled');
    }
  });
});
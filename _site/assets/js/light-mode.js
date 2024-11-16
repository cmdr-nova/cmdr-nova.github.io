document.addEventListener('DOMContentLoaded', () => {
  const desktopToggleSwitch = document.getElementById('light-mode-toggle');
  const mobileToggleSwitch = document.getElementById('mobile-light-mode-checkbox');

  const applyLightMode = (isEnabled) => {
    if (isEnabled) {
      document.body.classList.add('light-mode');
      localStorage.setItem('lightMode', 'enabled');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('lightMode', 'disabled');
    }
  };

  // Check the stored preference and apply it
  const currentMode = localStorage.getItem('lightMode');
  if (currentMode === 'enabled') {
    document.body.classList.add('light-mode');
    if (desktopToggleSwitch) desktopToggleSwitch.checked = true;
    if (mobileToggleSwitch) mobileToggleSwitch.checked = true;
  }

  if (desktopToggleSwitch) {
    desktopToggleSwitch.addEventListener('change', () => {
      applyLightMode(desktopToggleSwitch.checked);
      if (mobileToggleSwitch) mobileToggleSwitch.checked = desktopToggleSwitch.checked;
    });
  }

  if (mobileToggleSwitch) {
    mobileToggleSwitch.addEventListener('change', () => {
      applyLightMode(mobileToggleSwitch.checked);
      if (desktopToggleSwitch) desktopToggleSwitch.checked = mobileToggleSwitch.checked;
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const avatarElements = document.querySelectorAll('.dynamic-avatar'); // Select all elements with the class 'dynamic-avatar'
  const profileUrl = 'https://sharkey.mkultra.monster/@cmdr_nova';
  const proxyUrl = `https://server.mkultra.monster:3001/avatar-proxy?url=${encodeURIComponent(profileUrl)}`;

  // Hide avatar elements initially
  avatarElements.forEach(avatarElement => {
    avatarElement.style.visibility = 'hidden';
  });

  async function updateAvatar() {
    try {
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain'
        }
      });

      if (response.ok) {
        const avatarUrl = await response.text();

        if (avatarUrl) {
          avatarElements.forEach(avatarElement => {
            avatarElement.src = avatarUrl;
            avatarElement.style.visibility = 'visible'; // Show avatar elements after updating
          });
          console.log('Avatar updated to:', avatarUrl);
        } else {
          console.error('No avatar URL found in the profile page');
        }
      } else {
        console.error('Failed to fetch the avatar URL');
      }
    } catch (error) {
      console.error('Error fetching the avatar URL:', error);
    }
  }

  updateAvatar();
});
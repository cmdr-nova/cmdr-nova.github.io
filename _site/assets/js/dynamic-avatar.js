document.addEventListener('DOMContentLoaded', () => {
    const avatarElements = document.querySelectorAll('.dynamic-avatar'); // Select all elements with the class 'dynamic-avatar'
    const profileUrl = 'https://mkultra.monster/@cmdr_nova';
  
    async function updateAvatar() {
      try {
        const response = await fetch(profileUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'text/html'
          }
        });
  
        if (response.ok) {
          const text = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');
          const metaOgImage = doc.querySelector('meta[property="og:image"]');
          const latestAvatarUrl = metaOgImage ? metaOgImage.content : null;
  
          if (latestAvatarUrl) {
            avatarElements.forEach(avatarElement => {
              avatarElement.src = latestAvatarUrl;
            });
            console.log('Avatar updated to:', latestAvatarUrl);
          } else {
            console.error('No avatar URL found in the profile page');
          }
        } else {
          console.error('Failed to fetch the profile page');
        }
      } catch (error) {
        console.error('Error fetching the profile page:', error);
      }
    }
  
    updateAvatar();
  });
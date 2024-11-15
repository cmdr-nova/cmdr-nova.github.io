document.addEventListener('DOMContentLoaded', () => {
    const profileUrl = 'https://mkultra.monster/@cmdr_nova';
    const authorLink = document.getElementById('author-link');
  
    async function updateAuthor() {
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
          const metaProfileUsername = doc.querySelector('meta[property="profile:username"]');
          const profileUsername = metaProfileUsername ? metaProfileUsername.content : null;
  
          if (profileUsername) {
            authorLink.textContent = profileUsername;
            console.log('Author updated to:', profileUsername);
          } else {
            console.error('No profile:username meta tag found in the profile page');
          }
        } else {
          console.error('Failed to fetch the profile page');
        }
      } catch (error) {
        console.error('Error fetching the profile page:', error);
      }
    }
  
    updateAuthor();
  });
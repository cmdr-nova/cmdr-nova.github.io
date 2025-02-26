document.addEventListener('DOMContentLoaded', () => {
  const profileUrl = 'https://mastodon.online/@cmdr_nova';
  const authorLinks = document.querySelectorAll('.author-link'); // Select all elements with the class 'author-link'

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
        const metaProfileUsername = doc.querySelector('meta[name="twitter:title"]');
        const profileUsername = metaProfileUsername ? metaProfileUsername.content : null;

        if (profileUsername) {
          const usernameMatch = profileUsername.match(/\(@([^)]+)\)/); // Extract the username within parentheses
          const username = usernameMatch ? `@${usernameMatch[1]}` : profileUsername; // Use the extracted username or fallback to fullUsername

          authorLinks.forEach(authorLink => {
            authorLink.textContent = username;
          });
          console.log('Author updated to:', username);
        } else {
          console.error('No twitter:title meta tag found in the profile page');
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
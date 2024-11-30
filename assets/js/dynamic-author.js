document.addEventListener('DOMContentLoaded', () => {
  const profileUrl = 'https://sharkey.mkultra.monster/@cmdr_nova';
  const proxyUrl = `https://server.mkultra.monster:3001/author-proxy?url=${encodeURIComponent(profileUrl)}`;
  const authorLinks = document.querySelectorAll('.author-link'); // Select all elements with the class 'author-link'

  // Hide author links initially
  authorLinks.forEach(authorLink => {
    authorLink.style.visibility = 'hidden';
  });

  async function updateAuthor() {
    try {
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain'
        }
      });

      if (response.ok) {
        const profileUsername = await response.text();

        if (profileUsername) {
          authorLinks.forEach(authorLink => {
            authorLink.textContent = profileUsername;
            authorLink.style.visibility = 'visible'; // Show author links after updating
          });
          console.log('Author updated to:', profileUsername);
        } else {
          console.error('No username found in the profile page');
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
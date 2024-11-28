document.addEventListener('DOMContentLoaded', () => {
  const embedContainer = document.getElementById('sharkey-embed');
  const embedUrl = 'https://sharkey.mkultra.monster/embed/user-timeline/a12gq0kqygqr0001';
  const proxyUrl = `http://server.mkultra.monster:3001/proxy?url=${encodeURIComponent(embedUrl)}`;

  async function fetchEmbedContent() {
    try {
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'text/html'
        }
      });

      if (response.ok) {
        const text = await response.text();
        embedContainer.innerHTML = text;
        console.log('Embed content loaded successfully');
      } else {
        console.error('Failed to fetch the embed content');
      }
    } catch (error) {
      console.error('Error fetching the embed content:', error);
    }
  }

  fetchEmbedContent();
});
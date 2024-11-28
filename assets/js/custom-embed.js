document.addEventListener('DOMContentLoaded', () => {
  const embedContainer = document.getElementById('sharkey-embed');
  const embedUrl = 'https://sharkey.mkultra.monster/embed/user-timeline/a12gq0kqygqr0001';
  const proxyUrl = `https://server.mkultra.monster:3001/proxy?url=${encodeURIComponent(embedUrl)}`;

  async function fetchEmbedContent() {
    try {
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'text/html'
        }
      });

      if (response.ok) {
        let text = await response.text();

        // Modify the fetched content to update URLs to absolute URLs
        const baseUrl = 'https://sharkey.mkultra.monster';
        text = text.replace(/href="\/([^"]*)"/g, `href="${baseUrl}/$1"`);
        text = text.replace(/src="\/([^"]*)"/g, `src="${baseUrl}/$1"`);

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
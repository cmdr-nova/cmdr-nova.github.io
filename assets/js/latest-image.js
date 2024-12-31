document.addEventListener('DOMContentLoaded', () => {
  const accountId = '113586993703495507'; // Directly use the provided account ID
  const statusesUrl = `https://mkultra.monster/api/v1/accounts/${accountId}/statuses?limit=5`;

  // Fetch the latest statuses
  fetch(statusesUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching statuses: ${response.statusText}`);
      }
      return response.json();
    })
    .then(statuses => {
      console.log('Fetched statuses:', statuses);

      if (!Array.isArray(statuses)) {
        throw new Error('Statuses response is not an array');
      }

      // Find the latest status with an image and the word "Python" in the content
      const latestImageStatus = statuses.find(status => 
        status.media_attachments.length > 0 && status.content.includes('Python')
      );

      if (latestImageStatus) {
        const latestImageUrl = latestImageStatus.media_attachments[0].url;
        const latestImagePostUrl = latestImageStatus.url;
        const latestImageElement = document.getElementById('latest-pygen');

        // Update the sidebar with the latest image and link
        latestImageElement.innerHTML = `<a href="${latestImagePostUrl}" target="_blank"><img src="${latestImageUrl}" alt="Latest Image from Mastodon" style="max-width: 100%;"></a>`;
      } else {
        console.log('No status found with an image and the word "Python"');
      }
    })
    .catch(error => console.error('Error fetching latest image:', error));
});
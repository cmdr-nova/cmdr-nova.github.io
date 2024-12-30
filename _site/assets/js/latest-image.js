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

      // Find the latest status with an image, including sensitive images
      const latestImageStatus = statuses.find(status => 
        status.media_attachments.length > 0
      );

      if (latestImageStatus) {
        const latestImageUrl = latestImageStatus.media_attachments[0].url;
        const latestImagePostUrl = latestImageStatus.url;
        const latestImageElement = document.getElementById('latest-pygen');

        if (latestImageElement) {
          latestImageElement.src = latestImageUrl;
          latestImageElement.parentElement.href = latestImagePostUrl;
        }
      } else {
        console.log('No image posts found.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
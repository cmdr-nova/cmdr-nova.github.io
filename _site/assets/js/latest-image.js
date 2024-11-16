document.addEventListener('DOMContentLoaded', () => {
    const mastodonAccount = 'https://mkultra.monster/@python_gen';
    const apiUrl = 'https://mkultra.monster/api/v1/accounts/lookup?acct=python_gen';
  
    // Fetch the account ID
    fetch(apiUrl)
      .then(response => response.json())
      .then(account => {
        const accountId = account.id;
        const statusesUrl = `https://mkultra.monster/api/v1/accounts/${accountId}/statuses?limit=5`;
  
        // Fetch the latest statuses
        return fetch(statusesUrl);
      })
      .then(response => response.json())
      .then(statuses => {
        // Find the latest status with an image
        const latestImageStatus = statuses.find(status => status.media_attachments.length > 0);
  
        if (latestImageStatus) {
          const latestImageUrl = latestImageStatus.media_attachments[0].url;
          const latestImagePostUrl = latestImageStatus.url;
          const latestImageElement = document.getElementById('latest-pygen');
  
          // Update the sidebar with the latest image and link
          latestImageElement.innerHTML = `<a href="${latestImagePostUrl}" target="_blank"><img src="${latestImageUrl}" alt="Latest Image from Mastodon" style="max-width: 100%;"></a>`;
        }
      })
      .catch(error => console.error('Error fetching latest image:', error));
  });
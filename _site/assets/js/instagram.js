document.addEventListener('DOMContentLoaded', () => {
  console.log('Instagram script loaded');
  
  const instagramUsername = 'cmdr_nova'; // Replace with your Instagram username
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const proxyUrl = isLocalhost 
    ? `http://localhost:3002/instagram/${instagramUsername}` 
    : `https://server.mkultra.monster:3002/instagram/${instagramUsername}`;

  console.log(`Fetching Instagram profile from: ${proxyUrl}`);

  // Fetch the Instagram profile page through the proxy server
  fetch(proxyUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching Instagram profile: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      console.log('Fetched Instagram profile HTML');
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const images = doc.querySelectorAll('.FFVAD');
      let imageUrlArray = [];

      // Add the images to the array
      images.forEach(img => imageUrlArray.push(img.src));

      console.log('Image URLs:', imageUrlArray);

      // Display the latest five images
      const instagramPostsElement = document.getElementById('instagram-posts');
      imageUrlArray.slice(0, 5).forEach(imageUrl => {
        const postElement = document.createElement('div');
        postElement.classList.add('instagram-post');
        postElement.innerHTML = `<img src="${imageUrl}" alt="Instagram Post" style="max-width: 100%;">`;
        instagramPostsElement.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error fetching Instagram posts:', error));
});
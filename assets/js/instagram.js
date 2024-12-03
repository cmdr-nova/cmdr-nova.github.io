document.addEventListener('DOMContentLoaded', () => {
    const instagramUsername = 'cmdr_nova'; // Replace with your Instagram username
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const proxyUrl = isLocalhost 
      ? `http://localhost:3002/instagram/${instagramUsername}` 
      : `https://server.mkultra.monster:3002/instagram/${instagramUsername}`;
  
    // Fetch the Instagram profile page through the proxy server
    fetch(proxyUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching Instagram profile: ${response.statusText}`);
        }
        return response.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const scriptTags = doc.querySelectorAll('script[type="text/javascript"]');
        let sharedDataScript;
  
        // Find the script tag containing the sharedData
        scriptTags.forEach(script => {
          if (script.textContent.includes('window._sharedData')) {
            sharedDataScript = script.textContent;
          }
        });
  
        if (!sharedDataScript) {
          throw new Error('Could not find sharedData script tag');
        }
  
        // Extract the JSON data from the script tag
        const sharedDataJson = sharedDataScript.match(/window\._sharedData\s*=\s*(\{.+\});/)[1];
        const sharedData = JSON.parse(sharedDataJson);
  
        // Extract the latest five posts
        const latestPosts = sharedData.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.slice(0, 5);
  
        // Display the latest posts
        const instagramPostsElement = document.getElementById('instagram-posts');
        latestPosts.forEach(post => {
          const postUrl = `https://www.instagram.com/p/${post.node.shortcode}/`;
          const postImageUrl = post.node.display_url;
          const postElement = document.createElement('div');
          postElement.classList.add('instagram-post');
          postElement.innerHTML = `<a href="${postUrl}" target="_blank"><img src="${postImageUrl}" alt="Instagram Post" style="max-width: 100%;"></a>`;
          instagramPostsElement.appendChild(postElement);
        });
      })
      .catch(error => console.error('Error fetching Instagram posts:', error));
  });
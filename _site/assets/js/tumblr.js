const blogIdentifier = 'nova-ayashi.tumblr.com';
const proxyUrl = 'http://67.205.188.225:3000/tumblr'; // Replace with your VPS domain or IP and port

async function fetchTumblrPosts() {
  try {
    console.log('Fetching Tumblr posts...');
    const response = await fetch(`${proxyUrl}?blogIdentifier=${blogIdentifier}`);
    const data = await response.json();
    console.log('Fetched data:', data);
    const posts = data.response.posts;
    displayTumblrPosts(posts);
  } catch (error) {
    console.error('Error fetching Tumblr posts:', error);
  }
}

function displayTumblrPosts(posts) {
  const sidebar = document.getElementById('sidebar');
  const tumblrFeed = document.createElement('div');
  tumblrFeed.id = 'tumblr-feed';

  // Limit to the latest 3 posts
  const latestPosts = posts.slice(0, 3);

  latestPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'tumblr-post';

    // Check if the post contains an image
    let imageHtml = '';
    if (post.type === 'photo' && post.photos && post.photos.length > 0) {
      const imageUrl = post.photos[0].original_size.url;
      imageHtml = `<img src="${imageUrl}" alt="${post.summary}" style="max-width: 100%;">`;
    }

    postElement.innerHTML = `
      ${imageHtml}
      <p>${post.summary}</p>
      <a href="${post.post_url}" target="_blank">Read more</a>
    `;
    tumblrFeed.appendChild(postElement);
  });

  // Clear previous feed and append new feed
  sidebar.innerHTML = '';
  sidebar.appendChild(tumblrFeed);
}

fetchTumblrPosts();
const blogIdentifier = 'nova-ayashi.tumblr.com';
const corsProxy = 'https://proxy.cors.sh/';
const apiUrl = 'https://server.mkultra.monster/tumblr';
const corsApiKey = 'live_55b35c983c867b44763d6def9bb0cc78bbb43042296b989c415d44bcd197cf6c'; // Replace with your actual API key

function fetchWithProxy(url, params) {
  return fetch(`${corsProxy}${url}`, {
    ...params,
    headers: {
      ...params.headers,
      'x-cors-api-key': corsApiKey,
    }
  });
}

async function fetchTumblrPosts() {
  try {
    console.log('Fetching Tumblr posts...');
    const response = await fetchWithProxy(`${apiUrl}?blogIdentifier=${blogIdentifier}`, {
      headers: {
        'Origin': window.location.origin, // Include the origin header
        'X-Requested-With': 'XMLHttpRequest' // Include the x-requested-with header
      }
    });

    // Check if the response is OK and the content type is JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Response text:', text);
      throw new Error('Response is not JSON');
    }

    const data = await response.json();
    console.log('Fetched data:', data);
    const posts = data.response.posts;
    displayTumblrPosts(posts);
  } catch (error) {
    console.error('Error fetching Tumblr posts:', error);
  }
}

function displayTumblrPosts(posts) {
  const tumblrFeedContainer = document.getElementById('tumblr-feed-container');
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
    console.log('Post element HTML:', postElement.innerHTML);
    tumblrFeed.appendChild(postElement);
  });

  // Clear previous feed and append new feed
  tumblrFeedContainer.innerHTML = '';
  tumblrFeedContainer.appendChild(tumblrFeed);

  // Log the updated sidebar content for debugging
  console.log('Updated tumblr feed content:', tumblrFeedContainer.innerHTML);
}

fetchTumblrPosts();
const blogIdentifier = 'nova-ayashi.tumblr.com';
const corsProxy = 'https://server.mkultra.monster:3000/proxy?url=';
const apiUrl = `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts`;
const apiKey = 'tkzBcfe50toJjkOkT3LpubZjOGVL3nOmwOASEVA0d2hJILYOPW';
const postsPerPage = 1; // Number of posts to fetch

async function fetchTumblrPosts(offset = 0) {
  try {
    console.log('Fetching Tumblr posts...');
    const response = await fetch(`${corsProxy}${encodeURIComponent(`${apiUrl}?api_key=${apiKey}&offset=${offset}&limit=${postsPerPage}`)}`);

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

  posts.forEach(post => {
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
      <p class="center-align"><a href="${post.post_url}" target="_blank">Read more</a></p>
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
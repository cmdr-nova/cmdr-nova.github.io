const apiKey = 'fqSGD7oySzZojmigIu6irCjfWX3sz4jjRNvXVmp92jyVfoApIf';
const blogIdentifier = 'nova-ayashi.tumblr.com';
const corsProxy = 'https://cors-anywhere.herokuapp.com/';

async function fetchTumblrPosts() {
  try {
    const response = await fetch(`${corsProxy}https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=${apiKey}`);
    const data = await response.json();
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

  sidebar.appendChild(tumblrFeed);
}

fetchTumblrPosts();
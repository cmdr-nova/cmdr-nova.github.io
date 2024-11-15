const rss_url = 'https://mkultra.monster/@cmdr_nova.rss';
let mastoDiv = document.getElementById('mastodon');
const profileUrl = 'https://mkultra.monster/@cmdr_nova';
let userAvatar = ''; // Initialize userAvatar as an empty string
const username = '@cmdr_nova';

// Function to fetch the avatar URL
async function fetchAvatar() {
  try {
    const response = await fetch(profileUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html'
      }
    });

    if (response.ok) {
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const metaOgImage = doc.querySelector('meta[property="og:image"]');
      const latestAvatarUrl = metaOgImage ? metaOgImage.content : null;

      if (latestAvatarUrl) {
        userAvatar = latestAvatarUrl;
        console.log('Avatar updated to:', latestAvatarUrl);
        fetchMastodonFeed(); // Fetch the Mastodon feed after updating the avatar
      } else {
        console.error('No avatar URL found in the profile page');
      }
    } else {
      console.error('Failed to fetch the profile page');
    }
  } catch (error) {
    console.error('Error fetching the profile page:', error);
  }
}

// Function to fetch the Mastodon feed
function fetchMastodonFeed() {
  // Fetch the RSS feed
  fetch(rss_url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
      const items = data.querySelectorAll("item");
      const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
      const dayFormatter = new Intl.DateTimeFormat('en', { day: 'numeric' });
      const yearFormatter = new Intl.DateTimeFormat('en', { year: 'numeric' });

      items.forEach(el => {
        let content = el.querySelector("description").innerHTML.trim();
        if (content.includes("Content warning:")) {
          return;
        }
        let date = new Date(el.querySelector("pubDate").innerHTML);
        let postUrl = el.querySelector("link").innerHTML;
        let article = document.createElement('article');
        let month = monthFormatter.format(date);
        let day = dayFormatter.format(date);
        let year = yearFormatter.format(date);

        // Create the post header with avatar and username
        let header = document.createElement('div');
        header.className = 'post-header';
        header.innerHTML = `
          <img src="${userAvatar}" alt="User Avatar" class="user-avatar no-center dynamic-avatar"> &nbsp;
          <span class="username">${username}</span>
          <a href="${postUrl}" target="_blank" class="post-date">${month} ${day}, ${year}</a>
        `;

        // Create the post content
        let postContent = document.createElement('div');
        postContent.className = 'post-content';
        postContent.innerHTML = decodeEntity(content);

        // Check for media content
        let media = el.querySelector("content");
        if (media !== null) {
          let mediaUrl = media.getAttribute("url");
          if (mediaUrl !== null) {
            postContent.innerHTML += `<img src="${mediaUrl}" class="post-media" />`;
          }
        }

        article.appendChild(header);
        article.appendChild(postContent);
        mastoDiv.appendChild(article);
      });
    })
    .catch(error => console.error('Error fetching Mastodon feed:', error));
}

// Function to decode HTML entities
function decodeEntity(input) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
}

// Fetch the avatar and then the Mastodon feed
fetchAvatar();
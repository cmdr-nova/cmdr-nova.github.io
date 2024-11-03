const rss_url = 'https://mkultra.monster/@cmdr_nova.rss';
let mastoDiv = document.getElementById('mastodon');

// Fetch the RSS feed
fetch(rss_url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
        const items = data.querySelectorAll("item");
        const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long'});
        const dayFormatter = new Intl.DateTimeFormat('en', { day: 'numeric'});
        const yearFormatter = new Intl.DateTimeFormat('en', { year: 'numeric'});

        const userAvatar = 'https://mkultra.monster/system/accounts/avatars/111/939/142/189/797/780/original/f0c02ed45a83472f.png'; // Replace with user avatar URL
        const username = '@cmdr_nova';

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
                <img src="${userAvatar}" alt="User Avatar" class="user-avatar no-center"> &nbsp;
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

// Function to decode HTML entities
function decodeEntity(input) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = input;
    return textarea.value;
}
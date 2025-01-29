document.addEventListener("DOMContentLoaded", function() {
  const rssUrl = "https://labyrinth.zone/users/daemon_nova.rss";
  const profileUrl = "https://labyrinth.zone/users/daemon_nova";
  const feedContainer = document.getElementById("akkoma-feed");

  console.log("Fetching profile page from:", profileUrl);

  // Function to fetch and parse the profile page
  async function fetchProfilePage(url) {
    try {
      const response = await fetch(url);
      console.log("Profile page response:", response);
      const text = await response.text();
      const parser = new DOMParser();
      const html = parser.parseFromString(text, "text/html");
      console.log("Parsed HTML:", html);
      return html;
    } catch (error) {
      console.error("Error fetching profile page:", error);
      return null;
    }
  }

  // Function to fetch and parse the RSS feed
  async function fetchRSSFeed(url) {
    try {
      const response = await fetch(url);
      console.log("RSS feed response:", response);
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "application/xml");
      console.log("Parsed XML:", xml);
      return xml;
    } catch (error) {
      console.error("Error fetching RSS feed:", error);
      return null;
    }
  }

  // Function to decode HTML entities
  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  // Function to display the RSS feed items
  function displayFeedItems(xml, avatarUrl, username) {
    const items = xml.querySelectorAll("entry");
    console.log("Feed items:", items);

    items.forEach(item => {
      const id = item.querySelector("id").textContent;
      const contentElement = item.querySelector("content") || item.querySelector("summary");
      const content = contentElement ? decodeHtml(contentElement.textContent) : "";
      const pubDate = item.querySelector("updated").textContent;

      const itemElement = document.createElement("div");
      itemElement.classList.add("akkoma-item");

      const headerElement = document.createElement("div");
      headerElement.classList.add("akkoma-header");

      const avatarElement = document.createElement("img");
      avatarElement.classList.add("akkoma-avatar");
      avatarElement.src = avatarUrl;
      avatarElement.alt = "User Avatar";

      const usernameElement = document.createElement("p");
      usernameElement.classList.add("akkoma-username");
      usernameElement.textContent = username;

      headerElement.appendChild(avatarElement);
      headerElement.appendChild(usernameElement);

      const contentElementDiv = document.createElement("p");
      contentElementDiv.classList.add("akkoma-content");
      contentElementDiv.innerHTML = content;

      const pubDateElement = document.createElement("p");
      pubDateElement.classList.add("akkoma-pubdate");
      pubDateElement.innerHTML = `Published on: <a href="${id}" target="_blank">${new Date(pubDate).toLocaleDateString()}</a>`;

      itemElement.appendChild(headerElement);
      itemElement.appendChild(contentElementDiv);
      itemElement.appendChild(pubDateElement);

      feedContainer.appendChild(itemElement);
    });
  }

  // Fetch the profile page to get the avatar URL and username
  fetchProfilePage(profileUrl).then(html => {
    if (html) {
      const avatarUrl = html.querySelector('meta[property="og:image"]').getAttribute("content");
      const fullUsername = html.querySelector('meta[name="twitter:title"]').getAttribute("content");
      const usernameMatch = fullUsername.match(/\(@([^)]+)\)/); // Extract the username within parentheses
      const username = usernameMatch ? `@${usernameMatch[1]}` : fullUsername; // Use the extracted username or fallback to fullUsername
      console.log("User avatar URL:", avatarUrl);
      console.log("Username:", username);

      // Fetch and display the RSS feed
      fetchRSSFeed(rssUrl).then(xml => {
        if (xml) {
          displayFeedItems(xml, avatarUrl, username);
        } else {
          feedContainer.innerHTML = "<p>Error loading RSS feed. Please try again later.</p>";
        }
      });
    } else {
      feedContainer.innerHTML = "<p>Error loading profile page. Please try again later.</p>";
    }
  });
});
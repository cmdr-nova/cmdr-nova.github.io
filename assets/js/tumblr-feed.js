document.addEventListener("DOMContentLoaded", function() {
  const tumblrFeedUrl = "https://nova-ayashi.tumblr.com/rss";
  const corsProxyUrl = "https://api.allorigins.win/get?url="; // Alternative CORS proxy service
  const tumblrContent = document.getElementById("tumblr-content");

  console.log("Fetching Tumblr feed...");

  fetch(corsProxyUrl + encodeURIComponent(tumblrFeedUrl))
    .then(response => {
      console.log("Received response:", response);
      return response.json();
    })
    .then(data => {
      console.log("Parsing response text...");
      const parser = new window.DOMParser();
      const xmlData = parser.parseFromString(data.contents, "text/xml");
      console.log("Parsed XML data:", xmlData);
      const items = xmlData.querySelectorAll("item");
      let latestPost = null;

      items.forEach(item => {
        const categories = Array.from(item.getElementsByTagName("category")).map(cat => cat.textContent.toLowerCase());
        console.log("Post categories:", categories);
        if (categories.includes("reddit") && categories.includes("lemmy")) {
          latestPost = item;
          return;
        }
      });

      if (latestPost) {
        const title = latestPost.querySelector("title").textContent;
        const link = latestPost.querySelector("link").textContent;
        const description = latestPost.querySelector("description").textContent;
        const pubDate = new Date(latestPost.querySelector("pubDate").textContent).toLocaleDateString();

        console.log("Latest post found:", { title, link, description, pubDate });

        tumblrContent.innerHTML = `
          <h4><a href="${link}" target="_blank">${title}</a></h4>
          <p>${description}</p>
          <span class="date"><i>published</i> ${pubDate}</span>
        `;
      } else {
        console.log("No recent posts with the tags 'reddit' and 'lemmy'.");
        tumblrContent.innerHTML = "<p>No recent posts with the tags 'reddit' and 'lemmy'.</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching the Tumblr feed:", error);
      tumblrContent.innerHTML = "<p>Error fetching Tumblr feed</p>";
    });
});
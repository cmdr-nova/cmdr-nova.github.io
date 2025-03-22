document.addEventListener("DOMContentLoaded", function () {
  const tumblrFeedUrl = "https://nova-ayashi.tumblr.com/rss";
  const corsProxyUrl = "https://api.allorigins.win/get?url="; // Alternative CORS proxy service
  const tumblrContent = document.getElementById("tumblr-content");

  console.log("Fetching Tumblr feed...");

  fetch(corsProxyUrl + encodeURIComponent(tumblrFeedUrl))
    .then((response) => {
      console.log("Received response:", response);
      return response.json();
    })
    .then((data) => {
      console.log("Parsing response text...");
      const parser = new window.DOMParser();
      const xmlData = parser.parseFromString(data.contents, "text/xml");
      console.log("Parsed XML data:", xmlData);
      const items = Array.from(xmlData.querySelectorAll("item"));

      // Filter items to include only those tagged with "reddit" and "lemmy"
      const filteredItems = items.filter((item) => {
        const categories = Array.from(item.getElementsByTagName("category")).map((cat) =>
          cat.textContent.toLowerCase()
        );
        return categories.includes("reddit") && categories.includes("lemmy");
      });

      if (filteredItems.length > 0) {
        // Select a random item from the filtered list
        const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];

        const title = randomItem.querySelector("title").textContent.trim(); // Get plain text title
        const link = randomItem.querySelector("link").textContent.trim();
        let description = randomItem.querySelector("description").textContent.trim().replace(/\n/g, "<br>"); // Preserve paragraph returns
        const pubDate = new Date(randomItem.querySelector("pubDate").textContent).toLocaleDateString();

        // Extract image URL from <media:content>, <enclosure>, or <description>
        let imageUrl = randomItem.querySelector("media\\:content, enclosure")?.getAttribute("url") || "";

        // If no image URL is found, try extracting it from the description
        if (!imageUrl && description.includes("<img")) {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = description;
          const imgElement = tempDiv.querySelector("img");
          imageUrl = imgElement ? imgElement.src : "";
        }

        // Remove any <img> tags from the description to avoid duplication
        if (description.includes("<img")) {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = description;
          tempDiv.querySelectorAll("img").forEach((img) => img.remove());
          description = tempDiv.innerHTML; // Update the description without images
        }

        console.log("Random post found:", { title, link, description, pubDate, imageUrl });

        tumblrContent.innerHTML = `
          <div class="tumblr-post">
            <a href="${link}" target="_blank">
              <img src="${imageUrl}" alt="${title}" class="tumblr-post-image">
            </a>
            <p>${description}</p>
            <span class="date"><i>published</i> ${pubDate}</span>
          </div>
        `;
      } else {
        console.log("No posts found with the tags 'reddit' and 'lemmy'.");
        tumblrContent.innerHTML = "<p>No posts found with the tags 'reddit' and 'lemmy'.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching the Tumblr feed:", error);
      tumblrContent.innerHTML = "<p>Error fetching Tumblr feed</p>";
    });
});
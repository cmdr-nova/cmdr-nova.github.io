document.addEventListener("DOMContentLoaded", function () {
    const feedUrl = `https://listenbrainz.org/syndication-feed/user/foxx_nova/listens?minutes=240&_=${new Date().getTime()}`;
    const feedContainer = document.getElementById("listenbrainz-feed");
  
    fetch(feedUrl)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");
        const entries = xmlDoc.getElementsByTagName("entry");
  
        if (entries.length === 0) {
          feedContainer.innerHTML = "<p>No recent listens found.</p>";
          return;
        }
  
        let htmlContent = "<ul>";
        for (let i = 0; i < Math.min(entries.length, 3); i++) { // Restrict to 3 latest listens
          const title = entries[i].getElementsByTagName("title")[0].textContent;
          const link = entries[i].getElementsByTagName("link")[0].getAttribute("href");
          const updated = entries[i].getElementsByTagName("updated")[0].textContent; // Example metadata
          htmlContent += `
            <li>
              <a href="${link}" target="_blank" class="listen-title">${title}</a>
              <div class="listen-meta">Listened: ${new Date(updated).toLocaleString()}</div>
            </li>`;
        }
        htmlContent += "</ul>";
        feedContainer.innerHTML = htmlContent;
      })
      .catch((error) => {
        console.error("Error fetching ListenBrainz feed:", error);
        feedContainer.innerHTML = "<p>Failed to load recent listens.</p>";
      });
  });
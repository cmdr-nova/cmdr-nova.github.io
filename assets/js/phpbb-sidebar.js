document.addEventListener("DOMContentLoaded", function () {
    const feedUrl = "https://forum.mkultra.monster/feed.php";
    const postsContainer = document.getElementById("phpbb-posts");

    fetch(feedUrl)
        .then((response) => response.text())
        .then((data) => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const entries = xml.querySelectorAll("entry");
            postsContainer.innerHTML = "";

            if (entries.length === 0) {
                postsContainer.innerHTML = "<li>No recent posts found.</li>";
                return;
            }

            entries.forEach((entry, index) => {
                if (index < 5) { // Limit to the latest 5 posts
                    const titleElement = entry.querySelector("title");
                    const linkElement = entry.querySelector("link");

                    const title = titleElement ? titleElement.textContent.trim() : "Untitled Post";
                    const link = linkElement ? linkElement.getAttribute("href") : "#";

                    const listItem = document.createElement("li");
                    const anchor = document.createElement("a");
                    anchor.href = link;
                    anchor.textContent = title;
                    anchor.target = "_blank";

                    listItem.appendChild(anchor);
                    postsContainer.appendChild(listItem);
                }
            });
        })
        .catch((error) => {
            console.error("Error fetching PHPBB Atom feed:", error);
            postsContainer.innerHTML = "<li>Failed to load posts.</li>";
        });
});
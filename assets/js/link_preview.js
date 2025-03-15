document.addEventListener("DOMContentLoaded", function() {
    const linkPreviews = document.querySelectorAll(".link-preview");
  
    linkPreviews.forEach(preview => {
      const url = preview.dataset.url;
  
      fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}?app_id=2d9712a7-42ef-41e8-a959-70f5aebd3429`)
        .then(response => response.json())
        .then(data => {
          const title = data.hybridGraph.title;
          const image = data.hybridGraph.image;
          const description = data.hybridGraph.description;
          const siteName = data.hybridGraph.site_name;
  
          preview.innerHTML = `
            <a href="${url}" target="_blank">
              <div class="link-preview-image">
                <img src="${image}" alt="${title}">
              </div>
              <div class="link-preview-content">
                <h3>${title}</h3>
                <p>${description}</p>
                <span>${siteName}</span>
              </div>
            </a>
          `;
        })
        .catch(error => {
          console.error('Error fetching Open Graph data:', error);
        });
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  Promise.all([
    fetch('/assets/js/posts_metadata.json').then(response => response.json()),
    fetch('/assets/js/notes_metadata.json').then(response => response.json()),
    fetch('/assets/js/logs_metadata.json').then(response => response.json())
  ])
  .then(([posts, notes, logs]) => {
      console.log('Parsed posts metadata:', posts);
      console.log('Parsed notes metadata:', notes);
      console.log('Parsed logs metadata:', logs);

      const allItems = [...posts, ...notes, ...logs];
      const suggestedPostsList = document.getElementById('suggested-posts-list');
      if (!suggestedPostsList) {
        console.error('Suggested posts list element not found');
        return;
      }

      // Shuffle the items array
      for (let i = allItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
      }

      // Select a few random items (e.g., 3)
      const randomItems = allItems.slice(0, 3);

      // Function to check if URL leads to a 404 page
      function checkUrl(url, item, callback) {
        fetch(url, { method: 'HEAD' })
          .then(response => {
            if (response.status === 404) {
              // Subtract one day from the date in the URL if things get weird
              const dateParts = item.date.split(' ')[0].split('-');
              const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
              date.setDate(date.getDate() - 1);
              const newDateStr = date.toISOString().split('T')[0].replace(/-/g, '/');
              const newUrl = url.replace(/\/\d{4}\/\d{2}\/\d{2}\//, `/${newDateStr}/`);
              callback(newUrl);
            } else {
              callback(url);
            }
          })
          .catch(error => {
            console.error('Error checking URL:', error);
            callback(url);
          });
      }

      // Insert random items onto the page
      randomItems.forEach(item => {
        let url = item.url;
        checkUrl(url, item, function(validUrl) {
          const itemElement = document.createElement('div');
          itemElement.classList.add('suggested-post');
          itemElement.innerHTML = `
            <a href="${validUrl}">
              <h4>${item.title}</h4>
              <p>${new Date(item.date).toLocaleDateString()}</p>
            </a>
          `;
          suggestedPostsList.appendChild(itemElement);
        });
      });

      console.log('Suggested posts inserted');
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
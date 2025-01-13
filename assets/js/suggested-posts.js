document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    fetch('/assets/js/posts_metadata.json')
      .then(response => {
        console.log('Fetched posts metadata:', response);
        return response.json();
      })
      .then(posts => {
        console.log('Parsed posts metadata:', posts);
        const suggestedPostsList = document.getElementById('suggested-posts-list');
        if (!suggestedPostsList) {
          console.error('Suggested posts list element not found');
          return;
        }
  
        // Shuffle the posts array, and spin the wheel of misfortune
        for (let i = posts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [posts[i], posts[j]] = [posts[j], posts[i]];
        }
  
        // Select a few random posts (e.g., 3), can be increased if you're out of your mind
        const randomPosts = posts.slice(0, 3);
  
        // Function to check if URL leads to a 404 page
        function checkUrl(url, post, callback) {
          fetch(url, { method: 'HEAD' })
            .then(response => {
              if (response.status === 404) {
                // Subtract one day from the date in the URL if things get fucky
                const dateParts = post.date.split(' ')[0].split('-');
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
  
        // Insert random posts onto the page
        randomPosts.forEach(post => {
          let url = post.url;
          checkUrl(url, post, function(validUrl) {
            const postElement = document.createElement('div');
            postElement.classList.add('suggested-post');
            postElement.innerHTML = `
              <a href="${validUrl}">
                <h4>${post.title}</h4>
                <p>${new Date(post.date).toLocaleDateString()}</p>
              </a>
            `;
            suggestedPostsList.appendChild(postElement);
          });
        });
  
        console.log('Suggested posts inserted');
      })
      .catch(error => console.error('Error fetching posts metadata:', error));
  });
document.addEventListener('DOMContentLoaded', function() {
    const feedUrl = 'https://server.mkultra.monster:8443/pixelfed/users/cmdr_nova.atom';
  
    fetch(feedUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(str => {
        console.log('Fetched Atom feed:', str); // Debugging output
        const parser = new DOMParser();
        const doc = parser.parseFromString(str, 'application/xml');
        const entries = Array.from(doc.querySelectorAll('entry')).slice(0, 6); // Limit to the last 5 entries
  
        const container = document.getElementById('pixelfed-posts');
        container.innerHTML = '';
  
        entries.forEach(entry => {
          const postElement = document.createElement('div');
          postElement.classList.add('pixelfed-post');
  
          const title = entry.querySelector('title').textContent;
          const content = entry.querySelector('content').textContent;
          const link = entry.querySelector('link').getAttribute('href');
  
          console.log('Post title:', title); // Debugging output
          console.log('Post content:', content); // Debugging output
  
          const imageElement = document.createElement('img');
          const imgSrcMatch = content.match(/<img[^>]+src="([^">]+)"/i);
          if (imgSrcMatch) {
            imageElement.src = imgSrcMatch[1];
            imageElement.alt = title;
            console.log('Image source:', imgSrcMatch[1]); // Debugging output
          } else {
            console.log('No image found in post content'); // Debugging output
          }
  
          if (imgSrcMatch) {
            const linkElement = document.createElement('a');
            linkElement.href = link;
            linkElement.target = '_blank';
            linkElement.appendChild(imageElement);
  
            postElement.appendChild(linkElement);
            container.appendChild(postElement);
            console.log('Appended image to post element'); // Debugging output
          }
        });
      })
      .catch(error => console.error('Error fetching PixelFed posts:', error));
  });
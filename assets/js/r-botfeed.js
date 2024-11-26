document.addEventListener('DOMContentLoaded', function() {
    const feedContainer = document.querySelector('.reddit-bot');
  
    fetch('https://mkultra.monster/@net_run.rss')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then(data => {
        const items = data.querySelectorAll('item');
        console.log('RSS Feed Items:', items); // Debugging output
        if (items.length > 0) {
          const latestItem = items[0];
          const titleElement = latestItem.querySelector('title');
          const linkElement = latestItem.querySelector('link');
          const descriptionElement = latestItem.querySelector('description');
          const mediaContentElement = latestItem.querySelector('media\\:content, content');
  
          const title = titleElement ? titleElement.textContent : 'No title available';
          const link = linkElement ? linkElement.textContent : '#';
          const description = descriptionElement ? descriptionElement.textContent : 'No description available.';
          const mediaUrl = mediaContentElement ? mediaContentElement.getAttribute('url') : null;
  
          const postElement = document.createElement('div');
          postElement.classList.add('r-botfeed');
  
          const postTitle = document.createElement('h3');
          postTitle.textContent = title;
  
          const postLink = document.createElement('a');
          postLink.href = link;
          postLink.textContent = 'Read more';
          postLink.target = '_blank';
  
          const postDescription = document.createElement('p');
          postDescription.innerHTML = description;
  
          postElement.appendChild(postTitle);
          postElement.appendChild(postDescription);
          postElement.appendChild(postLink);
  
          if (mediaUrl) {
            const postImage = document.createElement('img');
            postImage.src = mediaUrl;
            postImage.alt = title;
            postElement.appendChild(postImage);
          }
  
          feedContainer.appendChild(postElement);
        } else {
          console.error('Error: No items found in the RSS feed');
        }
      })
      .catch(error => console.error('Error fetching the RSS feed:', error));
  });
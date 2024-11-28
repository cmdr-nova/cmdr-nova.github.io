async function fetchRSSFeed() {
    try {
      const rssUrl = 'https://bsky.app/profile/did:plc:iexyihzoyxjj2t5im7vlcdvv/rss'; // Replace with your RSS feed URL
      const proxyUrl = `https://server.mkultra.monster:3000/proxy?url=${encodeURIComponent(rssUrl)}`;
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'text/html'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const text = await response.text();
      console.log('Fetched RSS feed:', text);
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'application/xml');
      const items = xmlDoc.getElementsByTagName('item');
      console.log('Parsed RSS feed items:', items);
      displayRSSFeed(items);
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    }
  }
  
  function displayRSSFeed(items) {
    const rssContainer = document.getElementById('rss-feed');
    rssContainer.innerHTML = '<p>Bluesky Feed</p><hr><br />';
    const list = document.createElement('ul');
  
    for (let i = 0; i < Math.min(items.length, 2); i++) {
      const item = items[i];
      const titleElement = item.getElementsByTagName('title')[0];
      const descriptionElement = item.getElementsByTagName('description')[0];
      const contentElement = item.getElementsByTagName('content:encoded')[0];
      const linkElement = item.getElementsByTagName('link')[0];
      const pubDateElement = item.getElementsByTagName('pubDate')[0];
      const enclosureElement = item.getElementsByTagName('enclosure')[0];
  
      const listItem = document.createElement('li');
  
      if (titleElement) {
        const title = titleElement.textContent;
        const titleLink = document.createElement('a');
        titleLink.href = linkElement ? linkElement.textContent : '#';
        titleLink.textContent = title;
        listItem.appendChild(titleLink);
      }
  
      if (pubDateElement) {
        const pubDate = new Date(pubDateElement.textContent);
        const pubDateText = document.createElement('p');
        pubDateText.textContent = pubDate.toLocaleDateString();
        listItem.appendChild(pubDateText);
      }
  
      if (descriptionElement) {
        const description = descriptionElement.textContent;
        const descriptionText = document.createElement('p');
        descriptionText.innerHTML = description;
        listItem.appendChild(descriptionText);
  
        // Extract image from description if available
        const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
          const image = document.createElement('img');
          image.src = imgMatch[1];
          image.alt = 'RSS feed image';
          listItem.appendChild(image);
        }
      }
  
      if (contentElement) {
        const content = contentElement.textContent;
        const contentText = document.createElement('div');
        contentText.innerHTML = content;
        listItem.appendChild(contentText);
  
        // Extract image from content if available
        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
          const image = document.createElement('img');
          image.src = imgMatch[1];
          image.alt = 'RSS feed image';
          listItem.appendChild(image);
        }
      }
  
      if (enclosureElement) {
        const imageUrl = enclosureElement.getAttribute('url');
        if (imageUrl) {
          const image = document.createElement('img');
          image.src = imageUrl;
          image.alt = 'RSS feed image';
          listItem.appendChild(image);
        }
      }
  
      list.appendChild(listItem);
    }
  
    rssContainer.appendChild(list);
  }
  
  document.addEventListener('DOMContentLoaded', fetchRSSFeed);
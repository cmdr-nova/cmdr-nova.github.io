async function fetchRSSFeed() {
    try {
      const rssUrl = 'https://cmdrnova.angelfire.com/blog/rss.xml'; // Replace with your RSS feed URL
      const proxyUrl = `https://server.mkultra.monster:3000/rss-proxy?url=${encodeURIComponent(rssUrl)}`;
      console.log(`Fetching RSS feed from: ${proxyUrl}`);
      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      console.log('Fetched RSS feed:', text);
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'application/xml');
      const items = xmlDoc.querySelectorAll('item');
      console.log('Parsed RSS feed items:', items);
      displayRSSFeed(items);
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    }
  }
  
  function displayRSSFeed(items) {
    const rssContainer = document.getElementById('rss-feed');
    rssContainer.innerHTML = '<p>Angelfire posts</p>';
    const list = document.createElement('ul');
  
    for (let i = 0; i < Math.min(items.length, 3); i++) {
      const item = items[i];
      const title = item.querySelector('title').textContent;
      const link = item.querySelector('link').textContent;
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
      list.appendChild(listItem);
    }
  
    rssContainer.appendChild(list);
  }
  
  fetchRSSFeed();
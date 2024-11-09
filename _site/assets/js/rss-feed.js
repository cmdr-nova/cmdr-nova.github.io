async function fetchRSSFeed() {
  try {
    const rssUrl = 'https://bsky.app/profile/did:plc:zzofxcatgqb5wpkqetnng4wo/rss'; // Replace with your RSS feed URL
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
    const items = xmlDoc.getElementsByTagName('item');
    console.log('Parsed RSS feed items:', items);
    displayRSSFeed(items);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
}

function displayRSSFeed(items) {
  const rssContainer = document.getElementById('rss-feed');
  rssContainer.innerHTML = '<p>Bluesky Feed</p>';
  const list = document.createElement('ul');

  for (let i = 0; i < Math.min(items.length, 3); i++) {
    const item = items[i];
    const descriptionElement = item.getElementsByTagName('description')[0];
    const contentElement = item.getElementsByTagName('content:encoded')[0];
    const linkElement = item.getElementsByTagName('link')[0];
    const pubDateElement = item.getElementsByTagName('pubDate')[0];

    if (!descriptionElement && !contentElement) {
      console.warn('Missing description or content in RSS feed item:', item);
      continue;
    }

    const content = descriptionElement ? descriptionElement.textContent : contentElement.textContent;
    const truncatedContent = content.length > 50 ? content.substring(0, 50) + '...' : content;
    let author = 'Unknown author';
    let link = '#';
    if (linkElement) {
      link = linkElement.textContent;
      const match = link.match(/profile\/([^\/]+)/);
      if (match) {
        author = match[1];
      }
    }

    const pubDate = pubDateElement ? new Date(pubDateElement.textContent).toLocaleDateString() : 'Unknown date';

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <p><strong>${author}</strong></p>
      <p><small class="rss-date">posted: ${pubDate}</small></p>
      <p>${truncatedContent} <a href="${link}" target="_blank">more</a></p>
    `;
    list.appendChild(listItem);
  }

  rssContainer.appendChild(list);
}

// Call the function to fetch and display the RSS feed
fetchRSSFeed();
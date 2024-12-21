async function fetchTrendingTags() {
  try {
    console.log('Fetching trending tags from Mastodon...');
    const response = await fetch('https://mkultra.monster/api/v1/trends/tags');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched trending tags:', data);
    displayTrendingTags(data);
  } catch (error) {
    console.error('Error fetching trending tags:', error);
  }
}

function displayTrendingTags(tags) {
  const mastodonContainer = document.getElementById('mastodon-trending');
  if (!mastodonContainer) {
    console.error('Mastodon trending container element not found');
    return;
  }
  console.log('Displaying trending tags:', tags);
  mastodonContainer.innerHTML = '<p>Trending on the Fediverse</p><hr style="margin-bottom: 1em;">';
  const list = document.createElement('ul');

  // Only show the top 5 trending tags
  const topTags = tags.slice(0, 5);

  topTags.forEach(tag => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="https://mkultra.monster/tags/${tag.name}" target="_blank">#${tag.name}</a> - ${tag.history[0].uses} uses`;
    list.appendChild(listItem);
  });

  mastodonContainer.appendChild(list);
}

fetchTrendingTags();
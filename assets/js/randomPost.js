document.addEventListener('DOMContentLoaded', function() {
    const randomPostContainer = document.getElementById('random-post');
  
    const LEMMY_INSTANCES = [
      'https://lemmynsfw.com',
      'https://ani.social',
      'https://lemmy.world',
      'https://lemmy.ml',
      'https://lemmy.blahaj.zone',
      'https://sopuli.xyz',
      'https://feddit.uk',
      'https://sh.itjust.works',
      'https://mander.xyz',
      'https://lemmy.ca',
      'https://beehaw.org'
    ];
  
    const LEMMY_COMMUNITIES = [
      /*'ecchi@lemmynsfw.com',*/
      /*'animemidriff@lemmynsfw.com',*/
      'anime@ani.social',
      'animewallpapers@ani.social',
      /*'cosplay_girls@lemmynsfw.com',
      'cosplaygirls@lemmy.world',
      'cosplaybabes@lemmy.world',
      'alt@lemmynsfw.com',
      'monstergirl@lemmynsfw.com', */
      'space@lemmy.world',
      'liminalspace@lemmy.world',
      'cyberpunk@lemmy.ml',
      'cyberpunk2077@lemmy.world',
      /*'animefeet@lemmynsfw.com',*/
      'microblogmemes@lemmy.world',
      'lemmyshitpost@lemmy.world',
      '196@lemmy.blahaj.zone',
      'aneurysmposting@sopuli.xyz',
      'fedimemes@feddit.uk',
      'shittyfoodporn@lemmy.ca',
      'dataisbeautiful@mander.xyz',
      'memes@lemmy.ml',
      'space@beehaw.org',
      'space@lemmy.ml'
    ];
  
    async function fetchLemmyPost(instance, community) {
      const url = `${instance}/api/v3/post/list?community_name=${community}&sort=New&limit=10`;
      const response = await fetch(url);
      const data = await response.json();
      console.log('Lemmy API response:', data);
      if (!data.posts || data.posts.length === 0) {
        throw new Error('No posts found');
      }
      const validPosts = data.posts.filter(post => post.post.url);
      if (validPosts.length === 0) {
        throw new Error('No valid posts found');
      }
      const post = validPosts[Math.floor(Math.random() * validPosts.length)].post;
      return {
        title: post.name,
        url: `${instance}/post/${post.id}`,
        image: post.url.match(/\.(jpeg|jpg|gif|png)$/) ? post.url : null,
        community: community,
        instance: instance
      };
    }
  
    async function displayRandomPost() {
      let post;
      let attempts = 0;
      const maxAttempts = 5;
  
      while (attempts < maxAttempts) {
        try {
          const randomCommunity = LEMMY_COMMUNITIES[Math.floor(Math.random() * LEMMY_COMMUNITIES.length)];
          const instance = randomCommunity.split('@')[1];
          const communityName = randomCommunity.split('@')[0];
          post = await fetchLemmyPost(`https://${instance}`, communityName);
  
          randomPostContainer.innerHTML = `
            <div class="post">
              <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
              ${post.image ? `<a href="${post.url}" target="_blank"><img src="${post.image}" alt="${post.title}" /></a>` : ''}
              <p>Posted via: <a href="${post.url}" target="_blank">${communityName}</a></p>
            </div>
          `;
          return; // Exit the function if a post is successfully fetched
        } catch (error) {
          console.error('Error fetching post:', error);
          attempts++;
        }
      }
  
      randomPostContainer.innerHTML = '<p>Error loading post. Please try again later.</p>';
    }
  
    displayRandomPost();
  });
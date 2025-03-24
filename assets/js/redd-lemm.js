document.addEventListener('DOMContentLoaded', function () {
  const randomImageContainer = document.getElementById('random-image-content');

  const LEMMY_COMMUNITIES = [
    'anime@ani.social',
    'animewallpapers@ani.social',
    'cosplay_girls@lemmynsfw.com',
    'cosplaygirls@lemmy.world',
    'cosplaybabes@lemmy.world',
    'monstergirl@lemmynsfw.com',
    'space@lemmy.world',
    'liminalspace@lemmy.world',
    'cyberpunk@lemmy.ml',
    'cyberpunk2077@lemmy.world',
    'animefeet@lemmynsfw.com',
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

  const REDDIT_COMMUNITIES = [
    'Animewallpaper', 
    'ZeroTwo', 
    'BlueArchive', 
    'ZenlessZoneZero', 
    'Edgerunners', 
    'BaldursGate3', 
    'BokuNoHeroAcademia', 
    'ChainsawMan', 
    'backrooms', 
    'AnimeGirls', 
    'animeART', 
    'liminalspace', 
    'evangelion', 
    'abandonwareDOS', 
    'himikotoga', 
    'SFWmonstergirls', 
    'MotokoKusanagi', 
    'Churchofzerotwo', 
    'ChurchofMarnie', 
    'CuteAnimeGirls', 
    'UnixPorn', 
    'RebeccasPlace', 
    'AnimeSketch', 
    'onigirls', 
    'Animemes', 
    'cosplaybabes',  
    'cosplaygirls',  
    'secondlife',
    'SparkleMains',
    'KukiShinobuMains',
    'MarinKitagawa',
    'SoukakuMains',
    'EllenJoeMains',
    'KamisatoAyaka'
];

  async function fetchLemmyImage(instance, community) {
    const url = `${instance}/api/v3/post/list?community_name=${community}&sort=New&limit=10`;
    console.log(`Fetching from Lemmy community: ${community} on instance: ${instance}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Lemmy API response:', data);
    if (!data.posts || data.posts.length === 0) {
      throw new Error('No posts found');
    }
    const validPosts = data.posts.filter(post => post.post.url.match(/\.(jpeg|jpg|gif|png)$/));
    console.log('Valid Lemmy image posts:', validPosts);
    if (validPosts.length === 0) {
      throw new Error('No valid image posts found');
    }
    const post = validPosts[Math.floor(Math.random() * validPosts.length)].post;
    return {
      title: post.name,
      url: `${instance}/post/${post.id}`,
      image: post.url,
      community: community,
      source: 'Lemmy',
    };
  }

  async function fetchRedditImage(subreddit) {
    const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=10`;
    console.log(`Fetching from Reddit subreddit: ${subreddit}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Reddit API response:', data);
    if (!data.data || !data.data.children || data.data.children.length === 0) {
      throw new Error('No posts found');
    }
    const validPosts = data.data.children.filter(post =>
      post.data.url.match(/\.(jpeg|jpg|gif|png)$/)
    );
    console.log('Valid Reddit image posts:', validPosts);
    if (validPosts.length === 0) {
      throw new Error('No valid image posts found');
    }
    const post = validPosts[Math.floor(Math.random() * validPosts.length)].data;
    return {
      title: post.title,
      url: `https://www.reddit.com${post.permalink}`,
      image: post.url,
      community: subreddit,
      source: 'Reddit',
    };
  }

  async function displayRandomImage() {
    let imagePost;
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
      try {
        const isLemmy = Math.random() < 0.5; // 50% chance to pick Lemmy or Reddit
        if (isLemmy) {
          const randomCommunity = LEMMY_COMMUNITIES[Math.floor(Math.random() * LEMMY_COMMUNITIES.length)];
          const instance = randomCommunity.split('@')[1];
          const communityName = randomCommunity.split('@')[0];
          imagePost = await fetchLemmyImage(`https://${instance}`, communityName);
        } else {
          const randomSubreddit = REDDIT_COMMUNITIES[Math.floor(Math.random() * REDDIT_COMMUNITIES.length)];
          imagePost = await fetchRedditImage(randomSubreddit);
        }

        randomImageContainer.innerHTML = `
          <div class="image-post">
            <a href="${imagePost.url}" target="_blank">
              <img src="${imagePost.image}" alt="${imagePost.title}" loading="lazy" />
            </a>
            <p>From: <a href="${imagePost.url}" target="_blank">${imagePost.community}</a> (${imagePost.source})</p>
          </div>
        `;
        return; // Exit the function if an image is successfully fetched
      } catch (error) {
        console.error('Error fetching image post:', error);
        attempts++;
      }
    }

    randomImageContainer.innerHTML = '<p>Error loading image. Please try again later.</p>';
  }

  displayRandomImage();
});
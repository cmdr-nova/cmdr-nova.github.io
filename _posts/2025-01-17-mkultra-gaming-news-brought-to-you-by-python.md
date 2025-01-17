---
layout: post
title: 'MKULTRA GAMING NEWS: Brought to You By Python'
date: 2025-01-17 09:04
categories:
    - "Development"
tag: [gamingnews, programming, bots]
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
Today, I'm feeling a bit under-the-weather. I've got the aches, the pains, and the coughing fits. Never-the-less, I wanted to do something, *regardless*, and I thought to myself, "You know, there are a few gaming news related bots on the fediverse, and most of them kinda suck, because they have no regard for people's timelines." In that, I mean, a lot of bots I've seen will pump a handful of rounds of feed items into a shotgun, and blast them all over your timeline in extremely short time spans. This sucks, because attempting to read your timeline while a bot spams it, is annoying! So, I solved the problem.

What sparked me wanting to do this, was me, suddenly remembering how I asked one of the gaming news bot curators if he could ... you know, put some kind of limit or interval on posts that his bot shares, or curate it in a way that it doesn't share the same news ten times in five minutes.

I remember him saying something like, "Well, I don't know how to do that."

Being me, and knowing how to use a cronjob, I did it myself, with my own Python code, and my own bot. You can follow that bot <a href="https://mkultra.monster/@mkultra_gaming" target="_blank">here</a>, from my Mastodon instance.

Here's how it's done.

```
import feedparser
import random
from mastodon import Mastodon
import time

# List of RSS feed URLs
rss_feeds = [
    'https://www.polygon.com/rss/index.xml',
    'https://www.dualshockers.com/feed/',
    'https://kotaku.com/rss',
    'https://www.vg247.com/feed/',
    'https://toucharcade.com/feed/',
    'https://www.gamespot.com/feeds/mashup',
    'https://www.ign.com/rss/articles/feed?tags=games',
    'https://www.gematsu.com/feed',
    'https://www.destructoid.com/feed/',
    'https://www.rockpapershotgun.com/feed',
    'https://www.siliconera.com/feed/',
    'https://nichegamer.com/feed/',
    'https://massivelyop.com/feed/',
    'https://www.gamingonlinux.com/article_rss.php',
    'https://www.tabletopgamingnews.com/feed/'
]

# Grab the latest item from a feed, and use retry logic, just in case a feed is dead
def get_latest_item(feed_url, retries=3):
    for attempt in range(retries):
        try:
            feed = feedparser.parse(feed_url)
            if feed.entries:
                return feed.entries[0]
        except Exception as e:
            print(f"Error fetching {feed_url}: {e}")
            if attempt < retries - 1:
                time.sleep(2)  # Wait before retrying
            else:
                return None
    return None

# Look at all feeds
latest_items = []
for feed in rss_feeds:
    item = get_latest_item(feed)
    if item:
        latest_items.append(item)

# Select one at random
if latest_items:
    selected_item = random.choice(latest_items)

    # Custom text
    custom_text = "The latest gaming news! Brought to you and personally curated by cmdr_nova:\n\n"

    # Mastodon credentials
    mastodon = Mastodon(
        access_token='an_access_token_from_mastodon',
        api_base_url='https://mkultra.monster'
    )

    # Post that shit, bro!
    status = f"{custom_text}[{selected_item.title}]\n\n{selected_item.link}"
    mastodon.toot(status)
else:
    print("No items to share.")
```

Here are your requirements:

```
feedparser==6.0.10
Mastodon.py==1.5.1
```

And here's a cronjob using a shell script so that it can activate an environment, execute the script, and then close the environment.

Shell script:
```
#!/bin/bash
cd folder_location_of_script
source environment_name/bin/activate
python3 mkultra-gaming.py
deactivate
```
Cronjob:
```
0 * * * * folder_location_of_script/gaming.sh
```

And you're good to go! This shares once an hour, from a feed, at random, and has retry logic just in case a feed doesn't work, or blocks scripts, or whatever.

Voila.
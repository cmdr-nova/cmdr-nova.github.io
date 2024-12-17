---
layout: post
title: "Python, Swap Out Reddit for Lemmy!"
date: 2024-12-17 02:08
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: [python, lemmy, mastodon, activitypub, programming]
---
As some may know, back when the Reddit devs/CEO decided to follow Musk's decision-making like a lost puppy dog, they restricted their API and killed a ton of third-party apps. This was seen as a very bad move, and it sucked tons of butt. In response to this move, some developers descended upon ActivityPub, and created an alternative, or, *a clone of Reddit*, that operates on AP, and looks exactly the way it did in 2013. This could be a plus, or a minus, depending on who you are and what you like. Also, for a while now, I've been running a script on a VPS that posts random images from select subreddits, to Mastodon. But! Not anymore. Now that script uses Lemmy.

The great thing about Lemmy's API, is that it requires *absolutely no API keys or credentials.* You only need your Mastodon account developer credentials, and you're pretty much already done. I modified my Reddit script, because I want to begin promoting ActivityPub even more-so, now that the owners behind Bluesky have decided that, in record time, they'd like to enshitify their platform. Which, *also* spawned a <a href="https://hexbear.net/" target="_blank">brand new Lemmy instance</a> as some user's response to that.

You can grab <a href="https://github.com/cmdr-nova/lemmy-bot" target="_blank">my script here</a>, and deploy it in about 5 minutes on your own VPS. And I recommend using a VPS, or some kind of environment that can't easily be accessed by the public, unless you want your Mastodon credentials to be public (this can be altered to use the environment, but I haven't done that because I'm lazy).
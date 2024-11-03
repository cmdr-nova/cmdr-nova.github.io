---
layout: post
title: Playing With JavaScript
date: 2024-11-02 20:30 -0400
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
Today I got off of work, sat down on my couch, and promptly passed the *heck* out. Then, I woke up, and ate an italian sub. This was just enough fuel for me to load up VS Code and get back to messing with my website. As you can probably see, if you're reading this from the page itself, I've made some ... *upgrades*.

<img src="/img/posts/playingwithjava/upgrades.gif">

Obviously, I already detail some of what I do in my changelog, in regards to major changes, but I wanted to write up a post about it, because this site is making huge leaps in progress (ever since I redesigned the CSS in order to make this place much more responsive to various screens that people use). And, for being a completely static site built on the Jekyll foundation, you can hardly even tell that's what it is.

Firstly, if you look to the right, you'll see the Mastodon feed. For the longest time, this was just disjointed text with separators. You could only tell that it was coming from my Mastodon posts, because I had some text that said "mkultra feed" up above it. Despite how much I appreciate the original author of the script, I've been wanting to alter it so that it's *much more obvious* it's coming from Mastodon, or a social media website, in-general.

So, I did.

***I would upload this to GitHub, but I don't remember who the author was, and I don't want to just upload a modified version of their script without asking first.***

Now, you'll see that my actual Mastodon account information is linked to each post, as it updates live! If you click on the post date, this will then take you to the actual post itself, on my instance.

Secondly, I have a calendar on the right side of the page further down below this Mastodon feed. I mostly added this for flavor, because I noticed some sites in the indie web and Neocities sphere had little calendars, and rather than steal one, I decided to make one myself. But, in order to make it *unique*, and fun, I wanted to add some additional flavor to that as well.

It had some issues at first, but I've managed to setup some JavaScript in order to pull random top 100 images from the subreddit "/r/animewallpaper" in order to show a random image in the background, upon load. This is, semi, sort of using the Reddit API. And no, I'm not paying them a single dime in order to make this happen.

Next, as most who keep up with my blog will know, I've written python scripts that do numerous things. Such as pulling the top 5 trending posts from specific subreddits, and sending me an email of what's trending, each morning. Another script that generates random text and then posts to Mastodon, based on a database of my own Mastodon posts backed up from the start of 2024, to now. And then, of course, we have my reddit-bot script that pulls from a list of my favorite subreddits and posts a random trending image to both Mastodon, and Tumblr.

In order to integrate this into my webpage, so that my work has some kind of permanence outside of social networks where it may not be as easily seen, I've written some JavaScript that utilizes Tumblr API to create a live feed of the posts that reddit-bot makes specifically to my Tumblr account (because that's mostly the only thing I use it for nowadays, and it didn't make sense to me to put multiple Mastodon account feeds on my site). You can see, over on the left side of the page, that it displays the *exact* text that's posted to Tumblr whenever the bot makes its call, with images in-tact.

Finally, and this is a change many may not *ever* notice. I've written a modal that is used specifically and *only* on my <a class="page-link" href="/pages/haxpunks/">haxPunks page</a>. If you haven't ever visited it, basically, back in 2022 I was making NFTs, and it made me a little money ... *it's why I have some of the tech that I currently do*. Despite all that money being gone, it helped me *a lot* in a period of my life where I was recovering from semi-self isolation that I put myself through for years. And, even though I've mostly stepped away from NFTs due to the volatile and toxic nature of the subculture, I still make little pixel people here and there when I feel like it (completely disconnected from the world of NFTs, despite them existing on the OpenSea blockchain).

But, I wanted the page to be more dynamic and fun to look at.

This modal makes it so that when you click an image of one of the pixel-people I've drawn, it blows it up on the screen without ever leaving the page, and gives you not only a better look, but also a description that's derived from the alt text (I'm still working on writing a description for all of them, so upon posting this, only Charlotte with have a description).

That's *most* of what I've done today, but I can still feel the itch to do even more. What that "more" entails, is entirely up to what my brain decides, whenever it comes to me.

But hey, thanks for reading!
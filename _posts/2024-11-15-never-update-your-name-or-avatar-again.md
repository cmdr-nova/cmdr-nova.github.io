---
layout: post
title: Never Update Your Name or Avatar Again
date: 2024-11-15 14:40
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Scripting"
tag: scripting
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113488719334168240
---
This morning, I woke up from three and a half hours of sleep after a long overnight shift, and decided I wanted to change some things on this site. The first thing I did was delete a bunch of fluff from the sidebars. The next thing I did was make some JavaScript that automatically updates my avatar and author name on posts (and other pages) with whatever I'm using on Mastodon, completely dynamically.

I put both JavaScript files into a repository on GitHub, along with an explanation on how to use them, <a href="https://github.com/cmdr-nova/dynamic_mastodon_info" target="_blank">here</a>. No CORS headers or proxy servers required (this is a frequent problem with things I do here)!

Basically, what both scripts do, is simply read the meta tags from your profile, *on Mastodon*. All you have to do is make sure that you run these scripts in the head of your HTML, input your user profile *into* the top of the scripts, and then include each script's class in an < img > tag and an < a > tag.

And that's it!

Now you can screw around and change your avatar and username on Mastodon, and *any time you do that*, it'll be updated on your website.

If giving the illusion that your website is federated with ActivityPub is something you enjoy doing, this is just *one more way* to do that.
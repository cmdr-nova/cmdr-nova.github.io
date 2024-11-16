---
layout: post
title: Poasting to Mastodon Via Jekyll
date: 2024-11-16 15:19
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Scripting"
tag: scripting
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113494577222900565
---

So, you may be asking yourself, "Hey, didn't you already post the code to this directly on your blog?" And the answer to that question would be, yes. Yes, I posted an *unfinished* version of it. But now, if the universe looks kindly upon me, *it is done*.

Welcome to the ***POAST***!

<a href="https://github.com/cmdr-nova/poast" target="_blank">Now on Github</a>, I've uploaded the scripts needed in order to make this work for *your own* Jekyll blog. You should note that this is *specifically* for Jekyll, and you *will* need a VPS of some kind to host poast.py. Unless you're magic, and you can run Python on a static site.

If you don't know where to start with all that, I suggest taking a look at <a href="https://www.digitalocean.com" target="_blank">Digital Ocean</a>, where you can rent a bare bones VPS for the lowest spec at like 6 dollars a month. And that's really *all you need* for poast.py to run (you don't even need its lowest spec, you could probably execute this script on a 486).

Now, one of the things I mention in the readme on Github, is that I'm using the root user to make this happen. I want to reiterate here, you *probably* shouldn't do this, and would be better off making a new user in order to put all of this together. But, I like to live dangerously, and also I don't feel like reconfiguring everything and moving stuff around.

So it's whatever.

I consider this project one of my bigger achievements, because it took me a *long time* to get to this point. Had I more testosterone and *more* anger, building these scripts could have driven me to put a fist through a wall at times.

But this is one of the things I've been wanting to do, ever since I ditched Wordpress and moved to Jekyll. Because, the way I see it, if you can think of it, *you can build it* (with Python? maybe ... Rust?).

Anyway, I hope this is useful for someone other than me, and, as a side note, if you scroll down on this website and click the DOOM Guy face, you can play a little DOOM.

Edit: I've been informed that you *are* actually able to execute Python in a Github workflow bash. Queue me, tearing out all my hair. Nevertheless, this repo will remain unchanged until/if I decide to utilize this approach (which would be limited by Github's monthly seconds, anyway).
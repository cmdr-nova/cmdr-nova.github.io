---
layout: post
title: Put a Functioning Guestbook On Your Jekyll Site
date: 2024-11-18 20:16
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Web Dev"
tag: webdev
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
So, yesterday, I got home from work late, and wanted to do something *more* with my website. I wasn't happy with cbox as a "guestbook" of sorts. It was intrusive, and it was nothing more than an injection of code from some other source, controlled by some other person. That's no good. I want to be in control of *everything* having to do with, and running on my website. Therefore, I made GuestPoast.

GuestPoast, available to check out <a href="https://github.com/cmdr-nova/GuestPoast" target="_blank">over on Github</a>, is a relatively simple guestbook system that you can setup and use on a static website. In this case, we're using Jekyll, because that's what I know best at this point. But! Because we're using Python, I'm running those scripts on a VPS with a reverse proxy, and runners that keep the guestbook comments live, *at all times*. There is a way to use Github to run Python, among other things, but I'm a little turned off by the limitation of working seconds (I honestly don't know how much I'd use if I used Github as a personal VPS. I have a lot of things running over at Digital Ocean).

But, once you've got it all setup, you can then *also* dive into the JavaScript side of the project, and add naughty words, or *slurs*, that you don't want nefarious users to post. Or, you can troll your visitors by not allowing them to say certain things like, "Hello." Not sure why you'd want to do that, though.

This is one, in a long line of things I've been wanting to do with my website. Ultimately, I'd like my site to be *fully* integrated with ActivityPub, but whether that's actually possible or not remains up-in-the-air. And then, of course, we have Bluesky threatening to overtake all social networks. And, I mean, I *like* Bluesky. But it's less *technical* feeling. It's less *mine*. My Mastodon instance is my own, the things I do, post, and develop that interact with it *are my own*. Mastodon, to me, feels like an extension of my Linux operating system. And maybe that's why the normals don't like it so much. I don't know, I'm rambling in my thoughts.

Anyway, I hope you enjoy this new development I've put up for free public consumption!
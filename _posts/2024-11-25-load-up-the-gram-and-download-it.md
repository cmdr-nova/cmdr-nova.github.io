---
layout: post
title: "Load Up the Gram, and Download It!"
date: 2024-11-25 01:17
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: [programming, instagram, app]
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113542185639538023
---
Like an absolute madman, I slapped together a little Linux Python app for targeting an Instagram profile, and then downloading its entire contents. After *much* fussing with the unintuitive Github, and figuring out Twine, I *uploaded it directly into the fully public system where anyone can download and use it.* That's right.

<img src="/img/posts/gramload/gramload.png">

Based on the "instaloader" code, I've put a GUI around it, and made it really simple to use. Just input the username of the profile you want to download (such as your own, so you can leave Instagram!), select a directory, and then download! It *may* ask you to input a username and a password, which you can also input in the provided fields (I had to do this).

I don't condone using this to be malicious in any way, shape, or form. But I do condone using it to pull all of your data off of Instagram so that you can use it elsewhere. And ... I guess, also back it up, away from the prying eyes of Mark Zuckerberg.

The source code is of course up on my github, but you don't even need that in order to install anything. For the first time, *ever*, you can mess with one of my projects by just using a mainline Linux / Python command.

Hoorah.

It's constructed in a way that, while downloading, it randomly spaces downloads out between 1 to 5 seconds, in order to avoid rate-limiting. I tested the app on multiple random profiles and never got rate-limited even *once*. Although, like all things, I'm sure it could still happen.

But for now, I sleep.

Now, load up your terminal and type in this:

<code>
pip install gramload
</code>
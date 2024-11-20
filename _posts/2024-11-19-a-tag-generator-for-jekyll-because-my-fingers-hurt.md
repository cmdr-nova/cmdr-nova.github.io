---
layout: post
title: A Tag Generator for Jekyll, Because My Fingers Hurt
date: 2024-11-19 23:33
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: [scripting, programming, python, jekyll, github, tags]
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113513468731170295
---
I was trying to think of something new to do with my website while I sip a *very large* beverage this evening, heading into another day off. And I thought, "You know, I *hate* how I have to manually create new pages for every tag I put on a post. What is this? 1927?" So, I set out to fix that problem, and fix that problem I did. But it didn't come without a small hiccup.

Because, apparently, Github Pages can only use a *certain* Jekyll version (which is ridiculous), so, if you were attempting to do this with a custom ruby gem, you *wouldn't be able to run it*, unless you stop using the github_pages defined "safe" plugins. Oh no! And switching to full Jekyll, while cool and good, will *break* GH Pages, and maybe other things! So, instead of building this into the workflow, and having separate this, and separate that, I said, "Hell no, what? We got Python for that."

And Python we did done do.

I'm the kind of person who likes to write. I *also* like to do all of my writing in VS Code, because it makes me feel cool. And, part of writing, is *removing* obstacles that make it tedious, and repetitive. Such as copy/pasting links to my new posts, and spreading them across social networks (a problem solved by my server and a ton of scripts), or tagging your posts like you would on Wordpress, and then having to create each tag page manually, so that they can be clicked on.

Like I said on the <a href="https://github.com/cmdr-nova/Jekyll-Tag-Generator" target="_blank">Github repository</a> for these scripts I've created ... What am I? A caveman?

It seems like, the *more* I do the same things over and over, the *more* I need automation to take care of the boring stuff I don't want to do.

You know.

Those things that AI was supposed to be doing.

I've been copying and pasting links to blog posts and sharing them on social media, for decades. *Decades*. So, when I figured out how to make all of that happen *automatically*, it was like a dehydrated man in the Sahara Desert discovering a pond. And, after that, it was just *more* identifying little annoying tasks that take away from doing *what I want to do*, and then *eliminating* them. Like the Terminator and a billion Sarah Connors.

But I still haven't figured out how I want to automatically fetch post IDs for shared post links on Mastodon, and then copy them into said new posts, so that Mastodon comment sections are generated automatically.

We'll get there, though!

Uh ...

Soon!
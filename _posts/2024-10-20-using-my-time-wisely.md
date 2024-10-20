---
layout: post
title: Using My Time Wisely
date: 2024-10-20 18:50 -0400
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113342270787876062
---
So, work has been a pain in the ass lately. And by that, I mean, my offline job. At times, especially the past week, I've had a real hard time justifying even getting out of bed in the morning. But, I got out of work last night around 9pm, and I was exploring feed readers, because reading feeds is coming back (via enshitification of everything else). But I didn't like how most readers are trying to sell monthly subscriptions for features like, being able to make a folder, and storing feeds in them. And then I thought, "I'll make one."

Enter: GridStream.

<center>
<img src="/img/posts/gridstream/378228831-5cfd98a6-51ac-4c49-b071-03961ca4531c.png">
</center>
<br />

An app that utilizes Python, SQL, and Flask (depending on how you use it), to generate a web interface that, if you look at the code, is not at all unlike Jekyll. But then, once built, you can open it up on desktop via an executable. Upon opening it for the first time, the database is created, and then everything you add to your feed is stored *in there*.

I spent all of last night and most of today working on it, and I managed to compensate for most of what I believe people will try to add to their feeds. Although, Reddit still doesn't really fully display properly.

That's not a huge problem, though, I think, because blogs, which is where most feeds come from, display *just fine*, and also *awesomely*.

I wanted to turn it into a flatpak and then send it over to flathub, but holy freakin' crap, uh, maybe another time? Anyway, regardless of what happens with it in the future, it's open sourced and <a href="https://github.com/cmdr-nova/gridstream" target="_blank">on GitHub</a>, with a release that includes an executable.

GridStream is named after a streaming radio station that emerged during the early years of one of the first sci-fi MMOs *ever* created, Anarchy Online. The radio station is still running today, and you can <a href="http://www.gridstream.org/gsp/cms/front" target="_blank">listen to it here</a>.
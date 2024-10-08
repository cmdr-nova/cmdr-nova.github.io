---
layout: post
title: Bot, Please Have A Personality
date: 2024-10-08 16:45 -0400
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113273949505152744
---
Today, it's my day off, you know. So I spent some time trying to figure out how to make and rebuild Mafia Wars from the ground-up. I achieved ... some things, but it's proving to be something that will take a long time, and I kinda just wanna chill and have some fun? So, I made it so that my Reddit-Bot also posts random status (which are predefined), that are pulled from a json file.

As it turns out, small-time bots are a little bit easier. The way that I accomplished this, was by making a *secondary* bot, that uses the same Mastodon access codes, and runs every 13 minutes, outside of the 10 minute window that the Reddit bot uses (simulating what a normal person might post like ... if they were a bot).

You can see the Chatter-Bot <a href="https://github.com/cmdr-nova/chatter-bot" target="_blank">on Github</a>.

Now, I'm aware that all these little worker-bots I've built have all been built before, albeit, probably in different ways, and with different code. But these all *also* work, and they do specific things that I'm sure the others probably don't.

I updated the Reddit-Post bot to include Reddit usernames and the subreddit that they came from (so that it's more clear), and I made it so the bot will periodically look for followers, and follow new follows plus unfollow defollows (emulating a real influencer!).

As far as the Chatter-Bot goes, it also has embedded replies that it'll shoot at you if you send it a mention. This is structured much the same way the status posts are, except they're only used when someone goes, "Hey @net_run@mkultra.monster, what the hell are you on about?"

Now ... in regards to my "Mafia Hustle" Mafia Wars clone, uh. Yeah, I'm just gonna set that aside for now! Might return to it at a later date.
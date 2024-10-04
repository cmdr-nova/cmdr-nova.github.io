---
layout: post
title: Crontab, Give Me My Daily Report
date: 2024-10-04 00:13 -0400
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
If you're like me, and you just can't find it in yourself to quit the nerd-site, then maybe you should make it easier on yourself, and setup something to just give you a daily report (e-mail) on your favorite subreddits' top five trending posts.

Enter: the_daily_report

A <a href="https://github.com/cmdr-nova/the_daily_report/tree/main" target="_blank">simple python script</a> that you need only make a personal Reddit app for, and then you're done (mostly).

I'm still a bit of a noob, learning all of this stuff as I go, like you do, and *how I do*. So, I'm writing this with it scheduled to send me my daily report at 9am, everyday, and guess what, it works!

Voila:

<img class="img-wrap" src="/img/posts/thereport/the_report_example.png">

I initially had to do a ton of troubleshooting, because my machine *doesn't* just automatically send e-mails when I tell it to, and I've detailed as much of that as I could in a troubleshooting section via the repository. Hopefully it's clear enough what needs to be done.

I have this issue where, I'll use someone's app, and then their help files make no sense, or are woefully incomplete. In writing my own, I now see why that may happen, because I'm basically just throwing in solutions I used and hoping they stick!

Now, *obviously*, this means you have to have your PC turned on at all times, unless of course you setup a server on a remote PC, such as renting a VPS over at <a href="https://www.digitalocean.com" target="_blank">Digital Ocean</a>. I've *considered* this for myself, but I don't know if sending myself a daily report of trending posts in subreddits is really something I should just dump money into. Mostly, because I *do* have my PC on at all times, in-between minutes every couple of days that I restart the thing.

But it's an option!

Anyway, you can see the whole thing in the link above, and hopefully, if I've done my job correctly, you can get it running for yourself.

Note: I do not use Windows, and I cannot tell you how to make this work on a Microsoft machine!
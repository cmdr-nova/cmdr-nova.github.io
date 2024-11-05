---
layout: post
title: CORS Light, The Drink of the API
date: 2024-11-05 00:59 -0500
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
I'm a little bit delirious. Last night I fell asleep on my couch the entire night, and then woke up at 6am to my cat begging for food, and then I stayed up, and went to work. I got home, and yes, instead of watching the new Deadpool, I switch on the code machine and thought, "Why am I routing the Tumblr API through a github secret only to get static results that don't update unless I push changes to my site? The heck?" And I thought, "What if I just use a proxy server on my VPS that the JavaScript accesses to give a fresh perspective every time someone refreshes my site?" Boy ... oh boy.

For all intents and purposes, everything is setup correctly. I have a proxy server running perfectly, and certificates, and nginx blasting on all fours. But then I load the website, I check the developer console and ...

**YOU HAVE BEEN BLOCKED BY CORS, WHERE THE HEADERS MAN?**

And me, crying and screaming, and pounding my fists into a pillow, "THE HEADERS ARE RIGHT THERE IN THE SERVER. THEY'RE RIGHT THERE BRO. WHAT CAN'T YOU READ?"

I don't think I've ever driven myself quite this mad trying to post some dymanic updates from a bot to my website before. But I think it's definitely because I'm so tired I feel dizzy.

There's probably a very simple solution, and maybe it's because I was running a local copy of my website alongside the live version and maybe that was making CORS go "DUDE," but I think I'll figure that out later.

I think I've had enough of seeing the phrase "CORS."

I'm never going to drink a certain kind of beer again, at least.

I mean, I really *don't need* to have this on my site. In fact, I bet I could find a way to just have the bot post something into a div onto my site with JavaScript and that VPS where I'm running a proxy.

But, uh, I'm just gonna go to sleep.

Thanks for reading my vent.

COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORS.
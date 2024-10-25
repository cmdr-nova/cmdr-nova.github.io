---
layout: post
title: Call of Duty, On Linux?!
date: 2024-10-24 21:50 -0400
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Linux"
tag: linux
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113365647478894062
---
As some may know, I play Call of Duty sometimes. One of the reasons I briefly switched back to Windows, is *because* I wanted to do so, and couldn't on Pop!_OS, despite having purchased pretty much every version of CoD since the *original* Black Ops 2. But, I ultimately decided that being able to play CoD wasn't worth the trade-off of ... using Windows. That was, until I realized I could play Modern Warfare III, and, presumably, Black Ops 6, on GeForce now. There is ... an issue, though.

If you're like me, and you just kind of install Debian, and all your essential apps and then forget about it, and then you load up GeForce Now thinking, "Hey, let's play some FourthNite," you'll run into an issue. A weird issue. An annoying issue. 

Your mouse won't move in a 360 degree rotation.

And let me tell you, there are *no* resources online that are easily able to be Googled in order to solve this. In fact, I had to track down the GeForce Now flatpak author on Github, and then do some investigating in the issues specifically in relation to *that* version of the app. Needless to say, I found the answer. And it hadn't ocurred to me, because, I guess Pop!_OS just does this by default, and that is therefore why I didn't experience this problem.

You have to use Xorg/X11.

Go to the login screen on Debian, click the gear at the bottom left, and choose Xorg. Do not use Wayland.

I'm not all up in the discourse on Wayland, but this isn't the *only* issue it has, and I *totally* forgot that it has problems.

Suffice to say, I can now play Call of Duty on Linux, with minimal input lag via a streaming service. Which is *pretty impressive*. Albeit, I'm not much of an Nvidia fan (I use Radeon, after-all) due to them basically abandoning gaming and going all-in on melting the Earth's icecaps by shipping trillions of cards *specifically* for use in machines that steal art from people, but **whatever**.

Until kernel level anticheat is made illegal, this is what you have to deal with unless you want to use a spyware OS (Windows).

Either way, I wanted to write this down, and put it here, simply because there are *very few* resources in regards to this topic. But now there's one, at least.
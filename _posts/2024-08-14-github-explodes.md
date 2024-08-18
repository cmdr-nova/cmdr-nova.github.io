---
layout: post
title: "Github Explodes"
date: 2024-08-14 22:19 -0400
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Tech"
tag: tech
---

Today, for ... uhm, whatever reason? Github went *plop*. It fell down. It shat itself. Its servers went down *completely* and *totally*. And I didn't even really notice until hours, and hours after they'd already started investigating. And then ... it came back!

But this sort of thing has me looking at back-up alternatives for hosting my Jekyll site. Neocities seems like the immediate best place to back everything up with a mirrored version of my website. The problem, is that using the Neocities CLI doesn't appear to ... overwrite updated files? And then, if you decide instead to setup "Deploy to Neocities" as a workload *on* Github, it works! ... But since Jekyll is a static site *generator*, and the site is *already* generated once hitting your repository, the upload is just ... Blank front matter.

Yeah.

What *needs* to go to Neocities, *from* the Github deployment, is *everything* in the generated _site folder ... which doesn't seem to exist on the server side of things (it's definitely on my hdd, and is only built upon pushing to Git).

So that's the conundrum, although, the weird thing is, other people seem to have figured this out?

If only there were a way to push the deployment to Github where and when it's *built* also to Neocities, without having to specify a directory in the Neocities workflow (because there is no correct directory to push to NC via your repository, unless I've made some kind of huge blunder and am blind).

Nevertheless, if anyone reading this is experienced with all of the aforementioned things and wants to explain what I'm missing, I'd be very appreciative! I would *love* to have a backup that automatically pushes to Neocities whenever I commit to my branch on Github. But ... with Jekyll, and the way it works, that doesn't seem possible.

At least, not in the way I want to do it.

I *suppose* if Github takes a spiral and farts, and *doesn't* come back, I could just as easily deploy this entire site onto a blank droplet on Digital Ocean, but *I would like to avoid paying for more stuff, for now*. Therefore, Neocities is the best place for a backup/mirror ... just in case.

... if I can figure out the issue of what the *heck* I'm supposed to deploy to Neocities from my repository here on Github.

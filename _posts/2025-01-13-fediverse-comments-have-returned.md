---
layout: post
title: Fediverse Comments Have Returned
date: 2025-01-13 11:32
categories:
    - "Fediverse"
tag: [fediverse, mastodon, wafrn, sharkey]
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113822058000713188
---
A while back, last year now, I briefly launched a Sharkey instance, and replaced my managed-host Mastodon instance, and since my fediverse comments on this blog weren't completely compatible, I removed them and replaced them with an embedded comment section that makes calls to my VPS in order to store them. This is *pretty* memory intensive on a 6 dollar VPS that I'm not interested in upgrading, just so that I can host a bajillion different proxy servers.

Now that I've been back to Mastodon, except, this time, hosting it myself, I figured, "Why not put the Fediverse comment sections back on each post?"

And so I have done that!

Now, you can continue seeing your replies to my blog posts on fedi, also show up here on my blog. It appears to work with other Mastodon instances, Wafrn, and *maybe* Sharkey/Misskey? Although, I've tested a Sharkey comment on a previous blog post, and it has not yet shown up. This could either be due to federation issues between my specific instance, with the Sharkey instance I posted from, *or* it could be due to slower federation. Meaning, it could show up sometime later. Not sure!

My *only* stipulation, is that I would *really* love if someone could help me figure out how to get a piece of JavaScript to automatically grab a post ID from the resulting Mastodon post that's made once I make a *new* blog post (and then somehow also find a way to make it so that it inserts that post ID into the front matter of the corresponding post). I only *assume* this is possible, but it also sounds *extremely* complicated.

Unless I could use more server-side Python to accomplish this, altho, I would rather not run more proxy servers.

Either way, this is something that will be figured out ... uh, eventually.
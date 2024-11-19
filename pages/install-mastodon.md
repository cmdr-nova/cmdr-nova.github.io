---
layout: page
title: How to Install Mastodon
permalink: /pages/install-mastodon/
---

I've launched a few instances in my time. GNU Social, Pleroma, Mastodon, and then in 2023, *Mastodon again*. And, one of the biggest roadblocks to getting your instance up and running, are the *very many* sources of install instructions, *including the official* instructions, and the fact that they either accidentally, or maybe *intentionally* leave out important things? That make your instance function?

What prompted me to write all of this, was seeing yet another person via Reddit struggling to install and use their instance, because the folders that Mastodon *literally operate from* didn't have the correct permissions. And I decided, "Okay. That's enough. They won't fix their install instructions that people are surely using in order to *join Mastodon*? Okay. Okay! I'll make my own."

So, let's get started, *choom*.

First thing's first: We're going to install from source. No need to use special packages, or some outdated image on a VPS that you rented. We're installing *right from the place it originates*.

But what are the requirements?

<ul>
<li>- A server running Ubuntu 24.04 or Debian 12, at minimum</li>
<li>- Either a domain, or a subdomain, you <em>cannot run Mastodon from an IP address without SSL</em></li>
<li>- A service for sending out e-mail notifications and activation instructions (we'll go over how to do this, too)</li>
</ul>

If you're not familiar with Linux, well, *you're about to be.*

During this installation process, we're going to have to setup a database, Mastodon itself, an SSL certificate (that also reacquires after expiration, this is important!), nginx, and systemd. Which is fine. It sounds like *a lot*, but it really isn't.


---
layout: post
title: Don't Just Ask AI to Stay Away, Block Them
date: 2025-01-14 11:18
categories:
    - "Tech"
tag: [blockai, ai, block, htaccess, robots]
comments:
    host: mkultra.monster
    username: cmdr_nova
    id: 113827854911928651
---
If you've been on the internet in the past year and a half to two years, you're probably very familiar with company's like OpenAI, where Sam Altman argues that <a href="https://futurism.com/the-byte/openai-copyrighted-material-parliament" target="_blank">his bots *must* steal in order for his company to be profitable</a>. And, you're probably also *very* aware of the endless two-braincell-tech-dudes who post and write about how awesome it is to plagiarize and steal the work of artists to generate some quick, sloppy garbage for short-term gains. Well, if you're like me, this *pisses you the frick off*, and in today's post I'm going to help you completely block their grungy asses from accessing your website.

You may already have a robots.txt file, which provides the internets with a list of ai-gen slop-machines that you'd like to ask nicely, "Don't crawl or scrape my site." But, as we know, asking bots made by people and companies who don't believe in the concept of consent, is like asking a serial killer not to kill. So, we're not going to ask. We're going to tell them to take their scraping, <a href="https://techcrunch.com/2025/01/10/how-openais-bot-crushed-this-seven-person-companys-web-site-like-a-ddos-attack/" target="_blank">DDOS machines</a>, and make like a screen door on a battleship, and get outta here.

This is *very* important to do, especially if you're an independent party who hosts a website, or, say, a *Mastodon instance*, on your own personal VPS, that you pay for. A service that probably jacks up prices based on overages related to traffic.

So, let's take off our pants and jacket, and get to it.

There are a lot of complicated ways to do this, that require all kinds of know-how about Apache and Nginx and all sorts of stuff that'll probably give you a migraine. So, we're going to make this really simple.

We're going to use an .htaccess file.

Normally, you could use this to block access to your entire website for everyone *but you*, which can be useful for testing purposes, or to hide what you're working on, or what-have-you. But, instead of doing that, we're going to make it so these bots simply *do not* access your website, *at all*. No asking. Just punching them in the face, and leaving them unconscious in a gutter.

I run my website on Jekyll, so I decided to make a ruby that compiles my .htaccess file based on a json file that contains a list of AI scrapers. Once I build and serve my site, it regenerates the .htaccess file, *every single time*, based on what's written in crawlers.json. In this way, I can *easily* add to it in the future, as morally corrupt businesses and corporations roll out even *more* <a href="https://cee.illinois.edu/news/AIs-Challenging-Waters#:~:text=Data%20centers%20are%20growing%20like%20weeds%2C%20and%20they%20are%20thirsty&text=For%20example%2C%20Google's%20hyperscale%20data,day%20over%20the%20past%20year." target="_blank">water guzzling</a>, <a href="https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about" target="_blank">climate destroying</a> shit-machines.

You *could* simply copy/paste the .htaccess file, but before we do that, I want to show you how to make it so you can do what I'm doing, if you're using Jekyll, or something similar.

First, make the ruby gem in your site's root directory, and call it something like, "generate_htaccess.rb":

```
require 'json'

# Read the JSON file containing a list of crawlers, i.e., ai bots (the file doesn't *need* to be in assets/data/, that's just where I personally put it)
file_path = 'assets/data/crawlers.json'
crawlers = JSON.parse(File.read(file_path))['crawlers']

# Generate .htaccess
htaccess_content = <<~HTACCESS
  RewriteEngine On
  RewriteCond %{HTTP_USER_AGENT} (#{crawlers.join('|')}) [NC]
  RewriteRule ^ - [F]
HTACCESS

# Write .htaccess
File.open('.htaccess', 'w') do |file|
  file.write(htaccess_content)
end
# Show output in the terminal
puts ".htaccess file generated successfully."
```

Next, create your "crawlers.json" file in whichever directory you'd like. Mine is in /assets/data, but if you change this, you'll have to edit the "file_path" in the ruby gem in order for this to work. Here's my crawlers.json:

```
{
    "crawlers": [
      "AI2Bot",
      "Ai2Bot-Dolma",
      "Amazonbot",
      "anthropic-ai",
      "Applebot",
      "Applebot-Extended",
      "Bytespider",
      "CCBot",
      "ChatGPT-User",
      "Claude-Web",
      "ClaudeBot",
      "cohere-ai",
      "cohere-training-data-crawler",
      "Diffbot",
      "DuckAssistBot",
      "FacebookBot",
      "FriendlyCrawler",
      "Google-Extended",
      "GoogleOther",
      "GoogleOther-Image",
      "GoogleOther-Video",
      "GPTBot",
      "iaskspider/2.0",
      "ICC-Crawler",
      "ImagesiftBot",
      "img2dataset",
      "ISSCyberRiskCrawler",
      "Kangaroo Bot",
      "Meta-ExternalAgent",
      "Meta-ExternalFetcher",
      "OAI-SearchBot",
      "omgili",
      "omgilibot",
      "PanguBot",
      "PerplexityBot",
      "PetalBot",
      "Scrapy",
      "SemrushBot",
      "Sidetrade indexer bot",
      "Timpibot",
      "VelenPublicWebCrawler",
      "Webzio-Extended",
      "YouBot"
    ]
  }
```

If you've been following any of my Python projects, this will look similar to ways that I list, for example, subreddits for my "bots" to pull images from, and then post them to Mastodon. I like these json lists. It makes things real simple-like.

I took this list, and other ideas on how to do this, from <a href="https://github.com/ai-robots-txt/ai.robots.txt?tab=readme-ov-file" target="_blank">this GitHub repository</a>. I am personally subscribed to their RSS feed so that I can stay up-to-date with slop that's being rolled out by the likes of Meta and other terrible corporations.

Finally, when building my Jekyll site locally, I use a shell script that does all sorts of things for me, such as, indexing all of my posts for my search engine, generating post metadata so that random posts can be shown at the bottom of other posts, and so on, and so forth. For this, though, we don't need all of that. So, make a "serve.sh" (in your site's root directory) that looks like this:

```
#!/bin/bash

# Generate .htaccess file
ruby generate_htaccess.rb

# Build
bundle exec jekyll build

# Serve
bundle exec jekyll serve --watch
```

Now, as you're updating your site on the local machine, and updating the build in order to admire your changes, or confirm that things are working, it'll build a new .htaccess file, *every time you run this script*, and it'll use the list of AI bots you've already provided (crawlers.json). This way, you can update the crawlers any time you want, and whenever you build your site locally, .htaccess gets updated (you should note, that executing Ruby without Ruby being installed, will do nothing, and it is assumed, that because you're running Jekyll, you *do* have it installed).

Once you commit the site to live, it'll already be done and generated, and for all intents and purposes, *this should stop these greedy, power-hungry mother assheads from accessing your website*.

The generated file should look something like this:

```
RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} (AI2Bot|Ai2Bot-Dolma|Amazonbot|anthropic-ai|Applebot|Applebot-Extended|Bytespider|CCBot|ChatGPT-User|Claude-Web|ClaudeBot|cohere-ai|cohere-training-data-crawler|Diffbot|DuckAssistBot|FacebookBot|FriendlyCrawler|Google-Extended|GoogleOther|GoogleOther-Image|GoogleOther-Video|GPTBot|iaskspider/2.0|ICC-Crawler|ImagesiftBot|img2dataset|ISSCyberRiskCrawler|Kangaroo Bot|Meta-ExternalAgent|Meta-ExternalFetcher|OAI-SearchBot|omgili|omgilibot|PanguBot|PerplexityBot|PetalBot|Scrapy|SemrushBot|Sidetrade indexer bot|Timpibot|VelenPublicWebCrawler|Webzio-Extended|YouBot) [NC]
RewriteRule ^ - [F]
```

Now, this website and <a href="https://mkultra.monster" target="_blank">my Mastodon instance</a> are on the same domain, but they *are not* on the same server. So, what I did for my Mastodon instance was this:

```
ssh root@your_mastodon_instance_ip

su - mastodon

cd live

cd public

nano .htaccess

# copy/paste the generated .htaccess into this file with ctrl+shift+v

ctrl+O

ctrl+X
```

Done.

The reason I've also included this on my Mastodon instance, is, partially, because I've noticed at least once a week, or every other week, there's a *massive* spike of activity that causes my entire instance to go offline. And it *doesn't come back up again*, until I force a power cycle, and then restart Mastodon streaming. I have some ... *suspicions* that this is to do with sludge-scrapers, and so, *hopefully*, this does *something* for me.

And maybe also you.

But, there you have it. Block these sumbitches.
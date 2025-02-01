---
layout: page
title:  Tell AI To Back Off
permalink: /webdev/basics/guide7/
---
This is another simple, yet useful thing to do, *before* you toss your website online. It's entirely optional, and it's surface-level, at best. But doing *something* is better than doing nothing.

So, AI has been crawling and scraping the entire internet for a few years now. Aside from the fact that this is blatant plagiarism for the profit of some greedy jerks who deserve to go to prison, this also causes undue stress to servers and websites. And, at the very least, you should ask them to turn around and go away.

First, create a new text file in the root of your website's directory, and name it "robots.txt" and then open that mother-fudger up.

Put this inside of it.

```
User-agent: AI2Bot
User-agent: Ai2Bot-Dolma
User-agent: Amazonbot
User-agent: anthropic-ai
User-agent: Applebot
User-agent: Applebot-Extended
User-agent: Bytespider
User-agent: CCBot
User-agent: ChatGPT-User
User-agent: Claude-Web
User-agent: ClaudeBot
User-agent: cohere-ai
User-agent: cohere-training-data-crawler
User-agent: Diffbot
User-agent: DuckAssistBot
User-agent: FacebookBot
User-agent: FriendlyCrawler
User-agent: Google-Extended
User-agent: GoogleOther
User-agent: GoogleOther-Image
User-agent: GoogleOther-Video
User-agent: GPTBot
User-agent: iaskspider/2.0
User-agent: ICC-Crawler
User-agent: ImagesiftBot
User-agent: img2dataset
User-agent: ISSCyberRiskCrawler
User-agent: Kangaroo Bot
User-agent: Meta-ExternalAgent
User-agent: Meta-ExternalFetcher
User-agent: OAI-SearchBot
User-agent: omgili
User-agent: omgilibot
User-agent: PanguBot
User-agent: PerplexityBot
User-agent: PetalBot
User-agent: Scrapy
User-agent: SemrushBot
User-agent: Sidetrade indexer bot
User-agent: Timpibot
User-agent: VelenPublicWebCrawler
User-agent: Webzio-Extended
User-agent: YouBot
Disallow: /
```
What this does, is simply asks all these scraper bots not to scrape. That doesn't always work, because this technology was built on violating consent. But, like I said, it's *something*. I don't need to mention every company involved here, but you can probably tell that this includes OpenAI, Meta, Google, and Tiktok, for starters.

And that's it! Simple, huh?

<a class="page-link" href="/pages/webdev">Click here to return to the tutorial index</a>.
---
layout: page
title:  Make Your Website Discoverable
permalink: /webdev/basics/guide6/
---
We're *almost* there now. Almost to the point where you're ready to upload your website and have the world see it!

But, first, we should add some meta content to the head of your index page (and, you could add this to every single page, if you want).

We don't need previews here, so I'm just going to grab the head snippet from our index.html.

```
<head>
<title>My Cool Site | About Me</title>
<link rel="stylesheet" href="/assets/css/style.css">
<script src="https://unpkg.com/@phosphor-icons/web"></script>
</head>
```

So, you see this here? This is *very* mother-farting basic. It's got almost *nothing* in it. It's basically just telling a browser what the title of your site is, and what styles and scripts to load, and that's it. But, in order to be more friendly to the internet, we should add some things.

```
<head>

<!-- Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Cool Site</title>
<meta name="description" content="This is my site about exploring the depths at which the government has hidden alien life from the world's population." />
<meta name="keywords" content="blog, aliens, conspiracy" />
<meta name="author" content="Jane Terrestrial" />

<!-- Open Graph Meta Tags-->
<meta property="og:title" content="My Cool Site">
<meta property="og:locale" content="en_US" />
<meta property="og:description" content="This is my site about exploring the depths at which the government has hidden alien life from the world's population.">
<meta property="og:image" content="/img/previewcard.png">
<meta property="og:url" content="whatever.yoururl.is">
<meta property="og:site_name" content="My Cool Site" />
<meta property="og:type" content="website" />

<!-- Twitter Meta Tags-->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="My Cool Site">
<meta name="twitter:description" content="This is my site about exploring the depths at which the government has hidden alien life from the world's population.">
<meta name="twitter:image" content="/img/previewcard.png">

<link rel="stylesheet" href="/assets/css/style.css">
<script src="https://unpkg.com/@phosphor-icons/web"></script>
</head>
```
Now, as you can see, we've taken the title of the site, and replaced it with a *whole bunch of stuff*. These are, basically, all types of different meta tags that search engines look for, and social media sites use in order to more easily identify what it is that you're sharing. 

You'll notice the title and description is mentioned multiple times for each type of tag, whether we're talking about Google's basic tags, Open Graph tags, or "Twitter" card tags.

You might *also* notice mention of a "previewcard.png" in the img folder. This can be *anything*. Something that's custom to your website, that will show up on a "preview card" via social media when you share a link. Like, for example, when people share articles on social media, and there's a big huge image to accompany the link? That's what this is.

This is also all entirely optional, but it *will* make your site a bit more discoverable to search engines, and other people. And it'll look nicer when you share it on social media.

And that's absolutely it for this section!

<a class="page-link" href="/pages/webdev">Click here to return to the tutorial index</a>, or <a class="page-link" href="/webdev/basics/guide7/">move on to the next tutorial</a>.
---
id: 1084
title: '*hacker voice* I&#8217;m In, the XZ Fiasco'
date: '2024-03-29T22:00:10+00:00'
author: '𐕣 C M D R ░ NOVA 𐕣'
layout: post
guid: 'https://cmdr-nova.online/?p=1084'
permalink: /2024/03/29/hacker-voice-im-in-the-xz-fiasco/
amazonS3_cache:
    - 'a:3:{s:67:"//cmdr-nova.online/wp-content/uploads/2024/02/721ac29ea9cbae00.jpeg";a:1:{s:9:"timestamp";i:1715796761;}s:51:"//cmdr-nova.online/wp-content/uploads/2024/02/3.gif";a:1:{s:9:"timestamp";i:1715824940;}s:57:"//cmdr-nova.online/wp-content/uploads/2024/02/NoAi_01.png";a:1:{s:9:"timestamp";i:1721696679;}}'
rank_math_analytic_object_id:
    - '28'
rank_math_internal_links_processed:
    - '1'
categories:
    - Linux
    - Technology
---

<!-- wp:paragraph -->
<p>As some who visit this blog, and also <a href="https://www.patreon.com/cmdr_nova" target="_blank" rel="noreferrer noopener">my Patreon</a>, may know, for the past month or so, I've gone headfirst completely into Linux leaving Windows in the dust like the roadrunner escaping the coyote. This was largely due-in-part to Microsoft's forced "artificial intelligence" injections into every single piece of its software (and possible subscription requirements in future versions of Windows).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since then, I've learned quite a few different things. I already had <em>some</em> experience, as I've launched Debian instances on Digital Ocean in the past for hosting Mastodon instances, and I currently run this website on Debian 12.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With that in mind, I can't say that I <em>fully</em> understand what's going on with XZ today, aside from the fact that a backdoor was injected a little while ago (without anyone noticing until today) through ... what I believe to be a Github commit?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is a huge security risk, as I believe it gives a hijacker open access to an SSH pipeline on a system (correct me in the comments if I'm wrong, I'm still learning a lot of things). Needless to say, I checked updates and versions of XZ on both my Pop!_OS system and my Debian 12 laptop faster than you can say, "Oh farts, I've lost my juice!"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But, you actually don't really need to worry all that much, unless you're running pre-release versions of most distributions, as detailed here via <a href="https://www.openwall.com/lists/oss-security/2024/03/29/4" target="_blank" rel="noreferrer noopener">openwall.com</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That doesn't mean it's <em>not</em> something you should worry about, if you're outside of that scope of instances. In fact, if I were you, I'd open a terminal and check your XZ version, just to be sure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The versions you DON'T want, are versions 5.6.0 or 5.6.1, and you can check this by running xz --version in the terminal. My guess is that most won't have these versions, but if you do, run your updates!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This has been an exciting update brought to you by Me, in the world of Linux. Stay tuned for, I mean, hopefully <em>less</em> posts about sudden backdoors in Linux software!</p>
<!-- /wp:paragraph -->
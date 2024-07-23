---
id: 3252
title: 'SerenityOS and LadyBirds: Because These Things Shouldn&#8217;t Hide in Closed Git Conversations'
date: '2024-07-03T16:34:49+00:00'
author: '𐕣 C M D R ░ NOVA 𐕣'
layout: post
guid: 'https://cmdr-nova.online/?p=3252'
permalink: /2024/07/03/serenityos-and-ladybird/
amazonS3_cache:
    - 'a:13:{s:55:"//cmdr-nova.online/wp-content/uploads/2024/07/image.png";a:2:{s:2:"id";i:3253;s:11:"source_type";s:13:"media-library";}s:87:"//nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/07/03155857/image.png";a:2:{s:2:"id";i:3253;s:11:"source_type";s:13:"media-library";}s:57:"//cmdr-nova.online/wp-content/uploads/2024/07/image-1.png";a:2:{s:2:"id";i:3254;s:11:"source_type";s:13:"media-library";}s:89:"//nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/07/03160045/image-1.png";a:2:{s:2:"id";i:3254;s:11:"source_type";s:13:"media-library";}s:57:"//cmdr-nova.online/wp-content/uploads/2024/07/image-2.png";a:2:{s:2:"id";i:3255;s:11:"source_type";s:13:"media-library";}s:89:"//nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/07/03160652/image-2.png";a:2:{s:2:"id";i:3255;s:11:"source_type";s:13:"media-library";}s:57:"//cmdr-nova.online/wp-content/uploads/2024/07/image-3.png";a:2:{s:2:"id";i:3256;s:11:"source_type";s:13:"media-library";}s:89:"//nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/07/03161100/image-3.png";a:2:{s:2:"id";i:3256;s:11:"source_type";s:13:"media-library";}s:57:"//cmdr-nova.online/wp-content/uploads/2024/07/image-4.png";a:2:{s:2:"id";i:3257;s:11:"source_type";s:13:"media-library";}s:89:"//nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/07/03161445/image-4.png";a:2:{s:2:"id";i:3257;s:11:"source_type";s:13:"media-library";}s:57:"//cmdr-nova.online/wp-content/uploads/2024/07/image-5.png";a:2:{s:2:"id";i:3258;s:11:"source_type";s:13:"media-library";}s:89:"//nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/07/03161553/image-5.png";a:2:{s:2:"id";i:3258;s:11:"source_type";s:13:"media-library";}s:57:"//cmdr-nova.online/wp-content/uploads/2024/02/NoAi_01.png";a:1:{s:9:"timestamp";i:1721697774;}}'
rank_math_internal_links_processed:
    - '1'
rank_math_primary_category:
    - '457'
rank_math_seo_score:
    - '77'
rank_math_focus_keyword:
    - 'SerenityOS,ladybird,git,misogyny,transphobia'
rank_math_description:
    - 'SerenityOS and LadyBird: Projects gone wrong with, you guessed it, far right, woman hating, transphobic weirdos.'
activitypub_status:
    - federated
rank_math_analytic_object_id:
    - '177'
image: 'https://nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/07/03163149/Screenshot-from-2024-07-03-12-31-37.png'
categories:
    - Technology
    - Mastodon
---

<!-- wp:paragraph -->
<p>I push myself out of bed at the bright and early hour of nearly ten in the morning. My cat jumps at my chest and threatens to eat my keyboard wire unless I pour him a can of his favorite morning food. After slapping on some clothes and feeding the orange ball of fur, I sit in the indented couch in front of my fifty-five-inch TV computer screen and mess around in AFK Journey for about an hour and a half.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All is normal and procrastinat-y, just the way I like my days off to be.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>After hitting a progression-wall in AFK, I kick on my PC and refresh the Mastodon feed ... to find that there is yet, more "drama" going on in the dev world (I despise the word drama, because it is frequently misused by white supremacists as a phrase and a way to downplay actual harm). Specifically, drama in relation to SerenityOS and its companion browser (now forked), LadyBird. Both are open source projects, both headed (previously, but not now) by one, Andreas Kling, who <a href="https://github.com/awesomekling">calls himself awesome</a> on Github.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>First I see random toots, "This dev is a jerk, an asshole, a douchebag." And I'm intrigued. What did this guy <em>do?</em> And then I see glimpses of male-aligned language being used in the source code of one of these projects, and the flat-out rejection from the aforementioned dev to address this in the name of keeping politics out of his projects.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>O</em>of, chief.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>After a little searching via the Fediverse, since Google doesn't seem to be indexing any of it, and the guy himself is<a href="https://awesomekling.substack.com/p/forking-ladybird-and-stepping-down-serenityos" target="_blank" rel="noreferrer noopener"> attempting to downplay</a> and bury it via his own blog post (wherein he states that he is forking the LadyBird browser project and leaving SerenityOS), I'm bringing it here. Mostly because I greatly dislike when bad people try to hide the things they've done, and dislike it even more when others encourage that it be hidden, locked out, and forgotten.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To what ends do people do this? So that a bad actor can be harmful to another group of people in the future?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Anyway, I found what I was looking for on Mastodon, and, just in case the post gets deleted in the future, we're going to go over all of it here, directly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What started the controversy is something so simple it's almost hilarious. The dev had been writing code into SerenityOS that assumed the operator was male.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":3253,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://cmdr-nova.online/wp-content/uploads/2024/07/image.png" alt="A screen-grab from the Serenity OS code wherein the code describes a function and uses male pronouns to refer to the user." class="wp-image-3253"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>A pretty weird decision. Something as small as this can say mountains of things about the person who wrote it. You can insert your own ideas about their motives, and why they'd do this. I, of course, have my suspicions and what <em>I</em> would think if I saw this (that the developer probably hates women). But we'll just look at what he said, himself, when someone questioned this, <a href="https://github.com/SerenityOS/serenity/pull/6814" target="_blank" rel="noreferrer noopener">here</a> (screenshotting important bits so that information regarding these things cannot be lost).</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":3254,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://cmdr-nova.online/wp-content/uploads/2024/07/image-1.png" alt="A screen-grab from Github on the Serenity OS repository where someone is asserting that it's not exactly the best that the code assumes the user is male. User &quot;awesomekling&quot; (who is Andreas Ling) says, &quot;This project is not an appropriate arena to advertise your personal politics.&quot;" class="wp-image-3254"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>There are, of course, some angry comments following this, but expressing these things <em>solely</em> on Github gives these types of people a license to hide and bury and deny.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Then there was as <a href="https://github.com/SerenityOS/serenity/pull/8046" target="_blank" rel="noreferrer noopener">second pull request</a> where someone else attempted to make the pronoun adjustment, again, and it was once again denied. With quite a few more people expressing concerns as to why neutral language is considered a bad thing, or "political," when it is <em>definitely</em> political to enforce that your code refers to every user as a man.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":3255,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://cmdr-nova.online/wp-content/uploads/2024/07/image-2.png" alt="Another screen-grab from Github on the Serenity OS repository where a user proposes a fix for the male-aligned languaged used in the code and user drunderscore says &quot;As already set forth in (another pull request), your gender change will (most likely) not be accepted.&quot;" class="wp-image-3255"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>As someone who is very confused about their own gender, and isn't quite sure where I want to be or go in the future, I can attest to the fact that this is a very simple change, and shouldn't garner this kind of strange pushback.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a <a href="https://github.com/SerenityOS/serenity/pull/24647" target="_blank" rel="noreferrer noopener">third time</a>, yet another user suggested changing "he" in the source code to "they and them," which resulted in more talks about code submission policies and their rules in avoiding hot political topics and controversies. And, much to everyone's surprise, people are still confused as to why this is considered controversial (if you haven't noticed by now, at least a few of the people involved in the SerenityOS and LadyBird projects are <em>probably</em> unwell and not good people).</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":3256,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://cmdr-nova.online/wp-content/uploads/2024/07/image-3.png" alt="Another screen-grab from Github on the Serenity OS repository where user gmta makes a long-winded rant about their project not aligned with &quot;controversial topics&quot; and specifies that the act of mentioned they/them pronouns as something that is a controversial topic and a focal point of heated discussion. The user continues with more circular arguments citing their rules and these kinds of changes breaking their rules.

Another user follows up with &quot;The change I proposed is specifically as to not alienate people who aren't men ...&quot;" class="wp-image-3256"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In order to not look like I'm just repeating myself over and over, here is <a href="https://github.com/SerenityOS/serenity/pull/24648" target="_blank" rel="noreferrer noopener">another pull request</a> where a user fixed the specifically gendered language, and was denied. And then <a href="https://github.com/SerenityOS/serenity/pull/24650" target="_blank" rel="noreferrer noopener">another</a>, where a trans woman is called "spam."</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":3257,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://cmdr-nova.online/wp-content/uploads/2024/07/image-4.png" alt="Another screen-grab from Github on the Serenity OS repository where a trans woman makes a pull request to adjust the language used in the code and the same user from the previous screen-grab (gmta) closes the pull request and says &quot;spam.&quot;" class="wp-image-3257"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>And then <a href="https://github.com/LadybirdBrowser/ladybird/pull/366" target="_blank" rel="noreferrer noopener">one more time</a>, in relation to their companion web browser, LadyBird, wherein a user removes white supremacist language, and is immediately shot down and locked for "spam."</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":3258,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://cmdr-nova.online/wp-content/uploads/2024/07/image-5.png" alt="A pull request from the connected project, Lady Bird (a companion web browser to Serenity OS) where user emilyCringe says, &quot;Removed white supremacist language.&quot;

The PR is immediately flaggged by a bot that cites the projects &quot;code-submission policy&quot; and is promptly closed by user awesomekling." class="wp-image-3258"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>I'm sure there is even more to it than this, but with the head of these projects stepping down and forking LadyBird, I think it's safe to say that LB is likely a browser you want to stay away from. SerenityOS, on the other hand, may be in better hands without Andreas and his influence. I can't say that for sure, though, because, in just these little snippets I've arranged here on this post, it definitely appears to be a problem with more than just one person and their far right beliefs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As many know, woman-hating neo nazis are a real and legitimate problem in the tech world. From the top, all the way to the bottom. You can see this in how generative AI treats non-white imagery, and you can see this in niche code written for an OS that probably less than a thousand people will use.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Regardless, it is something I am very passionate about addressing, challenging, bringing to light, and keeping the bad actors from burying.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I've had numerous abuses cast against myself from so many terrible people, it's hard to count, and most of what they've done has been buried for a long time, and will likely never be addressed--In music, in tech, and even offline.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Even with surface level knowledge of what SerenityOS and LadyBird are, I wanted, and <em>needed</em> to put this here. I will continue to document things <em>like this</em> in the future, so that people who experience injustices online and in tech don't have to sit in silence and think to themselves, "Are the people who marginalized me going to just be allowed to bury their grievances and continue, unchallenged?"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>No, not if I can help it. And, of course, I'm not saying that the hundreds of people currently talking about this on the fediverse aren't properly documenting this, or properly talking about this--they are, for sure! I just think it is also a good idea to have this stuff in one place, where you can catch yourself up and know what the hell's going on.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>'Til next time!</p>
<!-- /wp:paragraph -->
---
id: 1014
title: 'Create a Bootable Debian Flash Drive'
date: '2024-03-17T01:15:52+00:00'
author: '𐕣 C M D R ░ NOVA 𐕣'
layout: post
guid: 'https://cmdr-nova.online/?p=1014'
permalink: /2024/03/17/create-a-bootable-debian-flash-drive/
amazonS3_cache:
    - 'a:3:{s:67:"//cmdr-nova.online/wp-content/uploads/2024/02/721ac29ea9cbae00.jpeg";a:1:{s:9:"timestamp";i:1714701163;}s:51:"//cmdr-nova.online/wp-content/uploads/2024/02/3.gif";a:1:{s:9:"timestamp";i:1715852292;}s:57:"//cmdr-nova.online/wp-content/uploads/2024/02/NoAi_01.png";a:1:{s:9:"timestamp";i:1721696623;}}'
rank_math_analytic_object_id:
    - '35'
rank_math_internal_links_processed:
    - '1'
image: 'https://nova-online.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/03/17011535/Debian.jpg'
categories:
    - Linux
---

<!-- wp:paragraph -->
<p>In my last post, I suggested you, the reader, abandon Windows, jump ship, get out while you still can, and dive directly into Debian. What I didn't talk about, was how to create a bootable flash drive so that you can install it! This is, of course, sparsely detailed on the Debian Wiki itself, and maybe across many different websites.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>More often than not, I find when I'm looking for instructions on how to do things in or with Debian, or Linux in-general, people don't give all the details. Or the details are mixed up, or for really old versions (this is common not only across the installation of Debian and other distros, but in using basic, or even advanced terminal commands to do with installing software).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, in order to get started, and say goodbye to that pesky Windows installation, grab your flash drive by the butt, and slap that motherfreaker into your USB3 slot.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Next, download the .iso you want from the <a href="https://www.debian.org/distrib/" target="_blank" rel="noreferrer noopener">official website</a>. I highly suggest grabbing the 64-bit net installation, <a href="https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.5.0-amd64-netinst.iso" target="_blank" rel="noreferrer noopener">here</a>. You can, of course, choose other isos if you're more familiar with what you want, and what you're doing. But for now, we're just going to use this one.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Next, head <a href="https://rufus.ie/en/" target="_blank" rel="noreferrer noopener">over here</a> and grab Rufus, the software you'll be using to create a drive that boots. This is by far the easiest way to do it, and it is the officially suggested way on the Debian wiki.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now, the software may or may not be self-explanatory. The reason I say "may or may not" is because many people interpret things differently, and you could be one of those people ending up on Google searching, "How do I make a bootable drive with Rufus?"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once you've got it downloaded, open it up! Under the "Device" section, choose your flash drive. Next, via the "Boot Selection" section, choose the iso you downloaded a second ago. Important: Do not put the iso onto the flash drive and then try to create a bootable flash drive <em>from</em> that iso while it's <em>on</em> the drive (it won't work).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That's it! You don't really need to touch anything else, because it'll already know what you're doing. Slap that "Start" button in the face with your fingers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once complete, exit the program.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now we're going to force Windows 11 to boot from your flash drive. This can be sort of tricky, because Mikeysoft doesn't want you to delete Wamdows.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To start, press the Windows key, plus the I key (that's the i, not that L), and then enter the "settings" menu. Next, head into System, and then Recovery. Under the "Advanced Startup" section, click "Restart now."</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once the PC restarts, you'll be expected to choose an option. The option you'll want is ... to boot from a USB device!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At this point, you'll begin the Debian install. I would choose the graphical option, because that's what I chose, and it worked fine. Going through the installation, it's going to ask you a lot of basic questions in regard to what you want. If you're feeling unsure, I went with the Gnome desktop environment and skipped the others (there'll be a list of them).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once you make it through the download process, you'll be prompted to disconnect your USB drive and restart.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Congratulations, you've made it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To get you started with your fresh and clean install of Debian, watch this video for some absolutely <em>essential</em> things you should do right from the get-go. Trust me on this one, choomba. </p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=K72XJHurdUY","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=K72XJHurdUY
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>Subscribe to this guy, his content is a life-saver.</p>
<!-- /wp:paragraph -->
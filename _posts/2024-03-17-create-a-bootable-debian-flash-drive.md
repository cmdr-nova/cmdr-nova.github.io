---
layout: post
title: Create a Bootable Debian Flash Drive
date: 2024-03-17 01:15:52 -05:00
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Linux"
tag: linux
---

<!-- wp:paragraph -->
<p>In my last post, I suggested you, the reader, abandon Windows, jump ship, get out while you still can, and dive directly into Debian. What I didn't talk about, was how to create a bootable flash drive so that you can install it! This is, of course, sparsely detailed on the Debian Wiki itself, and maybe across many different websites.</p>
<!-- /wp:paragraph -->

<img class="img-wrap" src="/img/posts/debian/debian.png">

<!-- wp:paragraph -->
<p>More often than not, I find when I'm looking for instructions on how to do things in or with Debian, or Linux in-general, people don't give all the details. Or the details are mixed up, or for really old versions (this is common not only across the installation of Debian and other distros, but in using basic, or even advanced terminal commands to do with installing software).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, in order to get started, and say goodbye to that pesky Windows installation, grab your flash drive by the butt, and slap that motherfreaker into your USB3 slot.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Next, download the .iso you want from the <a href="https://www.debian.org/distrib/" target="_blank" rel="noreferrer noopener">official website</a>. I highly suggest grabbing the 64-bit net installation! It makes things a bit faster (if you're really itching to get going). You can, of course, choose other isos if you're more familiar with what you want, and what you're doing. But for now, we're just going to use this one.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Next, head <a href="https://rufus.ie/en/" target="_blank" rel="noreferrer noopener">over here</a> and grab Rufus, the software you'll be using to create a drive that boots. This is by far the easiest way to do it, and it is the officially suggested way on the Debian wiki.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now, the software may or may not be self-explanatory. The reason I say "may or may not" is because many people interpret things differently, and you could be one of those people ending up on Google searching, "How do I make a bootable drive with Rufus?"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once you've got it downloaded, open it up! Under the "Device" section, choose your flash drive. Next, via the "Boot Selection" section, choose the iso you downloaded a second ago. Important: Do not physically store the iso on the flash drive, and then try to create a bootable installation <em>from</em> that iso while it's <em>on</em> the drive (it won't work).</p>
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

<i>Added section for those on recent Dell laptops.</i>

<p>I'm quickly going to interject this post I wrote earlier in 2024, and provide a little bit of an update, for those who have newer, or at least <em>recent</em> Dell laptops. In some installations, even after selecting the USB drive that you'd like to boot from (i.e., the Debian one in this tutorial), Dell's SupportAssist <em>may</em> interject, and take over, effectively overriding your Debian flash drive. In order to disable this, you'll want to navigate into the bios itself and scroll to the bottom of the boot section where it asks you what priority you want the SupportAssist program to take when it "detects" that Windows is failing to boot. Set that freaker to zero. Now ... you're good to go.</p>

<p>Once you've saved your new bios configuration, and exited back to the boot screen, your flash drive <em>should</em> simply take over, and boot right to the Debian setup screen. If it doesn't, for whatever reason, go back into Windows, and retrace your steps to the "Recovery" and "Advanced Startup" settings, and repeat what you did before.</p>

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

<iframe width="560" height="315" src="https://www.youtube.com/embed/K72XJHurdUY?si=IDpoHOOJ1sSrjSvd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- wp:paragraph -->
<p>Subscribe to this guy, his content is a life-saver.</p>
<!-- /wp:paragraph -->
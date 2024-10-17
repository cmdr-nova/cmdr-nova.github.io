---
layout: page
title:  Boot to Debian
permalink: /pages/debian/
---

Hello! If you're like me, you probably jump back and forth between operating systems like a jackrabbit who can't make up their mind. Right now, as of writing this in October of 2024, I have a Macbook, my PC currently running Windows, and my Dell laptop running Debian. The PC is more temporarily Windows until Pop!_OS, or Debian can do Call of Duty (my guilty pleasure game).

Never-the-less!

I wrote a post way back in March 2024 detailing *how* to create a bootable Debian flash drive, and then *boot* ... into it. I tried to update the post, but I guess because it was so many months ago, Jekyll just doesn't want to regenerate it. So, and thus, I'm making it a permanent page! I think it may *also* have something to do with it being an export from my old Wordpress blog ... erm, maybe!

Without further distraction, let's get started.

My *original* jump to Linux had much to do with Microsoft developing spyware (legit spyware, <a href="https://www.geekwire.com/2024/microsoft-updates-recall-feature-after-security-and-privacy-backlash/" target="_blank">read more about Recall</a>), and in doing so ... I've learned *a lot*. So much so, that I'm fully back to my web developer roots, and I'm *even* learning and actively *using* Python to create scripts and apps. Wild, huh?

In order to get yourself started, you'll first want to jump on over to the <a href="https://www.debian.org/distrib/" target="_blank">main Debian page</a>. Then, in order to make things quick, and to be sure you get updated packages as-you-go, pick the 64-bit PC netinst ISO.

<img class="img-wrap" src="/img/debian-page/ISO.png">

Now, just because you're grabbing this ISO, doesn't mean that you'll be 100% ready with everything you need as soon as you get into the OS. There are *definitely* further updates that need to be done so that you can use it exactly as you probably expect to be able to, but! That's no sweat, and it's really simple. I'll detail that soon.

**Note: Do not put the ISO onto the flash drive, just leave it in your downloads folder.**

Once you've grabbed the ISO, head on over to <a href="https://rufus.ie/en/" target="_blank">this site and grab Rufus</a>, which is what you'll be using to create your bootable flash drive. There are for sure numerous ways that you can create a bootable drive, but we're just going to go the easy-peasy route, because getting yourself up and running in Linux shouldn't be difficult. 

**DISCLAIMER**

I do realize that some people enjoy the challenge of compiling a kernel and using Arch and all that, and some day, I'll give it a shot too! But, for the sake of onboarding users in the quickest, cleanest, and easiest way possible, this is what we're gonna do.

Now, you can use any ol' flash drive. The net install is tiny, and unlike Windows 11, you don't need 8 or 12 gigs of storage just to get a bootable up and running (the download should be like 650 megabytes or less).

After you've got your flash drive together, pop it into your PC or laptop, and once it's connected, go ahead and open Rufus. Don't even worry about formatting the thing, because that's going to be done *for you*, once you start this process.

Here's what you should see:

<center>
<img class="img-wrap" src="/img/debian-page/rufus.png">
</center>
<br />

The first absolutely *most* important part, is to click the drop-down under "Device" and **make sure you select your flash drive. Do not leave any of your drives selected or you're in for a nasty surprise.**

Now, next to the "boot selection" dialogue, click "SELECT," and choose the Debian ISO you downloaded.

There's no need to touch any other option here! Once you've completed both of those steps, slap the "START" button and click through the dialogue windows that pop up. *Yes*, you want to format the drive and erase everything on it as Rufus imprints the ISO onto the soon-to-be bootable. So, make sure you've saved your porn stash somewhere else.

Once it's done, you can safely exit Rufus (leave your flash drive plugged in).

*Now*, we're going to force Windows to let us do this, regardless of what Microsoft wants. Press the Windows key at the bottom left of your keyboard, and then press the I key. This will bring up the settings window. After you've done that, click "System," and then scroll down to "Recovery," and click it. Finally, click "Advanced startup."

This will start the process of booting your PC to a special screen that'll allow you to select your flash drive.

**Note: If you're on a recent Dell laptop that utilizes SupportAssist, enter your bios by smashing the F2 key at the Dell logo on startup, and then go into the boot configuration, scroll all the way down, and look for the option that asks what priority you want SupportAssist to have when it's detected that Windows isn't booting.** 

This is Dell's tricky, icky way of pretending to be a failsafe, but also *stopping you from installing another OS onto the laptop you bought from them.*

Turn that mother-freaker to *zero*, then save your new options, and exit the bios.

Whichever way you did this, both routes should take you directly to the Debian installation screen. If you're on a Dell and it *hasn't* done this, and has instead taken you back into Windows, scroll up, and repeat the process of navigating to the "Recovery" screen in system settings.

On the Debian installation screen, use the graphical UI install. You don't need to do this over a terminal or anything, just makes it easy on yourself, okay?

Following this, it'll resemble installing Windows *a lot*. You're going to choose languages, it'll ask you to connect to your network, it'll ask what desktop environment you want to use. You can choose whatever you want, but I prefer Gnome. Gnome is *a lot* like MacOS, but if you prefer something more *Windows*-ish, I would choose KDE Plasma. Either way, you're still in Debian, and most of the things you'll do at the end should work.

The setup will also ask if you want to wipe the whole entire drive, or parts of it, and if you want to encrypt it with LVM. If you're not sure, you can just wipe the whole drive and skip encryption. I *personally* always choose LVM, just for the added security layer.

Once you've confirmed those options, it's going to ask if you want to proceed with formatting the drive. The default option that'll be selected will be "No" but you want to click *"Yes."*

After the process has begun, sit back, relax, open up a bag of chips, try not to fart, pet your cat, watch a YouTube video on your phone of someone getting owned in Fortnite, and then, once it's finally done, it'll notify you to *unplug that flash drive*. And you better make sure you do that, or you'll be right back where you started!

After a short startup process, congratulations! You're now in Debian (as long as you remembered your passwords, which, I hope you do ...)

Here comes the fun part. You get to learn the basics of how to not only utilize the app "marketplace," but also the terminal. Don't be scared. You got this. I have a video here from a real great Youtuber whose got me out of a pinch with his tutorials more than once, and I personally use the below video *every single time* I install Debian somewhere, just to be sure everything is *exactly as it should be*.

<iframe width="560" height="315" src="https://www.youtube.com/embed/K72XJHurdUY?si=IDpoHOOJ1sSrjSvd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Make sure you subscribe to his content!

On a final note, within this tutorial, Jay will suggest you *remove* the deprecated version of Firefox and install the flatpak version. You can *totally* do this, if you want. For those of you who are more weary of Mozilla now after their AI shilling and positioning themselves as an ad agency, wait until after Jay explains how to remove Firefox-esr, and when he instructs you to grab the flatpak version of it, *instead*, go ahead and grab the flatpak of Vivaldi. Trust me. You'll thank me later.

Follow the rest of what he says to the T, unless of course you *also* don't want Thunderbird. You can use whatever e-mail client you prefer (I use Proton Mail). And, of course, if you're not running Nvidia, you don't need to listen to that part either (but he explains this).

Either way, good job! You made it to the end! And, most importantly, have fun!

Here are some essential Linux apps you might like:

**Gaming**
- Lutris, a great app for loading up game launchers and playing your games (Epic, Blizzard, UPlay, GoG)
- Steam! Make sure you turn on Steam Play compatibility for all titles, and you'll be able to load up *most* of your Steam library (unless it's using certain kinds of anti-cheat, up to and including kernel level)
- Firestorm, the alternative Second Life viewer, as a flatpak!

**Productivity**
- VS Code, although by Microsoft, and connected to Github, this runs fine on Linux, and I use it for nearly *every single project* I'm working on (not a flatpak, but installable via a quick download <a href="https://code.visualstudio.com/Download" target="_blank">from their website</a>)
- Gimp, for replacing Photoshop
- OpenShot Video Editor, a completely free video editing tool that can do basically *anything you want*
- Blender! Another app you might have thought was exclusive to Windows works *just fine* in Linux (and can be easily installed via Steam, not a flatpak)
- Libreoffice, to replace Microsoft Office (this is detailed in the video above, but *just in case* ...)

**Entertainment**
- Clementine, the music player with *many* integrations
- VLC, as detailed in Jay's video
- Cider, a Linux-based app that loads Apple Music for you

**Other**
- Caprine, an app that loads Facebook messenger, just in case your family wants to know what you're doing and you need to be able to respond to them on desktop
- Bottles, for utilizing Windows apps (can also do games), such as FL Studio (will take some tinkering and tutorial reading in order to access your project folders seamlessly)
- KTorrent, my personal fave torrent downloader
- Ultimate Media Downloader, for downloading *literally any* video from most mainstream sites, including YouTube, Instagram, and more (I did make <a href="https://github.com/cmdr-nova/ExTube" target="_blank">my own</a> YouTube downloader, but this also does *everything*)
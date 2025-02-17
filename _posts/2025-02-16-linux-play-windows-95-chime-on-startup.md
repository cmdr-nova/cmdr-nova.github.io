---
layout: post
title: 'Linux: Play Windows 95 Chime On Startup'
date: 2025-02-16 19:59
categories:
    - "Linux"
tag: [linux, modding, startup]
---
Maybe you're like me, and you're edging close to 40, grasping for anything in the past, or *from the past*, that might spark memories of when things were less ... enshitified. Not to say that software and technology in the 90s were perfect. But, it was a different time. So, short of installing a Windows 95 partition on your PC, how can you make its iconic startup sound play on-boot, and *on* Linux?

Easy.

Download the chime, <a href="/files/win_95.mp3" target="_blank">here</a>, first, and save it somewhere like, maybe, your "Music" folder.

Now, open your terminal and install MPV.

```
sudo apt install mpv
```

Once you're done doing that, you're going to want to make a new shell script.

So, do this:

```
nano startup.sh
```

And then, in the text editor (I use Nano, but you can use whatever you want), type this:

```
#!/bin/bash
cd /home/$User(whatever your username is)/Music
mpv win_95.mp3
exit
```

Now, hit CTRL + O to save and then CTRL + X to exit.

Finally, type in:

```
chmod +x startup.sh
```

Your computer is *almost* ready to play the Windows 95 chime whenever you startup your PC. But, we're not quite there, yet!

Now, I'm on Pop!_OS, and your way of accessing this *may* be different, but you're going to want to open "Startup Application Preferences." If, for some reason, this *isn't* installed, you can do that.

```
sudo apt-get install gnome-startup-applications
```

To open it, at least on *my* machine, I just hit the Super key (Windows key), and type "Startup," and then I click the result once it's shown in the Applications menu.

Now, click "Add" in the window, and give the startup application a name, like, "Win95" or something. Click the "Browse" button and find your shell script, and select it. Once you've done that, just click "Add," and you're done!

Restart that beautiful PC, and listen.

This tutorial brought to you by: A yearning for the old internet.
---
layout: post
collection: posts
date: 2025-02-27 13:50:19
title: "Nova Prime, Now Also An Archive"
categories:
    - "Webdev"
tags: [webdev, syndication]
pinned: false
author: ⸸ commander ░ nova ⸸ :~$
avatar: /img/avatar/daemon.jpeg
mastodon: 
akkoma: 
bluesky: 
wafrn: 
pillowfort: 
tumblr: 
none: no_syndication_available 
---
I've been doing *a lot* in order to get my website to act as a more *central* place where all of my thoughts and posts are stored. One of the issues I was having, is that it's *really* cumbersome to have to generate a post, then make that post, then commit, and sync to NeoCities ... *just to put up one Post, Note, or Log*. To me, this is useful, and really cool, but it also doesn't *feel* like posting on social media. So what do you do?

Well, of course, you setup reverse publishing/syndication, and backup every single thing you post to Mastodon in converted markdown files formatted for Jekyll, that are then fed into a Liquid feed!

How?

By using <a href="https://git.garrido.io/gabriel/mastodon-markdown-archive#installation" target="_blank">this repository</a>.

Basically, you go through the process of getting this thing setup, and *make sure* you specify that you want to use a Jekyll template (you've got to set that up yourself), and point it at a directory on your website, so that you can effectively setup a cronjob that just backs up all of your posts, *daily*.

Here's my bash script for backing up my Mastodon posts to a directory on my local machine, where my website is stored:

*graboots.sh*
{% raw %}
```
#!/bin/bash

while true; do
  command="mastodon-markdown-archive --dist=/home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots \
    --exclude-replies=true \
    --exclude-reblogs=true \
    --user=https://mastodon.online/@cmdr_nova \
    --porcelain=true \
    --visibility=public \
    --download-media=bundle \
    --threaded=true \
    --persist-last=/home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots/last \
    --max-id=$(test -f /home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots/last && cat /home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots/last || echo '') \
    --template=/home/cmdr-nova/jekyll.tmpl \
    --filename={{.Post.Id}}.md"
  output=$($command)

  if [[ "$output" -eq 0 ]]; then
    echo "No posts returned. Exiting"
    break
  fi
  echo "Fetched $output posts. Continuing."
  sleep 1
done
```
{% endraw %}

But then, this isn't *everything* you need to do in order to make this work, right? So, you probably *also* want each of these posts on your site to link back to their original location (for as long as they exist), and to *also* use the images include in posts that are backed up, *that have images*, right?

Okay, so run this script every single time you build your Jekyll site:

*syndicate_toots.py*
{% raw %}
```
import os
import glob
import shutil

# Directory containing your toots
toots_dir = '/home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots'

# Function to update the front matter and content of a toot
def update_toot_file(toot_file, post_id, image_path=None):
    # Construct the Mastodon syndication
    mastodon_link = f'https://mastodon.online/@cmdr_nova/{post_id}'

    # Read the content of the toot
    with open(toot_file, 'r') as file:
        content = file.readlines()

    # Check if the mastodon link is already present
    if not any(line.startswith('mastodon:') for line in content):
        # Insert the mastodon link into the front matter
        for i, line in enumerate(content):
            if line.strip() == '---' and i != 0:
                content.insert(i, f'mastodon: {mastodon_link}\n')
                break

    # Check if the image path is provided and not already present
    if image_path and not any(line.startswith('image:') for line in content):
        # Insert the image path into the front matter
        for i, line in enumerate(content):
            if line.strip() == '---' and i != 0:
                content.insert(i, f'image: {image_path}\n')
                break

    # Insert the image tag at the end of the content if not already present
    if image_path and not any(f'<img src="{image_path}"' in line for line in content):
        content.append(f'\n<img src="{image_path}" alt="Image">\n')

    # Write the updated content back to the toot
    with open(toot_file, 'w') as file:
        file.writelines(content)

# Process individual markdown files in the toots directory
for toot_file in glob.glob(os.path.join(toots_dir, '*.md')):
    # Extract the post ID from the filename
    post_id = os.path.basename(toot_file).replace('.md', '')
    update_toot_file(toot_file, post_id)

# Process folders containing an index.md file in the toots directory
for toot_folder in glob.glob(os.path.join(toots_dir, '*/')):
    index_file = os.path.join(toot_folder, 'index.md')
    if os.path.exists(index_file):
        # Extract the post ID from the folder name
        post_id = os.path.basename(os.path.dirname(index_file))
        # Find the image file in the folder (assuming only one image per folder)
        image_files = glob.glob(os.path.join(toot_folder, '*.*'))
        image_path = None
        for image_file in image_files:
            if image_file != index_file:
                # Construct the relative image path
                image_path = f'/toots/{post_id}/{os.path.basename(image_file)}'
                break
        update_toot_file(index_file, post_id, image_path)

print("Toots updated successfully.")
```
{% endraw %}

Now, *obviously*, this is going to take a bit more setup than just putting both of these scripts together. You probably keep your files in different places than I do, and you might not even *want* a Jekyll template. Furthermore, you also still need to construct your site in order to be *able* to include these markdown files *within* the Liquid feed that's already included on a Jekyll website.

But, other than that, there we go!

Everything I post on Mastodon, will now post to my website (as long as I remember to commit and sync daily), using this cronjob:

```
0 2 * * * /home/cmdr-nova/grabtoots.sh
```
This is, *essentially*, my answer as to *how* to make it so that I can post to my website from my phone, albeit, a little bit of an extreme work-around, but very simple once you've got it all up and running.
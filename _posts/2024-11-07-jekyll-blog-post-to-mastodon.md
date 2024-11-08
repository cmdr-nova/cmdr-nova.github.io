---
layout: post
title: Jekyll Blog, Post to Mastodon
date: 2024-11-07 22:28
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
It's been a hell of a time! Earlier in the week, I suddenly had an issue where I broke my RSS feed bot that posted new feed items from my blog to my Mastodon account. I described this in my last post, but it was entirely because I ... edited the XML. So! I spent the last entire day rebuilding a brand new way to do this. By turning VS Code's "commit" button into a "Post to Mastodon" button. Let me explain.

I've been using "Deploy to Neocities" for a while, so I had a basis to work with already. I figured, all I'd have to do ... is tell Github to build the site, and then construct the URL from what it would usually be on my website.

The next thing I had to make it do, was SSH into my VPS, because you can't run Python on Neocities.

My first attempt was to work with a custom Ruby plugin, and have *that* build the post content, and then send it along with the constructed URL to a Python script on my VPS that would then jumble it all together and post it. But that didn't work. Because Jekyll apparently does not like custom Rubies ... I guess?

Also, if that sounds really convoluted and a round-a-about way of doing things, that's *because it is*.

So, I went to sleep, then I went to work. And I mulled it over in my head, "Why not just have the build process construct the URL, look for new posts, and then dump it into the pipeline to your server, where it's constructed, and posted."

Behold.

<code>
    - name: Check for new posts
      id: check_new_posts
      run: |
        new_post=false
        post_url=""
        current_date=$(TZ=America/New_York date +%Y-%m-%d)
        base_url="https://nova.mkultra.monster"
        echo "Current date: $current_date"
        for file in $(git log --diff-filter=A --name-only HEAD); do
          echo "Checking file: $file"
          if [[ $file == _posts/* ]]; then
            echo "File is in _posts directory"
            post_date=$(basename $file | cut -d'-' -f1-3)
            post_year=$(basename $file | cut -d'-' -f1)
            post_month=$(basename $file | cut -d'-' -f2)
            post_day=$(basename $file | cut -d'-' -f3)
            post_title=$(basename $file | cut -d'-' -f4- | sed 's/\.md$//')
            post_category=$(grep -m 1 '^categories:' $file -A 1 | tail -n 1 | sed 's/- //;s/"//g;s/ //g' | tr '[:upper:]' '[:lower:]')
            echo "Post date: $post_date"
            echo "Post category: $post_category"
            echo "Current date: $current_date"
            if [[ $post_date == $current_date ]]; then
              new_post=true
              post_url="$base_url/$post_category/$post_year/$post_month/$post_day/$post_title.html"
              echo "New post detected: $post_url"
              break
            else
              echo "Post date does not match current date"
            fi
          else
            echo "File is not in _posts directory"
          fi
        done
        echo "new_post=$new_post" >> $GITHUB_ENV
        echo "post_url=$post_url" >> $GITHUB_ENV
        echo "Post URL: $post_url"
</code>
<code>
    - name: Start SSH agent
      uses: webfactory/ssh-agent@v0.5.3
      with:
        ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
</code>
<code>
    - name: Post to Mastodon
      if: env.new_post == 'true'
      env:
        MASTODON_API_KEY: ${{ secrets.MASTODON_API_KEY }}
        POST_URL: ${{ env.post_url }}
      run: |
        echo "Posting to Mastodon: ${POST_URL}"
        ssh -o StrictHostKeyChecking=no root@my_vps_ip "source ~/masto-poast/masto-poast-env/bin/activate && MASTODON_API_KEY=${{ secrets.MASTODON_API_KEY }} python3 ~/masto-poast/poast.py '${POST_URL}'"
</code>

But wait! THERE'S MORE!

<img src="/img/posts/poast/wait.gif">

The code above is everything Jekyll does by itself on Github until it reaches the point it can do no more, because static sites are a bit limited. But that's okay! Static sites are great! But ... for what we're doing, we need to connect to my VPS, which is accomplished easily at the end of the build process.

Once connected, it activates the environment, and then runs the Python script, which is as follows.

<code>                                                                        
import os
import sys
import requests
from bs4 import BeautifulSoup
</code>
<code>
MASTODON_API_URL = 'https://mkultra.monster/api/v1/statuses'
ACCESS_TOKEN = os.getenv('MASTODON_API_KEY')
POSTED_URLS_FILE = 'posted_urls.txt'
</code>
<code>
def extract_summary_and_tag(post_url):
    response = requests.get(post_url)
    soup = BeautifulSoup(response.content, 'html.parser')
</code>
<code>
    # Extract the second < p > tag within the #main div as a summary
    main_div = soup.find('div', {'id': 'main'})
    if main_div:
        paragraphs = main_div.find_all('p')
        summary = paragraphs[1].get_text() if len(paragraphs) > 1 else "No summary available"
    else:
        summary = "No summary available"
</code>
<code>    
    # Extract the tag from the < span > within the #main div
    tag_span = None
    if main_div:
        for span in main_div.find_all('span'):
            if 'tag:' in span.get_text().lower():
                tag_span = span
                break
</code>
<code>    
    if tag_span:
        tag_link = tag_span.find('a')
        if tag_link:
            tag = tag_link.get_text(strip=True)
            print(f"Extracted tag: {tag}")
        else:
            tag = ""
            print("No < a > tag found within < span >")
    else:
        tag = ""
        print("No < span > tag found with 'tag:' text")
</code>
<code>
    hashtag = f"#{tag.replace(' ', '').lower()}" if tag else ""
</code>
<code>
    return summary, hashtag
</code>
<code>
def post_to_mastodon(content):
    headers = {
        'Authorization': f'Bearer {ACCESS_TOKEN}',
        'Content-Type': 'application/json'
    }
    data = {
        'status': content
    }
    response = requests.post(MASTODON_API_URL, headers=headers, json=data)
    print(f'Request URL: {MASTODON_API_URL}')
    print(f'Request Headers: {headers}')
    print(f'Request Data: {data}')
    print(f'Response Status Code: {response.status_code}')
    print(f'Response Text: {response.text}')
    if response.status_code == 200:
        print('Successfully posted to Mastodon')
    else:
        print(f'Error posting to Mastodon: {response.status_code} - {response.text}')
</code>
<code>
def has_been_posted(post_url):
    if not os.path.exists(POSTED_URLS_FILE):
        return False
    with open(POSTED_URLS_FILE, 'r') as file:
        posted_urls = file.read().splitlines()
    return post_url in posted_urls
</code>
<code>
def mark_as_posted(post_url):
    with open(POSTED_URLS_FILE, 'a') as file:
        file.write(post_url + '\n')
</code>
<code>
if __name__ == '__main__':
    if len(sys.argv) != 2:
        print('Usage: python poast.py "Post URL"')
        sys.exit(1)
    post_url = sys.argv[1]
    print(f'Received post URL: {post_url}')
</code>
<code>    
    if has_been_posted(post_url):
        print(f'Post URL has already been posted: {post_url}')
        sys.exit(0)
</code>
<code>    
    summary, hashtag = extract_summary_and_tag(post_url)
    post_content = f"Today on Nova Prime: {post_url}\n\n{summary}\n\n{hashtag}"
    print(f'Constructed post content: {post_content}')
</code>
<code>    
    post_to_mastodon(post_content)
    mark_as_posted(post_url)
</code>

As you can see, all sensitive information is being stored, *somewhere else*. In Github secrets! Which are injected into the Python script upon connection.

But, what this does, is it basically creates this situation where, now, my blog is kind of, sort of, federated? Not really, but it *acts* that way. Whenever I write a new post, and hit commit, the site builds, and then my account posts the generated matter. It's as if my Mastodon account is now inside of VS Code. Which it totally could be! ... if I wanted to post everything I write to Mastodon in links to my blog.

I lost a little sleep over this. I went to bed late last night, and then I woke up early to do more troubleshooting, and then I went to work with bags under my eyes, and then I came home, tired as all hell. And I kept going.

And now it's done

It works.

Enjoy.
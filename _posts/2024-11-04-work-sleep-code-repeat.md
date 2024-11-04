---
layout: post
title: Work, Sleep, Code, Repeat
date: 2024-11-04 00:09
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
So, like you do, I got home from work, and immediately dove back into the code machine, i.e., my monstrous PC that I primarily use for writing website stuff, or python scripts, and *sometimes* playing Dragon Age and Baldur's Gate.

My first objective, was to see if I could fully automate my dead Twitter account to just post stuff with a script utilizing the free API tier that they offer for personal use. After *much* hacking around, and finding out that it's mostly restrictive, and using multiple version of OAuth, I decided it's not worth it. Not worth it to figure out, and not worth it to maintain for a website that'll probably be dead in like six months.

Then, I moved on to Threads. Surely they have an API that can just toss me some keys and let me use Python to post a bunch of random stuff to my timeline so that I can further automate what I'm posting and doing on corporate owned social media.

No!

Or, at least, I haven't quite figured it out, because it's about as complicated as the Twitter API.

That's in the garbage for now as well.

But then, I was on my Mastodon instance, and I realized, "Hey, that reddit bot script I wrote repeats itself a lot. I think it'd do better to choose from *any* images posted to my fave subreddits, and maybe also like ... keep a log file of what's already been posted? So it stops posting the same things on a daily basis?"

And that's what I did.

I massively simplified the code, and set it up so that it keeps a log file.


First, we import all the stuff we need
<code>
import os
import random
import json
import requests
import praw
from PIL import Image
from mastodon import Mastodon
import pytumblr
import tempfile
</code>

We wanna use "random" to select random images, json to save the URLs for *already posted* images to a file in order to reference later, pillow to optimize the images so that it isn't all crappily crap once posted to Mastodon and Tumblr, and of course all the other essentials needed to make this work (like pytumblr and mastodon, gotta have those if we want to post).

Then we slap on some configuration. As far as API keys go, *you need them all*.

<code>
 &#35; Configuration
SUBREDDITS = ['Animewallpaper', 'ZeroTwo', 'BlueArchive', 'ZenlessZoneZero', 'Edgerunners', 'BaldursGate3', 'BokuNoHeroAcademia', 'ChainsawMan', 'backrooms', 'AnimeGirls', 'animeART', 'liminalspace', 'evangelion', 'abandonwareDOS', 'himikotoga', 'SFWmonstergirls', 'MotokoKusanagi', 'Churchofzerotwo', 'ChurchofMarnie', 'PokeGals', 'CuteAnimeGirls', 'UnixPorn', 'RebeccasPlace', 'AnimeSketch']
LOG_FILE = 'posted_images.json'
IMAGE_LIMIT = 50
MASTODON_INSTANCE_URL = 'https://your_instace.url'
MASTODON_CLIENT_ID = 'mastodon_client_id'
MASTODON_CLIENT_SECRET = 'client_secret_masto'
MASTODON_ACCESS_TOKEN = 'masto_access_token'
TUMBLR_CONSUMER_KEY = 'consumer_key_from_tumblr_app'
TUMBLR_CONSUMER_SECRET = 'the_consumer_secret'
TUMBLR_OAUTH_TOKEN = 'the_oauth_token_you_generate'
TUMBLR_OAUTH_SECRET = 'the_oauth_secret_key'
REDDIT_CLIENT_ID = 'reddit_client_id'
REDDIT_CLIENT_SECRET = 'reddit_client_secret'
REDDIT_USER_AGENT = 'name_of_the_reddit_app'
CUSTOM_TEXT = "Some custom text to post along with each that goes out to Mastodon and Tumblr"
TUMBLR_BLOG_NAME = 'nova-ayashi' &#35; This is where the name of your Tumblr blog goes
</code>

As you can see, this is where we want to list our favorite subreddits, then tell it what the log file to generate should be called, and how many images it should look at at once. We don't want to set it much higher than 50 because you're going to DDOS your own damn self and probably hit a rate limit somewhere.

After you've decided what to input in *those* fields, you're going to want to go through the lengthy process of obtaining your Mastodon keys, creating a Reddit app (for personal use, so they don't charge you money), and then the Tumblr app. Generating the Tumblr OAuth keys can be done within VS Code, just use localhost as your redirect URI.

Next, we want to load any posted images, *if there are any*.

<code>
def load_posted_images():
    if os.path.exists(LOG_FILE):
        with open(LOG_FILE, 'r') as f:
            return json.load(f)
    return []
</code>

Then create the posted images json.

<code>
def save_posted_image(image_url):
    posted_images = load_posted_images()
    posted_images.append(image_url)
    with open(LOG_FILE, 'w') as f:
        json.dump(posted_images, f)
</code>

Now, look at a random subreddit from your list! 🤩

<code>
def get_random_subreddit():
    return random.choice(SUBREDDITS)
</code>

And make sure it gets a nice high resolution image so that it doesn't post some pixelated looking poop.

<code>
def get_high_res_image_url(submission):
    if submission.url.endswith(('jpg', 'jpeg', 'png')):
        return submission.url
    if hasattr(submission, 'preview'):
        images = submission.preview.get('images', [])
        if images:
            resolutions = images[0].get('resolutions', [])
            if resolutions:
                return resolutions[-1]['url']
    return None
</code>

Now, here comes the fun part. We're going to take the random subreddit we just chose earlier, and we're going to tell the script to retry if it doesn't find anything, and when it does, append the URL to the json so that it's permanently saved as something that's already been posted. I had this issue before where the script kept repeating itself over and over again, essentially spamming timelines with duplicate content.

<code>
def get_random_photo_from_subreddit(reddit, subreddit_name):
    subreddit = reddit.subreddit(subreddit_name)
    image_submissions = [submission for submission in subreddit.new(limit=IMAGE_LIMIT) if submission.url.endswith(('jpg', 'jpeg', 'png'))]
</code>
<code>
    if not image_submissions:
        return get_random_photo_from_subreddit(reddit, subreddit_name)  # retry
    else:
        posted_images = load_posted_images()
        random_submission = random.choice(image_submissions)
        image_url = get_high_res_image_url(random_submission)
</code>
<code>
        while image_url in posted_images:
            random_submission = random.choice(image_submissions)
            image_url = get_high_res_image_url(random_submission)
</code>
<code>        
        save_posted_image(image_url)
        return random_submission, image_url
</code>

Once the script has chosen an image, we want to save it to the server. Just because we feel like it, f#ck it.

<code>
def download_and_optimize_image(image_url):
    response = requests.get(image_url)
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.jpg')
    temp_file.write(response.content)
    temp_file.close()
</code>
<code>
    image = Image.open(temp_file.name)
    image = image.convert('RGB')
    image.save(temp_file.name, optimize=True, quality=85)
    return temp_file.name
</code>

And already, we're posting! For Mastodon, we're going to use a sensitive marker so that we don't hit everyone in the face with something that could be potentially distressing or lewd. This is *Reddit* we're pulling from, after-all.

<code>
def post_to_mastodon(mastodon_client, image_path, status_text):
    media = mastodon_client.media_post(image_path)
    mastodon_client.status_post(status_text, media_ids=[media], sensitive=True)
</code>

Once the fediverse has been graced by anime pythons, we're going to hit Tumblr next. Except for Tumblr, we're going to use the subreddit name as a hashtag so that it's categorized and easier to find, since Tumblr still heavily uses hashtags.

<code>
def post_to_tumblr(tumblr_client, image_path, status_text, tags):
    tumblr_client.create_photo(TUMBLR_BLOG_NAME, state="published", tags=tags, data=image_path, caption=status_text)
</code>

***Note: I do not endorse Photo Matt and his crusade against his own company and software, nor do I endorse transphobia he expressed earlier in 2024.***

In order to make sure everything does what it's *supposed* to do, we need to define the main function. This is where we check all the API keys and what-not, optimize the image, and tell the script what exactly it is we want to say along with the image that's being posted (aside from the custom text already defined in the configuration). Once all that's done, we need to make sure we delete that image from the server, because we definitely don't want to have 40,000 anime girl images eating your hdd space.

<code>
def main():
    reddit = praw.Reddit(client_id=REDDIT_CLIENT_ID, client_secret=REDDIT_CLIENT_SECRET, user_agent=REDDIT_USER_AGENT)
    mastodon_client = Mastodon(
        access_token=MASTODON_ACCESS_TOKEN,
        api_base_url=MASTODON_INSTANCE_URL
    )
    tumblr_client = pytumblr.TumblrRestClient(
        TUMBLR_CONSUMER_KEY,
        TUMBLR_CONSUMER_SECRET,
        TUMBLR_OAUTH_TOKEN,
        TUMBLR_OAUTH_SECRET
    )
</code>
<code>
    subreddit_name = get_random_subreddit()
    submission, image_url = get_random_photo_from_subreddit(reddit, subreddit_name)
    image_path = download_and_optimize_image(image_url)
</code>
<code>
    mastodon_status_text = f"{CUSTOM_TEXT}\n\n░ Posted by: u/{submission.author}\n░ Subreddit: r/{subreddit_name}\n░ Title: [{submission.title}]({submission.url})"
    tumblr_status_text = f"{CUSTOM_TEXT}<br><br>░ Posted by: u/{submission.author}<br>░ Subreddit: r/{subreddit_name}<br>░ Title: < a href='{submission.url}'>{submission.title}< /a><br>░ Github: < a href='https://github.com/cmdr-nova'>cmdr_nova</ a>" &#35; you can make this a link to something else, but for me it's my personal github
    tumblr_tags = ["image", subreddit_name]
</code>
<code>
    post_to_mastodon(mastodon_client, image_path, mastodon_status_text)
    post_to_tumblr(tumblr_client, image_path, tumblr_status_text, tumblr_tags)
</code>
<code>
    os.remove(image_path)
</code>

The reason we have Mastodon and Tumblr in separate functions is because they have different requirements for formatting posts. Mastodon supports markdown, while Tumblr operates on basic HTML in its posts. If we send the Mastodon version of the post text to Tumblr, you'll get a non-formatted mess that sucks to look at and has no linking. So, what we do instead, is define two different types of posts!

Now we just make sure that it only runs when the file is executed.

<code>
if __name__ == "__main__":
    main()
</code>

And that's that! I remember when I used to be a heavy-gamer. Playing Call of Duty and World of Warcraft for 14 hours at a time and then going to work on an hour and a half of sleep. But, no more! Now I stare at text on my computer screen and grow ever-more-blind in a pair of glasses that probably need their prescription updated. No matter. I hope this script is useful to others, rather than just me, with a special interest in flooding social media with Python experiments.

The reason I've decided to post the code here, rather than Github, is because I thought it'd be more fun to break it all down and talk about it. There doesn't really seem to be a whole lot of conversation that happens on Github, and pretty much almost nobody even follows me there. ¯\\\_(ツ)\_/¯

Either way ...

Enjoy!
---
layout: post
title: Python, Deliver Us the Blue Hellsite
date: 2024-10-18 19:51 -0400
author: 𐕣 C M D R ░ NOVA 𐕣
categories:
    - "Programming"
tag: programming
#comments:
#    host: mkultra.monster
#    username: cmdr_nova
#    id: 
---
Have you ever thought to yourself, "Self, I wish there was more Tumblr on Mastodon?" Well, do I have some freakin' news for you. In my sickness addled brain, I have slapped together something that will tickle your pickle, or fancy. With a few lines (100 or so) of Python, we can force the Tumblr API to give us whatever it thinks is the top trending image post of the day, and slap that thing onto ActivityPub. Matt might be trying to bury Wordpress in a shallow grave, but maybe we can pretend that Tumblr has ActivityPub integration with some hacks.

The full script is <a href="https://github.com/cmdr-nova/tumblr-py" target="_blank">over here on Github</a>.

Now, I don't know for sure yet if this will capture *more than one post*. I currently have it setup on a cronjob that makes a post daily, and in my experimenting, it only seemed to grab *the one post*. This is why I've set it up to run once a day, to see if that post ever changes. You can see what the script output in my testing, below, on my Mastodon account.

<p>
<center>
<blockquote class="mastodon-embed" data-embed-url="https://mkultra.monster/@cmdr_nova/113331029170789052/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mkultra.monster/@cmdr_nova/113331029170789052" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @cmdr_nova@mkultra.monster</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mkultra.monster/" async src="https://mkultra.monster/embed.js"></script>
</center>
</p>

There *is* a way to grab *every single* trending post on Tumblr, and then sort out the image posts, and then post *one of those posts* at random, but! You are limited to the amount of times you can make an API call to Tumblr, per day, and this would *very likely* push you right over that limit, because, in order to do this, you have to make *many, many API calls.*

I should also add a warning, I haven't built-in any way to classify image posts, meaning, this could pull lewd or offensive content without warning, which is why I have it setup to always post with image sensitivity and a spoiler warning. I *may* look into figuring out implementing that later, along with possibly figuring out a way to have all my scripts give some kind of alt text to images (but I imagine that won't be possible unless I implement AI, which I don't think I want to do).

Either way, enjoy!
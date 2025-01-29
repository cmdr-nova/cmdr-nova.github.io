---
layout: page
title:  Fediverse Tips & More
permalink: /pages/feditips/
---
In light of recent happenings toward the end of 2024, and the beginning of 2025 in regard to Meta (and, by extension, Bluesky, and their massive issue with coherent moderation), I decided to make a page containing additional tips for new, or new-ish users on the Fediverse, via the Mastodon client (since this is currently the most recognizable platform.)

When talking (or, unfortunately, *sometimes arguing*) about Mastodon with the average person on, say, Bluesky, they say things like, "the UI / UX is bad, posting requires setup, my friends couldn't figure out how to move instances," and so on, and so forth.

To me, the answer to these issues is easy, and *feels* like it shouldn't be so confusing. Especially if people are, at this point, getting *used* to moving from one site to another. Because, as we know, they're all definitely not the same.

Regardless, here are some pointers / instructions on how to clear up issues people might be having, from my own perspective, and on my own website.

*Note: This is specifically about getting setup on the desktop site. But! Once you've done this, you can just as easily use the account you've made to log in on mobile (although, it is possible to make an account directly on a mobile Mastodon app).*

<code>
How in the world do I choose a server, and then sign-up?
</code>

I've detailed different ways to find Mastodon servers to join in the past, through my <a class="pages-link" href="/pages/activitypub">Join ActivityPub</a> page. But, just so it's crystal clear, you can look through a list of servers on the <a href="https://joinmastodon.org/servers" target="_blank">joinmastodon.org</a> page. This *doesn't* include *all* instances, because it specifically *only* lists instances that make daily backups, and have more than one person running them. But it's a *good place to start*.

Once you've decided on an instance, and, to be completely clear about this: You don't *need* to choose something that's incredibly specific to your interests. And even if you choose an instance that is specific *to* an interest, most of them don't care all that much if you don't happen to post about that specific thing *at all times*.

But anyway, once you've decided on an instance, you'll be brought to the splash page for registration. This is a great place to pause for a moment, and read their rules. If they *don't have any*, or if there's nothing stated about bigotry, harassment, trolling, nazism, etc, and so on, **turn back**, *choose another server*.

Like with all social sites, there are bad actors, and bad people, and it's easy enough to avoid them. It would be great if those types of people and instances didn't exist, but that's not the world we live in. And I think that the owners of the .org site are doing a well enough job in weeding out most of that type of riff-raff.

*Note: Because my instance is run by me, and only me, and I can't afford to pay for daily backups, you will not find my instance listed on joinmastodon.org.*

Some instances require a waiting period while your account is approved, and others let you in right after an e-mail confirmation. Never-the-less, once you're in, you're pretty much ready to go!

The best way to think about this whole process, is to think about Discord, and choosing a server to join. It's not all that different than this. *It's even got webhooks*, but that's a more advanced topic.

<code>
Posting requires setup.
</code>

Firstly, I'm not sure I understand what this issue or complaint is talking about. So, we'll just start with: Yes, you should fill out your display name, avatar photo, and bio before posting. You can reach all of those options under the 3-dot menu next to your username on the left of the UI. Once you've clicked that, hit that "edit profile" button, and fill out your information! While you're there, take some time to read through the "Privacy and reach" section, the "Verification" section, the "Featured hashtags" section, and then *also* look into your preferences and filters.

You can use filters to hard-filter out content you don't want to see, like topics about violence, or politicians.

Save everything you've changed, and then, at the top left, click "Back to Mastodon."

Once you've done all of that, the only barrier to sending off a post into the Fediverse is to write something in the compose box, and then hit "Post."

Smaller instances may have shorter reach than larger ones, but federation (connections) take time, and it's healthy to explore, and follow people that you find, that *spark your interest*, or align with your interests.

Another thing to note, is that you should not join Mastodon in hopes that you'll have 10,000 followers in a couple of days. It's not going to work like that for 99.9% of users.

<code>
What if I join an instance and I don't like it, or there's nobody on it, or there are bad people I don't want to be associated with?
</code>

So, switching instances is a *much* easier process than it used to be. Albeit, you *will not* be able to take all of your posts with you, but you can take *almost* everything else. And, if this is an issue you're running into shortly after signing up somewhere, it's not even that big of a deal.

*Note: If you haven't followed anyone, or really done anything upon realizing you don't want to be somewhere, just go make an account somewhere else, and skip this whole process*.

In order to move to another instance, go back and choose a different one, and then setup an account there. Fill in the basics like you did before, and then in that same menu with your profile info and preferences, click the "Account" menu.

Now, you'll be moving *from* a different account, so click the link beneath that header that says, "create an account alias."

In the submission field, type in the username from the instance you're moving away from. For example, if you're on mastodon.social, and your username is bobfarts, you'd write in "bobfarts@mastodon.social" (minus the quotation marks).

Then, on the instance you're *moving away from*, go into this same menu and under the "Move to a different account" header, and click "configure it here."

Type in the handle of your new account, and your current password **on the instance you're moving away from**.

For example, if your new instance is cyberpunk.lol, and your username is "bobdoesnotfart", you would write in, "bobdoesnotfart@cyberpunk.lol," and then your password.

**Once you hit "Move followers" you have started a no-turning-back process**. Everyone you've followed, and everyone who follows you, *will now move to the new account you created earlier*.

After that, it's just as simple as making sure your profile on the new account reflects everything that you want, and that your options in account preferences do as well.

In the case that you want to take bookmarks, blocks, and mutes with you, head back to the instance you've moved away from, and in the same menu with account, profile, and preference options, click "Import and export," then "Export," and then choose which things you'd like to export.

Personally, I *always* export follows on a regular basis, just so that I have it backed up, in the case that an instance goes down, and I don't have the chance to migrate. *Usually*, you have some notice before this happens. But there are some circumstances where, say, you might be away for a long period of time, and completely miss something like this happening.

Once you've exported what you want from this page, you *should* have these files in your downloads folder as .csvs.

Head on back to the new instance where you've signed up, and go to the *exact same menu*, but instead of going to the "Export" area, click "Import." Use the drop-down box to choose what it is you're importing, use the file input to browse for said file, choose to either merge it with currently existing information, or to overwrite, and then click "Upload."

You're done.

You've moved!

It's true this process is a little involved, and takes quite a few steps if you're interested in keeping *more* than just your followers. But the option is here, and it *can* be done.

One of the things you should get used to, in using open source software for social media, that is owned, run, and moderated by *regular people*, is that nothing is truly permanent. If there are *important* posts, images, or conversations you'd like to keep, I would suggest *actually saving them* to your HDD, yourself.

This may be a trade-off that you don't like, but I'm also a proponent of the idea that you should *own your own data*, that you should *have* a website that *isn't* directly connected to servers that could end up being entirely temporary, and that this is all *very* important in disconnecting from the global disinformation farm.

<code>
What else can you tell me?
</code>

If you've read all this way, and followed through with all of these steps, you're good to go! You can find people by searching up topics or names in the search field at the top left. You can view the federated (global) timeline of all connected servers under the "Live feeds" option on the right-hand side of the UI (you'll see tabs at the top in the middle of your screen that read "This server," "Other servers," and "All").

One of the biggest pointers I can give, is that you shouldn't treat Mastodon, or ActivityPub in-general, like an engagement farming mechanism with an algorithm that rewards anger and outrage. *There is no algorithm*.

When you follow people, interact with them. Heck, interact with people, *you aren't following*. This is social media, after-all. Forming communities, making friends and connections, it was never about gaming attention as hard as you possibly could, until you could start selling Coke and Temu products to your loyal "fanbase." These are just things introduced to *recent* social media, by the brutal capitalist machine that *already* devalues your humanity, your life, and your dreams.

If all of this seems or sounds unattractive to you, then maybe places like Twitter and Threads really are the only place for you. But I sincerely doubt that. People were not meant to be manipulated and outraged *at all times*, just so some disingenuous influencer can make a few thousand bucks off of your attention span.

Those are my two cents, and these are my tips for *getting started.* Enjoy.
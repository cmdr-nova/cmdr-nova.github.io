---
layout: page
title:  Setting Up A File Structure
permalink: /webdev/basics/guide2/
---
Before we go *any* further in this tutorial, I want to help you setup a file structure, both, so that you're ready for the rest of the tutorial, and so that things can be easily organized and not scattered all over the place.

Back when I started in the late 90s, I would just toss images and scripts right into the root directory. It was a mess. Stuff was just everywhere.

But, we're not going to do that.

You already have your root directory where the index.html file is stored, and the images folder, called "img." Later in the tutorial, we're going to setup some CSS, and JavaScript. This is about as far as we'll go, because <a href="https://neocities.org/" target="_blank">Neocities</a> will be our host, and in order to remain free, and not cost you a single penny, this is all we'll need.

So, let's get that file structure built.

Go into your root directory, and start creating folders. I'm going to show you what I mean, here, with a structure basis.

<code>
| root
|| img
|| assets
||| css
||| js
|| pages
</code>

You can see here that there are some folders you don't have. Where you place things is up to you. I always have the images folder one depth in from the root, but you don't need to do this. You could *actually* also place this in the assets folder (note, that if you move the img folder into the assets folder, you'll need to edit the location reference for the image on your page).

So, create a folder called "assets," and then within that folder, create two more. One called "css" and another called "js."

Finally, navigate back to the root and create a "pages" folder.

This is mostly self explanatory. In the "css" folder, this is where we'll store the customization for our site. In the "js" directory, we'll be storing any JavaScript we write. And then, back in the root, the "pages" directory is where we'll store additional pages that are separate from the index.

And, that's it! We're ready to continue with the rest of the tutorial!

<a class="page-link" href="/pages/webdev">Click here to return to the tutorial index.</a>
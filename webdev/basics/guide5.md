---
layout: page
title:  Let's Add Some Pages
permalink: /webdev/basics/guide5/
---
Now, we've come a long way so far. And, by the way, if you haven't fully wrapped your head around everything that's been done, don't worry! It takes *a lot of time* doing these things yourself, until you *really* start to get the hang of it.

But, anyway, where were we?

Well, I took what we did last time in our navigation bar tutorial, and I modified both the header text, and the socials bar, to *also* use a script to make a call to a separate file. This way, you can change your navigation bar, your header title, *and* your socials, without having to edit **any other page on your site**.

Here's how that looks in code, where we only edited the index.html, added a few standalone html files, and then added a few scripts that do, functionally, the same exact thing.

```
<html>
<head>
<title>My Cool Site</title>
<link rel="stylesheet" href="assets/css/style.css">
<script src="https://unpkg.com/@phosphor-icons/web"></script>
</head>
<body>



<div class="content-wrapper">

    <div class="nav">

        <script id="navbar" src="/assets/js/nav.js"></script>
    
    </div>

    <div class="main-content">

    <div class="header">

        <script id="header" src="/assets/js/header.js"></script>

    </div>

<div class="socials">

    <script id="socials" src="/assets/js/socials.js"></script>

</div>

<div id="content">

<img src="img/cool.jpg">

<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall. Sometimes I like to browse <a href="https://www.lycos.com/" target="_blank">Lycos search</a> for cool images of dogs, but this has the tendency to over-excite me.</p>

<p>All-in-all, you should be very aware of the dangers of searching photos online. The stimulus can be endless, and your brain has the chance of exploding. And you don't want that. Because if your brain explodes, you might slip into some alternate dimension where there are two Yous, instead of just one You. What would you do about that? Would you try and get to know You two, or would you argue about who's number one and who's number two?</p>

<p>Personally, I tend to not dabble in experimentation with alternate dimensions, because that's how you end up quantum tunneling directly into The Complex, which is a very scary place. You don't want to go there. You will never leave.</p>

</div>

</div>
</div>

</body>
</html>
```
And then, we make two more scripts, and two more HTML files. Firstly, here are the scripts, which, as mentioned, are almost *no different* from the navigation bar script. The only thing that's changed is the reference to the div we're targeting, "header" and "socials."

```
fetch('/webdev/basics/examples/header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#header");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
```

```
fetch('/webdev/basics/examples/socials.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#socials");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
```

And then we make the separate files, containing the same information that was already *in* index.html.

The header.html file:

```
<h1>Welcome to the best site on the world wide web!</h1>
```

The socials.html file:

```
Socials: <a href="https://mastodon.social/@daemon_nova@labyrinth.zone" target="_blank">Mastodon</a> <i class="ph ph-mastodon-logo"></i> | <a href="https://www.instagram.com/nova.ayashi/" target="_blank">Instagram</a> <i class="ph ph-instagram-logo"></i> | <a href="https://bsky.app/profile/mkultra.monster" target="_blank">Bluesky</a> <i class="ph ph-butterfly"></i>
```

You'll also notice that I wrapped the main image on the page, and the three paragraphs in another new div simply called "content." This requires *no styling.* I've only done this so that it's more easily identifiable as a place you'll be editing in *new* content, as you create more pages.

So, there you have it. A static website with content that's consistent across every new page you make, without having to change a billion things. And, remember, in the script id and div id fields, make *sure* to use the correct identifier, or you might load something completely different, or nothing at all.

<a href="/webdev/basics/examples/index9.html" target="_blank">Here's how it looks</a>. You might be surprised, because it looks *no different than before*.

Now, we're ready to make some new pages. Remember when you made a "pages" folder? You'll get to use that, finally.

So, let's start with an "about me" page.

Go into your website's directory, and then copy and paste index.html into your "pages" folder. Then, rename it from "index.html" to "aboutme.html."

Because we're using pages that are one folder depth inward, beyond your scripts and css, you'll need to make sure you edit each page within the "pages" folder to reflect this, by adding a "../" in front of file paths that are calling to elements that are, obviously, beyond the reach of the folder we're inside of.

```
<html>
<head>
<title>My Cool Site | About Me</title>
<link rel="stylesheet" href="../assets/css/style.css">
<script src="https://unpkg.com/@phosphor-icons/web"></script>
</head>
<body>



<div class="content-wrapper">

    <div class="nav">

        <script id="navbar" src="../assets/js/nav.js"></script>
    
    </div>

    <div class="main-content">

    <div class="header">

        <script id="header" src="../assets/js/header.js"></script>

    </div>

<div class="socials">

    <script id="socials" src="../assets/js/socials.js"></script>

</div>

<div id="content">

<p>I'm from the state of Nevada. In these so-called "united" states of oligarch rule. But, deep within the sands of the deserts, there are many things to find. And that's where you'll find me, sloppy, dirty laptop in-hand, digging for alien bones.</p>

<p>The truth is out there.</p>

<img src="../img/truth.jpg">

</div>

</div>
</div>

</body>
</html>
```

First thing's first, we'll slightly edit the "title" in the head of the document to reflect what page we're on, *now*. Next, we'll go down into the "content" div, and delete the image and paragraph tags that are already there, and make *new* paragraph tags, so that you can write an "about me."

Maybe we'll include a neat little image to accompany our "about me" page.

See what we've made, <a href="/webdev/basics/examples/pages/aboutme.html" target="_blank">here</a>.

The way we're calling to our scripts *may* cause the navigation bar image not to load. If that *does* happen, we'll go into the nav.html file and add a forward slash in front of the img directory, so that it knows to look in the *root* folder of the website, no matter where it's being referenced from.

Now. all we've got to do is make sure the navigation bar links to both the "about me" page, and back to the "home" page, so that visitors can roam freely between them.

So, open up nav.html, and we'll add anchor elements to "home" and "about me."

```
<p>
<img src="/img/laptop.gif">
</p>

<p>
THE MENU
<br />
**
</p>

<p><a href="/index.html">Home</a></p>
<p><a href="/aboutme.html">About Me</a></p>
<p>Writings</p>
<p>Space Anomalies</p>
<p>Alien Life</p>
<p>Podcasts</p>
<p>Bookmarks</p>
<p>Area 51</p>

<p>/ / /</p>

<p>
Webrings
<br />
**
</p>

<p><- Alien Ring -></p>
```
And there you have it! We'll use a forward slash in front of the links just to avoid any errors the browser may have in locating where you're trying to send visitors, and now, you'll <a href="/webdev/basics/examples/index10.html" target="_blank">see on the page</a>, both the index and the "about me" section can be navigated, and all you had to do was update *one* file.

With this knowledge, you can add more links to your page, *yourself*, and continue on your journey of crafting your very own website.

"But what about a blog section?" You might ask.

A blog is a bit trickier, and there is a way to do it, even on a static site like the one we've built here, and I'll go over more in-depth ways on how to do this, without getting too wild. But, for now, you *could* easily add a new page for "blogging", and then start writing. Maybe write the title of your blog post onto a "blog" page, and then link to a separate page within a "blog" folder containing the text of your update, utilizing the same methods we've gone over to create pages.

Again, though, this is something I'll explain in more detail in the "advanced web crafting" section.

<a class="page-link" href="/pages/webdev">Click here to return to the tutorial index</a>, or <a class="page-link" href="/webdev/basics/guide6/">move on to the next tutorial</a>.
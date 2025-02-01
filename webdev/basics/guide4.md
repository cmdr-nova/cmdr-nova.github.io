---
layout: page
title:  Let's Make Some Navigation
permalink: /webdev/basics/guide4/
---
Having a single page on your site where you can write things infinitely is fun, but what if you want *more* pages. Such as places to showcase your art, or post game screenshots, or to show people your favorite McDonald's order? We'll do that, along with giving you a way to list your social media presence on the main page, as well.

So, where were we?

This is where we're at right now.

```
<html>
<head>
<title>My Cool Site</title>
<link rel="stylesheet" href="assets/css/style3.css">
</head>
<body>

<div class="content-wrapper">

<h1>Welcome to the best site on the world wide web!</h1>
<img src="img/cool.jpg">
<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall. Sometimes I like to browse <a href="https://www.lycos.com/" target="_blank">Lycos search</a> for cool images of dogs, but this has the tendency to over-excite me.</p>

<p>All-in-all, you should be very aware of the dangers of searching photos online. The stimulus can be endless, and your brain has the chance of exploding. And you don't want that. Because if your brain explodes, you might slip into some alternate dimension where there are two Yous, instead of just one You. What would you do about that? Would you try and get to know You two, or would you argue about who's number one and who's number two?</p>

<p>Personally, I tend to not dabble in experimentation with alternate dimensions, because that's how you end up quantum tunneling directly into The Complex, which is a very scary place. You don't want to go there. You will never leave.</p>

</div>

</body>
</html>
```
But, let's say you're an avid Mastodon tooter, with an Instagram, and a Bluesky profile. How could you go about showing this to people, and make it look good, in the process?

Easy.

We'll just add some things to the already existing page, and that'll be that.

```
<html>
<head>
<title>My Cool Site</title>
<link rel="stylesheet" href="assets/css/style.css">
<script src="https://unpkg.com/@phosphor-icons/web"></script>
</head>
<body>

<div class="content-wrapper">

<h1>Welcome to the best site on the world wide web!</h1>

<div class="socials">
    Socials: <a href="https://mastodon.social/@daemon_nova@labyrinth.zone" target="_blank">Mastodon</a> <i class="ph ph-mastodon-logo"></i> | <a href="https://www.instagram.com/nova.ayashi/" target="_blank">Instagram</a> <i class="ph ph-instagram-logo"></i> | <a href="https://bsky.app/profile/mkultra.monster" target="_blank">Bluesky</a> <i class="ph ph-butterfly"></i>
</div>

<img src="img/cool.jpg">

<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall. Sometimes I like to browse <a href="https://www.lycos.com/" target="_blank">Lycos search</a> for cool images of dogs, but this has the tendency to over-excite me.</p>

<p>All-in-all, you should be very aware of the dangers of searching photos online. The stimulus can be endless, and your brain has the chance of exploding. And you don't want that. Because if your brain explodes, you might slip into some alternate dimension where there are two Yous, instead of just one You. What would you do about that? Would you try and get to know You two, or would you argue about who's number one and who's number two?</p>

<p>Personally, I tend to not dabble in experimentation with alternate dimensions, because that's how you end up quantum tunneling directly into The Complex, which is a very scary place. You don't want to go there. You will never leave.</p>

</div>

</body>
</html>
```
And now we'll head back to the CSS to give this little socials menu some added customization, so that it's not so generic.

```
:root {
    --bg-color: #202020;
    --text-color: #FFFFFF;
    --link-color: #CCCCCC;
    --visited-color: #CCCCCC;
    --socials: #295548;
    --text-shadow: #000000;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color)
}

a {
    color: var(--link-color)
}

a:visited {
    color: var(--visited-color)
}

.content-wrapper {
    margin: 0 auto;
    width: 50%;
}

.content-wrapper h1 {
    text-align: center;
}

.content-wrapper img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.content-wrapper p {
    text-indent: 20px;
}

.socials {
    text-align: center;
    padding: 15px;
    background-color: var(--socials);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    text-shadow: 1px 1px 2px var(--text-shadow);
}
```

See how that looks, <a href="/webdev/basics/examples/index7.html" target="_blank">here.</a>

As you can probably already tell, we made some *extensive* additions here. Firstly, we created a new "div" container called "socials", and then gave that container attributes in the CSS file.

Those attributes are as follows:

- -We made it so that the text aligns to the center.
- -We gave it "padding" so that there's space around the text and the rest of the elements.
- -We gave it a background color so that it stands out from everything else on the body of the document.
- -We gave the "div" element margins so that it's not hugging adjacent content.
- -We told the "div" to have a border with rounded edges to give it a more stylish look (border-radius).
- -And then we gave the text *within* that socials element a slight black dropshadow!

But that's not *all* we did. We also added things to the main index.html document! Obviously, we linked to the profiles that we want visitors to be able to visit, and, like in the CSS guide, we targeted a new tab with each link. But, we also added these cool little social icons. Where did *those* come from?

For little icons to give your page some more flavor, you can visit <a href="https://phosphoricons.com/" target="_blank">Phosphoricons</a>, and reference them with just a simple script!

As you can see, in the "head" part of the document, we've included a new line with a script source that points to Phosphor.

```
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```

And then, next to each social link, we referenced the icons *from that website*, with code provided by them. In this case, we're using their "i class" tags for Mastodon, Instagram, and an icon of a Butterfly (because they don't yet have an icon for Bluesky).

This is pretty simple to do. At the bottom of the Phosphoricons page, there's a search function. Type in a name or phrase that you're looking to use an icon for, and once something pops up, click it. Then, at the bottom, click the "web" tab for that specific icon, and copy the text in that field. Now, you can just paste it anywhere in your index.html document, and as long as their script is referenced in your document's head, it'll load. Easy peasy.

Finally, let's get you setup with a navigation bar to the left side of the page. For this, we're going to edit the CSS, the index.html document, and then we're going to add some JavaScript into the mix.

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
<h1>Welcome to the best site on the world wide web!</h1>

<div class="socials">
    Socials: <a href="https://mastodon.social/@daemon_nova@labyrinth.zone" target="_blank">Mastodon</a> <i class="ph ph-mastodon-logo"></i> | <a href="https://www.instagram.com/nova.ayashi/" target="_blank">Instagram</a> <i class="ph ph-instagram-logo"></i> | <a href="https://bsky.app/profile/mkultra.monster" target="_blank">Bluesky</a> <i class="ph ph-butterfly"></i>
</div>

<img src="img/cool.jpg">

<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall. Sometimes I like to browse <a href="https://www.lycos.com/" target="_blank">Lycos search</a> for cool images of dogs, but this has the tendency to over-excite me.</p>

<p>All-in-all, you should be very aware of the dangers of searching photos online. The stimulus can be endless, and your brain has the chance of exploding. And you don't want that. Because if your brain explodes, you might slip into some alternate dimension where there are two Yous, instead of just one You. What would you do about that? Would you try and get to know You two, or would you argue about who's number one and who's number two?</p>

<p>Personally, I tend to not dabble in experimentation with alternate dimensions, because that's how you end up quantum tunneling directly into The Complex, which is a very scary place. You don't want to go there. You will never leave.</p>

</div>
</div>

</body>
</html>
```

```
:root {
    --bg-color: #202020;
    --text-color: #FFFFFF;
    --link-color: #CCCCCC;
    --visited-color: #CCCCCC;
    --socials: #295548;
    --text-shadow: #000000;
    --nav-bg: #294155;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color)
}

a {
    color: var(--link-color)
}

a:visited {
    color: var(--visited-color)
}

.content-wrapper {
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
    padding: 20px;
}

.content-wrapper h1 {
    text-align: center;
}

.content-wrapper img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.content-wrapper p {
    text-indent: 20px;
}

.nav {
    flex: 0 0 200px;
    background-color: var(--nav-bg);
    border-radius: 10px;
    padding: 1px;
    font-size: 1.2em;
    text-align: center;
}

.nav p {
    text-indent: 0;
    text-shadow: 1px 1px 2px var(--text-shadow);
}

.main-content {
    flex: 1;
    max-width: 800px;
    min-width: 800px;
    margin: 0 auto;
    padding: 10px;
}

.socials {
    text-align: center;
    padding: 15px;
    background-color: var(--socials);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    text-shadow: 1px 1px 2px var(--text-shadow);
}
```

```
<p>
<img src="img/laptop.gif">
</p>

<p>
THE MENU
<br />
**
</p>

<p>Home</p>
<p>About Me</p>
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

```
fetch('/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
```
Before I explain what we're doing now, see how this looks, <a href="/webdev/basics/examples/index8.html" target="_blank">here</a>.

Now, I *know* this is a lot, but I'll explain why we're doing all of this, and how it'll benefit you when you're building the rest of your site!

Firstly, we took the main content within the content-wrapper, and gave it its own div, called "main-content." This is important, because we need our new navigation bar to sit beside it, rather than on top of it. Afterward, we add another new div for the navigation, called, "nav."

Now, we're ready for the rest.

In order to be more consistent, and so that you don't have to update a separate navigation bar per every single page you make, we're taking the nav bar and putting it into *its own file* (with no html, head, or body elements), and then making a call to that file with some JavaScript. So, essentially, you can use the index.html document as a template, and create the rest of your content *around it*, and if for some reason you need to add or remove links from your navigation bar, you can do that! Without changing a whole bunch of pages!

You could also do this with the socials bar, but we're not going to do that here, for now.

What the JavaScript does, is, very simply, it fetches the nav.html file we made (and you'll want to put this in your root directory for how we've set this up), and replaces the empty space within the div where the script line is ... with your nav bar!

So, basically, this:

```
    <div class="nav">

        <script id="navbar" src="/assets/js/nav.js"></script>
    
    </div>
```

Turns into this:

```
<p>
<img src="img/laptop.gif">
</p>

<p>
THE MENU
<br />
**
</p>

<p>Home</p>
<p>About Me</p>
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
But, you know, as an actual navigation bar on your website. You can see that we've added a neat little image of an animated laptop, and included space for numerous interesting links, and maybe a webring you would join to connect with other people who have the same interests as you

How does the JavaScript work, though, for real?

```
fetch('/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
```
The fetch function is used to make a request to the folder where your nav.html is stored. "Fetch" also resolves to the response object. In this instance, that object is "text." Then, the querySelector is used to select the navbar element where it'll be placed on the page, where a new div element is created so that it displays properly. And, finally, the "oldelem" and "newelem" is used to *replace* the script with the div element that contains the text for the menu.

Now, all of that out of the way, we only need one more thing ...

CSS that controls how this all looks and works on the page. I'm going to single out what was changed, so that it can be more easily explained what was done here.

```
.content-wrapper {
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
    padding: 20px;
}

.nav {
    flex: 0 0 200px;
    background-color: var(--nav-bg);
    border-radius: 10px;
    padding: 1px;
    font-size: 1.2em;
    text-align: center;
}

.main-content {
    flex: 1;
    max-width: 800px;
    min-width: 800px;
    margin: 0 auto;
    padding: 10px;
}
```
Basically, in order for things to display on the page without stretching all over the place, and so that the nav bar and main content are more uniform together, the width percentage is removed from the content-wrapper and set to the total amount of width used by both the nav bar and the main content, at maximum. The new "nav" element is placed into a flexbox with a maximum width of 200 pixels, and then, of course, a background color, border radius, padding, justification, and font size.

Then, in the new main-content div we're using for the rest of the content on the page, we've *also* placed it into a flexbox, as number 1, rather than the 0 that the nav bar is (this puts them in a set order). Then, to keep it from squishing, we tell the main content that its maximum and minimum width should constrain to 800 pixels and go *nowhere else*. And then we center it with auto margins.

This *does* mean that it'll be less friendly to mobile users, but we'll get in to how we can fix this later on.

"But what the heck is a flexbox?" You might ask.

It's simply a layout model that determines space between different items, and their placement on the page. You know, it makes things more *flexible.*

So, there you go! Navigation!

Now, none of the links in the navigation bar in our current example go anywhere, but we'll go over how we can build more pages in the next guide.

<a class="page-link" href="/pages/webdev">Click here to return to the tutorial index</a>.
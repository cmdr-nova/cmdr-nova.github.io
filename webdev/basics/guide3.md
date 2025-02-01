---
layout: page
title:  Making your site better, with CSS
permalink: /webdev/basics/guide3/
---

So, now you want to know how to make your site actually look cool, and not like something a nerd in 1992 would have built upon first discovery of the old-internet.

Okay.

Let's bring back the HTML we were building for your index.

```
<html>
<head>
<title>My Cool Site</title>
</head>
<body>
<h1>Welcome to the best site on the world wide web!</h1>
<img src="img/cool.jpg">
<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall.</p>
</body>
</html>
```

All of this is really neat, but as we discussed before, there are no colors, and nothing's justified.

In order to start, navigate to your css folder in "assets/css" and create a brand new file called "style.css," and then save it, and exit (we're not yet ready to start customizing).

In order to make this work, and so that you can see the results as you go, return to editing your index.html file real quick, and then in the head of the document, add this:

```
<html>
<head>
<title>My Cool Site</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<h1>Welcome to the best site on the world wide web!</h1>
<img src="img/cool.jpg">
<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall.</p>
</body>
</html>
```

With this new line in the head, we're telling the document, or browser, that we'd like to reference a style sheet (link relationship) for the page, and with "href" (or, hypertext reference), we're telling the document where to find your css (cascading style sheets).

With that out of the way, you can now return to your style.css file, and write code from there. Note: That you *will* need to return to the index file throughout this process. If you're on Windows, you'll probably want to have both files open in two notepads, or on Linux, you can either use *two terminals at once*, or simply save and exit, and navigate to each separate file as we edit them. It's up to you!

If you'd like to make this simpler, and not have a bunch of files or terminals open, take a look at the "tools" section on the main page for the guides, and check out <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>. VS is very much a professional's friend, but for using it to manage multiple files for a website at once, it's *mostly* a breeze. If you decide to download VS Code, open it up, go through the beginner's guide it gives you, and then once you're finished with that, click "File" at the top, then "Open Folder." After that, you'll just want to choose the root folder of your website (my site, my-site, etc).

Now, with your website open in VS Code, you can simply click between files (you'll notice your file structure for the site in the left pane, as long as you have "Explorer" selected), and save them as you work (CTRL + S), and then preview them in exactly the same way we were going about it in the first guide (by manually opening the file from the directory in your file explorer in order to open them in your default browser).

*Don't worry about any of the other settings in VS Code.* For what we're doing, you don't need to bother with all of that.

I didn't *start* these guides with having you download VS Code, because, as a budding web developer, it's important for you to know and experience where we came from before you move on to modern software.

**Now** we're ready.

With your style.css file open, let's begin. We'll start with something simple, and give the background a color, and then recolor the text so that it's legible on our new background.

```
:root {
    --bg-color: #202020;
    --text-color: #FFFFFF;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color)
}
```

As you can see, we're telling the body of the entire document to have a black-ish sort of background color, and white text. You can see a preview of that, <a href="/webdev/basics/examples/index3.html" target="_blank">here</a>.

Writing CSS is pretty simple. You tell it what container or element to reference, and then you give it attributes with opening and closing brackets to contain those attributes (always remember to use opening and closing brackets!)

In the past, we would have put the color for the background and text directly into the body attribute, but things have changed and progressed a bit, and now we place them at the top of the CSS file in a root container to be variables that we can reference. I took a break from web development for a bit of time, and this change happened at some point during that break. It's fine though! This actually makes it *really easy* to change colors around, if you should decide you don't like them.

But, now you're probably thinking, "Okay, but can we move stuff to the center of the page?"

Yes, we can.

Let's go back to your CSS, and create a new div (division) element. A "div" element defines a new section, and it'll make it so that we can identify the content in its *own* container, and then change the way it looks selectively, or individually.

```
:root {
    --bg-color: #202020;
    --text-color: #FFFFFF;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color)
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
```

But, we're not done yet, because this will have *no effect at all* on your page, until you put your content into the div container!

So, we'll do that.

```
<html>
<head>
<title>My Cool Site</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="content-wrapper">

<h1>Welcome to the best site on the world wide web!</h1>
<img src="img/cool.jpg">
<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall.</p>

</div>

</body>
</html>
```
You can see how this look in <a href="/webdev/basics/examples/index4.html" target="_blank">this example</a>. And, as you can probably tell, we've done some neat things here.

We're using a div element named "content-wrapper" that we're just *wrapping* all of the content within. You don't even have to call it "content-wrapper," though. You could just as easily call it "ode-to-pizza" and it would still do the same thing, as long as you reference it properly.

We're using "margin: 0 auto" to shift everything to the center of the page, and then "width: 50%" to tell it to use only 50% of the width of the entire page, so that it doesn't stretch all over the place, and, by using percentages, it'll resize properly upon making your browser window smaller.

After that, we're also telling it that any "h1" tag within the element should align its text to the center, any image within said element to use block display, and auto margins with a width of 100%, so that it *also* sizes properly, and then we're telling it to indent the text of any paragraph tag 20 pixels. With indentation, any paragraph tag within the "content-wrapper" element will indent text a little bit, to give it more of a written document type of style.

We can test this out, by typing more things onto the page, while using multiple tags, and even including a link.

```
<html>
<head>
<title>My Cool Site</title>
<link rel="stylesheet" href="assets/css/style.css">
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

See how this looks, <a href="/webdev/basics/examples/index5.html" target="_blank">here</a>.

Pretty cool, right? But ... Uh oh, the link doesn't color itself correctly. It's clashing with the rest of your website and you can hardly read it!

Let's fix that.

```
:root {
    --bg-color: #202020;
    --text-color: #FFFFFF;
    --link-color: #CCCCCC;
    --visited-color: #CCCCCC
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
```
Whew, we fixed that problem pretty easily. <a href="/webdev/basics/examples/index6.html" target="_blank">Check it out</a>.

This was accomplished by using the same coloring strategy that we did with the body and body text, by including new CSS elements that target anchor elements and visited anchors (links). Now, any time you include a new link, they'll be properly colored to fit in with the dark background we've chosen.

And that's it for *basic* CSS development. Now your site can have cool colors, content justification, and a little bit of mobile friendliness.

Next, we'll talk about creating a navigation bar so that you can build more pages for people to visit on your site.

<a class="page-link" href="/pages/webdev">Click here to return to the tutorial index</a>.
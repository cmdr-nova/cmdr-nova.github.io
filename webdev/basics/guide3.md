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




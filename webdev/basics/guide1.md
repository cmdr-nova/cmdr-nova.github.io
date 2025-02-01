---
layout: page
title:  Getting Started With The Basics
permalink: /webdev/basics/guide1/
---
Starting a new, or even your *first* page, may sound intimidating, and you may not even know where to start. But it's very simple. So we'll just dive right in ...

Pull up a text editor.

 - If you're on Windows ...

```
Windows Key + R
Type in "notepad.exe"
Press Enter
Click File, then Save As ...
Choose where you want your site to be and create a folder
Example: My Site
Double-click the folder
Name this file "index.html" and then save
```

 - If you're on Linux ...

```
Open a terminal
mkdir my-site (or whatever you want the folder to be called)
cd my-site
nano index.html
Ctrl + O and then hit the Enter key
```

(Remember, if using Nano as your editor in a Linux Terminal, that CTRL + X will exit the file.)

Now, whether you're on Windows, or Linux, you're ready!

We're making the initial file "index.html," because this acts as the page that a browser will load by default. And now, with that file open, we want to get started with the full basic structure of the page. So ...

```
<html>
<head>
</head>
<body>
</body>
</html>
```

What this does:

We're telling the document that it is, in fact, HTML, and then we're giving it a head that'll contain the title of your site, and then a "body" where all of your initial content will be. When using HTML tags, you always want to make sure you open it < > and then close it </>. If ever you forget to close a tag, it *may* cause issues across your website.

Remember to periodically save what you're doing, either with Ctrl + S (on Windows) or Ctrl + O and then Enter (on Linux).

Now, we'll want to fill the head with identifying information, so ...

```
<html>
<head>
<title>My Cool Site</title>
</head>
<body>
</body>
</html>
```

With that out of the way, let's put some stuff into the page's body.

```
<html>
<head>
<title>My Cool Site</title>
</head>
<body>
<h1>Welcome to the best site on the world wide web!</h1>
<p>Here you will find all sorts of things about me, such as how to boil pizza in water, where to find cool rocks, and what to do if you find yourself in an abandoned mall.</p>
</body>
</html>
```

Now, you'll notice these tags I used in the body, "h1" and "p".

We use the "h1" tag as a header, like a body title, or an article headline, and then we use "p" to start a new paragraph. So, essentially, you're already setup to write onto a page whatever your thoughts may be, and with *very little effort*.

<a href="/webdev/basics/examples/index.html" target="_blank">Here</a> is what this basic page looks like in an actual HTML document online.

If you're following along, and you'd like to see this on your *own* machine, navigate to the folder where your index.html is saved, and double-click it. This will open the page in your default browser for viewing *locally* and *offline*. You should note that this is not online where anyone but you can see it.

Now, maybe you'd want to include some kind of photo under the header? That's also easy to do. So, we'll do it like this. Firstly, find an image you like, or want to use, and then go into the actual folder where your website is being kept. And then, in order to keep things organized (we'll go over this more, later), create a folder in the root directory (where your index.html is located) called "img" and then click into *that* folder.

Take the image you want to use and place it in here. Make sure the name of the image is simple so that it's not complicated to reference in your HTML.

In order to accomplish this, we'll use the HTML tag for images, "img." Press the Enter key at the end of your header line, and then do this:

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

And it should look something like <a href="/webdev/basics/examples/index2.html" target="_blank">this</a>.

With the "img" tag, we're calling to the source of the image with "src," and then in the quotations, we're simply telling it where the image is located. Note, that using forward slashes is important, and can have different effects. If you exclude a forward slash from the beginning of your location reference, the browser will assume the folder containing your images is in the *same* directory as your index.html. If you use two periods and a forward slash, this will tell the browser to go backward one directory to look there. Or, if your index.html is in a folder that isn't your root directory, simply put a forward slash in front of the location reference, which will tell it to look directly into the root directory.

You've probably noticed by now, the colors are all generic on the page, and everything is justified to the left. Plus, the image is just its default size. This is something we'll get into with the CSS tutorial.

Back in the day, you could use tags within the HTML body itself to center, justify, and resize things, but we'll avoid doing that as much as possible, because, *nowadays*, we use CSS for most of that. If you investigate the source code of my own website here, you'll notice I use a combination of everything. Ignore this. That's just me being lazy about how I build my personal site (and it'll probably cause issues down-the-line unless I go through and fix it all).

But, congratulations! You now have the basics of putting a very simple website together, where you can write things, and display images!

<a class="page-link" href="/pages/webdev">Click here to return to the tutorial index.</a>
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
</head>
<body>

<div class="content-wrapper">

<h1>Welcome to the best site on the world wide web!</h1>

<div class="socials">
    Socials: Mastodon | Instagram | Bluesky
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

```

See how that looks, <a href="/webdev/basics/examples/index7.html" target="_blank">here.</a>
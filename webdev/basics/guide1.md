---
layout: page
title:  Getting Started With The Basics
permalink: /webdev/basics/guide1/
---
Starting a new, or even your *first* page, may sound intimidating, and you may not even know where to start. But it's very simple. So we'll just dive right in ...

Pull up a text editor.

 - If you're on Windows ...

<code>
Windows Key + R
Type in "notepad.exe"
Press Enter
Click File, then Save As ...
Choose where you want your site to be and create a folder
Example: My Site
Double-click the folder
Name this file "index.html" and then save
</code>

 - If you're on Linux ...

<code>
Open a terminal
mkdir My Site (or whatever you want the folder to be called)
cd My Site
nano index.html
Ctrl + O and then hit the Enter key
</code>

Now, whether you're on Windows, or Linux, you're ready!

We're making the initial file "index.html," because this acts as the page that a browser will load by default. And now, with that file open, we want to get started with the full basic structure of the page. So ...

<code>
&lt;html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
</code>

What this does:

We're telling the document that it is, in fact, HTML, and then we're giving it a head that'll contain a title and some meta information, and then a "body" where all of your initial content will be.

Remember to periodically save what you're doing, either with Ctrl + S (on Windows) or Ctrl + O and then Enter (on Linux).

Now, we'll want to fill the head with identifying information, so ...

<code>
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My Cool Site&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
</code>

[further tutorial under construction]
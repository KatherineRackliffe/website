---
layout: default
title: Bootstrap tutorial
image: 
description: Blog walkthrough for using Bootstrap
date: 2023-02-24
---

### Tutorial blog
For this tutorial, we’ll be using Bootstrap to customize a simple website. Bootstrap is a responsive website framework. This tutorial barely scrapes the surface of the many different functionalities of Bootstrap, such as JavaScript plugins (there will be additional tutorials linked at the end of this post).

A responsive website is built to look good on all types of devices, from phones to laptops. Because many people today use mobile devices to use websites, it’s important for web developers to take into account website responsiveness. Bootstrap is great for making quick website designs that look good. About 25% of sites use Bootstrap ([https://w3techs.com/technologies/comparison/js-bootstrap,js-react](https://w3techs.com/technologies/comparison/js-bootstrap,js-react)). Some popular sites that use Bootstrap include Spotify, LinkedIn, and Twitter.

Let’s get started!

First, make a simple website with HTML. Create a index.html file (I used Visual Studio Code) Ideally, you should have a header, some text, and maybe an image. We’ll be able to see how Bootstrap can affect different elements of a website.

~~~
<!DOCTYPE html>

<html lang="en">

<head>

  <title>Bootstrap Example</title>

  <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

  <h1>Lewis Carroll's best works</h1>

      <h3>Alice's Adventures in Wonderland</h3>

<img src="alice.png" alt="Alice, a young child, is holding a bottle that says 'drink me' on the label.">

      <p>"All in the golden afternoon..."</p>

      <p>"“Well! I’ve often seen a cat without a grin,” thought Alice; “but a grin without a cat! It’s the most curious thing I ever saw in all my life!”</p>

      <h3>Jabberwocky</h3>

      <p>’Twas brillig, and the slithy toves

        Did gyre and gimble in the wabe:

  All mimsy were the borogoves,

        And the mome raths outgrabe.</p>

</body>

</html> 
~~~

Here’s what the site looks like when we open the file up in a browser.

This website doesn’t look impressive right now. We only have a default HTML font, all the text is pushed to the left side of the page, and we don’t have any fun colors.

There are several ways to implement Bootstrap. One way is to download the packages, and another way is through CDN. CDN stands for Content Delivery System, which allows us to load Bootstrap from a server. We’ll be using CDN for this tutorial.

If you’ve ever linked a style.css file in a HTML file for css, this process is very similar. You’re just linking to Bootstrap instead. In fact, a very easy framework to add to a website is water.css, which you can add with a single line before the </head> of the HTML.

~~~
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">

~~~

Water.css doesn’t have as many customization options as Bootstrap, but it’s a nice framework, nonetheless.

Now, we’ll add Bootstrap using CDN. Place this link before the </head> of your program.

~~~
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"

  rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
~~~

Then, put this link before the </body> of your program.

~~~

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"

integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

~~~

Our website won’t look like it’s changed that much, but now we can implement Bootstrap into the website and make it do what we want. To start, let’s make the title of our website look a little fancier.  <div> tags divide the HTML into sections that we can add classes to.  

To do that, all we need is to wrap our header in <div> tags and put a class. Let’s apply the “jumbotron” class to the header. Jumbotron is built into Bootstrap and will make the header appear as a big banner across the page.

~~~
<div class="jumbotron text-center">

  <h1>Lewis Carroll's best works</h1>

</div>
~~~

If you save the file and open index.html in your browser, you should see your header as a big banner across the page. There’s no colors and the font hasn’t changed, but it’s still better than what we had before. Text-center is used to make the text on the header centered in the middle of the banner. If you want, you could take this part out and the banner text would be left-aligned.

Let’s also change the color. You can do this by adding this code before the </head>.

~~~
  <style>

    .jumbotron {

      background-color: #741ef4;

      color: #fff;

      padding: 70px 25px;

      font-family: 'Times New Roman', Times, serif;

      font-size: large;

    }

</style>

~~~
Background-color refers to the color of the banner that will be at the top of the website. I made mine #741ef4, which is a nice deep purple. Color (below background-color) refers to the color of the text. Padding refers to the dimensions of the banner. Font-family refers to the font of the text. Font-size allows you to change the size.

Let’s add one more thing to our header.

~~~
  <h1 class="bg-secondary text-white">Lewis Carroll's best works</h1>
~~~

This class adds a background to the text using Bootstrap’s contextual background classes. There are seven of the other background colors we won’t using in this tutorial, but they might be useful for later web development. These colors are: .bg-primary, .bg-success, .bg-info, .bg-warning, .bg-danger, .bg-secondary, .bg-dark and .bg-light.

Next, we’ll put the main text of our website in a container.

~~~
<div class = "container-bg">

<div class="container-fluid text-center">

    <div class="row">

        <div class="col-sm-6">

      <h3>Alice's Adventures in Wonderland</h3>

      <img src="alice.png" alt="Alice, a young child, is holding a bottle that says 'drink me' on the label." class="rounded-circle">

      <p>"All in the golden afternoon..."</p>

      <p>"“Well! I’ve often seen a cat without a grin,” thought Alice; “but a grin without a cat! It’s the most curious thing I ever saw in all my life!”</p>

    </div>

      <div class="col-sm-6">

      <h3>Jabberwocky</h3>

      <p>’Twas brillig, and the slithy toves

        Did gyre and gimble in the wabe:

        All mimsy were the borogoves,

        And the mome raths outgrabe.</p>

        </div>

        </div>

    </div>

</div>

~~~
Firstly, we add a class around all of the main text of the website that changes the background color of the text to…you guessed it, purple. The container-bg class is something we add in the style tags here.

~~~
    .container-bg {

    background: #d9d3e3;

    padding: 70px 25px;

      font-family: 'Times New Roman', Times, serif;

      font-size: large;

    }
~~~

Here, you can change the font or color in exactly the same way the jumbotron class was affected previously.

Secondly, we added a class="container-fluid text-center" which makes the text into containers. These containers make it easier to put the HTML text into rows, which can then be made into columns. <div class=”col-sm-6”> changes the column sizes. <div class=”col-sm-3”> would make the blocks of text smaller.Another thing changed was the image. By adding the class=”rounded-circle” to the image, a circular border was added. There are many ways you can round the corners.

~~~
<img src="..." alt="..." class="rounded">

<img src="..." alt="..." class="rounded-top">

<img src="..." alt="..." class="rounded-right">

<img src="..." alt="..." class="rounded-bottom">

<img src="..." alt="..." class="rounded-left">

<img src="..." alt="..." class="rounded-circle">

<img src="..." alt="..." class="rounded-0">

~~~

There’s a lot that can be done with Bootstrap. While this is only one example of how to implement Bootstrap in a website, there are many others.

### Additional resources:

w3schools has many tutorials for web development, and the courses for Bootstrap have many example websites that can help understanding of different Bootstrap functions and behaviors
[https://www.w3schools.com/bootstrap](https://www.w3schools.com/bootstrap)

This is the official website for Bootstrap, which has examples and documentation for different functions.
[https://getbootstrap.com/](https://getbootstrap.com/)

Open source help for Bootstrap.
[https://mdbootstrap.com/](https://mdbootstrap.com/)

Another tutorial for Bootstrap.
[https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/)

And here’s water.css, which was mentioned earlier in the tutorial.
[https://watercss.kognise.dev/](https://watercss.kognise.dev/)
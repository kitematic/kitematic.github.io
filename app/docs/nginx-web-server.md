---
layout: docs
title: Nginx Web Server
permalink: /docs/nginx-web-server/
published: true
---

## Serving a Static Website with Nginx

---

In this tutorial, you will:

- Download and run a web server container
- Explore the container's website data natively on your Mac
- Use volumes to modify the website data

As an example website we'll be serving the popular 2048 game, as shown below. Let's get to it!

![screen shot 2015-03-03 at 5 01 41 pm](https://cloud.githubusercontent.com/assets/251292/6473377/f91c581e-c1c6-11e4-945e-fd9d7bf65070.png)

#### Running the Nginx Web Server Container

First, [download and start Kitematic](https://kitematic.com/download) if you haven't yet done so. Once you're in, the app should look like this:

![screen shot 2015-03-03 at 4 56 14 pm](https://cloud.githubusercontent.com/assets/251292/6473259/4858698c-c1c6-11e4-8042-b52d0860efb1.png)

Click on the _Create_ button of the `hello-world-nginx` listing as shown above. This will download and run a tiny Nginx web server in a container via Kitematic, allowing you serve website data on your Mac.

![screen shot 2015-03-03 at 4 58 48 pm](https://cloud.githubusercontent.com/assets/251292/6473299/9294f4b6-c1c6-11e4-9fd1-f820a59a739d.png)

Once it's done downloading you should see a quick preview of the example website that comes with the container, as shown below. Click on the preview to see the result in your own browser.

![b861d9d4-c1c6-11e4-9ff7-d1112bfd5941](https://cloud.githubusercontent.com/assets/251292/6474184/bb4b37fc-c1cc-11e4-8ff3-71a80fff5865.png)

![screen shot 2015-03-03 at 5 43 47 pm](https://cloud.githubusercontent.com/assets/251292/6474198/da638590-c1cc-11e4-9657-dd2e1527c25d.png)

**What just happened?** Kitematic downloaded the `kitematic/hello-world-nginx` image from the Docker Hub and then ran this image, creating an Nginx container that serves website data.

#### Viewing the Website Data in Finder

This container exposes website data via a _Docker volume_. Kitematic makes managing Docker volumes easy - you can edit the data in Finder or with your favorite text editor. By default, Kitematic places volumes under `~/Kitematic` but you can change this in the container settings. To access the files via finder, click on the in-app folder icon for your container:

![screen shot 2015-03-03 at 5 45 03 pm](https://cloud.githubusercontent.com/assets/251292/6474222/0d8e6f2a-c1cd-11e4-9fd1-8ea274c9596a.png)

A Finder directory should open containing the index.html file we see being served by the container.

![screen shot 2015-03-03 at 5 51 19 pm](https://cloud.githubusercontent.com/assets/251292/6474341/e8c2acb4-c1cd-11e4-9672-5b765ccc8164.png)

#### Serving Your Own Website Data

Let's serve a more interesting website! [Download the files](https://github.com/gabrielecirulli/2048/archive/master.zip) for 2048, a popular (and addicting) web-based game. Extract this zip file into the folder we just opened:

![screen shot 2015-03-03 at 5 50 56 pm](https://cloud.githubusercontent.com/assets/251292/6474330/d9ee295c-c1cd-11e4-8d56-b7e9f02e7bb5.png)

Switch back to Kitematic and restart the container as shown below. Your Nginx container should now serving 2048! Awesome!

![screen shot 2015-03-03 at 5 51 50 pm](https://cloud.githubusercontent.com/assets/251292/6474359/0cc5e78e-c1ce-11e4-9082-d8b23d64cc91.png)

**What just happened?**
Kitematic automatically exposes Docker container volumes via directories on your Mac. In this case we changed the container's volume data to serve a website we downloaded.

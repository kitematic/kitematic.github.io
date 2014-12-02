---
layout: docs
title: Building an Image
permalink: /docs/building-an-image/
published: true
---

## Building an Image

---
As an example we're going to create the Docker image for an example NGINX web server.

### Downloading the Example Dockerfile

[Download the files](https://github.com/kitematic/example/archive/master.zip) required to build the example Docker image. Extract this zip file somewhere you'll remember!

![Example Dockerfile](/img/building-an-image/files.png)

### Building the Example Image

Open Kitematic and click on the second icon on the left to open the Images pane. Click on **Create Image**, and then **Select Folder**. Choose the directory with the recently downloaded Dockerfile.

![Image View](/img/building-an-image/empty-images.png)

![Image View](/img/building-an-image/select-directory.png)

Click on **Create Image** and the Docker Image should begin being built in the background while build logs are shown in the Logs window.

![Image View](/img/building-an-image/image-build.png)

Once the image is built the logs will stop streaming and you'll see the message **Sucessfully Built** in the progress bar.

![Image View](/img/building-an-image/image-finished.png)

### Next Steps

Once the example NGINX image is created, we can use this image to [run a webserver container](/docs/creating-a-container).

---
layout: docs
title: Build Your Own Image
permalink: /docs/build-your-own-image/
published: true
---

## Build Your Own Image

---

Kitematic is fully compatible with Docker, which means you can create an image
from any folder with a Dockerfile in it. However, there are many ways
developers build Dockerfiles and Kitematic aims to provide developers a better
process for building Dockerfiles while being reverse compatible with Docker.

Here's an example Dockerfile for creating a basic HTML app powered by Nginx:

{% highlight bash %}
# Pull from a base image
FROM dockerfile/ubuntu

# Install minimal set of system packages required to run your app
# We install nginx for this app
RUN apt-get update
RUN apt-get install -y nginx

# Update nginx configurations
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf

# Add nginx configuration for the app
ADD /config/default /etc/nginx/sites-available/

# Mount volumes for HTML code
VOLUME ["/code"]

# Expose port the app is running on
EXPOSE 80

# Run nginx command
CMD ["nginx"]
{% endhighlight %}

Note that Kitematic did not use the Dockerfile `ADD` instruction to put HTML code and
Nginx configuration into the image, but used `VOLUME` instead. We believe that
using volumes extensively is a good practice. They are great for quick code
changes, persistent data, configuration files and logs.

But what about putting in default or template code now? Because mounted volumes
will be empty. Don't worry, Kitematic can take care of that. Here's what a Docker
image folder looks like.

{% highlight bash %}
html/
├── Dockerfile          # Dockerfile for building the image
├── image.json          # Meta data for the image
├── logo.png            # Logo of the image
├── config/
|   └── default         # Nginx configuration
└── volumes/            # What to put in the volumes
    └── code/           # Code for your HTML app
{% endhighlight %}


**Anything in the volumes folder will automatically added to the Docker volumes
when an app is created from this image.**

For an example of how to build your own image, check out
this example on [Github](https://github.com/kitematic/html).

To learn more about image.json file, check out
the tutorial [here](/docs/image-json-file).

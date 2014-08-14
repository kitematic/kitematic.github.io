---
layout: docs
title: Build Your Own Image
permalink: /build-your-own-image/
published: true
---

## Build Your Own Image

Kite is fully compatible with Docker, which means you can create an image on
Kite from any folder with a Dockerfile in it. However, there are many ways
developers build Dockerfiles and Kite aims to provide developers a better
process for building Dockerfiles while being reverse compatible with Docker.

Here's an example Dockerfile for creating a basic HTML app powered by Nginx:

{% highlight bash %}
# Pull from a base image
FROM ubuntu:14.04

# Install minimal set of system packages required to run your app
RUN \
  apt-get update && \
  apt-get install -y -q software-properties-common python-software-properties && \
  apt-get install -y -q curl git make wget nginx sudo

# Add script to start Nginx
ADD ./start.sh /start.sh
RUN chmod 755 /start.sh

# Mount volumes for HTML code and Nginx configuration
VOLUME ["/code", "/etc/nginx/sites-available"]

# Expose port the app is running on
EXPOSE 8000

# Run start command by default
CMD ["/bin/bash", "/start.sh"]
{% endhighlight %}

Note that Kite did not use the Dockerfile `ADD` instruction to put HTML code and
Nginx configuration into the image, but used `VOLUME` instead. We believe that
using volumes extensively is a good practice. They are great for quick code
changes, persistent data, configuration files and logs.



### Example

{% highlight js %}
{
  "name": "html",
  "version": "0.1.0",
  "description": "A HTML app powered by Nginx.",
  "author": "Kite Development Group",
  // Path to the logo in the current directory
  "logo": "logo.png",
  "app": {
    // When app has multiple exposed ports, specify which one people should see
    "webPort": 8000
  }
}
{% endhighlight %}

### Created Image

![Created Image](/img/kite-json-file/created-image.png)

### Created App

![Created App](/img/kite-json-file/created-app.png)

---
layout: docs
title: Build Your Own Image
permalink: /build-your-own-image/
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

Note that Kitematic did not use the Dockerfile `ADD` instruction to put HTML code and
Nginx configuration into the image, but used `VOLUME` instead. We believe that
using volumes extensively is a good practice. They are great for quick code
changes, persistent data, configuration files and logs.

But what about putting in default or template code now? Because mounted volumes
will be empty. Don't worry, Kitematic can take care of that. Here's what a Docker
image folder looks like.

```
html/
├── Dockerfile          # Dockerfile for building the image
├── image.json          # Meta data for the image
├── logo.png            # Logo of the image
├── start.sh            # Script on how to start the app
└── volumes/            # What to put in the volumes
    ├── code/
    └── etc/
        └── nginx/
            └── sites-available／
```

**Anything in the volumes folder will automatically added to the Docker volumes
when an app is created from this image. **

For an example of how to build your own image, check out
this example on [Github](https://github.com/kitematic/html).

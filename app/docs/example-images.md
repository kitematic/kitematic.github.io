---
layout: docs
title: Example Images
permalink: /docs/example-images/
published: true
---

## Example Images

---

We've put together a curated list of dockerfiles in which Kitematic can build standard images from. Follow the instructions in [Building an Image](/docs/building-an-image) to build images from Dockerfiles in your projects.

### Web & Publishing

[Ghost](https://github.com/dockerfile/ghost/archive/master.zip)

[Wordpress](https://github.com/jbfink/docker-wordpress/archive/master.zip)

[HTML](https://github.com/kitematic/example/archive/master.zip)

### Databases

[Redis](https://github.com/dockerfile/redis/archive/master.zip)

[MongoDB](https://github.com/dockerfile/mongodb/archive/master.zip)

[Elasticsearch](https://github.com/dockerfile/elasticsearch/archive/master.zip)

[MongoDB](https://github.com/dockerfile/mongodb/archive/master.zip)

*MongoDB volumes do not currently work due to an issue with VirtualBox shared folders. You'll need to disable volumes in container settings.*

### Applications

**Node.js**

Place the following *Dockerfile* in the root directory of your application.
{% highlight bash %}

FROM node:0.10-onbuild
# replace this with your application's default port
EXPOSE 8888
{% endhighlight %}

**Ruby On Rails**

Place the following *Dockerfile* in the root directory of your application.
{% highlight bash %}
FROM rails:onbuild
{% endhighlight %}

**Python**

Place the following *Dockerfile* in the root directory of your application.
{% highlight bash %}
FROM python:2-onbuild
CMD [ "python", "./your-daemon-or-script.py" ]
{% endhighlight %}

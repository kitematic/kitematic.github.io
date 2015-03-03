---
layout: docs
title: Managing Volumes
permalink: /docs/managing-volumes/
published: true
---

## Managing Volumes

---

#### Default Volume Directories

Every container created through Kitematic automatically has it's volumes exposed on your Mac, making managing files in volumes simple via Finder. Kitematic exposes a container's volume data under `~/Kitematic/<container's name>/`. Quick to this directory is available via the app:

![screen shot 2015-02-28 at 2 54 05 pm](https://cloud.githubusercontent.com/assets/251292/6427815/f7139772-bf59-11e4-8118-4fef00693985.png)

#### Changing Volume Directories

Let's say you have an Nginx webserver running via Kitematic (using the `kitematic/hello-world-nginx` image on DockerHub). However, you don't want to use the default directory created for the website_files volume. Instead, you already have the html, javascript & css for your website under `~/workspace/website`. Kitematic makes it easy to change the container's volume to read from this directory instead of the one created by Kitematic:

![screen shot 2015-02-28 at 2 48 01 pm](https://cloud.githubusercontent.com/assets/251292/6427767/d45d9ca6-bf58-11e4-928f-a9f73278509d.png)

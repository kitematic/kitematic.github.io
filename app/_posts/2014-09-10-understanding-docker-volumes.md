---
layout: blog_item
title:  Understanding Docker Volumes
date:   2014-09-10 18:21:00
categories: blog
author: Sean Li
twitter: lisean106
---

### Volume Basics

Docker supports using volumes to share one designated directory among one or more containers.
Volume is a very important concept to understand as it's critical to use Docker
for storing persistent data and logs, editing configuration files, and enabling
rapid local app development.

The diagram below gives a basic illustration of how volumes work on your Docker host.

![Basics](/img/understanding-docker-volumes/basics.png)

One of the reasons we'd want to store data inside volumes is that Docker containers
are **stateless**. If a container is shutdown or restarted, the contents of the container
will be rolled back to its original state, meaning all the changes happened inside the
container while it was running will be gone.

It'll be very dangerous to use database inside containers without using volumes. Imagine
all users signed up to a website and when the database container restarted, all users'
data disappear.

With volumes, we can keep data on the Docker host's file system instead. All the
containers will be referencing the data stored on the host file system. This way
data will persist on the file system even if the containers go down or get restarted.

### Use Volume With Docker Locally

You can get started with Docker locally on your Mac using Boot2Docker and VirtualBox,
but there isn't really a solution out there to effectively use volumes with Docker locally.

![Setup 1](/img/understanding-docker-volumes/setup-1.png)

Note that you can't really touch the data volume inside the virtual machine from
Mac without having to SSH into it. There should be a way for developers to directly
access the volume inside the VM from Mac.

Kitematic can takes care of this. You can directly add/edit/delete files in the
**~/Kitematic/app/data** directory and the changes will be automatically synchronized
(using Unison) into corresponding volumes within the Boot2Docker VM.

![Setup 2](/img/understanding-docker-volumes/setup-2.png)

### Local Development With Kitematic

There are four ways you can use Docker to develop locally with Kitematic.

#### Use Case 1

![Scenario 1](/img/understanding-docker-volumes/scenario-1.png)

This method uses the Dockerfile's **ADD** instruction to put code directly into the container.
Note that volume is not being used here. To edit code, edit files in /code directly and then
rebuild the image to apply the change. You'll normally want to use this method when you need
to build dependencies before running your code. Here's an [example](https://github.com/kitematic/node-example) with Node.js.

#### Use Case 2

![Scenario 2](/img/understanding-docker-volumes/scenario-2.png)

This method only uses volumes. Note that once the container is created, the volume
folder will be empty and the container might not be running properly. You'll have
to move code from somewhere else into the volume folder to get the container
running (might have to hit **restart** button as well).

#### Use Case 3

![Scenario 3](/img/understanding-docker-volumes/scenario-3.png)

This has the same result as **Use Case 2**. Many new Docker users would assume /code will be
added to the volume and mounted on Docker host file system. In fact the volume will "overlap"
the /code directory, making it empty.

#### Use Case 4

![Scenario 4](/img/understanding-docker-volumes/scenario-4.png)

Using Kitematic, there's a way to add default code (or data) into volumes. Any folder
that sits inside the **/volumes/** folder will automatically get copied into the
**~/Kitematic/app/** folder. Kitematic then uses Unison to synchronize the files in the
**~/Kitematic/app/** folder with the volume directory inside the Boot2Docker VM.

The concept of volumes can be confusing. Definitely let us know if there's anything else
we can help clarify. Feel free to leave a comment below.

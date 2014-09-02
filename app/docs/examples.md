---
layout: docs
title: Examples
permalink: /docs/examples/
published: true
---

## Examples

---

Here's a simple example of a Node.js Todo app using Redis database.

### Create Node.js and Redis Images

Download and unzip [node-example](https://github.com/kitematic/node-example/archive/master.zip) and [redis](https://github.com/kitematic/redis/archive/master.zip) Dockerfiles from our [Github](https://github.com/kitematic) page.

Click the **Create Image** button to build the images using Kitematic. You can learn how to do it in detail from the [Getting Started](/docs/) guide.

![Images](/img/examples/images.png)

### Run Node.js and Redis Apps

After the images are built, you can click on the **plus** icon on each image to build the apps. You can learn how to do it in detail from the [Getting Started](/docs/) guide.

![Apps](/img/examples/apps.png)

### View Node.js App

**Note:** when you click on the **eye** icon to view the node.js app, the page will not load.
That is because the Redis database isn't attached to the node.js app yet.

Let's go ahead and attach the Redis database. We do this by adding **REDIS_HOST** and **REDIS_PORT**
environment variables to the node.js app so that it knows which Redis database it should
listen to.

To edit the environment variables, click on the **gear** icon of the node.js app to go to its
settings page. In the "Config Variables" section, add the following: **REDIS_HOST** to **redis.kite** (your-redis-appname.kite),
and **REDIS_PORT** to **6379** (official Redis port).

![Environment Variables](/img/examples/environment-variables.png)

Once the environment variables are added (need to wait a bit for the app to restart),
you can click on the **eye** icon to view the node.js app again. This time it will load successfully.

![Todo Empty](/img/examples/todo-empty.png)

You can have some fun using it.

![Todo Filled](/img/examples/todo-filled.png)

You can also try to switching the node.js app to use another Redis database by creating a new Redis app from the built Redis image with a different name.
Then you can set the node.js app's **REDIS_HOST** to **your-new-appname.kite**

### Fun With Terminal

You can have some fun with the Redis CLI inside your Redis container.

![Terminal](/img/examples/terminal.png)

![Redis Cli](/img/examples/redis-cli.png)

### Persistent Data

You can run the command **save** inside the Redis CLI to dump the data into the volume.

![Open Finder](/img/examples/open-finder.png)

![Data Volume](/img/examples/data-volume.png)

Links for the code for **node-example** and **redis** images:

[https://github.com/kitematic/node-example](https://github.com/kitematic/node-example)

[https://github.com/kitematic/redis](https://github.com/kitematic/redis)

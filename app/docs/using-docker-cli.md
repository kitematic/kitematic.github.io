---
layout: docs
title: Docker Command-line Access
permalink: /docs/using-docker-cli/
published: true
---

## Docker Command-line Access

---

You can interact with existing containers in Kitematic or create new containers via the Docker Command Line Interface (CLI). Any changes you make are directly reflected in Kitematic.


#### Opening a Terminal for the Docker CLI

To open a terminal via Kitematic just press whale button in the bottom right as shown below:

![screen shot 2015-02-28 at 2 59 25 pm](https://cloud.githubusercontent.com/assets/251292/6427830/755f1f0c-bf5a-11e4-8533-a2bfe9ac22e3.png)

#### Example: Creating a new Redis container

Start by opening a Docker-CLI ready terminal as in the above image. Once the terminal opens, input `docker run -d -P redis` in the terminal. This will run a new Redis container via the Docker CLI.

![screen shot 2015-02-28 at 3 00 18 pm](https://cloud.githubusercontent.com/assets/251292/6427834/a056d3bc-bf5a-11e4-9700-1ce98ab5e044.png)

Hurray! The Redis container should now be visible in Kitematic!

![screen shot 2015-02-28 at 3 03 06 pm](https://cloud.githubusercontent.com/assets/251292/6427849/edc361ce-bf5a-11e4-94ba-17bc1ba3193c.png)

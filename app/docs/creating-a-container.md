---
layout: docs
title: Creating a Container
permalink: /docs/creating-a-container/
published: true
---

## Creating a Container

---
Once you've [built an image](/docs/building-an-image), the next step is to turn it into a live instance of a container.

### Creating the Example Container

Switch to the **Containers panel** by clicking the first link on left. Click on the **Create Container** button.

![Empty Container Listing](/img/creating-a-container/empty-containers.png)

Provide the name *example* and choose the **example-master** image we built in the previous guide. Then hit **Create Container**.

![Create Container Dialog](/img/creating-a-container/create-container.png)

Within a second, the container should be up and running and a green circle should be visible next to the container name.

![Container Created](/img/creating-a-container/container-created.png)

Click the View button (with the globe icon) to access the web server via your web browser.

### Next Steps

Voila!

![Container Running](/img/creating-a-container/container-running.png)

We've customized this container to show an an error page to guide you to the next step:

[Next: modify this container's data](/docs/modifying-container-data) via volumes.

---
layout: docs
title: Modifying Container Data
permalink: /docs/modifying-container-data/
published: true
---

## Modifying Container Data

---
Once you have a [running container](/docs/creating-a-container), you can access and modify its persistent data via its *volumes*.

For this example, we'll be adding website data to the webserver container we created in the previous step via its data volume.

### Accessing Volume Data

To open the data volume for our example container, click on the **Volumes** button as shown below:

![Volumes Button](/img/modifying-container-data/volumes-button.png)

This opens, in Finder, a directory with this container's data volume, named **website_data**.

![Volumes Button](/img/modifying-container-data/volume-finder.png)

### Placing Website Data in the Volume

Download the [example website data](https://github.com/kitematic/example/releases/download/v0.1.0/example_website_data.zip), extract it, then copy the resulting index.html file into the *website_data* directory we just opened.

![View Result](/img/modifying-container-data/copy.gif)

### View the Result

Now click the **View** button in Kitematic to view the result.
![View Result](/img/modifying-container-data/view-button.png)
![View Result](/img/modifying-container-data/result.png)

### Next Steps

All done! You've successfully built an image, created a container from this image and modified container data.

Next, check out our [example images](/docs/example-images).

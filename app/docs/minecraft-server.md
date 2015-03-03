---
layout: docs
title: Minecraft Server
permalink: /docs/minecraft-server/
published: true
---

## Minecraft Server

---

Want to play Minecraft with your friends? You’ll need to have a Minecraft server running, but it could be a hassle to set it up. Using Kitematic and Docker, getting a Minecraft server running can be point and click.

#### Create Minecraft Server Container

Create a container from the recommended Minecraft image by hitting the "Create" button.

![screen shot 2015-03-03 at 12 33 36 pm](https://cloud.githubusercontent.com/assets/559953/6471845/2c617d7c-c1a3-11e4-9ebb-5dfc50dfa680.png)

After the image finishes downloading, you’ll see the home screen for the Minecraft container. Your Minecraft server is now running inside a Docker container! Note we’ve marked the IP and port you can connect to your Minecraft server in red (your IP and port may be different).

![screen shot 2015-03-03 at 12 35 47 pm](https://cloud.githubusercontent.com/assets/559953/6471905/a79b4e96-c1a3-11e4-86fe-993d57cfe2b6.png)

#### Connect to Minecraft Server

Open your Minecraft client, login with your Minecraft account and click on the "Multiplayer" button.

![screen shot 2015-03-03 at 12 36 46 pm](https://cloud.githubusercontent.com/assets/559953/6471969/0a62c43c-c1a4-11e4-935f-409a8c88632c.png)

Click "Add Server" button to add the Minecraft server you want to connect to.

![screen_shot_2015-03-03_at_12_36_59_pm](https://cloud.githubusercontent.com/assets/559953/6472072/a1d6d0a6-c1a4-11e4-8291-485db1123c14.png)

Fill in the "Server Address" section with the marked IP and port from Kitematic.

![screen_shot_2015-03-03_at_12_37_17_pm](https://cloud.githubusercontent.com/assets/559953/6472074/a4535dc2-c1a4-11e4-9021-a895baf42905.png)

Click on the play button to connect to your Minecraft Server.

![screen_shot_2015-03-03_at_12_37_23_pm](https://cloud.githubusercontent.com/assets/559953/6472077/a6c478b6-c1a4-11e4-9157-ec4b0028764a.png)

Enjoy!

![screen shot 2015-03-03 at 12 37 37 pm](https://cloud.githubusercontent.com/assets/559953/6472079/a8e2b040-c1a4-11e4-889b-9e95731fb21c.png)

#### Change Map Using Docker Volume

Open the "data" folder from Kitematic. We use Docker Volume to map the folder from the Minecraft Docker container onto your computer.

![screen_shot_2015-03-03_at_1_28_51_pm](https://cloud.githubusercontent.com/assets/559953/6472819/d9ca6400-c1a9-11e4-9d51-074a208ebd27.png)

Finder will pop open and you can replace your current map with a new one that you want.

![screen_shot_2015-03-03_at_1_29_31_pm](https://cloud.githubusercontent.com/assets/559953/6472821/dd8a4740-c1a9-11e4-82d4-b84ff2d64e8f.png)

Restart your container by clicking the "Restart" button.

![screen_shot_2015-03-03_at_1_29_42_pm](https://cloud.githubusercontent.com/assets/559953/6472823/e06fbda0-c1a9-11e4-888a-2306a3cae37d.png)

Go back to your Minecraft Client and rejoin your server. Done!

![screen shot 2015-03-03 at 1 30 14 pm](https://cloud.githubusercontent.com/assets/559953/6472828/e9140f24-c1a9-11e4-8005-7b3e6affd877.png)
